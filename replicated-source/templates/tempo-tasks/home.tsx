import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <a className="-translate-y-16 bg-background border border-border fixed focus:translate-y-0 font-medium px-3 py-2 rounded-md shadow-xs start-2 text-sm top-2 whitespace-nowrap z-50" href="#main-content">
      Skip to main content
    </a>
    <div className="**:data-[slot=sidebar-menu-button]:hover:bg-zinc-800! **:data-[slot=sidebar-menu-button]:hover:text-zinc-100 **:data-[slot=sidebar-menu-button]:text-zinc-400 **:data-[slot=sidebar-menu-sub-button]:hover:bg-zinc-800! **:data-[slot=sidebar-menu-sub-button]:hover:text-zinc-100 **:data-[slot=sidebar-menu-sub-button]:text-zinc-400 [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-50 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-white [&_[data-slot=sidebar-menu-button][data-active]]:bg-zinc-800! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-zinc-800! [&_[data-slot=sidebar-menu-button][data-active]]:text-zinc-50 [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-50 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-white [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-zinc-800! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-zinc-800! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-zinc-50 flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "3rem", "--header-height": "50px", "--sidebar": "var(--color-zinc-900)", "--sidebar-foreground": "var(--color-zinc-100)", "--sidebar-border": "color-mix(in oklab, var(--color-zinc-700) 60%, transparent)", "--sidebar-accent": "var(--color-zinc-800)", "--sidebar-accent-foreground": "var(--color-zinc-100)", "--sidebar-primary": "var(--color-zinc-100)", "--sidebar-primary-foreground": "var(--color-zinc-900)", "--sidebar-ring": "var(--color-zinc-500)"}}>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <div className="dark data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between p-2" sidebar="header">
              <div className="duration-200 ease-linear gap-2 inline-flex items-center min-h-10 px-0.5 transition-all">
                <span className="flex items-center justify-center relative shrink-0 size-7 text-white">
                  <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-[0.875] size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="[&_svg:not([class*='size-']):not([class~='w-auto'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                      <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </span>
                <span className="font-medium in-data-[state=collapsed]:hidden text-sm text-zinc-100">
                  NeUI
                </span>
              </div>
              <div className="gap-0.5 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:mx-auto inline-flex items-center">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:[&_svg]:opacity-100 hover:bg-zinc-700 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm text-zinc-200 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications, 5 unread" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                  <span className="absolute bg-zinc-100 right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
              </div>
            </SidebarHeader>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <div className="py-2">
                <form>
                  <SidebarGroup className="p-2 py-0" sidebar="group">
                    <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-zinc-800 border border-border border-none dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:bg-zinc-700 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:text-white font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-zinc-700 hover:text-white in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:w-8! justify-start overflow-hidden pl-7 px-2.5 rounded-lg text-sm transition-[width,padding] w-full" type="button" tabIndex="0" id="search" aria-label="Search">
                        <span className="duration-200 ease-linear in-data-[state=collapsed]:opacity-0 opacity-100 transition-opacity whitespace-nowrap">
                          Search...
                        </span>
                      </Button>
                      <svg className="-translate-y-1/2 absolute duration-200 ease-linear in-data-[state=collapsed]:left-[9px] left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2 transition-[left]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-zinc-700 dark:in-data-[slot=tooltip-content]:bg-background/10 duration-200 ease-linear font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:opacity-0 min-w-5 opacity-100 px-1 right-2 rounded-sm text-xs text-zinc-200 top-1/2 transition-opacity w-fit">
                        ⌘K
                      </Kbd>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </form>
              </div>
              <nav className="flex flex-col" aria-label="Main">
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                    Platform
                  </SidebarGroupLabel>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" href="/home" status="active" aria-current="page">
                          <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          <span>
                            Home
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-tasks">
                          <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M13 5h8"></path>
                            <path d="M13 12h8"></path>
                            <path d="M13 19h8"></path>
                            <path d="m3 17 2 2 4-4"></path>
                            <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                          </svg>
                          <span>
                            Tasks
                          </span>
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-reports">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <span>
                            Reports
                          </span>
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                  <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="saved-views-list" sidebar="group-label">
                    Saved Views
                    <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </SidebarGroupLabel>
                  <SidebarGroupContent className="text-sm" sidebar="group-content" id="saved-views-list">
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/my">
                          <svg className="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            Assigned to me
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                            12
                          </Badge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/board">
                          <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            Active sprint
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-info-foreground text-xs transition-shadow">
                            24
                          </Badge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/calendar">
                          <svg className="lucide lucide-calendar-days" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                          <span className="flex-1 min-w-0 text-sm truncate">
                            Week ahead
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                            8
                          </Badge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports/activity">
                          <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            Recent activity
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                            4
                          </Badge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </nav>
              <div className="mt-auto">
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden p-2" sidebar="group">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] bg-zinc-900/90 border-zinc-700 md:w-[230px] mx-auto overflow-hidden shrink-0" spacing="sm">
                    <header className="bg-zinc-900/90 flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <h2 className="font-semibold text-warning text-xs">
                        Usage Limit
                      </h2>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] bg-zinc-900/80 border-zinc-700 rounded-(--frame-radius) space-y-3 text-zinc-100">
                      <p className="leading-snug text-xs text-zinc-400">
                        Your usage resets at the end of the month
                      </p>
                      <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                        <div className="absolute inset-0 opacity-20 pointer-events-none text-white" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar">
                          <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                            <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            x
                          </span>
                        </Progress>
                      </div>
                      <div className="flex items-center justify-between leading-none text-xs text-zinc-300">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-zinc-100">
                            82%
                          </span>
                          <span className="text-zinc-400">
                            Used
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-zinc-100">
                            18%
                          </span>
                          <span className="text-zinc-400">
                            Free
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </SidebarGroup>
              </div>
            </SidebarContent>
            <SidebarFooter className="gap-2 p-2 pb-2" sidebar="footer">
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:-ml-1! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button pr-0! ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Claude" src="https://github.com/claude.png"></AvatarImage>
                    </Avatar>
                    <span className="font-medium text-sm truncate">
                      Claude
                    </span>
                    <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed group/rail h-12 hidden items-center md:flex outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          Collapse
        </span>
      </button>
      <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm min-h-svh ml-0! overflow-y-auto">
        <header className="bg-background flex gap-2 h-(--header-height) items-center px-4.5 shrink-0 sticky top-0 z-20">
          <div className="flex gap-2 items-center">
            <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1">
                  <BreadcrumbPage className="flex font-normal gap-1.5 items-center text-foreground" role="link" aria-disabled="true" aria-current="page">
                    <svg className="lucide lucide-house size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    Home
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-3 items-center ml-auto shrink-0" role="toolbar" aria-label="Header actions">
            <AvatarGroup>
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                <AvatarImage className="rounded-full" alt="Nick Johnson" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                <AvatarImage className="rounded-full" alt="Alex Johnson (away)" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                <AvatarImage className="rounded-full" alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </AvatarGroup>
            <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open context panel" aria-expanded="false">
              <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M15 3v18"></path>
              </svg>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4.5 isolate pb-4.5 px-4.5">
          <div className="flex flex-1 flex-col gap-4.5 outline-none" id="main-content" tabIndex="-1">
            <div className="flex flex-col gap-4.5 w-full" aria-labelledby="page-heading">
              <h1 className="sr-only" id="page-heading">
                Home
              </h1>
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] text-foreground w-full">
                <FramePanel className="[&::before]:z-0 before:rounded-[calc(var(--frame-radius)-1px)] isolate rounded-(--frame-radius)">
                  <canvas className="[mask-image:linear-gradient(to_bottom,black,transparent_70%)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="991" height="176"></canvas>
                  <div className="relative z-10">
                    <div className="flex flex-col gap-4 pb-1 pt-1 px-1.5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-1 mb-5 min-w-0">
                        <h2 className="font-semibold text-sm">
                          Performance Overview
                        </h2>
                      </div>
                      <Tabs className="gap-2 shrink-0 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none">
                        <TabsList className="data-[variant=line]:rounded-none grid grid-cols-3 group-data-horizontal/tabs:h-8 h-9 p-[3px] rounded-lg sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_14_" compositeItemActive="">
                            Week
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_15_">
                            Month
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_16_">
                            Year
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <div className="grid items-stretch lg:grid-cols-4 sm:grid-cols-2">
                      <div className="border-border/70 flex h-full min-h-0 min-w-0 pe-5 py-3 sm:py-0 w-full">
                        <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="lucide lucide-circle-check shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Tasks Completed
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5 min-h-0">
                            <div className="flex gap-3 items-center justify-between min-w-0">
                              <span className="font-semibold text-xl">
                                128
                              </span>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-12 justify-center min-w-0 opacity-75 sm:shrink-0 sm:w-24 text-xs w-full" data-chart="chart-_r_17_" aria-label="Tasks Completed trend">
                                <style>{`
 [data-chart=chart-_r_17_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_17_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts1-clip">
                                            <rect x="2" y="6" height="36" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_3o_" height="36" width="92" d="M2,22.65C4.044,20.794,6.089,18.938,8.133,19.05C10.178,19.162,12.222,21.244,14.267,20.85C16.311,20.456,18.356,17.588,20.4,17.25C22.444,16.912,24.489,19.104,26.533,18.6C28.578,18.096,30.622,14.895,32.667,15.45C34.711,16.005,36.756,20.314,38.8,19.95C40.844,19.586,42.889,14.548,44.933,13.2C46.978,11.852,49.022,14.193,51.067,15.9C53.111,17.607,55.156,18.68,57.2,16.35C59.244,14.02,61.289,8.287,63.333,9.6C65.378,10.913,67.422,19.271,69.467,19.5C71.511,19.729,73.556,11.828,75.6,7.8C77.644,3.772,79.689,3.618,81.733,6.45C83.778,9.282,85.822,15.102,87.867,16.35C89.911,17.598,91.956,14.274,94,10.95"></path>
                                            </g>
                                          </g>
                                        </g>
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
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                +8.2%
                              </Badge>
                              <span className="text-muted-foreground text-xs truncate">
                                Above target
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full min-h-0 min-w-0 pe-5 py-3 sm:border-t-0 sm:py-0 w-full">
                        <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5 sm:ps-5">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              In Progress
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5 min-h-0">
                            <div className="flex gap-3 items-center justify-between min-w-0">
                              <span className="font-semibold text-xl">
                                34
                              </span>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-12 justify-center min-w-0 opacity-75 sm:shrink-0 sm:w-24 text-xs w-full" data-chart="chart-_r_18_" aria-label="In Progress trend">
                                <style>{`
 [data-chart=chart-_r_18_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_18_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts2-clip">
                                            <rect x="2" y="6" height="36" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_3p_" height="36" width="92" d="M2,29.4C4.044,30.371,6.089,31.343,8.133,30.75C10.178,30.157,12.222,28,14.267,28.05C16.311,28.1,18.356,30.356,20.4,29.85C22.444,29.344,24.489,26.077,26.533,25.8C28.578,25.523,30.622,28.238,32.667,27.6C34.711,26.962,36.756,22.973,38.8,22.65C40.844,22.327,42.889,25.67,44.933,25.35C46.978,25.03,49.022,21.045,51.067,20.4C53.111,19.755,55.156,22.449,57.2,21.75C59.244,21.051,61.289,16.958,63.333,15.9C65.378,14.842,67.422,16.817,69.467,17.25C71.511,17.683,73.556,16.573,75.6,14.55C77.644,12.527,79.689,9.592,81.733,8.25C83.778,6.908,85.822,7.159,87.867,9.15C89.911,11.141,91.956,14.87,94,18.6"></path>
                                            </g>
                                          </g>
                                        </g>
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
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                +5.1%
                              </Badge>
                              <span className="text-muted-foreground text-xs truncate">
                                On pace
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full lg:border-t-0 min-h-0 min-w-0 pe-5 py-3 sm:border-t sm:py-0 w-full">
                        <div className="bg-border/70 h-18 hidden lg:block mb-2 self-center shrink-0 w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5 sm:ps-5">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="lucide lucide-triangle-alert shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Overdue
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5 min-h-0">
                            <div className="flex gap-3 items-center justify-between min-w-0">
                              <span className="font-semibold text-xl">
                                6
                              </span>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-12 justify-center min-w-0 opacity-75 sm:shrink-0 sm:w-24 text-xs w-full" data-chart="chart-_r_19_" aria-label="Overdue trend">
                                <style>{`
 [data-chart=chart-_r_19_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_19_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts3-clip">
                                            <rect x="2" y="6" height="36" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_3q_" height="36" width="92" d="M2,33.9C4.044,32.163,6.089,30.426,8.133,30.3C10.178,30.174,12.222,31.659,14.267,31.2C16.311,30.741,18.356,28.336,20.4,28.05C22.444,27.764,24.489,29.595,26.533,28.95C28.578,28.305,30.622,25.182,32.667,24.9C34.711,24.618,36.756,27.175,38.8,26.7C40.844,26.225,42.889,22.717,44.933,22.2C46.978,21.683,49.022,24.159,51.067,24C53.111,23.841,55.156,21.049,57.2,20.85C59.244,20.651,61.289,23.046,63.333,22.65C65.378,22.254,67.422,19.066,69.467,18.6C71.511,18.134,73.556,20.391,75.6,19.95C77.644,19.509,79.689,16.37,81.733,15.9C83.778,15.43,85.822,17.63,87.867,17.7C89.911,17.77,91.956,15.71,94,13.65"></path>
                                            </g>
                                          </g>
                                        </g>
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
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                -2
                              </Badge>
                              <span className="text-muted-foreground text-xs truncate">
                                Needs attention
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full lg:border-t-0 min-h-0 min-w-0 pr-2 py-3 sm:border-t sm:py-0 w-full">
                        <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col min-h-0 min-w-0 ps-1.5 sm:ps-5">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="lucide lucide-target shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              On-Time Rate
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5 min-h-0">
                            <div className="flex gap-3 items-center justify-between min-w-0">
                              <span className="font-semibold text-xl">
                                92%
                              </span>
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-12 justify-center min-w-0 opacity-75 sm:shrink-0 sm:w-24 text-xs w-full" data-chart="chart-_r_1a_" aria-label="On-Time Rate trend">
                                <style>{`
 [data-chart=chart-_r_1a_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_1a_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="96" height="48" style={{position: "relative", cursor: "default", width: "96px", height: "48px"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="96" height="48" viewBox="0 0 96 48" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts4-clip">
                                            <rect x="2" y="6" height="36" width="92"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_3r_" height="36" width="92" d="M2,9.6C4.044,14.96,6.089,20.32,8.133,19.95C10.178,19.58,12.222,13.479,14.267,13.65C16.311,13.821,18.356,20.265,20.4,23.1C22.444,25.935,24.489,25.16,26.533,21.75C28.578,18.34,30.622,12.294,32.667,11.85C34.711,11.406,36.756,16.564,38.8,19.5C40.844,22.436,42.889,23.151,44.933,20.85C46.978,18.549,49.022,13.232,51.067,10.95C53.111,8.668,55.156,9.422,57.2,12.75C59.244,16.078,61.289,21.982,63.333,22.2C65.378,22.418,67.422,16.95,69.467,17.25C71.511,17.55,73.556,23.616,75.6,24.9C77.644,26.184,79.689,22.684,81.733,19.95C83.778,17.216,85.822,15.247,87.867,15.9C89.911,16.553,91.956,19.826,94,23.1"></path>
                                            </g>
                                          </g>
                                        </g>
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
                            <div className="flex gap-1.5 items-center min-w-0">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                +1.4%
                              </Badge>
                              <span className="text-muted-foreground text-xs truncate">
                                Healthy
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-4 py-(--frame-panel-footer-py) py-1.5! sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                    <svg className="lucide lucide-circle-question-mark shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    128 tasks were completed this week, 8% above target across all projects.
                  </div>
                  <Button className="-me-2 [&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-primary in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" role="button" tabIndex="0" href="/reports/analytics">
                    Show full analytics
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </footer>
              </Frame>
              <section className="gap-4.5 grid lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)] min-w-0" aria-label="Task analytics">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                  <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-px">
                      <h2 className="font-semibold text-sm">
                        Completion Pace
                      </h2>
                      <div className="text-muted-foreground text-sm">
                        Tasks completed vs target
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center sm:justify-end">
                      <div className="flex flex-wrap gap-x-3 gap-y-1 items-center sm:justify-end text-muted-foreground text-xs">
                        <span className="gap-1.5 inline-flex items-center">
                          <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                          Completed
                        </span>
                        <span className="gap-1.5 inline-flex items-center">
                          <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                          In Progress
                        </span>
                        <span className="gap-1.5 inline-flex items-center">
                          <span className="rounded-full size-2" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></span>
                          Target
                        </span>
                      </div>
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col gap-4 min-h-[360px] rounded-(--frame-radius)">
                    <div className="gap-3 grid sm:grid-cols-3">
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          Completed
                        </div>
                        <div className="font-semibold tabular-nums text-lg">
                          128
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          vs Target
                        </div>
                        <div className="font-semibold tabular-nums text-lg">
                          +10
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          On-Time
                        </div>
                        <div className="flex gap-1.5 items-baseline">
                          <span className="font-semibold tabular-nums text-lg">
                            70
                          </span>
                          <span className="font-medium text-success text-xs">
                            55%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-64 justify-center min-w-0 mt-auto text-xs w-full" data-chart="chart-_r_1b_">
                      <style>{`
 [data-chart=chart-_r_1b_] {
  --color-online: var(--color-sky-500);
  --color-store: var(--color-violet-500);
  --color-target: var(--color-slate-500);
}


.dark [data-chart=chart-_r_1b_] {
  --color-online: var(--color-sky-500);
  --color-store: var(--color-violet-500);
  --color-target: var(--color-slate-500);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="551" height="256" style={{position: "relative", cursor: "default", width: "551px", height: "256px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="551" height="256" viewBox="0 0 551 256" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="543" height="218" x1="0" y1="226" x2="543" y2="226"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="543" height="218" x1="0" y1="171.5" x2="543" y2="171.5"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="543" height="218" x1="0" y1="117" x2="543" y2="117"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="543" height="218" x1="0" y1="62.5" x2="543" y2="62.5"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="543" height="218" x1="0" y1="8" x2="543" y2="8"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts5-clip">
                                  <rect x="0" y="8" height="218" width="543"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <pattern id="dashboard-7-revenue-online" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-sky-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-sky-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                                </pattern>
                                <pattern id="dashboard-7-revenue-store" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-violet-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-violet-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                                </pattern>
                                <pattern id="dashboard-7-revenue-target" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-slate-500)" strokeOpacity="0.42" strokeWidth="0.9"></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-slate-500)" strokeOpacity="0.22" strokeWidth="0.9"></path>
                                </pattern>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#dashboard-7-revenue-online)" fillOpacity="0.65" height="218" stroke="none" width="543" id="recharts-area-_r_3s_" d="M0,123.056C60.333,108.119,120.667,93.181,181,92.778C241.333,92.374,301.667,106.504,362,110.944C422.333,115.385,482.667,110.137,543,104.889L543,226C482.667,226,422.333,226,362,226C301.667,226,241.333,226,181,226C120.667,226,60.333,226,0,226Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.65" height="218" stroke="var(--color-online)" width="543" d="M0,123.056C60.333,108.119,120.667,93.181,181,92.778C241.333,92.374,301.667,106.504,362,110.944C422.333,115.385,482.667,110.137,543,104.889"></path>
                                  </g>
                                </g>
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#dashboard-7-revenue-store)" fillOpacity="0.65" height="218" stroke="none" width="543" id="recharts-area-_r_3t_" d="M0,56.444C60.333,33.299,120.667,10.153,181,8C241.333,5.847,301.667,24.686,362,32.222C422.333,39.758,482.667,35.99,543,32.222L543,104.889C482.667,110.137,422.333,115.385,362,110.944C301.667,106.504,241.333,92.374,181,92.778C120.667,93.182,60.333,108.119,0,123.056Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.65" height="218" stroke="var(--color-store)" width="543" d="M0,56.444C60.333,33.299,120.667,10.153,181,8C241.333,5.847,301.667,24.686,362,32.222C422.333,39.758,482.667,35.99,543,32.222"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                <g className="recharts-layer recharts-line">
                                  <g className="recharts-layer recharts-shape">
                                    <path className="recharts-curve recharts-line-curve" stroke="var(--color-target)" strokeDasharray="4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 4px, 0.43505859375px, 544.43505859375px" strokeWidth="2" fill="none" id="recharts-line-_r_3u_" height="218" width="543" d="M0,44.333C60.333,39.623,120.667,34.914,181,38.278C241.333,41.642,301.667,53.08,362,56.444C422.333,59.809,482.667,55.099,543,50.389"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1">
                                <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                  <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                    <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="543" stroke="none" x="181" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="181" dy="0.71em">
                                        Jul 14
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="543" stroke="none" x="362" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="362" dy="0.71em">
                                        Jul 15
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="543" stroke="none" x="533.8515625" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="533.8515625" dy="0.71em">
                                        Jul 16
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                  <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-px">
                      <h2 className="font-semibold text-sm">
                        Workload by Project
                      </h2>
                      <div className="text-muted-foreground text-sm">
                        Daily task share
                      </div>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0" aria-label="Focus the Product project" aria-pressed="false">
                      <span className="bg-cyan-500 rounded-full size-2" aria-hidden="true"></span>
                      Product
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col gap-4 min-h-[360px] rounded-(--frame-radius)">
                    <div className="gap-3 grid grid-cols-2">
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          Latest Tasks
                        </div>
                        <div className="font-semibold tabular-nums text-lg">
                          46
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="text-muted-foreground text-xs">
                          Product Share
                        </div>
                        <div className="font-semibold tabular-nums text-lg">
                          39%
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                      <span className="gap-1.5 inline-flex items-center">
                        <span className="bg-cyan-500 rounded-full size-2" aria-hidden="true"></span>
                        Product
                      </span>
                      <span className="gap-1.5 inline-flex items-center">
                        <span className="bg-violet-500 rounded-full size-2" aria-hidden="true"></span>
                        Platform
                      </span>
                      <span className="gap-1.5 inline-flex items-center">
                        <span className="bg-amber-400 rounded-full size-2" aria-hidden="true"></span>
                        Growth
                      </span>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-64 justify-center min-w-0 mt-auto text-xs w-full" data-chart="chart-_r_1c_">
                      <style>{`
 [data-chart=chart-_r_1c_] {
  --color-direct: var(--color-cyan-500);
  --color-partners: var(--color-violet-500);
  --color-marketplace: var(--color-amber-400);
}


.dark [data-chart=chart-_r_1c_] {
  --color-direct: var(--color-cyan-500);
  --color-partners: var(--color-violet-500);
  --color-marketplace: var(--color-amber-400);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="356" height="256" style={{position: "relative", cursor: "default", width: "356px", height: "256px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="356" height="256" viewBox="0 0 356 256" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="348" height="218" x1="0" y1="226" x2="348" y2="226"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="348" height="218" x1="0" y1="171.5" x2="348" y2="171.5"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="348" height="218" x1="0" y1="117" x2="348" y2="117"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="348" height="218" x1="0" y1="62.5" x2="348" y2="62.5"></line>
                                    <line strokeDasharray="3 3" stroke="#ccc" fill="none" x="0" y="8" width="348" height="218" x1="0" y1="8" x2="348" y2="8"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts6-clip">
                                  <rect x="0" y="8" height="218" width="348"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <pattern id="dashboard-7-channel-direct" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <rect width="8" height="8" fill="var(--color-direct)"></rect>
                                  <path d="M-1 8L8 -1M3 9L9 3" stroke="var(--color-background)" strokeOpacity="0.2" strokeWidth="1"></path>
                                </pattern>
                                <pattern id="dashboard-7-channel-partners" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <rect width="8" height="8" fill="var(--color-partners)"></rect>
                                  <circle cx="2" cy="2" r="0.9" fill="var(--color-background)" fillOpacity="0.22"></circle>
                                  <circle cx="6" cy="6" r="0.9" fill="var(--color-background)" fillOpacity="0.22"></circle>
                                </pattern>
                                <pattern id="dashboard-7-channel-marketplace" width="8" height="8" patternUnits="userSpaceOnUse">
                                  <rect width="8" height="8" fill="var(--color-marketplace)"></rect>
                                  <path d="M2 0V8M6 0V8" stroke="var(--color-background)" strokeOpacity="0.18" strokeWidth="1"></path>
                                </pattern>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_3v_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="8.7" y="125.72" width="69" height="100.28" d={"M8.7,125.72L 77.7,125.72L 77.7,222A 4,4,0,0,1,\n        73.7,226L 12.7,226A 4,4,0,0,1,\n        8.7,222Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="95.7" y="125.72" width="69" height="100.28" d={"M95.7,125.72L 164.7,125.72L 164.7,222A 4,4,0,0,1,\n        160.7,226L 99.7,226A 4,4,0,0,1,\n        95.7,222Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="182.7" y="123.54" width="69" height="102.46" d={"M182.7,123.54L 251.7,123.54L 251.7,222A 4,4,0,0,1,\n        247.7,226L 186.7,226A 4,4,0,0,1,\n        182.7,222Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-direct)" name="undefined" x="269.7" y="140.98" width="69" height="85.02" d={"M269.7,140.98L 338.7,140.98L 338.7,222A 4,4,0,0,1,\n        334.7,226L 273.7,226A 4,4,0,0,1,\n        269.7,222Z"}></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_40_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="8.7" y="75.58" width="69" height="50.14" radius="0" d="M 8.7,75.58 h 69 v 50.14 h -69 Z"></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="95.7" y="75.58" width="69" height="50.14" radius="0" d="M 95.7,75.58 h 69 v 50.14 h -69 Z"></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="182.7" y="73.4" width="69" height="50.14" radius="0" d="M 182.7,73.4 h 69 v 50.14 h -69 Z"></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-partners)" opacity="1" name="undefined" x="269.7" y="84.3" width="69" height="56.68" radius="0" d="M 269.7,84.3 h 69 v 56.68 h -69 Z"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_41_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="8.7" y="8" width="69" height="67.58" d={"M8.7,12A 4,4,0,0,1,12.7,8L 73.7,8A 4,4,0,0,1,\n        77.7,12L 77.7,75.58L 8.7,75.58Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="95.7" y="8" width="69" height="67.58" d={"M95.7,12A 4,4,0,0,1,99.7,8L 160.7,8A 4,4,0,0,1,\n        164.7,12L 164.7,75.58L 95.7,75.58Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="182.7" y="8" width="69" height="65.4" d={"M182.7,12A 4,4,0,0,1,186.7,8L 247.7,8A 4,4,0,0,1,\n        251.7,12L 251.7,73.4L 182.7,73.4Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#dashboard-7-channel-marketplace)" opacity="1" name="undefined" x="269.7" y="8" width="69" height="76.3" d={"M269.7,12A 4,4,0,0,1,273.7,8L 334.7,8A 4,4,0,0,1,\n        338.7,12L 338.7,84.3L 269.7,84.3Z"}></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1">
                                <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                  <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                    <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="348" stroke="none" x="43.5" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="43.5" dy="0.71em">
                                        Fri
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="348" stroke="none" x="130.5" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="130.5" dy="0.71em">
                                        Sat
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="348" stroke="none" x="217.5" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="217.5" dy="0.71em">
                                        Sun
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="348" stroke="none" x="304.5" y="242" textAnchor="middle" fill="#666">
                                      <tspan x="304.5" dy="0.71em">
                                        Mon
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </section>
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] min-w-0">
                <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px">
                    <h2 className="font-semibold text-sm">
                      Task Queue
                    </h2>
                    <div className="text-muted-foreground text-sm">
                      6 of 6 tasks
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:w-auto sm:flex-row w-full">
                    <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 lg:w-64 rounded-lg sm:min-w-56 transition-colors" role="group">
                      <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                        <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </InputGroupAddon>
                      <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_1d_" placeholder="Search tasks" aria-label="Search tasks" value="" />
                    </InputGroup>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0" aria-pressed="false">
                      <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      Exceptions
                    </Button>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      New task
                    </Button>
                  </div>
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] p-0! rounded-(--frame-radius)">
                  <div className="relative">
                    <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_1e_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "105px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                        <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                          <DataGridTableViewport style={{width: "calc(1096px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                            <DataGridTable style={{"--header-id-size": "144", "--col-id-size": "144", "--header-customer-size": "224", "--col-customer-size": "224", "--header-product-size": "196", "--col-product-size": "196", "--header-fulfillment-size": "196", "--col-fulfillment-size": "196", "--header-amount-size": "120", "--col-amount-size": "120", "--header-status-size": "128", "--col-status-size": "128", "--header-actions-size": "88", "--col-actions-size": "88", width: "calc(1096px + var(--data-grid-fill-size, 0px))"}}>
                              <colgroup>
                                <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-product-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-fulfillment-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-amount-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                              </colgroup>
                              <thead>
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Task
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Assignee
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-product-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Deliverable
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-fulfillment-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Progress
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "calc(var(--header-amount-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Estimate
                                        <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 5v14"></path>
                                          <path d="m19 12-7 7-7-7"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Status
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                                  <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                </tr>
                              </thead>
                              <DataGridTableBody>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="TASK-2053">
                                  <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View task TASK-2053">
                                        TASK-2053
                                      </button>
                                      <div className="text-muted-foreground text-xs truncate">
                                        Oct 13, 2026
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Alex Johnson
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate">
                                          Platform
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium text-sm truncate">
                                        Add usage analytics events
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        PLT-91
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        In progress
                                      </span>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                          <span className="bg-warning block h-full rounded-full" style={{width: "84%"}}></span>
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          84%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium tabular-nums text-sm">
                                        20h
                                      </div>
                                      <div className="tabular-nums text-muted-foreground text-xs">
                                        4 subtasks
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                      In Progress
                                    </Badge>
                                  </td>
                                  <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions for TASK-2053" aria-pressed="false" aria-haspopup="menu" id="base-ui-_r_1i_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="TASK-2052">
                                  <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View task TASK-2052">
                                        TASK-2052
                                      </button>
                                      <div className="text-muted-foreground text-xs truncate">
                                        Oct 13, 2026
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-destructive bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Sana Qureshi
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate">
                                          Ops
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium text-sm truncate">
                                        Fix flaky e2e suite
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        OPS-12
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Blocked
                                      </span>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                          <span className="bg-destructive block h-full rounded-full" style={{width: "35%"}}></span>
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          35%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium tabular-nums text-sm">
                                        16h
                                      </div>
                                      <div className="tabular-nums text-muted-foreground text-xs">
                                        2 subtasks
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
                                      Blocked
                                    </Badge>
                                  </td>
                                  <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions for TASK-2052" aria-pressed="false" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="TASK-2049">
                                  <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View task TASK-2049">
                                        TASK-2049
                                      </button>
                                      <div className="text-muted-foreground text-xs truncate">
                                        Oct 15, 2026
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Leo Grant
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate">
                                          Platform
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium text-sm truncate">
                                        Rework onboarding flow
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        PLT-88
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        In progress
                                      </span>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                          <span className="bg-warning block h-full rounded-full" style={{width: "62%"}}></span>
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          62%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium tabular-nums text-sm">
                                        12h
                                      </div>
                                      <div className="tabular-nums text-muted-foreground text-xs">
                                        2 subtasks
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                      In Progress
                                    </Badge>
                                  </td>
                                  <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions for TASK-2049" aria-pressed="false" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="TASK-2048">
                                  <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View task TASK-2048">
                                        TASK-2048
                                      </button>
                                      <div className="text-muted-foreground text-xs truncate">
                                        Oct 15, 2026
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Mira Stone
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate">
                                          Product
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium text-sm truncate">
                                        Ship responsive nav bar
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        WEB-142
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        Merged
                                      </span>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                          <span className="bg-success block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          100%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium tabular-nums text-sm">
                                        8h
                                      </div>
                                      <div className="tabular-nums text-muted-foreground text-xs">
                                        3 subtasks
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                      Done
                                    </Badge>
                                  </td>
                                  <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions for TASK-2048" aria-pressed="false" aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="TASK-2050">
                                  <td className="align-middle ps-4! px-2 py-1.5 truncate" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <button className="block font-medium hover:text-primary hover:underline max-w-full text-left text-sm transition-colors truncate underline-offset-2" type="button" aria-label="View task TASK-2050">
                                        TASK-2050
                                      </button>
                                      <div className="text-muted-foreground text-xs truncate">
                                        Oct 14, 2026
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Nora Vale
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate">
                                          Growth
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-product-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium text-sm truncate">
                                        Audit permission checks
                                      </div>
                                      <div className="font-mono text-muted-foreground text-xs truncate">
                                        SEC-30
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-fulfillment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-1.5 min-w-0">
                                      <span className="font-medium text-sm truncate">
                                        In review
                                      </span>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="bg-muted block flex-1 h-1.5 min-w-12 overflow-hidden rounded-full">
                                          <span className="bg-info block h-full rounded-full" style={{width: "40%"}}></span>
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          40%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-amount-size) * 1px)"}}>
                                    <div className="min-w-0">
                                      <div className="font-medium tabular-nums text-sm">
                                        6h
                                      </div>
                                      <div className="tabular-nums text-muted-foreground text-xs">
                                        1 subtask
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                      Review
                                    </Badge>
                                  </td>
                                  <td className="align-middle pe-4! px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Task actions for TASK-2050" aria-pressed="false" aria-haspopup="menu" id="base-ui-_r_26_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                              </DataGridTableBody>
                            </DataGridTable>
                          </DataGridTableViewport>
                        </div>
                      </div>
                      <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_1e_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "894.2509124087591px"}}>
                        <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </DataGridScrollArea>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <DataGridPagination className="py-0">
                    <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                      <div className="text-muted-foreground text-sm">
                        Rows per page
                      </div>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_28_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                        <SelectValue className="flex flex-1 text-left">
                          5
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_28_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        1 - 5 of 6 tasks
                      </div>
                      <div className="flex items-center order-1 space-x-1">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
                          <span className="sr-only">
                            Go to previous page
                          </span>
                          <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-accent-foreground text-sm" type="button" tabIndex="0">
                          1
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                          2
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" tabIndex="0">
                          <span className="sr-only">
                            Go to next page
                          </span>
                          <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </DataGridPagination>
                </footer>
              </Frame>
            </div>
          </div>
        </div>
      </SidebarInset>
      <div className="bg-background border-l duration-300 ease-in-out flex h-svh overflow-hidden shrink-0 sticky top-0 transition-[width] w-0" role="complementary" aria-label="Context panel" inert="">
        <div className="flex shrink-0 w-[280px]">
          <div className="bg-background flex flex-1 flex-col overflow-hidden">
            <div className="border-b border-border flex flex-col items-center px-1 py-2 shrink-0">
              <div className="flex items-center justify-between pb-1 px-2 w-full">
                <span className="font-medium text-foreground text-sm">
                  October 2026
                </span>
                <div className="flex gap-0.5 items-center justify-center">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Previous month">
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Next month">
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <Calendar className="[--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single">
                <div className="flex flex-col gap-4 md:flex-row rdp-months relative">
                  <div className="flex flex-col gap-4 rdp-month w-full">
                    <div className="hidden">
                      <span className="font-medium rdp-caption_label select-none text-sm" role="status" aria-live="polite">
                        October 2026
                      </span>
                    </div>
                    <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="October 2026">
                      <thead aria-hidden="true">
                        <tr className="flex rdp-weekdays">
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                            Su
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                            Mo
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                            Tu
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                            We
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                            Th
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                            Fr
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                            Sa
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rdp-weeks">
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-27" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/27" aria-label="Sunday, September 27th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              27
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-28" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/28" aria-label="Monday, September 28th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              28
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-29" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/29" aria-label="Tuesday, September 29th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              29
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-30" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/30" aria-label="Wednesday, September 30th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              30
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-01">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/1" aria-label="Thursday, October 1st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              1
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-02">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/2" aria-label="Friday, October 2nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              2
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-03">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/3" aria-label="Saturday, October 3rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              3
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-04">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/4" aria-label="Sunday, October 4th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              4
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-05">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/5" aria-label="Monday, October 5th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              5
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-06">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/6" aria-label="Tuesday, October 6th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              6
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-07">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/7" aria-label="Wednesday, October 7th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              7
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-08">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/8" aria-label="Thursday, October 8th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              8
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-09">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/9" aria-label="Friday, October 9th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              9
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-10">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/10" aria-label="Saturday, October 10th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              10
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-11">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/11" aria-label="Sunday, October 11th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              11
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-12">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/12" aria-label="Monday, October 12th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              12
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-13">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/13" aria-label="Tuesday, October 13th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              13
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-14">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/14" aria-label="Wednesday, October 14th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              14
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square bg-accent group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) rounded-md select-none text-center text-foreground w-full" role="gridcell" aria-selected="true" data-day="2026-10-15" data-selected="true" data-today="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="0" day="2026/10/15" selectedSingle="true" aria-label="Today, Thursday, October 15th, 2026, selected">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              15
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-16">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/16" aria-label="Friday, October 16th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              16
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-17">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/17" aria-label="Saturday, October 17th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              17
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-18">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/18" aria-label="Sunday, October 18th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              18
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-19">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/19" aria-label="Monday, October 19th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              19
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-20">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/20" aria-label="Tuesday, October 20th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              20
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-21">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/21" aria-label="Wednesday, October 21st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              21
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-22">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/22" aria-label="Thursday, October 22nd, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              22
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-23">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/23" aria-label="Friday, October 23rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              23
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-24">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/24" aria-label="Saturday, October 24th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              24
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-25">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/25" aria-label="Sunday, October 25th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              25
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-26">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/26" aria-label="Monday, October 26th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              26
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-27">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/27" aria-label="Tuesday, October 27th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              27
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-28">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/28" aria-label="Wednesday, October 28th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              28
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-29">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/29" aria-label="Thursday, October 29th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              29
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-30">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/30" aria-label="Friday, October 30th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              30
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-31">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/31" aria-label="Saturday, October 31st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              31
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Calendar>
            </div>
            <div className="grow max-h-full min-h-0">
              <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2d_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "270px"}}>
                  <div className="flex flex-col h-full">
                    <div className="border-b border-border py-2">
                      <div className="px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          My Calendars
                        </span>
                      </div>
                      <div className="px-2" role="list">
                        <div role="listitem">
                          <Collapsible data-open="">
                            <div className="flex gap-0.5 group/account items-center">
                              <Collapsible>
                              <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start min-w-0 outline-none px-1.5 rounded-[min(var(--radius-md),12px)] select-none text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Toggle nick@neui.io" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_2e_" aria-expanded="true">
                                <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  nick@neui.io
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:opacity-100 aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/account:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for nick@neui.io" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mr-1 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                                3
                              </Badge>
                            </div>
                            <CollapsibleContent data-open="" id="base-ui-_r_2e_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <div className="py-0.5">
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2k_" aria-checked="true" aria-label="Toggle Work">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    Work
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Work" aria-haspopup="menu" id="base-ui-_r_2q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2s_" aria-checked="true" aria-label="Toggle Personal">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    Personal
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Personal" aria-haspopup="menu" id="base-ui-_r_32_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_34_" aria-checked="true" aria-label="Toggle Meetings">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    Meetings
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Meetings" aria-haspopup="menu" id="base-ui-_r_3a_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="19" cy="12" r="1"></circle>
                                      <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                        <div role="listitem">
                          <Collapsible data-closed="">
                            <div className="flex gap-0.5 group/account items-center">
                              <Collapsible>
                              <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start min-w-0 outline-none px-1.5 rounded-[min(var(--radius-md),12px)] select-none text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Toggle nick@gmail.com" aria-disabled="false" aria-expanded="false">
                                <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  nick@gmail.com
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:opacity-100 aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/account:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for nick@gmail.com" aria-haspopup="menu" id="base-ui-_r_3g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mr-1 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                                2
                              </Badge>
                            </div>
                          </Collapsible>
                        </div>
                      </div>
                      <div className="pt-1 px-1.5">
                        <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2 rounded-[min(var(--radius-md),12px)] text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                          <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          Add account
                        </Button>
                      </div>
                    </div>
                    <div className="border-b border-border py-2">
                      <div className="flex gap-2 items-center justify-between px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide truncate uppercase">
                          Today
                        </span>
                        <div className="flex gap-1 items-center shrink-0">
                          <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-1.5 rounded-[min(var(--radius-md),10px)] text-[11px] text-muted-foreground" type="button" tabIndex="0">
                            Show all
                          </Button>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                            3
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 px-1.5" role="list">
                        <div role="listitem">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Open Weekly Team Standup">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                Weekly Team Standup
                              </span>
                              <span className="text-muted-foreground text-xs">
                                9:00 AM to 9:30 AM
                              </span>
                            </div>
                            <div className="-space-x-1 flex ml-auto">
                              <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                <AvatarImage className="rounded-full" alt="SC" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                <AvatarImage className="rounded-full" alt="ML" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                              <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                <AvatarImage className="rounded-full" alt="EP" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                            </div>
                          </Button>
                        </div>
                        <div role="listitem">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Open Design Review · Component Library v3">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                Design Review · Component Library v3
                              </span>
                              <span className="text-muted-foreground text-xs">
                                11:00 AM to 12:00 PM
                              </span>
                            </div>
                            <div className="-space-x-1 flex ml-auto">
                              <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                <AvatarImage className="rounded-full" alt="AP" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                              </Avatar>
                            </div>
                          </Button>
                        </div>
                        <div role="listitem">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Open Coffee with Alex">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                Coffee with Alex
                              </span>
                              <span className="text-muted-foreground text-xs">
                                2:00 PM to 2:30 PM
                              </span>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 grow px-3 py-3">
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground w-full" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        New Event
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                        <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                        </svg>
                        Share Availability
                      </Button>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex gap-2 items-center px-3 py-2.5">
                      <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <div className="flex flex-col">
                        <span className="font-medium text-[11px] text-muted-foreground/60">
                          Your timezone
                        </span>
                        <span className="text-muted-foreground text-xs">
                          GMT+5 (+05:00) · Asia/Tashkent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_2d_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "181.19633943427618px"}}>
                  <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      Fri
    </span>
  </>
  )
}
