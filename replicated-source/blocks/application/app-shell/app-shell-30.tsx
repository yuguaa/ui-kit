import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
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
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh text-foreground w-full">
      <div className="flex flex-1 flex-col min-h-0 overflow-y-auto">
        <div className="flex flex-col min-h-full w-full">
          <header className="flex gap-3 items-center justify-between px-4 py-3 shrink-0 sm:px-6 sm:py-4 w-full">
            <div className="flex gap-2 items-center lg:gap-4 min-w-0">
              <svg className="shrink-0 size-7 sm:hidden text-foreground" viewBox="0 0 28.097 28" fill="none" aria-label="NeUI" role="img">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M18.7313 1.07693H9.36567C4.78998 1.07693 1.08066 4.77344 1.08066 9.33333V18.6667C1.08066 23.2265 4.78998 26.9231 9.36567 26.9231H18.7313C23.307 26.9231 27.0164 23.2265 27.0164 18.6667V9.33333C27.0164 4.77344 23.307 1.07693 18.7313 1.07693ZM9.36567 0C4.19315 0 0 4.17867 0 9.33333V18.6667C0 23.8213 4.19315 28 9.36567 28H18.7313C23.9038 28 28.097 23.8213 28.097 18.6667V9.33333C28.097 4.17867 23.9038 0 18.7313 0H9.36567Z" fill="currentColor"></path>
                <path d="M19.7061 9.63088C20.4351 9.63088 21.0261 9.04194 21.0261 8.31544C21.0261 7.58894 20.4351 7 19.7061 7C18.9771 7 18.3861 7.58894 18.3861 8.31544C18.3861 9.04194 18.9771 9.63088 19.7061 9.63088Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.07113 15.9261V8.31543C7.07113 7.58894 7.66211 7 8.3911 7C9.12014 7 9.71111 7.58894 9.71111 8.31543V15.9261C9.71111 17.2754 10.8086 18.3691 12.1625 18.3691H15.934C17.2878 18.3691 18.3854 17.2754 18.3854 15.9261V12.2053C18.3854 11.4789 18.9763 10.89 19.7054 10.89C20.4343 10.89 21.0253 11.4789 21.0253 12.2053V15.9261C21.0253 18.7284 18.7459 21 15.934 21H12.1625C9.35061 21 7.07113 18.7284 7.07113 15.9261Z" fill="currentColor"></path>
              </svg>
              <svg className="h-7 max-sm:hidden shrink-0 text-foreground w-auto" viewBox="0 0 74.9254 28" fill="none" aria-label="NeUI" role="img">
                <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M18.7313 1.07693H9.36567C4.78998 1.07693 1.08066 4.77344 1.08066 9.33333V18.6667C1.08066 23.2265 4.78998 26.9231 9.36567 26.9231H18.7313C23.307 26.9231 27.0164 23.2265 27.0164 18.6667V9.33333C27.0164 4.77344 23.307 1.07693 18.7313 1.07693ZM9.36567 0C4.19315 0 0 4.17867 0 9.33333V18.6667C0 23.8213 4.19315 28 9.36567 28H18.7313C23.9038 28 28.097 23.8213 28.097 18.6667V9.33333C28.097 4.17867 23.9038 0 18.7313 0H9.36567Z" fill="currentColor"></path>
                <path d="M19.7061 9.63088C20.4351 9.63088 21.0261 9.04194 21.0261 8.31544C21.0261 7.58894 20.4351 7 19.7061 7C18.9771 7 18.3861 7.58894 18.3861 8.31544C18.3861 9.04194 18.9771 9.63088 19.7061 9.63088Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.07113 15.9261V8.31543C7.07113 7.58894 7.66211 7 8.3911 7C9.12014 7 9.71111 7.58894 9.71111 8.31543V15.9261C9.71111 17.2754 10.8086 18.3691 12.1625 18.3691H15.934C17.2878 18.3691 18.3854 17.2754 18.3854 15.9261V12.2053C18.3854 11.4789 18.9763 10.89 19.7054 10.89C20.4343 10.89 21.0253 11.4789 21.0253 12.2053V15.9261C21.0253 18.7284 18.7459 21 15.934 21H12.1625C9.35061 21 7.07113 18.7284 7.07113 15.9261Z" fill="currentColor"></path>
                <path d="M74.9254 8.9066V19.0884H72.7727V8.9066H74.9254Z" fill="currentColor"></path>
                <path d="M66.0488 8.9066H68.2015V15.5188C68.2015 16.2612 68.0242 16.9109 67.6696 17.4677C67.3182 18.0245 66.8261 18.4587 66.193 18.7702C65.56 19.0785 64.8225 19.2326 63.9806 19.2326C63.1355 19.2326 62.3964 19.0785 61.7633 18.7702C61.1303 18.4587 60.6381 18.0245 60.2868 17.4677C59.9354 16.9109 59.7598 16.2612 59.7598 15.5188V8.9066H61.9125V15.3349C61.9125 15.7227 61.997 16.0674 62.166 16.369C62.3384 16.6706 62.5803 16.9076 62.8919 17.0799C63.2034 17.2522 63.5663 17.3384 63.9806 17.3384C64.3983 17.3384 64.7612 17.2522 65.0694 17.0799C65.381 16.9076 65.6213 16.6706 65.7903 16.369C65.9627 16.0674 66.0488 15.7227 66.0488 15.3349V8.9066Z" fill="currentColor"></path>
                <path d="M48.3875 19.0884V8.9066H55.2483V10.6815H50.5402V13.1076H54.8953V14.8825H50.5402V17.3136H55.2682V19.0884H48.3875Z" fill="currentColor"></path>
                <path d="M36.4 19.0884V8.9066H40.417C41.186 8.9066 41.8422 9.04415 42.3858 9.31924C42.9327 9.59102 43.3486 9.97715 43.6337 10.4776C43.922 10.9748 44.0662 11.5598 44.0662 12.2326C44.0662 12.9087 43.9204 13.4904 43.6287 13.9776C43.337 14.4615 42.9144 14.8327 42.3609 15.0913C41.8107 15.3498 41.1446 15.479 40.3624 15.479H37.6727V13.7489H40.0143C40.4253 13.7489 40.7667 13.6926 41.0385 13.5799C41.3103 13.4672 41.5124 13.2982 41.645 13.0728C41.7809 12.8474 41.8489 12.5674 41.8489 12.2326C41.8489 11.8945 41.7809 11.6095 41.645 11.3775C41.5124 11.1455 41.3086 10.9698 41.0335 10.8505C40.7617 10.7279 40.4187 10.6665 40.0044 10.6665H38.5527V19.0884H36.4ZM41.8986 14.4549L44.4291 19.0884H42.0527L39.5768 14.4549H41.8986Z" fill="currentColor"></path>
              </svg>
              <Separator className="data-vertical:self-center h-3.5 max-lg:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <nav className="gap-1 hidden items-center lg:flex" aria-label="Sections">
                <Button className="bg-accent dark:bg-input/50 gap-2 px-2 text-foreground text-xs" type="button" tabIndex="0" aria-current="page">
                  <svg className="lucide lucide-layout-grid size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                    <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                  </svg>
                  Overview
                </Button>
                <Button className="[&_svg]:text-ring [&_svg]:transition-colors gap-2 hover:[&_svg]:text-foreground hover:bg-accent/50 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
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
                <Button className="[&_svg]:text-ring [&_svg]:transition-colors gap-2 hover:[&_svg]:text-foreground hover:bg-accent/50 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                  Missions
                </Button>
                <Button className="[&_svg]:text-ring [&_svg]:transition-colors gap-2 hover:[&_svg]:text-foreground hover:bg-accent/50 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-radio-tower size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioTowerIcon" tabler="IconAntenna" hugeicons="AntennaIcon" phosphor="BroadcastIcon" remixicon="RiSignalTowerLine" aria-hidden="true">
                    <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                    <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                    <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                    <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                    <path d="M9.5 18h5"></path>
                    <path d="m8 22 4-11 4 11"></path>
                  </svg>
                  Stations
                </Button>
                <Button className="[&_svg]:text-ring [&_svg]:transition-colors gap-2 hover:[&_svg]:text-foreground hover:bg-accent/50 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-wrench size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WrenchIcon" tabler="IconTool" hugeicons="Wrench01Icon" phosphor="WrenchIcon" remixicon="RiToolsLine" aria-hidden="true">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  </svg>
                  Maintenance
                </Button>
                <Button className="[&_svg]:text-ring [&_svg]:transition-colors gap-2 hover:[&_svg]:text-foreground hover:bg-accent/50 hover:text-foreground px-2 text-muted-foreground text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-file-spreadsheet size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileSpreadsheetIcon" tabler="IconFileSpreadsheet" hugeicons="FileSpreadsheetIcon" phosphor="FileXlsIcon" remixicon="RiFileExcel2Line" aria-hidden="true">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M8 13h2"></path>
                    <path d="M14 13h2"></path>
                    <path d="M8 17h2"></path>
                    <path d="M14 17h2"></path>
                  </svg>
                  Reports
                </Button>
              </nav>
              <div className="flex gap-0.5 items-center lg:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Sections" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                  <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workspace views" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                  <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex gap-3 items-center shrink-0">
              <Button className="-mx-1.5 text-muted-foreground" type="button" tabIndex="0" aria-label="Search" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </Button>
              <DialogHeader className="sr-only">
                <DialogTitle id="base-ui-_r_c_">
                  Search Fleet
                </DialogTitle>
                <DialogDescription id="base-ui-_r_d_">
                  Search across every robot, zone and mission.
                </DialogDescription>
              </DialogHeader>
              <DropdownMenu>
              <DropdownMenuTrigger className="-mx-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:hidden outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open settings" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Sheet>
              <SheetTrigger className="-mx-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_k_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
              </SheetTrigger>
              </Sheet>
              <DropdownMenu>
              <DropdownMenuTrigger className="-mx-0.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Account menu" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                <Avatar className="size-6" size="default">
                  <AvatarFallback className="text-[10px]">
                    SC
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button className="shadow-xs text-xs" type="button" tabIndex="0">
                <span className="sm:hidden">
                  Onboard
                </span>
                <span className="max-sm:hidden">
                  Onboard Robot
                </span>
              </Button>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 inset-ring inset-ring-ring/20 min-h-0 pt-2.5 rounded-xl sm:gap-6 sm:pt-6">
            <div className="flex flex-col gap-4 px-4 sm:flex-row sm:gap-2 sm:items-center sm:px-6">
              <div className="flex flex-1 flex-col gap-4 items-start justify-center min-w-0 sm:gap-1.5">
                <div className="flex flex-wrap gap-x-2.5 gap-y-4 items-center sm:gap-y-1.5">
                  <h1 className="font-medium text-xl">
                    Mission Control Center
                  </h1>
                  <Separator className="data-vertical:self-center h-3 hidden sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                  <div className="flex gap-1.5 items-center">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-background disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                      342 Robots
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-background disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                      58 Missions
                    </Badge>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-background disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full text-[0.625rem] transition-shadow">
                      12 Stations
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs">
                  Track robot status, capacity, assignments, health, and activity across your entire operating fleet.
                </p>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button className="text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" data-icon="inline-start" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                  New Mission
                </Button>
                <Button className="shadow-xs text-xs" type="button" tabIndex="0">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                  Open Chat
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Display options" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
            <Tabs className="flex-1 flex-col gap-4 sm:gap-6" data-orientation="horizontal" activationDirection="none">
              <div className="flex max-md:hidden px-4 sm:px-6">
                <TabsList className="bg-input/30 h-7 inset-ring inset-ring-ring/20 p-0 shrink-0" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Workspace views">
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_v_">
                    Summary
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_10_" compositeItemActive="" aria-controls="base-ui-_r_18_">
                    Delivery Center
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_11_">
                    Performance
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_12_">
                    Coverage
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_13_">
                    Issues
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_14_">
                    Capacity
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_15_">
                    Trends
                  </TabsTrigger>
                  <TabsTrigger className="border-0 dark:data-active:bg-background dark:data-active:inset-ring-ring/30 data-active:inset-ring data-active:inset-ring-ring/50 data-active:shadow-xs flex-none h-full px-2.5 py-0.5 text-muted-foreground text-xs" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_16_">
                    Access
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="bg-background flex flex-1 flex-col inset-ring inset-ring-ring/20 overflow-clip px-4 py-4 rounded-t-xl sm:px-6 sm:py-6">
                <TabsContent className="flex" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_18_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_10_">
                  <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-start lg:min-h-0 sm:gap-6 w-full">
                    <div className="gap-4 grid grid-cols-2 lg:flex lg:flex-col lg:min-h-0 lg:self-stretch lg:w-[330px] shrink-0 sm:gap-6 w-full">
                      <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[100px] lg:h-[144px] lg:min-h-0 py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                        <CardContent className="bg-card border-b border-border flex flex-col gap-4 h-[60px] justify-center lg:h-[104px] p-0 rounded-b-xl shrink-0">
                          <div className="flex gap-2.5 items-center px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-7"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-8"></Skeleton>
                          </div>
                          <div className="gap-1.5 hidden items-center lg:flex px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-26"></Skeleton>
                          </div>
                        </CardContent>
                        <div className="flex flex-1 items-center px-(--card-spacing)">
                          <div className="-space-x-2 flex">
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                          </div>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-sm:hidden ml-auto shrink-0 w-28"></Skeleton>
                        </div>
                      </Card>
                      <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[100px] lg:h-[148px] lg:min-h-0 py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                        <CardContent className="bg-card border-b border-border flex flex-col gap-4 h-[60px] justify-center lg:h-[108px] p-0 rounded-b-xl shrink-0">
                          <div className="flex gap-2.5 items-center px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-7"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-8"></Skeleton>
                          </div>
                          <div className="gap-1.5 hidden items-center lg:flex px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-26"></Skeleton>
                          </div>
                        </CardContent>
                        <div className="flex flex-1 items-center px-(--card-spacing)">
                          <div className="-space-x-2 flex">
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                          </div>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-sm:hidden ml-auto shrink-0 w-28"></Skeleton>
                        </div>
                      </Card>
                      <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[100px] lg:h-[148px] lg:min-h-0 py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                        <CardContent className="bg-card border-b border-border flex flex-col gap-4 h-[60px] justify-center lg:h-[108px] p-0 rounded-b-xl shrink-0">
                          <div className="flex gap-2.5 items-center px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-7"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-8"></Skeleton>
                          </div>
                          <div className="gap-1.5 hidden items-center lg:flex px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-26"></Skeleton>
                          </div>
                        </CardContent>
                        <div className="flex flex-1 items-center px-(--card-spacing)">
                          <div className="-space-x-2 flex">
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                          </div>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-sm:hidden ml-auto shrink-0 w-28"></Skeleton>
                        </div>
                      </Card>
                      <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 gap-0 h-[100px] lg:h-[148px] lg:min-h-0 py-0 relative ring-0 shadow-xs" size="default" aria-hidden="true">
                        <CardContent className="bg-card border-b border-border flex flex-col gap-4 h-[60px] justify-center lg:h-[108px] p-0 rounded-b-xl shrink-0">
                          <div className="flex gap-2.5 items-center px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-7"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-8"></Skeleton>
                          </div>
                          <div className="gap-1.5 hidden items-center lg:flex px-(--card-spacing)">
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-26"></Skeleton>
                          </div>
                        </CardContent>
                        <div className="flex flex-1 items-center px-(--card-spacing)">
                          <div className="-space-x-2 flex">
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ring-2 ring-card rounded-full shrink-0 size-5"></Skeleton>
                          </div>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-sm:hidden ml-auto shrink-0 w-28"></Skeleton>
                        </div>
                      </Card>
                    </div>
                    <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-border after:pointer-events-none after:rounded-xl bg-muted/50 dark:bg-card/50 flex-1 gap-0 lg:min-h-0 lg:self-stretch min-h-screen min-w-0 py-0 relative ring-0 shadow-xs w-full" size="default" aria-hidden="true">
                      <CardHeader className="flex flex-row h-11 items-center shrink-0">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-40"></Skeleton>
                      </CardHeader>
                      <CardContent className="bg-card border-border border-t flex flex-1 flex-col gap-3 min-h-0 rounded-t-xl">
                        <Card className="gap-3 h-[106px] justify-start ring-0 shadow-none shrink-0" size="sm">
                          <CardContent className="flex gap-4 items-center">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-40"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-7"></Skeleton>
                          </CardContent>
                        </Card>
                        <Card className="gap-3 h-[312px] justify-start ring-0 shadow-none shrink-0" size="sm">
                          <CardContent className="flex gap-4 items-center">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-40"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-7"></Skeleton>
                          </CardContent>
                          <CardContent className="flex-1 min-h-0">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-lg shrink-0 size-full"></Skeleton>
                          </CardContent>
                        </Card>
                        <Card className="gap-3 h-[106px] justify-start ring-0 shadow-none shrink-0" size="sm">
                          <CardContent className="flex gap-4 items-center">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-40"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-7"></Skeleton>
                          </CardContent>
                        </Card>
                        <Card className="gap-3 h-[106px] justify-start ring-0 shadow-none shrink-0" size="sm">
                          <CardContent className="flex gap-4 items-center">
                            <Skeleton className="bg-input/50 dark:bg-input/30 rounded-full shrink-0 size-3.5"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-40"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-lg:hidden shrink-0 w-20"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 ml-auto rounded-lg shrink-0 size-7"></Skeleton>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
