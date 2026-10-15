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
import { Label } from "@/registry/bases/base/ui/label"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="**:data-[slot=sidebar-menu-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-button]:hover:text-foreground **:data-[slot=sidebar-menu-button]:text-accent-foreground/80 **:data-[slot=sidebar-menu-sub-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-sub-button]:hover:text-foreground **:data-[slot=sidebar-menu-sub-button]:text-accent-foreground/80 [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]:hover]:bg-background! [&_[data-slot=sidebar-menu-button]:hover]:border-border/60! [&_[data-slot=sidebar-menu-button]:hover]:text-foreground! [&_[data-slot=sidebar-menu-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:border [&_[data-slot=sidebar-menu-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:text-foreground [&_[data-slot=sidebar-menu-button]]:border! [&_[data-slot=sidebar-menu-button]]:border-transparent! [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]:hover]:bg-background! [&_[data-slot=sidebar-menu-sub-button]:hover]:border-border/60! [&_[data-slot=sidebar-menu-sub-button]:hover]:text-foreground! [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:border [&_[data-slot=sidebar-menu-sub-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-foreground [&_[data-slot=sidebar-menu-sub-button]]:border! [&_[data-slot=sidebar-menu-sub-button]]:border-transparent! [--sidebar-border:transparent] [--sidebar-width:260px] [--sidebar:transparent] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex group/rail h-12 items-center motion-reduce:transition-none outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
              <span className="flex flex-col items-center">
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
              </span>
              <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                Collapse
              </span>
            </button>
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
              </div>
            </SidebarHeader>
            <SidebarContent sidebar="content">
              <div className="pt-2 py-2">
                <form>
                  <SidebarGroup className="py-0" sidebar="group">
                    <SidebarGroupContent className="relative" sidebar="group-content">
                      <Button className="border-border/60 duration-200 ease-linear font-normal h-8 hover:bg-background in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 shadow-none transition-[width] w-full" type="button" tabIndex="0" id="search">
                        Search...
                      </Button>
                      <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 absolute in-data-[state=collapsed]:hidden right-2 top-1/2">
                        /
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
                  Workspace
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="font-medium" href="#" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        <span className="bg-clip-text bg-linear-to-r from-fuchsia-500 text-transparent to-purple-500 via-blue-500">
                          New Chat
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-agents">
                        <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                          <path d="M12 8V4H8"></path>
                          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                        <span className="truncate">
                          Agents
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-threads">
                        <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="truncate">
                          Threads
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-tools">
                        <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                        </svg>
                        <span className="truncate">
                          Tools
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-knowledge">
                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                        <span className="truncate">
                          Knowledge
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-runs">
                        <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                        </svg>
                        <span className="truncate">
                          Runs
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span>
                          Analytics
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>
                          Settings
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
                      <SidebarMenuButton href="#" id="base-ui-_r_n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-blue-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="10.555751316061706" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Design System
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Design System" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_u_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-violet-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="20.734511513692635" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          API Integration
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for API Integration" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_15_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-emerald-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="4.523893421169302" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Mobile App
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Mobile App" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_1c_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-orange-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="26.389378290154262" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Analytics Dashboard
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Analytics Dashboard" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_1j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-rose-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Auth Module
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Auth Module" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
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
                  <div className="group/card mt-5 overflow-hidden">
                    <Frame className="border-border md:w-[222px] shrink-0" spacing="xs">
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
                  </div>
                </SidebarGroup>
              </div>
            </SidebarContent>
            <SidebarFooter sidebar="footer">
              <SidebarMenu sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex group-data-[collapsible=icon]:-ml-1! group/menu-button items-center outline-hidden overflow-hidden peer/menu-button pr-0! w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                    <div className="flex flex-1 gap-2 items-center min-w-0">
                      <Avatar className="in-data-[state=collapsed]:size-6! rounded-md size-7" size="default">
                        <AvatarImage className="rounded-md" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-xs truncate">
                          Nick Bold
                        </span>
                        <span className="gap-1 inline-flex items-center">
                          <svg className="shrink-0 size-3!" viewBox="0 0 28 28" fill="none" width="100%" height="100%" aria-hidden="true">
                            <defs>
                              <lineargradient id="sb10-atlas" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#6366f1"></stop>
                                <stop offset="50%" stopColor="#8b5cf6"></stop>
                                <stop offset="100%" stopColor="#ec4899"></stop>
                              </lineargradient>
                            </defs>
                            <circle cx="14" cy="14" r="14" fill="url(#sb10-atlas)"></circle>
                          </svg>
                          <span className="text-[10px] text-muted-foreground truncate">
                            Atlas
                          </span>
                        </span>
                      </div>
                    </div>
                    <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
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
      <SidebarInset className="border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)]! ml-0! overflow-hidden shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]!">
        <header className="backdrop-blur-sm bg-background/95 border-b border-border/60 flex gap-4 h-12 items-center justify-between px-4 shrink-0 sticky top-0 z-10">
          <div className="flex gap-2 items-center min-w-0">
            <SidebarTrigger className="-ml-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex min-w-0">
                  <BreadcrumbLink className="flex gap-1.5 items-center min-w-0" href="#" aria-label="Atlas">
                    <svg className="shrink-0" viewBox="0 0 28 28" fill="none" width="16" height="16" aria-hidden="true">
                      <defs>
                        <lineargradient id="hdr-atlas" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#6366f1"></stop>
                          <stop offset="50%" stopColor="#8b5cf6"></stop>
                          <stop offset="100%" stopColor="#ec4899"></stop>
                        </lineargradient>
                      </defs>
                      <circle cx="14" cy="14" r="14" fill="url(#hdr-atlas)"></circle>
                    </svg>
                    <span className="hidden lg:inline truncate">
                      Atlas
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="shrink-0" role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex min-w-0">
                  <BreadcrumbLink className="flex gap-1.5 items-center min-w-0" href="#" aria-label="Nick Bold">
                    <Avatar className="size-5" size="default">
                      <AvatarImage alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="hidden md:inline truncate">
                      Nick Bold
                    </span>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="shrink-0" role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="min-w-0">
                  <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 items-center shrink-0">
            <div className="flex gap-1 items-center">
              <Label className="hidden sm:flex" id="base-ui-_r_1v_-label">
                <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1u_" aria-checked="true" size="sm" aria-label="Auto refresh" aria-labelledby="base-ui-_r_1v_-label">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_1v_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                Auto Refresh
              </Label>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <Button type="button" tabIndex="0">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              New order
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto p-4">
          <div className="gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/40 border border-border/40 border-dashed rounded-lg"></div>
          </div>
          <div className="bg-muted/40 border border-border/40 border-dashed h-full rounded-lg"></div>
        </div>
      </SidebarInset>
    </div>
  )
}
