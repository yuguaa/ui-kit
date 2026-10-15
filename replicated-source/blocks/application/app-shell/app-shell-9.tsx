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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
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
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[&_[data-slot=sidebar-group-label]]:text-zinc-500 [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]:hover]:bg-zinc-800/90 [&_[data-slot=sidebar-menu-button]:hover]:text-zinc-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-55 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]]:bg-zinc-800 [&_[data-slot=sidebar-menu-button][data-active]]:text-zinc-50 [&_[data-slot=sidebar-menu-button]]:text-zinc-400 [&_[data-slot=sidebar-menu-sub-button]:hover]:bg-zinc-800/80 [&_[data-slot=sidebar-menu-sub-button]:hover]:text-zinc-100 [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-zinc-800 [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-zinc-50 [&_[data-slot=sidebar-menu-sub-button]]:text-zinc-500 flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "50px", "--header-height": "50px", "--sidebar": "var(--color-zinc-900)", "--sidebar-foreground": "var(--color-zinc-100)", "--sidebar-border": "color-mix(in oklab, var(--color-zinc-700) 52%, transparent)", "--sidebar-accent": "var(--color-zinc-800)", "--sidebar-accent-foreground": "var(--color-zinc-100)", "--sidebar-primary": "var(--color-zinc-100)", "--sidebar-primary-foreground": "var(--color-zinc-900)", "--sidebar-ring": "var(--color-zinc-400)"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="dark data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="flex-row in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between" sidebar="header">
              <div className="duration-200 ease-linear gap-2 inline-flex items-center min-h-10 px-0.5 transition-all">
                <span className="flex items-center justify-center relative shrink-0 size-7 text-white">
                  <Item className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary left-1/2 origin-center p-0 scale-[0.875] size-8 text-primary-foreground top-1/2" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-4" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </span>
                <span className="font-medium in-data-[state=collapsed]:hidden text-sm text-zinc-100">
                  {"NeUI"}
                </span>
              </div>
              <div className="gap-0.5 in-data-[state=collapsed]:flex-col inline-flex items-center">
                <Popover>
                <PopoverTrigger className="[&_svg]:opacity-70 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-opacity bg-transparent cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:[&_svg]:opacity-100 hover:bg-zinc-800 hover:text-zinc-50 inline-flex items-center justify-center outline-none relative select-none shrink-0 text-zinc-200 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                  <span className="absolute bg-zinc-100 right-1 rounded-full size-1.5 top-1" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
              </div>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent sidebar="content">
              <div className="py-2">
                <form>
                  <SidebarProvider>
                  <SidebarGroup className="py-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="relative" sidebar="group-content">
                      <Button className="bg-zinc-800 border-none duration-200 ease-linear focus-visible:bg-zinc-700 focus-visible:text-white font-normal h-8 hover:bg-zinc-700 hover:text-white in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 transition-[width] w-full" type="button" tabIndex={0} id="search">
                        {"Search..."}
                      </Button>
                      <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx={11} cy={11} r={8}></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 absolute bg-zinc-700 in-data-[state=collapsed]:hidden right-2 text-zinc-200 top-1/2">
                        {"⌘K"}
                      </Kbd>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                  <DialogHeader className="sr-only">
                    <DialogTitle id="base-ui-_r_4_">
                      {"Search"}
                    </DialogTitle>
                    <DialogDescription id="base-ui-_r_5_">
                      {"Search your workspace content."}
                    </DialogDescription>
                  </DialogHeader>
                </form>
              </div>
              <SidebarProvider>
              <SidebarGroup sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="in-data-[state=collapsed]:hidden" sidebar="group-label">
                  {"Platform"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                          <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                          <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                          <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                          <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                        </svg>
                        <span className="truncate">
                          {"Dashboard"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <span className="truncate">
                          {"Projects"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-square-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                          <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="truncate">
                          {"My Tasks"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-issues">
                        <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <circle cx={12} cy={12} r={1}></circle>
                        </svg>
                        <span className="truncate">
                          {"Issues"}
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-team">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx={9} cy={7} r={4}></circle>
                        </svg>
                        <span className="truncate">
                          {"Team"}
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span className="truncate">
                          {"Reports"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring w-full whitespace-nowrap" aria-expanded="true" aria-controls="team-members-list" sidebar="group-label">
                  {"Team Members"}
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content" id="team-members-list">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Daniel Parker" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Daniel Parker"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Daniel Parker" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="bg-primary/10 font-semibold text-[8px] text-primary">
                              {"MR"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Matthew Reed"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Matthew Reed" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="bg-primary/10 font-semibold text-[8px] text-primary">
                              {"RB"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute bg-amber-400 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Ryan Brooks"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Ryan Brooks" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_18_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="bg-primary/10 font-semibold text-[8px] text-primary">
                              {"LD"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Lena Dawson"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Lena Dawson" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_1f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarImage alt="Sophie Bennett" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="absolute bg-emerald-500 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Sophie Bennett"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Sophie Bennett" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton href="#" id="base-ui-_r_1m_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <div className="relative shrink-0">
                          <Avatar className="size-5" size="default">
                            <AvatarFallback className="bg-primary/10 font-semibold text-[8px] text-primary">
                              {"LC"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="absolute bg-muted-foreground/40 border border-zinc-900 bottom-0 right-0 rounded-full size-2" aria-hidden="true"></span>
                        </div>
                        <span className="min-w-0 text-sm truncate">
                          {"Liam Carter"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Liam Carter" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1q_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={1}></circle>
                          <circle cx={19} cy={12} r={1}></circle>
                          <circle cx={5} cy={12} r={1}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <div className="mt-auto">
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden" sidebar="group">
                  <Frame className="bg-zinc-900/90 border-zinc-700 md:w-[220px] mx-auto overflow-hidden shrink-0" spacing="sm">
                    <header className="bg-zinc-900/90 flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex gap-1.5 items-center">
                        <span className="[&_svg]:size-3.5 size-3.5 text-yellow-500">
                          <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx={4} cy={20} r={2}></circle>
                          </svg>
                        </span>
                        <div className="font-semibold text-xs text-yellow-500">
                          {"AI Credits"}
                        </div>
                      </div>
                    </header>
                    <FramePanel className="bg-zinc-900/80 border-zinc-700 space-y-2.5">
                      <p className="leading-snug text-xs text-zinc-400">
                        {"Usage resets at the end of your billing cycle."}
                      </p>
                      <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                        <div className="absolute inset-0 opacity-20 pointer-events-none text-white" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar">
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </div>
                      <div className="flex items-center justify-between leading-none text-xs">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold tabular-nums text-zinc-100">
                            {"82%"}
                          </span>
                          <span className="text-zinc-400">
                            {"Used"}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold tabular-nums text-zinc-100">
                            {"18%"}
                          </span>
                          <span className="text-zinc-400">
                            {"Free"}
                          </span>
                        </div>
                      </div>
                      <Button className="dark w-full" type="button" tabIndex={0}>
                        {"Upgrade Plan"}
                      </Button>
                    </FramePanel>
                  </Frame>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="pb-2" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group-data-[collapsible=icon]:-ml-1! group/menu-button items-center outline-hidden overflow-hidden peer/menu-button pr-0! w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                    <div className="flex flex-1 gap-2 items-center min-w-0">
                      <Avatar className="in-data-[state=collapsed]:size-6! rounded-md size-7" size="default">
                        <AvatarFallback className="font-semibold text-[10px]">
                          {"NB"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-xs text-zinc-100 truncate">
                          {"Nick Bold"}
                        </span>
                        <span className="gap-1 inline-flex items-center">
                          <svg className="shrink-0 size-3!" viewBox="0 0 28 28" fill="none" width="100%" height="100%" aria-hidden="true">
                            <defs>
                              <lineargradient id="sb9-acme" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#6366f1"></stop>
                                <stop offset="50%" stopColor="#8b5cf6"></stop>
                                <stop offset="100%" stopColor="#ec4899"></stop>
                              </lineargradient>
                            </defs>
                            <circle cx={14} cy={14} r={14} fill="url(#sb9-acme)"></circle>
                          </svg>
                          <span className="text-[10px] text-zinc-400 truncate">
                            {"Acme Corp"}
                          </span>
                        </span>
                      </div>
                    </div>
                    <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={19} cy={12} r={1}></circle>
                      <circle cx={5} cy={12} r={1}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
                </SidebarProvider>
              </SidebarMenu>
              </SidebarProvider>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed group/rail h-12 hidden items-center md:flex motion-reduce:transition-none outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
      <SidebarInset className="ml-0! overflow-y-auto">
        <header className="border-b flex h-(--header-height) items-center justify-between px-4 shrink-0 sticky top-0 z-10">
          <div className="flex gap-2 items-center min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="-ml-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:flex">
                  <BreadcrumbLink className="flex gap-1.5 items-center" href="#">
                    <svg className="lucide lucide-house size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    {"Home"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden items-center md:flex" role="presentation" aria-hidden="true">
                  <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    {"Overview"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
          </div>
          <div className="bg-muted/40 border border-border/40 border-dashed flex-1 h-full rounded-lg"></div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
