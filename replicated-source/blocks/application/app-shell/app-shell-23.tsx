import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarFallback,
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
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  SidebarGroupLabel,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--sidebar-border:var(--color-border)] bg-background flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh overflow-hidden w-full" style={{"--sidebar-width": "256px", "--sidebar-width-icon": "3rem", "--app-topbar-height": "52px"}}>
      <header className="bg-muted/50 border-b fixed flex h-(--app-topbar-height) inset-x-0 items-center pe-[var(--removed-body-scroll-bar-size,0px)] text-foreground top-0 z-30">
        <div className="flex gap-4 items-center px-4 sm:px-6 w-full">
          <SidebarProvider>
          <SidebarTrigger className="-me-2 -ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
            <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
              <rect width={18} height={18} x={3} y={3} rx={2}></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">
              {"Toggle Sidebar"}
            </span>
          </SidebarTrigger>
          </SidebarProvider>
          <a className="flex gap-1.75 items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
            <svg className="h-6 w-auto" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
              <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
              <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
            </svg>
            <svg className="h-6 hidden sm:block w-auto" viewBox="31.2 0 33.022 24" fill="none" aria-hidden="true">
              <path d="M64.2217 7.63423V16.3615H62.3766V7.63423H64.2217Z" fill="currentColor"></path>
              <path d="M56.6133 7.63423H58.4585V13.3018C58.4585 13.9382 58.3065 14.495 58.0025 14.9723C57.7014 15.4496 57.2795 15.8217 56.7369 16.0888C56.1943 16.353 55.5622 16.4851 54.8406 16.4851C54.1161 16.4851 53.4826 16.353 52.94 16.0888C52.3974 15.8217 51.9755 15.4496 51.6744 14.9723C51.3732 14.495 51.2227 13.9382 51.2227 13.3018V7.63423H53.0678V13.1442C53.0678 13.4766 53.1403 13.772 53.2852 14.0305C53.4329 14.2891 53.6403 14.4922 53.9073 14.6399C54.1744 14.7876 54.4854 14.8615 54.8406 14.8615C55.1985 14.8615 55.5096 14.7876 55.7738 14.6399C56.0408 14.4922 56.2468 14.2891 56.3917 14.0305C56.5394 13.772 56.6133 13.4766 56.6133 13.1442V7.63423Z" fill="currentColor"></path>
              <path d="M41.475 16.3615V7.63423H47.3557V9.15554H43.3202V11.2351H47.0531V12.7564H43.3202V14.8402H47.3727V16.3615H41.475Z" fill="currentColor"></path>
              <path d="M31.2 16.3615V7.63423H34.6432C35.3023 7.63423 35.8648 7.75213 36.3307 7.98792C36.7994 8.22088 37.156 8.55184 37.4003 8.98082C37.6474 9.40696 37.771 9.90838 37.771 10.4851C37.771 11.0646 37.646 11.5632 37.396 11.9808C37.146 12.3956 36.7838 12.7138 36.3094 12.9354C35.8378 13.157 35.2668 13.2678 34.5963 13.2678H32.2909V11.7848H34.298C34.6503 11.7848 34.9429 11.7365 35.1759 11.6399C35.4088 11.5433 35.5821 11.3984 35.6957 11.2053C35.8122 11.0121 35.8705 10.772 35.8705 10.4851C35.8705 10.1953 35.8122 9.95099 35.6957 9.75213C35.5821 9.55326 35.4074 9.4027 35.1716 9.30042C34.9386 9.19531 34.6446 9.14275 34.2895 9.14275H33.0452V16.3615H31.2ZM35.9131 12.3899L38.0821 16.3615H36.0452L33.923 12.3899H35.9131Z" fill="currentColor"></path>
            </svg>
          </a>
          <Separator className="data-vertical:self-center h-3.5 hidden md:block self-center" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Breadcrumb className="-ms-1 flex-1 hidden md:block min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap gap-1">
              <BreadcrumbItem className="min-w-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center min-w-0 outline-none px-1 select-none shrink text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Switch team" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                  <span className="truncate">
                    {"Operations Team"}
                  </span>
                  <svg className="lucide lucide-chevrons-up-down size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="shrink-0 text-foreground/10 text-xs" role="presentation" aria-hidden="true">
                {"/"}
              </BreadcrumbSeparator>
              <BreadcrumbItem className="min-w-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center min-w-0 outline-none px-1 select-none shrink text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Switch project" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                  <span className="truncate">
                    {"Fleet Control"}
                  </span>
                  <svg className="lucide lucide-chevrons-up-down size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-0 items-center ms-auto shrink-0" role="toolbar" aria-label="Workspace actions">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Apps" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
              <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                <rect width={7} height={7} x={3} y={14} rx={1}></rect>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open settings" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx={12} cy={12} r={3}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_l_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-1 outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open account menu" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
              <Avatar className="size-6" size="sm">
                <AvatarFallback className="text-[10px]">
                  {"CN"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <span className="ms-2.5">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                <span className="sm:hidden">
                  {"New"}
                </span>
                <span className="hidden sm:inline">
                  {"New Mission"}
                </span>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </span>
          </div>
        </div>
      </header>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--app-topbar-height))] hidden inset-y-0 md:flex top-(--app-topbar-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-1 md:hidden pb-0 pt-4 px-4" sidebar="header">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button h-8 inline-flex items-center justify-between min-w-0 outline-none px-2 select-none shrink text-foreground text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Switch team" aria-haspopup="menu" id="base-ui-_r_13_" aria-expanded="false">
                <span className="truncate">
                  {"Operations Team"}
                </span>
                <svg className="lucide lucide-chevrons-up-down size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button h-8 inline-flex items-center justify-between min-w-0 outline-none px-2 select-none shrink text-foreground text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Switch project" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                <span className="truncate">
                  {"Fleet Control"}
                </span>
                <svg className="lucide lucide-chevrons-up-down size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] gap-0 px-4 py-4 scroll-fade-y scroll-py-10 sm:px-6 sm:py-6" sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:text-ring font-medium gap-2 px-0 text-foreground text-sm" sidebar="group-label">
                  <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                  <span>
                    {"Robot Fleet"}
                  </span>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuSub className="border-l-0 gap-0.5 mx-0 pl-4 pr-0 py-0" sidebar="menu-sub">
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Overview"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Robots"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" data-active="" href="#">
                            <span>
                              {"Stations"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Fleet Map"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Device Groups"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Robot Health"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup className="p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:text-ring font-medium gap-2 px-0 text-foreground text-sm" sidebar="group-label">
                  <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                    <circle cx={6} cy={19} r={3}></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx={18} cy={5} r={3}></circle>
                  </svg>
                  <span>
                    {"Mission Control"}
                  </span>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuSub className="border-l-0 gap-0.5 mx-0 pl-4 pr-0 py-0" sidebar="menu-sub">
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Missions"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Requests"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Schedules"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Issue Reports"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup className="p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:text-ring font-medium gap-2 px-0 text-foreground text-sm" sidebar="group-label">
                  <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                    <rect width={8} height={8} x={3} y={3} rx={2}></rect>
                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                    <rect width={8} height={8} x={13} y={13} rx={2}></rect>
                  </svg>
                  <span>
                    {"System Tools"}
                  </span>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuSub className="border-l-0 gap-0.5 mx-0 pl-4 pr-0 py-0" sidebar="menu-sub">
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Integrations"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Automations"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Team Access"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"Activity Logs"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="border border-transparent data-active:border-input/40 data-active:text-foreground font-medium h-7.5 hover:text-sidebar-accent-foreground text-muted-foreground" sidebar="menu-sub-button" size="sm" href="#">
                            <span>
                              {"API Keys"}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroupContent>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="pb-4 px-4 sm:pb-6 sm:px-6" sidebar="footer">
              <Card className="border border-border gap-0 overflow-hidden relative ring-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]" size="default">
                <div className="absolute bg-[length:10px_10px] bg-[url(/assets/card-grid.svg?v=2)] bg-repeat dark:invert inset-0" aria-hidden="true"></div>
                <CardContent className="flex flex-col gap-3.5 items-center relative text-center">
                  <div className="flex flex-col gap-2.5 items-center">
                    <IconTile className="[--icon-tile-icon-size:--spacing(5)] [--icon-tile-size:--spacing(11)] after:border-transparent bg-primary/5 border-0 dark:after:border-border text-foreground" variant="frame" size="default">
                      <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                    </IconTile>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-sm">
                        {"Integrations"}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {"Connect more tools to your fleet on Pro"}
                      </p>
                    </div>
                  </div>
                  <Button className="text-xs" type="button" tabIndex={0}>
                    {"Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="h-screen min-h-0 overflow-hidden pt-(--app-topbar-height)">
        <main className="@container bg-muted/50 flex flex-1 flex-col gap-6 min-h-0 overflow-y-auto p-4 sm:p-6">
          <div className="@2xl:grid-cols-2 @4xl:grid-cols-3 gap-6 grid" aria-hidden="true">
            <Card className="border border-border ring-0 shadow-xs" size="default">
              <CardContent className="flex flex-col gap-6 h-32">
                <div className="flex flex-col gap-2 h-10 shrink-0">
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </div>
                <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
              </CardContent>
            </Card>
            <Card className="border border-border ring-0 shadow-xs" size="default">
              <CardContent className="flex flex-col gap-6 h-32">
                <div className="flex flex-col gap-2 h-10 shrink-0">
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                </div>
                <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
              </CardContent>
            </Card>
            <Card className="border border-border ring-0 shadow-xs" size="default">
              <CardContent className="flex flex-col gap-6 h-32">
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
        </main>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
