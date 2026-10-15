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
  AvatarGroup,
  AvatarGroupCount,
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
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
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
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh text-foreground w-full">
      <header className="bg-background border-b border-border flex gap-2 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <Breadcrumb aria-label="breadcrumb">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center md:gap-1.5" href="#">
                <svg className="lucide lucide-house size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="hidden md:block">
                  Home
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="flex gap-1.5 items-center" href="#">
                <svg className="lucide lucide-layout-dashboard size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
                <span className="hidden md:block">
                  CRM
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-2 items-center shrink-0">
          <div className="flex gap-2 items-center shrink-0">
            <AvatarGroup>
              <Avatar size="sm">
                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <AvatarGroupCount className="leading-none text-[10px]">
                +6
              </AvatarGroupCount>
            </AvatarGroup>
            <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invite sales teammate" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" extracted="1">
              <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" x2="19" y1="8" y2="14"></line>
                <line x1="22" x2="16" y1="11" y2="11"></line>
              </svg>
              <span className="hidden md:block">
                Invite
              </span>
            </PopoverTrigger>
            </Popover>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="md:not-sr-only sr-only">
                Add Deal
              </span>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 max-w-6xl mx-auto p-4 pt-6 sm:p-8 w-full" aria-labelledby="page-heading">
        <h1 className="sr-only" id="page-heading">
          CRM Sales Dashboard
        </h1>
        <div className="@container max-w-6xl w-full">
          <div className="@3xl:grid-cols-3 gap-4 grid grid-cols-1">
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  Open Pipeline
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      42 open deals
                    </div>
                    <div className="font-semibold text-foreground text-xl tracking-tight">
                      $1.94M
                    </div>
                  </div>
                  <div className="h-16 max-w-40 relative w-full">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="5" y="5" height="54" width="150"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="pipelineGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-sky-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-sky-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#pipelineGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_29_" d="M5,27.14C8.571,25.25,12.143,23.36,15.714,23.36C19.286,23.36,22.857,24.98,26.429,24.98C30,24.98,33.571,18.23,37.143,18.23C40.714,18.23,44.286,20.39,47.857,20.39C51.429,20.39,55,14.18,58.571,14.18C62.143,14.18,65.714,16.34,69.286,16.34C72.857,16.34,76.429,12.02,80,12.02C83.571,12.02,87.143,13.37,90.714,13.37C94.286,13.37,97.857,9.86,101.429,9.86C105,9.86,108.571,11.48,112.143,11.48C115.714,11.48,119.286,7.97,122.857,7.97C126.429,7.97,130,9.32,133.571,9.32C137.143,9.32,140.714,6.62,144.286,6.62C147.857,6.62,151.429,6.62,155,6.62L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-sky-500)" width="150" d="M5,27.14C8.571,25.25,12.143,23.36,15.714,23.36C19.286,23.36,22.857,24.98,26.429,24.98C30,24.98,33.571,18.23,37.143,18.23C40.714,18.23,44.286,20.39,47.857,20.39C51.429,20.39,55,14.18,58.571,14.18C62.143,14.18,65.714,16.34,69.286,16.34C72.857,16.34,76.429,12.02,80,12.02C83.571,12.02,87.143,13.37,90.714,13.37C94.286,13.37,97.857,9.86,101.429,9.86C105,9.86,108.571,11.48,112.143,11.48C115.714,11.48,119.286,7.97,122.857,7.97C126.429,7.97,130,9.32,133.571,9.32C137.143,9.32,140.714,6.62,144.286,6.62C147.857,6.62,151.429,6.62,155,6.62"></path>
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
                </div>
              </CardContent>
            </Card>
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  Weighted Forecast
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      Next 90 days
                    </div>
                    <div className="font-semibold text-foreground text-xl tracking-tight">
                      $612K
                    </div>
                  </div>
                  <div className="h-16 max-w-40 relative w-full">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="5" y="5" height="54" width="150"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-emerald-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-emerald-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#forecastGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2a_" d="M5,32.675C8.571,32.056,12.143,31.437,15.714,30.65C19.286,29.863,22.857,27.95,26.429,27.95C30,27.95,33.571,29.3,37.143,29.3C40.714,29.3,44.286,24.575,47.857,24.575C51.429,24.575,55,26.6,58.571,26.6C62.143,26.6,65.714,23.788,69.286,22.888C72.857,21.988,76.429,21.2,80,21.2C83.571,21.2,87.143,23.9,90.714,23.9C94.286,23.9,97.857,19.175,101.429,19.175C105,19.175,108.571,22.01,112.143,22.01C115.714,22.01,119.286,18.23,122.857,18.23C126.429,18.23,130,20.39,133.571,20.39C137.143,20.39,140.714,17.69,144.286,17.69C147.857,17.69,151.429,17.69,155,17.69L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-emerald-500)" width="150" d="M5,32.675C8.571,32.056,12.143,31.437,15.714,30.65C19.286,29.863,22.857,27.95,26.429,27.95C30,27.95,33.571,29.3,37.143,29.3C40.714,29.3,44.286,24.575,47.857,24.575C51.429,24.575,55,26.6,58.571,26.6C62.143,26.6,65.714,23.788,69.286,22.888C72.857,21.988,76.429,21.2,80,21.2C83.571,21.2,87.143,23.9,90.714,23.9C94.286,23.9,97.857,19.175,101.429,19.175C105,19.175,108.571,22.01,112.143,22.01C115.714,22.01,119.286,18.23,122.857,18.23C126.429,18.23,130,20.39,133.571,20.39C137.143,20.39,140.714,17.69,144.286,17.69C147.857,17.69,151.429,17.69,155,17.69"></path>
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
                </div>
              </CardContent>
            </Card>
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  Win Rate
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      Last 90 days
                    </div>
                    <div className="font-semibold text-foreground text-xl tracking-tight">
                      26%
                    </div>
                  </div>
                  <div className="h-16 max-w-40 relative w-full">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts3-clip">
                                <rect x="5" y="5" height="54" width="150"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="winRateGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#winRateGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2b_" d="M5,22.357C8.571,20.429,12.143,18.5,15.714,18.5C19.286,18.5,22.857,20.429,26.429,20.429C30,20.429,33.571,17.536,37.143,16.571C40.714,15.607,44.286,14.643,47.857,14.643C51.429,14.643,55,16.571,58.571,16.571C62.143,16.571,65.714,13.679,69.286,12.714C72.857,11.75,76.429,10.786,80,10.786C83.571,10.786,87.143,14.643,90.714,14.643C94.286,14.643,97.857,13.357,101.429,12.714C105,12.071,108.571,11.429,112.143,10.786C115.714,10.143,119.286,8.857,122.857,8.857C126.429,8.857,130,10.786,133.571,10.786C137.143,10.786,140.714,8.857,144.286,8.857C147.857,8.857,151.429,8.857,155,8.857L155,59C151.429,59,147.857,59,144.286,59C140.714,59,137.143,59,133.571,59C130,59,126.429,59,122.857,59C119.286,59,115.714,59,112.143,59C108.571,59,105,59,101.429,59C97.857,59,94.286,59,90.714,59C87.143,59,83.571,59,80,59C76.429,59,72.857,59,69.286,59C65.714,59,62.143,59,58.571,59C55,59,51.429,59,47.857,59C44.286,59,40.714,59,37.143,59C33.571,59,30,59,26.429,59C22.857,59,19.286,59,15.714,59C12.143,59,8.571,59,5,59Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-violet-500)" width="150" d="M5,22.357C8.571,20.429,12.143,18.5,15.714,18.5C19.286,18.5,22.857,20.429,26.429,20.429C30,20.429,33.571,17.536,37.143,16.571C40.714,15.607,44.286,14.643,47.857,14.643C51.429,14.643,55,16.571,58.571,16.571C62.143,16.571,65.714,13.679,69.286,12.714C72.857,11.75,76.429,10.786,80,10.786C83.571,10.786,87.143,14.643,90.714,14.643C94.286,14.643,97.857,13.357,101.429,12.714C105,12.071,108.571,11.429,112.143,10.786C115.714,10.143,119.286,8.857,122.857,8.857C126.429,8.857,130,10.786,133.571,10.786C137.143,10.786,140.714,8.857,144.286,8.857C147.857,8.857,151.429,8.857,155,8.857"></path>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col max-w-6xl w-full">
          <div className="border-b flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-center lg:min-h-14 lg:py-0 px-0 py-3">
            <div className="flex gap-2 items-center min-w-0">
              <svg className="fill-amber-400 lucide lucide-flag shrink-0 size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlagIcon" tabler="IconFlag" hugeicons="Flag03Icon" phosphor="FlagIcon" remixicon="RiFlagLine" aria-hidden="true">
                <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
              </svg>
              <span className="text-muted-foreground text-sm truncate">
                CRM
              </span>
              <svg className="lucide lucide-chevron-right shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <svg className="lucide lucide-package shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                <path d="M12 22V12"></path>
                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                <path d="m7.5 4.27 9 5.15"></path>
              </svg>
              <h2 className="font-medium text-foreground text-sm truncate">
                Deals
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap lg:ml-auto min-w-0">
              <InputGroup className="min-w-40 sm:w-48" role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_8_" placeholder="Search deals..." aria-label="Search deals" value="" />
              </InputGroup>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" data-icon="inline-start" aria-hidden="true">
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
                Account
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                </svg>
                Filters
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button type="button" tabIndex="0">
                Add Deal
              </Button>
            </div>
          </div>
          <div className="relative">
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_j_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridTableViewport>
                    <DataGridTable>
                      <colgroup>
                        <col style={{width: "210px"}} />
                        <col style={{width: "300px"}} />
                        <col style={{width: "180px"}} />
                        <col style={{width: "126px"}} />
                        <col style={{width: "104px"}} />
                      </colgroup>
                      <thead>
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="progress" data-header-id="progress" data-header-depth="0" style={{width: "210px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Probability
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "300px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Account
                                <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="dateStart" data-header-id="dateStart" data-header-depth="0" style={{width: "180px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Close
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" data-header-id="status" data-header-depth="0" style={{width: "126px"}}>
                            <div className="-ms-2 flex h-full items-center">
                              <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                Stage
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "104px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              Actions
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4804">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="74.64424144929347"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  34%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  34% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  2/6 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Atlas Education
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Renewal
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Sana Qureshi
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  atlasedu.org
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 16 - Jul 08
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                22-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Discovery
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Atlas Education">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Atlas Education">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Atlas Education" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4751">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="71.25132138341651"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  37%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  37% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  2/7 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Bluebird Energy
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  New Logo
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Leo Grant
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  bluebirdenergy.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 23 - Jul 22
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                29-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Discovery
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Bluebird Energy">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Bluebird Energy">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Bluebird Energy" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4821">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="50.893800988154645"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  55%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  55% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  4/9 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Brightwave Media
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  New Logo
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Mira Stone
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  brightwave.media
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 07 - Jun 24
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                17-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Brightwave Media">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Brightwave Media">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Brightwave Media" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4820">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-emerald-400 stroke-current text-emerald-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="28.27433388230814"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  75%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  75% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  6/8 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Cobalt Logistics
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Renewal
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Sana Qureshi
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  cobaltlogistics.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 10 - Jun 28
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                18-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Negotiation
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Cobalt Logistics">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite Cobalt Logistics">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Cobalt Logistics" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4781">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="40.715040790523716"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  64%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  64% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  5/8 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Evergreen Foods
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Renewal
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Alex Johnson
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  evergreenfoods.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 08 - Jul 03
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                25-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Evergreen Foods">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Evergreen Foods">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Evergreen Foods" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4809">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="44.107960856400695"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  61%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  61% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  4/7 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Helio Manufacturing
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Expansion
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Nora Vale
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  heliomfg.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 05 - Jun 30
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                25-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Negotiation
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Helio Manufacturing">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite Helio Manufacturing">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Helio Manufacturing" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4759">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="61.072561185785574"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  46%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  46% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  3/7 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Keystone Transit
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Expansion
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Theo Park
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  keystonetransit.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 19 - Jul 16
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                27-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Keystone Transit">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Keystone Transit">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Keystone Transit" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4770">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="91.60884177867837"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  19%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  19% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  1/6 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Luma Hospitality
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  New Logo
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      LW
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="truncate">
                                    Lena Wade
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  lumahotels.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 22 - Jul 20
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                28-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Discovery
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Luma Hospitality">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Luma Hospitality">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Luma Hospitality" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4815">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="65.59645460695488"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  42%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  42% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  3/7 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Northstar Clinics
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  New Logo
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Leo Grant
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  northstarclinics.com
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 13 - Jul 10
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                27-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Proposal
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Northstar Clinics">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Northstar Clinics">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Northstar Clinics" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/deal-row hover:bg-muted/40" data-row-id="DEAL-4818">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="36.19114736935441"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  68%
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  68% probability
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  5/8 steps
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                Orbit Software
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  Expansion
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    Mira Stone
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  orbitsoftware.io
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                Jun 11 - Jul 02
                              </span>
                              <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                <svg className="lucide lucide-calendar-days shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                  <path d="M8 14h.01"></path>
                                  <path d="M12 14h.01"></path>
                                  <path d="M16 14h.01"></path>
                                  <path d="M8 18h.01"></path>
                                  <path d="M12 18h.01"></path>
                                  <path d="M16 18h.01"></path>
                                </svg>
                                21-day close window
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                              <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              Negotiation
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Orbit Software">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Orbit Software">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Orbit Software" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      </DataGridTableBody>
                    </DataGridTable>
                  </DataGridTableViewport>
                </div>
              </div>
            </DataGridScrollArea>
          </div>
          <div className="border-t px-0 py-3">
            <DataGridPagination className="py-0">
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  Rows per page
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_26_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    10
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    ▼
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_26_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  1 - 10 of 15 deals
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
          </div>
        </div>
      </main>
    </div>
  )
}
