import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/registry-neui/bases/radix/neui/sortable"
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import { DrawerTrigger } from "@/registry/bases/base/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
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
  Tabs,
  TabsContent,
  TabsList,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import {
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="bg-muted/20 flex flex-col group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "18rem", "--sidebar-width-icon": "3rem"}}>
      <header className="flex gap-2 h-13 items-center justify-between px-4 shrink-0">
        <div className="flex gap-3 items-center lg:w-52 min-w-0">
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
            <DrawerTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Sections: Security" baseUiClickTrigger="" id="base-ui-_r_2_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </DrawerTrigger>
          </div>
          <a className="flex items-center shrink-0 text-foreground" href="#" aria-label="NeUI home">
            <svg className="size-6" viewBox="0 0 24.084 24" fill="none" aria-hidden="true">
              <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16.0554 0.92308H8.02772C4.1057 0.92308 0.926278 4.09152 0.926278 8V16C0.926278 19.9085 4.1057 23.0769 8.02772 23.0769H16.0554C19.9774 23.0769 23.1569 19.9085 23.1569 16V8C23.1569 4.09152 19.9774 0.92308 16.0554 0.92308ZM8.02772 0C3.59413 0 0 3.58172 0 8V16C0 20.4183 3.59413 24 8.02772 24H16.0554C20.489 24 24.0832 20.4183 24.0832 16V8C24.0832 3.58172 20.489 0 16.0554 0H8.02772Z" fill="currentColor"></path>
              <path d="M16.8909 8.25504C17.5158 8.25504 18.0223 7.75023 18.0223 7.12752C18.0223 6.50481 17.5158 6 16.8909 6C16.266 6 15.7595 6.50481 15.7595 7.12752C15.7595 7.75023 16.266 8.25504 16.8909 8.25504Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.06097 13.651V7.12751C6.06097 6.50481 6.56752 6 7.19237 6C7.81726 6 8.32381 6.50481 8.32381 7.12751V13.651C8.32381 14.8074 9.26453 15.745 10.425 15.745H13.6577C14.8181 15.745 15.7589 14.8074 15.7589 13.651V10.4617C15.7589 9.83905 16.2654 9.33425 16.8903 9.33425C17.5151 9.33425 18.0217 9.83905 18.0217 10.4617V13.651C18.0217 16.0529 16.0679 18 13.6577 18H10.425C8.01481 18 6.06097 16.0529 6.06097 13.651Z" fill="currentColor"></path>
            </svg>
          </a>
          <Separator className="bg-input data-vertical:self-center h-3.5 max-sm:hidden" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center max-sm:hidden outline-none pl-2.5 pr-1.5 select-none shadow-2xs shrink-0 text-xs transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workspace: All Workspaces" aria-haspopup="menu" id="base-ui-_r_6_" aria-expanded="false">
            All Workspaces
            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
        <nav className="hidden lg:block min-w-0" aria-label="Console sections">
          <ul className="flex gap-1 items-center">
            <li>
              <Button className="bg-muted border-0 gap-2 px-2 shadow-2xs text-foreground text-xs" href="#" aria-current="page" role="button" tabIndex="0">
                <svg className="lucide lucide-shield size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                Security
              </Button>
            </li>
            <li>
              <Button className="[&>svg]:text-ring border-0 gap-2 px-2 text-muted-foreground text-xs" href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-bell-ring size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellRingIcon" tabler="IconBellRinging2" hugeicons="Notification03Icon" phosphor="BellRingingIcon" remixicon="RiNotification4Line" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                </svg>
                Incidents
              </Button>
            </li>
            <li>
              <Button className="[&>svg]:text-ring border-0 gap-2 px-2 text-muted-foreground text-xs" href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
                Threats
              </Button>
            </li>
            <li>
              <Button className="[&>svg]:text-ring border-0 gap-2 px-2 text-muted-foreground text-xs" href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                Assets
              </Button>
            </li>
            <li>
              <Button className="[&>svg]:text-ring border-0 gap-2 px-2 text-muted-foreground text-xs" href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
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
        <div className="flex gap-3 items-center shrink-0">
          <div className="-mr-1.5 flex items-center">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search scopes" aria-haspopup="dialog" aria-expanded="false" id="base-ui-_r_a_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <DialogHeader className="sr-only">
              <DialogTitle id="base-ui-_r_c_">
                Search Scopes
              </DialogTitle>
              <DialogDescription id="base-ui-_r_d_">
                Search across every scope, section and item.
              </DialogDescription>
            </DialogHeader>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Console settings" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications, 5 unread" baseUiClickTrigger="" id="base-ui-_r_k_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
          </div>
          <DropdownMenu>
          <DropdownMenuTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full" type="button" aria-label="Account and status for Shadcn: No Status" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
            <Avatar size="sm">
              <AvatarImage className="grayscale" alt="Shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
            </Avatar>
          </DropdownMenuTrigger>
          </DropdownMenu>
          <Button className="max-md:aspect-square max-md:justify-center max-md:px-0 md:pl-1.5 md:pr-2.5 shadow-xs text-xs" type="button" tabIndex="0" aria-label="Run scan">
            <svg className="lucide lucide-scan-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" data-icon="inline-start" aria-hidden="true">
              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
              <circle cx="12" cy="12" r="3"></circle>
              <path d="m16 16-1.9-1.9"></path>
            </svg>
            <span className="max-md:hidden">
              Run Scan
            </span>
          </Button>
        </div>
      </header>
      <Card className="after:absolute after:border after:border-border after:inset-0 after:pointer-events-none after:rounded-xl flex-1 flex-row gap-0 min-h-0 mx-4 py-0 relative ring-0" size="default">
        <Sidebar className="border-r">
          <div className="bg-background bg-linear-to-b flex flex-1 flex-col from-accent/10 min-h-0 to-accent/10">
            <SidebarHeader className="p-4 pb-0 sm:hidden" sidebar="header">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Workspace: All Workspaces" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                All Workspaces
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarHeader>
            <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
              <SidebarHeader className="flex-row gap-2.5 items-center p-4 pb-0" sidebar="header">
                <TabsList className="bg-input/30 flex-1 h-7 inset-ring inset-ring-ring/20 justify-start p-0 rounded-md" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_10_" compositeItemActive="" aria-label="Endpoints" baseUiTooltipTrigger="" aria-controls="base-ui-_r_1m_">
                    <svg className="lucide lucide-box size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BoxIcon" tabler="IconBox" hugeicons="PackageIcon" phosphor="CubeIcon" remixicon="RiBox3Line" aria-hidden="true">
                      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                      <path d="m3.3 7 8.7 5 8.7-5"></path>
                      <path d="M12 22V12"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_13_" aria-label="Code" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-file-braces-corner size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileJson2Icon" tabler="IconJson" hugeicons="FileBracesCornerIcon" phosphor="FileJsIcon" remixicon="RiBracesLine" aria-hidden="true">
                      <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"></path>
                      <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_16_" aria-label="Network" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-network size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="NetworkIcon" tabler="IconSitemap" hugeicons="HierarchySquare01Icon" phosphor="TreeStructureIcon" remixicon="RiOrganizationChart" aria-hidden="true">
                      <rect x="16" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="2" y="16" width="6" height="6" rx="1"></rect>
                      <rect x="9" y="2" width="6" height="6" rx="1"></rect>
                      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
                      <path d="M12 12V8"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_19_" aria-label="Perimeter" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-globe size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1c_" aria-label="Platforms" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 after:absolute after:bg-foreground after:opacity-0 after:transition-opacity aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-tabs-trigger dark:data-active:bg-input/30 dark:data-active:border-ring/30 dark:data-active:text-foreground dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:hover:text-foreground dark:text-ring data-active:bg-background data-active:border-ring/50 data-active:shadow-xs data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-none focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:after:opacity-100 group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-horizontal/tabs:after:inset-x-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:w-0.5 group-data-vertical/tabs:justify-start group-data-vertical/tabs:w-full hover:text-foreground inline-flex items-center justify-center p-0 relative size-7 text-ring transition-all whitespace-nowrap" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1f_" aria-label="Compliance" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-chart-pie size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PieChartIcon" tabler="IconChartPie" hugeicons="PieChartIcon" phosphor="ChartPieIcon" remixicon="RiPieChartLine" aria-hidden="true">
                      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </TabsList>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-2xs shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add scope" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </SidebarHeader>
              <SidebarContent className="[--scroll-fade-reveal:--spacing(8)] pl-2 pr-4 pt-4 scroll-fade-y scroll-py-10" sidebar="content">
                <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_1m_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_10_">
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarGroupLabel className="h-5 pb-1 px-2 text-ring" sidebar="group-label">
                      Security Scope
                    </SidebarGroupLabel>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarMenu sidebar="menu">
                        <SidebarMenuItem sidebar="menu-item">
                          <Collapsible data-open="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-0 px-2 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_1n_" aria-expanded="true">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                <line x1="8" x2="16" y1="21" y2="21"></line>
                                <line x1="12" x2="12" y1="17" y2="21"></line>
                              </svg>
                              <span className="min-w-0 truncate">
                                Endpoint Security
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 leading-none min-w-4.5 ml-auto outline-none pr-1.5 px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                <svg className="lucide lucide-shield-check size-2.5!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                Stable
                              </Badge>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <CollapsibleContent data-open="" id="base-ui-_r_1n_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <Sortable className="border-l cn-sidebar-menu-sub flex flex-col gap-0.5 min-w-0 ml-3.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub" dragging="false">
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="managed-devices" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Managed Devices
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        248
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Managed Devices" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                  <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground right-0 text-ring w-3.5" type="button" sidebar="menu-action" aria-label="Add to Managed Devices">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="threat-detection" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-open="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-12 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_1p_" aria-expanded="true">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Threat Detection
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        12
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                    <CollapsibleContent data-open="" id="base-ui-_r_1p_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                      <SidebarMenuSub className="border-l gap-0.5 ml-3.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub">
                                        <SidebarMenuSubItem sidebar="menu-sub-item">
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 h-8 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                            <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                            </svg>
                                            <span className="min-w-0 truncate">
                                              Overview
                                            </span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem sidebar="menu-sub-item">
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 h-8 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" aria-current="page" sidebar="menu-sub-button" size="sm" data-active="">
                                            <svg className="lucide lucide-scan-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                                              <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                              <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                              <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                              <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                              <path d="m16 16-1.9-1.9"></path>
                                            </svg>
                                            <span className="min-w-0 truncate">
                                              Suspicious Activity
                                            </span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem sidebar="menu-sub-item">
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 h-8 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                            <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                              <path d="M12 8v4"></path>
                                              <path d="M12 16h.01"></path>
                                            </svg>
                                            <span className="min-w-0 truncate">
                                              Malware Events
                                            </span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem sidebar="menu-sub-item">
                                          <SidebarMenuSubButton className="[&>svg]:text-ring aria-expanded:[&>svg]:text-current aria-expanded:text-foreground data-active:[&>svg]:text-current data-active:gap-2 data-active:text-foreground font-medium gap-1.5 h-8 hover:[&>svg]:text-current hover:text-foreground not-data-active:hover:bg-accent/70 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                            <svg className="lucide lucide-activity size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                            </svg>
                                            <span className="min-w-0 truncate">
                                              Network Anomalies
                                            </span>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      </SidebarMenuSub>
                                    </CollapsibleContent>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Threat Detection" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                  <SidebarMenuAction className="aspect-auto h-5 hover:bg-transparent hover:text-foreground px-0 right-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Review Threat Detection" sidebar="menu-action">
                                    Review
                                  </SidebarMenuAction>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="vulnerabilities" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Vulnerabilities
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        37
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-transparent dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive transition-shadow">
                                        High
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Vulnerabilities" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="security-policies" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Security Policies
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        8
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Security Policies" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                  <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground right-0 text-ring w-3.5" type="button" sidebar="menu-action" aria-label="Add to Security Policies">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                  </SidebarMenuAction>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="quarantined" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Quarantined
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        5
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Quarantined" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                </SortableItem>
                                <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="response-tasks" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:text-foreground items-center min-w-0 not-data-active:hover:bg-transparent outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="shrink-0 size-4" aria-hidden="true"></span>
                                      <span className="min-w-0 truncate">
                                        Response Tasks
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-[0.625rem] text-foreground transition-shadow">
                                        7
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/20 border border-transparent dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 ml-auto outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                        Active
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                  <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground inline-flex items-center justify-center left-6 outline-none select-none shrink-0 text-ring top-1 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Response Tasks" dragging="false">
                                    <svg className="lucide lucide-grip-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                      <circle cx="9" cy="12" r="1"></circle>
                                      <circle cx="9" cy="5" r="1"></circle>
                                      <circle cx="9" cy="19" r="1"></circle>
                                      <circle cx="15" cy="12" r="1"></circle>
                                      <circle cx="15" cy="5" r="1"></circle>
                                      <circle cx="15" cy="19" r="1"></circle>
                                    </svg>
                                  </SortableItemHandle>
                                </SortableItem>
                              </Sortable>
                              <div id="DndDescribedBy-0" style={{display: "none"}}>
                                To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
                              </div>
                              <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                            </CollapsibleContent>
                          </Collapsible>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-12 px-2 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-shield size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              </svg>
                              <span className="min-w-0 truncate">
                                Identity & Access
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <SidebarMenuAction className="aspect-auto h-5 hover:bg-transparent hover:text-foreground px-0 right-0 text-muted-foreground text-xs w-auto" type="button" sidebar="menu-action" aria-label="Add to Identity & Access">
                              Add
                            </SidebarMenuAction>
                          </Collapsible>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-0 px-2 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-code size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                <path d="m16 18 6-6-6-6"></path>
                                <path d="m8 6-6 6 6 6"></path>
                              </svg>
                              <span className="min-w-0 truncate">
                                Application Security
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                          </Collapsible>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <Collapsible data-closed="">
                            <Collapsible>
                            <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:text-foreground disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:text-foreground items-center not-data-active:hover:bg-transparent outline-hidden overflow-hidden peer/menu-button pr-12 px-2 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                              <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                              <svg className="lucide lucide-database size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                <path d="M3 12A9 3 0 0 0 21 12"></path>
                              </svg>
                              <span className="min-w-0 truncate">
                                Data Protection
                              </span>
                            </CollapsibleTrigger>
                            </Collapsible>
                            <SidebarMenuAction className="aspect-auto h-5 hover:bg-transparent hover:text-foreground px-0 right-0 text-muted-foreground text-xs w-auto" href="#" aria-label="Review Data Protection" sidebar="menu-action">
                              Review
                            </SidebarMenuAction>
                          </Collapsible>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </TabsContent>
              </SidebarContent>
            </Tabs>
            <SidebarFooter className="p-4 pt-0" sidebar="footer">
              <SidebarMenu sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-muted/50 border border-input/50 cn-sidebar-menu-button cn-sidebar-menu-button-size-lg cn-sidebar-menu-button-variant-default disabled:opacity-50 disabled:pointer-events-none flex gap-2 group/menu-button h-10 items-center outline-hidden overflow-hidden peer/menu-button px-2 rounded-lg text-xs w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open account menu for Shadcn" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                    <Avatar className="after:rounded-md rounded-md" size="sm">
                      <AvatarImage className="rounded-md" alt="Shadcn" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                    </Avatar>
                    <span className="flex-1 grid leading-none min-w-0 text-left">
                      <span className="font-medium text-sidebar-accent-foreground truncate">
                        Shadcn
                      </span>
                      <span className="mt-0.5 text-[0.625rem] text-muted-foreground truncate">
                        Author of Shadcn/ui
                      </span>
                    </span>
                    <svg className="lucide lucide-chevrons-up-down ml-auto size-3.5! text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </div>
        </Sidebar>
        <SidebarInset className="min-h-0 min-w-0 overflow-hidden">
          <div className="@container flex-1 min-h-0 overflow-y-auto p-4">
            <div className="flex flex-col gap-6" aria-hidden="true">
              <div className="@3xl:grid-cols-3 @xl:grid-cols-2 gap-4 grid">
                <Card className="gap-0 py-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-2 items-end">
                      <Skeleton className="bg-input/50 h-6 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 w-28"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between py-2.5 rounded-b-lg">
                    <div className="-space-x-2 flex">
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 w-24"></Skeleton>
                  </CardFooter>
                </Card>
                <Card className="gap-0 py-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-2 items-end">
                      <Skeleton className="bg-input/50 h-6 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 w-28"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between py-2.5 rounded-b-lg">
                    <div className="-space-x-2 flex">
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 w-24"></Skeleton>
                  </CardFooter>
                </Card>
                <Card className="gap-0 py-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex gap-4 items-center justify-between">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 h-4 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 size-8"></Skeleton>
                    </div>
                    <div className="flex gap-2 items-end">
                      <Skeleton className="bg-input/50 h-6 w-12"></Skeleton>
                      <Skeleton className="bg-input/50 h-3.5 w-28"></Skeleton>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-input/20 border-t gap-4 justify-between py-2.5 rounded-b-lg">
                    <div className="-space-x-2 flex">
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                      <Skeleton className="bg-input/50 ring-2 ring-background rounded-full size-6"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 h-3.5 w-24"></Skeleton>
                  </CardFooter>
                </Card>
              </div>
              <div className="@3xl:grid-cols-3 @xl:grid-cols-2 gap-x-4 gap-y-6 grid">
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="shadow-xs" size="default">
                  <CardContent className="flex flex-col gap-2 h-65">
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 h-4 w-full"></Skeleton>
                    <Skeleton className="bg-input/50 flex-1 min-h-0 mt-4"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </Card>
    </div>
  )
}
