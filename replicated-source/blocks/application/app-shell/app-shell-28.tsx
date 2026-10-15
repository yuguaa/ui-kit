import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/bases/base/ui/card"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
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
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-background flex flex-col group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <h1 className="sr-only">
        {"Fleet console"}
      </h1>
      <header className="flex gap-4 items-center justify-between px-4 py-3 shrink-0 w-full">
        <div className="flex gap-2 items-center lg:gap-4 min-w-0">
          <Sheet>
          <SheetTrigger className="-ml-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center lg:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open navigation" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-panel-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
          </SheetTrigger>
          </Sheet>
          <svg className="shrink-0 size-6 text-foreground" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
            <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
          </svg>
          <Separator className="-mr-px h-3.5 hidden lg:block self-center!" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <nav className="gap-1 hidden items-center lg:flex" aria-label="Sections">
            <Button className="bg-accent border-0 gap-2 hover:bg-accent px-2 shadow-2xs text-foreground text-xs" type="button" tabIndex="0" aria-current="page">
              <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              {"Fleet"}
            </Button>
            <Button className="[&_svg]:text-ring border-0 gap-2 hover:[&_svg]:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
              <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                <circle cx="6" cy="19" r="3"></circle>
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                <circle cx="18" cy="5" r="3"></circle>
              </svg>
              {"Missions"}
            </Button>
            <Button className="[&_svg]:text-ring border-0 gap-2 hover:[&_svg]:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
              <svg className="lucide lucide-radio-tower size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioTowerIcon" tabler="IconAntenna" hugeicons="AntennaIcon" phosphor="BroadcastIcon" remixicon="RiSignalTowerLine" aria-hidden="true">
                <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                <circle cx="12" cy="9" r="2"></circle>
                <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                <path d="M9.5 18h5"></path>
                <path d="m8 22 4-11 4 11"></path>
              </svg>
              {"Stations"}
            </Button>
            <Button className="[&_svg]:text-ring border-0 gap-2 hover:[&_svg]:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
              <svg className="lucide lucide-wrench size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
              </svg>
              {"Maintenance"}
            </Button>
            <Button className="[&_svg]:text-ring border-0 gap-2 hover:[&_svg]:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
              <svg className="lucide lucide-file-spreadsheet size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileSpreadsheetIcon" tabler="IconFileSpreadsheet" hugeicons="FileSpreadsheetIcon" phosphor="FileXlsIcon" remixicon="RiFileExcel2Line" aria-hidden="true">
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M8 13h2"></path>
                <path d="M14 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 17h2"></path>
              </svg>
              {"Reports"}
            </Button>
          </nav>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-accent border-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2 group/button hover:bg-accent inline-flex items-center justify-center lg:hidden outline-none px-2 select-none shadow-2xs shrink-0 text-foreground text-xs transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Section: Fleet" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
            <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
            <span className="truncate">
              {"Fleet"}
            </span>
            <svg className="lucide lucide-chevron-down size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
        <div className="flex gap-3 items-center shrink-0">
          <div className="-mr-1.5 flex items-center">
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0" aria-label="Search fleet" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </Button>
            <DialogHeader className="sr-only">
              <DialogTitle id="base-ui-_r_9_">
                {"Search Fleet"}
              </DialogTitle>
              <DialogDescription id="base-ui-_r_a_">
                {"Search across every robot, zone and mission."}
              </DialogDescription>
            </DialogHeader>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fleet settings" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
              <svg className="lucide lucide-settings size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
              <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <Avatar className="grayscale" size="sm">
            <AvatarImage alt="Shadcn" src="https://github.com/shadcn.png"></AvatarImage>
          </Avatar>
          <Button className="shadow-xs text-foreground text-xs" type="button" tabIndex="0">
            <span className="lg:hidden">
              {"New"}
            </span>
            <span className="hidden lg:inline">
              {"New Mission"}
            </span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1 min-h-0 pb-4 px-4">
        <div className="after:absolute after:border after:border-ring/30 after:inset-0 after:pointer-events-none after:rounded-xl flex min-w-0 overflow-clip relative rounded-xl w-full">
          <SidebarProvider>
          <Sidebar className="after:absolute after:bg-ring/30 after:inset-y-0 after:right-0 after:w-px bg-accent/20 lg:flex px-4 py-4 w-52">
            <SidebarProvider>
            <SidebarContent className="gap-4 scroll-fade-y scroll-py-10" sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  {"Fleet Overview"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarMenu className="gap-1.5" sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-foreground font-medium text-foreground text-xs" type="button" sidebar="menu-button" size="sm" data-active="" aria-current="page">
                      <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span>
                        {"Overview"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-map size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                        <path d="M15 5.764v15"></path>
                        <path d="M9 3.236v15"></path>
                      </svg>
                      <span>
                        {"Live Map"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      <span>
                        {"All Robots"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-boxes size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BoxesIcon" tabler="IconBoxMultiple" hugeicons="BoxesIcon" phosphor="CubeIcon" remixicon="RiStackLine" aria-hidden="true">
                        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                        <path d="m7 16.5-4.74-2.85"></path>
                        <path d="m7 16.5 5-3"></path>
                        <path d="M7 16.5v5.17"></path>
                        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                        <path d="m17 16.5-5-3"></path>
                        <path d="m17 16.5 4.74-2.85"></path>
                        <path d="M17 16.5v5.17"></path>
                        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                        <path d="M12 8 7.26 5.15"></path>
                        <path d="m12 8 4.74-2.85"></path>
                        <path d="M12 13.5V8"></path>
                      </svg>
                      <span>
                        {"Robot Groups"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-map-pinned size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                        <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                        <circle cx="12" cy="8" r="2"></circle>
                        <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                      </svg>
                      <span>
                        {"Zones"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path>
                      </svg>
                      <span>
                        {"Assignments"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  {"Fleet Activity"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarMenu className="gap-1.5" sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-square-activity size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareActivityIcon" tabler="IconActivityHeartbeat" hugeicons="PulseRectangle01Icon" phosphor="HeartbeatIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                        <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
                      </svg>
                      <span>
                        {"Live Status"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-key-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                      </svg>
                      <span>
                        {"Access Requests"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-circle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleAlertIcon" tabler="IconAlertCircle" hugeicons="Alert02Icon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                      <span>
                        {"Alerts"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                        <path d="M12 8V4H8"></path>
                        <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                        <path d="M2 14h2"></path>
                        <path d="M20 14h2"></path>
                        <path d="M15 13v2"></path>
                        <path d="M9 13v2"></path>
                      </svg>
                      <span>
                        {"Event Feed"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
              <SidebarProvider>
              <SidebarGroup className="gap-0.5 p-0" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="h-auto pb-1 text-ring" sidebar="group-label">
                  {"Fleet Settings"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarMenu className="gap-1.5" sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-contact-round size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ContactRoundIcon" tabler="IconAddressBook" hugeicons="ContactRoundIcon" phosphor="AddressBookIcon" remixicon="RiContactsBook2Line" aria-hidden="true">
                        <path d="M16 2v2"></path>
                        <path d="M17.915 22a6 6 0 0 0-12 0"></path>
                        <path d="M8 2v2"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                      </svg>
                      <span>
                        {"Robot Profiles"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-tags size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagsIcon" tabler="IconTags" hugeicons="TagsIcon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                        <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path>
                        <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path>
                        <circle cx="10.5" cy="6.5" r=".5" fill="currentColor"></circle>
                      </svg>
                      <span>
                        {"Tags & Labels"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span>
                        {"Access Rules"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-square-dashed-mouse-pointer size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareDashedMousePointerIcon" tabler="IconLayersSelected" hugeicons="SquareMousePointerIcon" phosphor="SelectionIcon" remixicon="RiCursorLine" aria-hidden="true">
                        <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                        <path d="M5 3a2 2 0 0 0-2 2"></path>
                        <path d="M19 3a2 2 0 0 1 2 2"></path>
                        <path d="M5 21a2 2 0 0 1-2-2"></path>
                        <path d="M9 3h1"></path>
                        <path d="M9 21h2"></path>
                        <path d="M14 3h1"></path>
                        <path d="M3 9v1"></path>
                        <path d="M21 9v2"></path>
                        <path d="M3 14v1"></path>
                      </svg>
                      <span>
                        {"Data Sync"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton className="[&_svg]:text-ring font-medium hover:[&_svg]:text-foreground text-muted-foreground text-xs" type="button" sidebar="menu-button" size="sm">
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
                        {"Fleet Preferences"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarGroup>
              </SidebarProvider>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="p-0" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 after:absolute after:border after:border-input/50 after:inset-0 after:pointer-events-none after:rounded-lg aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-muted/50 cn-sidebar-menu-button cn-sidebar-menu-button-size-lg cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex gap-2 group/menu-button h-10 items-center outline-hidden overflow-hidden p-2 peer/menu-button relative rounded-lg w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open operator menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                    <Avatar className="after:rounded-md rounded-md" size="sm">
                      <AvatarImage className="rounded-md" alt="Shadcn" src="https://github.com/shadcn.png"></AvatarImage>
                    </Avatar>
                    <span className="flex flex-1 flex-col gap-0.5 min-w-0 text-left">
                      <span className="font-medium leading-none text-accent-foreground text-xs truncate">
                        {"Shadcn"}
                      </span>
                      <span className="leading-none text-[10px] text-muted-foreground truncate">
                        {"Author of Shadcn/ui"}
                      </span>
                    </span>
                    <svg className="lucide lucide-chevrons-up-down size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
                </SidebarProvider>
              </SidebarMenu>
              </SidebarProvider>
            </SidebarFooter>
          </Sidebar>
          </SidebarProvider>
          <SidebarInset className="bg-muted/10 min-w-0">
            <div className="@container flex flex-1 flex-col gap-6 min-h-0 overflow-y-auto p-6">
              <div className="@2xl:grid-cols-4 @lg:grid-cols-2 gap-6 grid shrink-0">
                <Card className="border border-border h-40 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardFooter className="h-12 mt-auto py-0"></CardFooter>
                </Card>
                <Card className="border border-border h-40 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardFooter className="h-12 mt-auto py-0"></CardFooter>
                </Card>
                <Card className="border border-border h-40 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardFooter className="h-12 mt-auto py-0"></CardFooter>
                </Card>
                <Card className="border border-border h-40 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardFooter className="h-12 mt-auto py-0"></CardFooter>
                </Card>
              </div>
              <div className="@2xl:flex-1 @2xl:grid-cols-4 @2xl:min-h-0 @lg:grid-cols-2 gap-6 grid">
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
              </div>
              <div className="@2xl:flex-1 @2xl:grid-cols-2 @2xl:min-h-0 gap-6 grid">
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="@2xl:h-auto border border-border h-73 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </div>
    </SidebarProvider>
  )
}
