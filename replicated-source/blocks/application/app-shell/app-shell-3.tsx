import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
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
    <div className="**:data-[slot=sidebar-menu-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-button]:hover:text-foreground **:data-[slot=sidebar-menu-button]:text-accent-foreground/80 **:data-[slot=sidebar-menu-sub-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-sub-button]:hover:text-foreground **:data-[slot=sidebar-menu-sub-button]:text-accent-foreground/80 [&_[data-collapsible=icon]_[data-slot=sidebar-menu-button][data-active]>svg]:-ml-px [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:border [&_[data-slot=sidebar-menu-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-button][data-active]]:text-foreground [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:border [&_[data-slot=sidebar-menu-sub-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-foreground [--sidebar-border:transparent] [--sidebar-width:260px] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="flex-row in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between" sidebar="header">
              <div className="duration-200 ease-linear gap-2 inline-flex items-center min-h-10 px-0.5 transition-all">
                <span className="flex items-center justify-center relative shrink-0 size-7">
                  <Item className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary left-1/2 origin-center p-0 scale-[0.875] size-8 text-primary-foreground top-1/2" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </span>
                <span className="font-medium in-data-[state=collapsed]:hidden text-sm">
                  NeUI
                </span>
              </div>
              <div className="gap-0.5 in-data-[state=collapsed]:flex-col inline-flex items-center">
                <Popover>
                <PopoverTrigger className="[&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                  <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
                <SidebarTrigger className="[&_svg]:duration-200 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:opacity-100 in-data-[state=collapsed]:[&_svg]:rotate-180 inline-flex items-center justify-center opacity-60 outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                  <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                  <span className="sr-only">
                    Toggle Sidebar
                  </span>
                </SidebarTrigger>
              </div>
            </SidebarHeader>
            <SidebarContent sidebar="content">
              <div className="pt-2 py-2">
                <form>
                  <SidebarGroup className="py-0" sidebar="group">
                    <SidebarGroupContent className="relative" sidebar="group-content">
                      <Button className="duration-200 ease-linear font-normal h-8 hover:bg-background in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 transition-[width] w-full" type="button" tabIndex="0" id="search">
                        Search...
                      </Button>
                      <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 absolute in-data-[state=collapsed]:hidden right-2 top-1/2">
                        ⌘K
                      </Kbd>
                    </SidebarGroupContent>
                  </SidebarGroup>
                  <DialogHeader className="sr-only">
                    <DialogTitle id="base-ui-_r_4_">
                      Search
                    </DialogTitle>
                    <DialogDescription id="base-ui-_r_5_">
                      Search your workspace content.
                    </DialogDescription>
                  </DialogHeader>
                </form>
              </div>
              <SidebarGroup sidebar="group">
                <SidebarGroupLabel className="in-data-[state=collapsed]:hidden" sidebar="group-label">
                  Platform
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                        </svg>
                        <span>
                          Dashboard
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <span>
                          Projects
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-square-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareCheckIcon" tabler="IconSquareCheck" hugeicons="CheckmarkSquare02Icon" phosphor="CheckSquareIcon" remixicon="RiCheckboxLine" aria-hidden="true">
                          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>
                          My Tasks
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-issues">
                        <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="1"></circle>
                        </svg>
                        <span className="truncate">
                          Issues
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-team">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span className="truncate">
                          Team
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span>
                          Reports
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden" sidebar="group">
                <SidebarGroupLabel className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring w-full whitespace-nowrap" aria-expanded="true" aria-controls="active-projects-list" sidebar="group-label">
                  Active Projects
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content" id="active-projects-list">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-blue-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="10.555751316061706" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Design System
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Design System" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-violet-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="20.734511513692635" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          API Integration
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for API Integration" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-emerald-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="4.523893421169302" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Mobile App
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Mobile App" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_18_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-orange-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="26.389378290154262" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Analytics Dashboard
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Analytics Dashboard" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_1f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-rose-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Auth Module
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Auth Module" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <div className="mt-auto">
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden" sidebar="group">
                  <Frame className="border-border md:w-[225px] shrink-0" spacing="xs">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-semibold text-warning text-xs">
                        Spending Limit
                      </div>
                    </header>
                    <FramePanel className="space-y-2">
                      <p className="leading-snug text-muted-foreground text-xs">
                        Consumption and balance will be reset at the end of the month
                      </p>
                      <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                        <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar">
                          <ProgressTrack progressing="">
                            <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            x
                          </span>
                        </Progress>
                      </div>
                      <div className="flex items-center justify-between leading-none text-xs">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-foreground">
                            82%
                          </span>
                          <span className="text-muted-foreground">
                            Used
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-foreground">
                            18%
                          </span>
                          <span className="text-muted-foreground">
                            Free
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </SidebarGroup>
              </div>
            </SidebarContent>
            <SidebarFooter sidebar="footer">
              <SidebarMenu sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:ml-0! group/menu-button items-center outline-hidden overflow-hidden peer/menu-button pr-0! w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                    <Avatar size="sm">
                      <AvatarImage alt="Claude" src="https://github.com/claude.png"></AvatarImage>
                    </Avatar>
                    <span className="font-medium in-data-[state=collapsed]:hidden text-sm truncate">
                      Claude
                    </span>
                    <svg className="in-data-[state=collapsed]:hidden lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </div>
        </div>
      </Sidebar>
      <SidebarInset className="ml-0! overflow-y-auto">
        <header className="ease-linear flex gap-2 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 h-12 items-center shrink-0 transition-[width,height]">
          <div className="flex gap-2 items-center px-4">
            <SidebarTrigger className="-ml-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:flex">
                  <BreadcrumbLink className="flex gap-1.5 items-center" href="#">
                    <svg className="lucide lucide-house size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden items-center md:flex" role="presentation" aria-hidden="true">
                  <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pb-4 px-4">
          <div className="gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/40 border border-border/40 rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 rounded-lg"></div>
          </div>
          <div className="bg-muted/40 border border-border/40 h-full rounded-lg"></div>
        </div>
      </SidebarInset>
    </div>
  )
}
