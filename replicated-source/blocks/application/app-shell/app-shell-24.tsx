import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { DrawerTrigger } from "@/registry/bases/base/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="[--sidebar-border:var(--color-border)] [--sidebar:var(--color-background)] bg-background flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh overflow-hidden w-full" style={{"--sidebar-width": "208px", "--sidebar-width-icon": "3rem", "--app-topbar-height": "52px"}}>
      <header className="bg-background border-b border-input/50 fixed flex h-(--app-topbar-height) inset-x-0 items-center pe-[var(--removed-body-scroll-bar-size,0px)] text-foreground top-0 z-30">
        <div className="flex gap-2 items-center px-4 sm:gap-4 sm:px-6 w-full">
          <div className="flex gap-3 items-center shrink-0">
            <div className="-mx-1.5 flex items-center lg:hidden">
              <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  Toggle Sidebar
                </span>
              </SidebarTrigger>
              <DrawerTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fleet sections: Fleet" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
              </DrawerTrigger>
            </div>
            <a className="flex items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
              <svg className="h-6 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
                <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
                <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
          <Separator className="data-vertical:self-center h-3.5 hidden lg:block self-center" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <nav className="hidden lg:block min-w-0" aria-label="Fleet sections">
            <ul className="flex gap-1 items-center">
              <li>
                <Button className="bg-muted border border-input/50 gap-2 px-2 shadow-2xs text-foreground text-xs" type="button" tabIndex="0" aria-current="page">
                  <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                  Fleet
                </Button>
              </li>
              <li>
                <Button className="[&:hover>svg]:text-accent-foreground [&>svg]:text-ring border border-transparent gap-2 px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                  Missions
                </Button>
              </li>
              <li>
                <Button className="[&:hover>svg]:text-accent-foreground [&>svg]:text-ring border border-transparent gap-2 px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-radio size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                    <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                    <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                    <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                    <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                  Stations
                </Button>
              </li>
              <li>
                <Button className="[&:hover>svg]:text-accent-foreground [&>svg]:text-ring border border-transparent gap-2 px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-wrench size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  </svg>
                  Maintenance
                </Button>
              </li>
              <li>
                <Button className="[&:hover>svg]:text-accent-foreground [&>svg]:text-ring border border-transparent gap-2 px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File01Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  Reports
                </Button>
              </li>
            </ul>
          </nav>
          <div className="flex gap-0 items-center ms-auto shrink-0" role="toolbar" aria-label="Workspace actions">
            <Button className="text-muted-foreground" type="button" tabIndex="0" aria-label="Search fleet pages">
              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open settings" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <span className="flex ms-1">
              <DropdownMenu>
              <DropdownMenuTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full" type="button" aria-label="Account and status for shadcn: No Status" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                <Avatar size="sm">
                  <AvatarImage className="grayscale" alt="shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </span>
            <span className="ms-2.5">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                <span className="sm:hidden">
                  New
                </span>
                <span className="hidden sm:inline">
                  New Mission
                </span>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </span>
          </div>
        </div>
      </header>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="border-input/50 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--app-topbar-height))] hidden inset-y-0 md:flex top-(--app-topbar-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] gap-4 p-4 scroll-fade-y scroll-py-10" sidebar="content">
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  Fleet Overview
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" aria-current="page" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                          <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                          <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                          <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                          <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                        </svg>
                        <span>
                          Overview
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-map-pin size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>
                          Live Map
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                          <path d="M12 8V4H8"></path>
                          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                        <span>
                          All Robots
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-package size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span>
                          Robot Groups
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                        </svg>
                        <span>
                          Zones
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <path d="M12 11h4"></path>
                          <path d="M12 16h4"></path>
                          <path d="M8 11h.01"></path>
                          <path d="M8 16h.01"></path>
                        </svg>
                        <span>
                          Assignments
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  Fleet Activity
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <span>
                          Live Status
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span>
                          Access Requests
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-circle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleAlertIcon" tabler="IconAlertCircle" hugeicons="Alert02Icon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" x2="12" y1="8" y2="12"></line>
                          <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                        <span>
                          Alerts
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-history size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                          <path d="M12 7v5l4 2"></path>
                        </svg>
                        <span>
                          Event Feed
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  Fleet Settings
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-user-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                          <circle cx="12" cy="8" r="5"></circle>
                          <path d="M20 21a8 8 0 0 0-16 0"></path>
                        </svg>
                        <span>
                          Robot Profiles
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-tag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                          <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                          <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        <span>
                          Tags & Labels
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>
                          Access Rules
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-refresh-cw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                          <path d="M21 3v5h-5"></path>
                          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                          <path d="M8 16H3v5"></path>
                        </svg>
                        <span>
                          Data Sync
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&:hover>svg]:text-sidebar-accent-foreground [&>svg]:text-ring [&[aria-current=page]>svg]:text-foreground aria-[current=page]:ring-1 aria-[current=page]:ring-input/50 aria-[current=page]:ring-inset aria-[current=page]:text-foreground font-medium hover:text-sidebar-accent-foreground text-muted-foreground text-xs" href="#" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-sliders-horizontal size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SlidersHorizontalIcon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                          <path d="M10 5H3"></path>
                          <path d="M12 19H3"></path>
                          <path d="M14 3v4"></path>
                          <path d="M16 17v4"></path>
                          <path d="M21 12h-9"></path>
                          <path d="M21 19h-5"></path>
                          <path d="M21 5h-7"></path>
                          <path d="M8 10v4"></path>
                          <path d="M8 12H3"></path>
                        </svg>
                        <span>
                          Fleet Preferences
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="p-4 pt-0" sidebar="footer">
              <SidebarMenu sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-muted/50 border border-input/50 cn-sidebar-menu-button cn-sidebar-menu-button-size-lg cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex gap-2 group/menu-button h-10 items-center outline-hidden overflow-hidden peer/menu-button px-2 rounded-lg text-xs w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open account menu for shadcn" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                    <Avatar className="after:rounded-md rounded-md size-6" size="sm">
                      <AvatarImage className="rounded-md" alt="shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                    </Avatar>
                    <span className="flex-1 gap-0.5 grid leading-none min-w-0 text-left">
                      <span className="font-medium leading-none text-sidebar-accent-foreground text-xs truncate">
                        shadcn
                      </span>
                      <span className="text-[10px] text-muted-foreground truncate">
                        Author of Shadcn/ui
                      </span>
                    </span>
                    <svg className="lucide lucide-chevrons-up-down size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </div>
        </div>
      </Sidebar>
      <SidebarInset className="h-screen min-h-0 overflow-hidden pt-(--app-topbar-height)">
        <main className="@container flex flex-1 flex-col min-h-0 overflow-y-auto p-4 sm:p-6">
          <div className="flex flex-col gap-6" aria-hidden="true">
            <div className="@4xl:grid-cols-4 @xl:grid-cols-2 gap-6 grid">
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-24">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-24">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-24">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-24">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
            </div>
            <div className="@2xl:grid-cols-2 gap-6 grid">
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-65">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-65">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-65">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
              <Card className="border border-border ring-0 shadow-xs" size="default">
                <CardContent className="flex flex-col gap-6 h-65">
                  <div className="flex flex-col gap-2 h-10 shrink-0">
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </SidebarInset>
    </div>
  )
}
