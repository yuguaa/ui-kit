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
                  {"Home"}
                </span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator role="presentation" aria-hidden="true">
              {"/"}
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
                  {"NeUI"}
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
                <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <AvatarGroupCount>
                {"+8"}
              </AvatarGroupCount>
            </AvatarGroup>
            <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invite team member" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" x2="19" y1="8" y2="14"></line>
                <line x1="22" x2="16" y1="11" y2="11"></line>
              </svg>
              <span className="hidden md:block">
                {"Invite"}
              </span>
            </PopoverTrigger>
            </Popover>
          </div>
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
      </header>
      <main className="flex flex-1 flex-col gap-6 max-w-6xl mx-auto p-4 pt-6 sm:p-8 w-full" aria-labelledby="page-heading">
        <h1 className="sr-only" id="page-heading">
          {"NeUI Operations Dashboard"}
        </h1>
        <div className="@container max-w-6xl w-full">
          <div className="@3xl:grid-cols-3 gap-4 grid grid-cols-1">
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  {"Revenue"}
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      {"neui.io, 28 days"}
                    </div>
                    <div className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                      {"$62.4K"}
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
                              <lineargradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-emerald-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-emerald-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <defs>
                                    <clippath id="animationClipPath-recharts-area-_r_2a_">
                                      <rect x="5" y="0" width="125.0356457168846" height="61"></rect>
                                    </clippath>
                                  </defs>
                                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_2a_)">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#revenueGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2a_" d="M5,39.74C6.852,43.7,8.704,47.66,10.556,47.66C12.407,47.66,14.259,47.285,16.111,46.535C17.963,45.785,19.815,39.14,21.667,38.21C23.519,37.28,25.37,36.815,27.222,36.815C29.074,36.815,30.926,38.93,32.778,38.93C34.63,38.93,36.481,37.445,38.333,37.445C40.185,37.445,42.037,38.652,43.889,40.28C45.741,41.908,47.593,47.21,49.444,47.21C51.296,47.21,53.148,46.805,55,45.995C56.852,45.185,58.704,38.15,60.556,37.22C62.407,36.29,64.259,35.825,66.111,35.825C67.963,35.825,69.815,37.94,71.667,37.94C73.519,37.94,75.37,36.41,77.222,36.41C79.074,36.41,80.926,37.475,82.778,39.155C84.63,40.835,86.481,46.49,88.333,46.49C90.185,46.49,92.037,46.1,93.889,45.32C95.741,44.54,97.593,39.95,99.444,35.96C101.296,31.97,103.148,21.38,105,21.38C106.852,21.38,108.704,27.605,110.556,29.84C112.407,32.075,114.259,33.455,116.111,34.79C117.963,36.125,119.815,36.028,121.667,37.85C123.519,39.673,125.37,45.725,127.222,45.725C129.074,45.725,130.926,45.47,132.778,44.96C134.63,44.45,136.481,36.26,138.333,35.51C140.185,34.76,142.037,34.385,143.889,34.385C145.741,34.385,147.593,36.68,149.444,36.68C151.296,36.68,153.148,36.298,155,35.915L155,59C153.148,59,151.296,59,149.444,59C147.593,59,145.741,59,143.889,59C142.037,59,140.185,59,138.333,59C136.481,59,134.63,59,132.778,59C130.926,59,129.074,59,127.222,59C125.37,59,123.519,59,121.667,59C119.815,59,117.963,59,116.111,59C114.259,59,112.407,59,110.556,59C108.704,59,106.852,59,105,59C103.148,59,101.296,59,99.444,59C97.593,59,95.741,59,93.889,59C92.037,59,90.185,59,88.333,59C86.481,59,84.63,59,82.778,59C80.926,59,79.074,59,77.222,59C75.37,59,73.519,59,71.667,59C69.815,59,67.963,59,66.111,59C64.259,59,62.407,59,60.556,59C58.704,59,56.852,59,55,59C53.148,59,51.296,59,49.444,59C47.593,59,45.741,59,43.889,59C42.037,59,40.185,59,38.333,59C36.481,59,34.63,59,32.778,59C30.926,59,29.074,59,27.222,59C25.37,59,23.519,59,21.667,59C19.815,59,17.963,59,16.111,59C14.259,59,12.407,59,10.556,59C8.704,59,6.852,59,5,59Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-emerald-500)" width="150" d="M5,39.74C6.852,43.7,8.704,47.66,10.556,47.66C12.407,47.66,14.259,47.285,16.111,46.535C17.963,45.785,19.815,39.14,21.667,38.21C23.519,37.28,25.37,36.815,27.222,36.815C29.074,36.815,30.926,38.93,32.778,38.93C34.63,38.93,36.481,37.445,38.333,37.445C40.185,37.445,42.037,38.652,43.889,40.28C45.741,41.908,47.593,47.21,49.444,47.21C51.296,47.21,53.148,46.805,55,45.995C56.852,45.185,58.704,38.15,60.556,37.22C62.407,36.29,64.259,35.825,66.111,35.825C67.963,35.825,69.815,37.94,71.667,37.94C73.519,37.94,75.37,36.41,77.222,36.41C79.074,36.41,80.926,37.475,82.778,39.155C84.63,40.835,86.481,46.49,88.333,46.49C90.185,46.49,92.037,46.1,93.889,45.32C95.741,44.54,97.593,39.95,99.444,35.96C101.296,31.97,103.148,21.38,105,21.38C106.852,21.38,108.704,27.605,110.556,29.84C112.407,32.075,114.259,33.455,116.111,34.79C117.963,36.125,119.815,36.028,121.667,37.85C123.519,39.673,125.37,45.725,127.222,45.725C129.074,45.725,130.926,45.47,132.778,44.96C134.63,44.45,136.481,36.26,138.333,35.51C140.185,34.76,142.037,34.385,143.889,34.385C145.741,34.385,147.593,36.68,149.444,36.68C151.296,36.68,153.148,36.298,155,35.915"></path>
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
                </div>
              </CardContent>
            </Card>
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  {"Signups"}
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      {"Last 28 days"}
                    </div>
                    <div className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                      {"4,238"}
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
                              <lineargradient id="signupsGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <defs>
                                    <clippath id="animationClipPath-recharts-area-_r_2b_">
                                      <rect x="5" y="0" width="125.0356457168846" height="61"></rect>
                                    </clippath>
                                  </defs>
                                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_2b_)">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#signupsGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2b_" d="M5,27.431C6.852,33.038,8.704,38.646,10.556,38.646C12.407,38.646,14.259,38.231,16.111,37.4C17.963,36.569,19.815,27.223,21.667,26.392C23.519,25.562,25.37,25.146,27.222,25.146C29.074,25.146,30.926,26.185,32.778,26.185C34.63,26.185,36.481,25.769,38.333,25.769C40.185,25.769,42.037,26.531,43.889,28.054C45.741,29.577,47.593,37.815,49.444,37.815C51.296,37.815,53.148,37.192,55,35.946C56.852,34.7,58.704,26.669,60.556,25.562C62.407,24.454,64.259,23.9,66.111,23.9C67.963,23.9,69.815,24.938,71.667,24.938C73.519,24.938,75.37,24.731,77.222,24.731C79.074,24.731,80.926,25.423,82.778,26.808C84.63,28.192,86.481,36.777,88.333,36.777C90.185,36.777,92.037,36.223,93.889,35.115C95.741,34.008,97.593,28.885,99.444,24.523C101.296,20.162,103.148,8.946,105,8.946C106.852,8.946,108.704,16.042,110.556,18.292C112.407,20.542,114.259,21.2,116.111,22.446C117.963,23.692,119.815,23.554,121.667,25.769C123.519,27.985,125.37,35.738,127.222,35.738C129.074,35.738,130.926,35.323,132.778,34.492C134.63,33.662,136.481,24.662,138.333,24.108C140.185,23.554,142.037,23.277,143.889,23.277C145.741,23.277,147.593,23.9,149.444,23.9C151.296,23.9,153.148,23.796,155,23.692L155,59C153.148,59,151.296,59,149.444,59C147.593,59,145.741,59,143.889,59C142.037,59,140.185,59,138.333,59C136.481,59,134.63,59,132.778,59C130.926,59,129.074,59,127.222,59C125.37,59,123.519,59,121.667,59C119.815,59,117.963,59,116.111,59C114.259,59,112.407,59,110.556,59C108.704,59,106.852,59,105,59C103.148,59,101.296,59,99.444,59C97.593,59,95.741,59,93.889,59C92.037,59,90.185,59,88.333,59C86.481,59,84.63,59,82.778,59C80.926,59,79.074,59,77.222,59C75.37,59,73.519,59,71.667,59C69.815,59,67.963,59,66.111,59C64.259,59,62.407,59,60.556,59C58.704,59,56.852,59,55,59C53.148,59,51.296,59,49.444,59C47.593,59,45.741,59,43.889,59C42.037,59,40.185,59,38.333,59C36.481,59,34.63,59,32.778,59C30.926,59,29.074,59,27.222,59C25.37,59,23.519,59,21.667,59C19.815,59,17.963,59,16.111,59C14.259,59,12.407,59,10.556,59C8.704,59,6.852,59,5,59Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-blue-500)" width="150" d="M5,27.431C6.852,33.038,8.704,38.646,10.556,38.646C12.407,38.646,14.259,38.231,16.111,37.4C17.963,36.569,19.815,27.223,21.667,26.392C23.519,25.562,25.37,25.146,27.222,25.146C29.074,25.146,30.926,26.185,32.778,26.185C34.63,26.185,36.481,25.769,38.333,25.769C40.185,25.769,42.037,26.531,43.889,28.054C45.741,29.577,47.593,37.815,49.444,37.815C51.296,37.815,53.148,37.192,55,35.946C56.852,34.7,58.704,26.669,60.556,25.562C62.407,24.454,64.259,23.9,66.111,23.9C67.963,23.9,69.815,24.938,71.667,24.938C73.519,24.938,75.37,24.731,77.222,24.731C79.074,24.731,80.926,25.423,82.778,26.808C84.63,28.192,86.481,36.777,88.333,36.777C90.185,36.777,92.037,36.223,93.889,35.115C95.741,34.008,97.593,28.885,99.444,24.523C101.296,20.162,103.148,8.946,105,8.946C106.852,8.946,108.704,16.042,110.556,18.292C112.407,20.542,114.259,21.2,116.111,22.446C117.963,23.692,119.815,23.554,121.667,25.769C123.519,27.985,125.37,35.738,127.222,35.738C129.074,35.738,130.926,35.323,132.778,34.492C134.63,33.662,136.481,24.662,138.333,24.108C140.185,23.554,142.037,23.277,143.889,23.277C145.741,23.277,147.593,23.9,149.444,23.9C151.296,23.9,153.148,23.796,155,23.692"></path>
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
                </div>
              </CardContent>
            </Card>
            <Card size="default">
              <CardContent className="space-y-5">
                <div className="font-semibold text-sm">
                  {"Active Licenses"}
                </div>
                <div className="flex gap-2.5 items-end justify-between">
                  <div className="flex flex-col gap-px pb-2">
                    <div className="text-muted-foreground text-xs whitespace-nowrap">
                      {"NeUI Cloud, 28 days"}
                    </div>
                    <div className="font-semibold tabular-nums text-foreground text-xl tracking-tight">
                      {"3,297"}
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
                              <lineargradient id="licensesGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.3"></stop>
                                <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0.05"></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <defs>
                                    <clippath id="animationClipPath-recharts-area-_r_2c_">
                                      <rect x="5" y="0" width="125.0356457168846" height="61"></rect>
                                    </clippath>
                                  </defs>
                                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_2c_)">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#licensesGradient)" fillOpacity="0.6" height="54" stroke="none" width="150" id="recharts-area-_r_2c_" d="M5,10.702C6.852,10.679,8.704,10.657,10.556,10.638C12.407,10.62,14.259,10.622,16.111,10.591C17.963,10.559,19.815,10.479,21.667,10.416C23.519,10.352,25.37,10.209,27.222,10.209C29.074,10.209,30.926,10.289,32.778,10.289C34.63,10.289,36.481,10.156,38.333,10.098C40.185,10.04,42.037,9.976,43.889,9.939C45.741,9.902,47.593,9.9,49.444,9.876C51.296,9.852,53.148,9.844,55,9.796C56.852,9.749,58.704,9.661,60.556,9.59C62.407,9.519,64.259,9.434,66.111,9.368C67.963,9.301,69.815,9.193,71.667,9.193C73.519,9.193,75.37,9.288,77.222,9.288C79.074,9.288,80.926,9.145,82.778,9.114C84.63,9.082,86.481,9.087,88.333,9.066C90.185,9.045,92.037,9.031,93.889,8.986C95.741,8.941,97.593,8.918,99.444,8.796C101.296,8.674,103.148,8.404,105,8.256C106.852,8.108,108.704,8.004,110.556,7.906C112.407,7.809,114.259,7.737,116.111,7.668C117.963,7.599,119.815,7.536,121.667,7.494C123.519,7.451,125.37,7.414,127.222,7.414C129.074,7.414,130.926,7.478,132.778,7.478C134.63,7.478,136.481,7.311,138.333,7.239C140.185,7.168,142.037,7.11,143.889,7.049C145.741,6.988,147.593,6.943,149.444,6.874C151.296,6.805,153.148,6.721,155,6.636L155,59C153.148,59,151.296,59,149.444,59C147.593,59,145.741,59,143.889,59C142.037,59,140.185,59,138.333,59C136.481,59,134.63,59,132.778,59C130.926,59,129.074,59,127.222,59C125.37,59,123.519,59,121.667,59C119.815,59,117.963,59,116.111,59C114.259,59,112.407,59,110.556,59C108.704,59,106.852,59,105,59C103.148,59,101.296,59,99.444,59C97.593,59,95.741,59,93.889,59C92.037,59,90.185,59,88.333,59C86.481,59,84.63,59,82.778,59C80.926,59,79.074,59,77.222,59C75.37,59,73.519,59,71.667,59C69.815,59,67.963,59,66.111,59C64.259,59,62.407,59,60.556,59C58.704,59,56.852,59,55,59C53.148,59,51.296,59,49.444,59C47.593,59,45.741,59,43.889,59C42.037,59,40.185,59,38.333,59C36.481,59,34.63,59,32.778,59C30.926,59,29.074,59,27.222,59C25.37,59,23.519,59,21.667,59C19.815,59,17.963,59,16.111,59C14.259,59,12.407,59,10.556,59C8.704,59,6.852,59,5,59Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="54" stroke="var(--color-violet-500)" width="150" d="M5,10.702C6.852,10.679,8.704,10.657,10.556,10.638C12.407,10.62,14.259,10.622,16.111,10.591C17.963,10.559,19.815,10.479,21.667,10.416C23.519,10.352,25.37,10.209,27.222,10.209C29.074,10.209,30.926,10.289,32.778,10.289C34.63,10.289,36.481,10.156,38.333,10.098C40.185,10.04,42.037,9.976,43.889,9.939C45.741,9.902,47.593,9.9,49.444,9.876C51.296,9.852,53.148,9.844,55,9.796C56.852,9.749,58.704,9.661,60.556,9.59C62.407,9.519,64.259,9.434,66.111,9.368C67.963,9.301,69.815,9.193,71.667,9.193C73.519,9.193,75.37,9.288,77.222,9.288C79.074,9.288,80.926,9.145,82.778,9.114C84.63,9.082,86.481,9.087,88.333,9.066C90.185,9.045,92.037,9.031,93.889,8.986C95.741,8.941,97.593,8.918,99.444,8.796C101.296,8.674,103.148,8.404,105,8.256C106.852,8.108,108.704,8.004,110.556,7.906C112.407,7.809,114.259,7.737,116.111,7.668C117.963,7.599,119.815,7.536,121.667,7.494C123.519,7.451,125.37,7.414,127.222,7.414C129.074,7.414,130.926,7.478,132.778,7.478C134.63,7.478,136.481,7.311,138.333,7.239C140.185,7.168,142.037,7.11,143.889,7.049C145.741,6.988,147.593,6.943,149.444,6.874C151.296,6.805,153.148,6.721,155,6.636"></path>
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
                {"NeUI"}
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
                {"Modules"}
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
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_8_" placeholder="Search..." aria-label="Search modules" value="" />
              </InputGroup>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
                <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpDownIcon" tabler="IconArrowsUpDown" hugeicons="ArrowDataTransferVerticalIcon" phosphor="ArrowsDownUpIcon" remixicon="RiArrowUpDownLine" data-icon="inline-start" aria-hidden="true">
                  <path d="m21 16-4 4-4-4"></path>
                  <path d="M17 20V4"></path>
                  <path d="m3 8 4-4 4 4"></path>
                  <path d="M7 4v16"></path>
                </svg>
                {"Name"}
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
                {"Filters"}
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button type="button" tabIndex="0">
                {"Add Module"}
              </Button>
            </div>
          </div>
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_j_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport>
                    <DataGridProvider>
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
                                {"Progress"}
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
                                {"Module"}
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
                                {"Window"}
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
                                {"Status"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </Button>
                            </div>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "104px"}}>
                            <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                              {"Actions"}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="permission-matrix">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="65.59645460695488"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"42%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"42% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"11/26 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Access Matrix"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"System"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Nora Vale"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"admin.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 22 - May 06"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Access Matrix">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite Access Matrix">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Access Matrix" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="api-console">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-emerald-400 stroke-current text-emerald-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="10.178760197630922"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"91%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"91% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"29/32 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"API Console"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Feature"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarFallback className="text-[8px]">
                                      {"LW"}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Lena Wade"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"api.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 12 - Apr 26"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open API Console">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button className="text-amber-500" type="button" tabIndex="0" aria-label="Unfavorite API Console">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for API Console" aria-haspopup="menu" id="base-ui-_r_s_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="template-library">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="75.7752148045858"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"33%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"33% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"10/30 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Block Library"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Feature"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Sofia Romero" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Sofia Romero"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"blocks.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 24 - May 10"}
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
                                {"16-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Block Library">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Block Library">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Block Library" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="data-retention">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="88.21592171280139"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"22%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"22% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"7/32 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Data Retention"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"System"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Kenji Tan"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"privacy.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 27 - May 14"}
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
                                {"17-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground/50 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"Backlog"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Data Retention">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Data Retention">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Data Retention" aria-haspopup="menu" id="base-ui-_r_16_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="workspace-setup">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="stroke-current text-muted-foreground/35" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="113.09733552923255"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"0%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"0% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"2/14 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Docs Portal"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Area"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Nina Santos" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Nina Santos"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"docs.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 21 - May 05"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Docs Portal">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Docs Portal">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Docs Portal" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="help-center">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="68.98937467283186"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"39%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"39% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"9/23 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Help Center"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Area"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Sofia Romero" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Sofia Romero"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"help.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 23 - May 11"}
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
                                {"18-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Help Center">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Help Center">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Help Center" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="integration-hub">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="47.50088092227767"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"58%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"58% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"14/24 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Integration Hub"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Area"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Kenji Tan"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"integrations.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 20 - May 04"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Integration Hub">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Integration Hub">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Integration Hub" aria-haspopup="menu" id="base-ui-_r_1l_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="billing-rules">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="40.715040790523716"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"64%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"64% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"21/33 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"License Billing"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Feature"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Elijah Morgan" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Elijah Morgan"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"billing.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 18 - May 02"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                              <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"In Progress"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open License Billing">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite License Billing">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for License Billing" aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="onboarding-flow">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="stroke-current text-muted-foreground/35" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="113.09733552923255"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"0%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"0% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"0/18 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Pro Onboarding"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"Feature"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Jonah Lee" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Jonah Lee"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"pro.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 19 - May 03"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                              <span className="bg-muted-foreground/50 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"Backlog"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Pro Onboarding">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Pro Onboarding">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Pro Onboarding" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
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
                        <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/module-row hover:bg-muted/40" data-row-id="core-workflow">
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-2.5 items-center min-w-0">
                              <div className="relative shrink-0 size-10">
                                <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                  <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                  <circle className="dark:text-sky-400 stroke-current text-sky-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="84.82300164692441"></circle>
                                </svg>
                                <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                  {"25%"}
                                </span>
                              </div>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"25% ready"}
                                </span>
                                <span className="tabular-nums text-muted-foreground text-xs truncate">
                                  {"8/32 tasks"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-1 min-w-0">
                              <span className="font-medium leading-5 text-foreground text-sm truncate">
                                {"Registry Sync"}
                              </span>
                              <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                <span className="shrink-0">
                                  {"System"}
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="gap-1.5 inline-flex items-center min-w-0">
                                  <Avatar className="size-4" size="default">
                                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                  </Avatar>
                                  <span className="truncate">
                                    {"Nora Vale"}
                                  </span>
                                </span>
                                <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                <span className="font-mono tracking-wide truncate">
                                  {"registry.neui.io"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                {"Apr 17 - May 01"}
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
                                {"14-day window"}
                              </span>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                              <span className="bg-sky-500 dark:bg-sky-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                              {"Planned"}
                            </Badge>
                          </td>
                          <td className="align-middle px-2 py-1.5">
                            <div className="flex gap-1 items-center justify-end">
                              <Button type="button" tabIndex="0" aria-label="Open Registry Sync">
                                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                  <path d="M10 9H8"></path>
                                  <path d="M16 13H8"></path>
                                  <path d="M16 17H8"></path>
                                </svg>
                              </Button>
                              <Button type="button" tabIndex="0" aria-label="Favorite Registry Sync">
                                <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                              </Button>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Registry Sync" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
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
          <div className="border-t px-0 py-3">
            <DataGridProvider>
            <DataGridPagination className="py-0">
              <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                <div className="text-muted-foreground text-sm">
                  {"Rows per page"}
                </div>
                <Select>
                <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_26_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                  <SelectValue>
                    {"10"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_26_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                  {"1 - 10 of 17 modules"}
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
          </div>
        </div>
      </main>
    </div>
  )
}
