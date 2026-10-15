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
  BreadcrumbSeparator,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/home">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="subnav-tasks">
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
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                        <SidebarMenuSub className="border-l border-sidebar-border gap-1 group-data-[collapsible=icon]:hidden mx-3.5 px-2.5 py-0.5 translate-x-px" sidebar="menu-sub" id="subnav-tasks">
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/my">
                              My tasks
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/team">
                              Team tasks
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/board">
                              Board
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/calendar">
                              Calendar
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="subnav-reports" data-active="">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <span>
                            Reports
                          </span>
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                        <SidebarMenuSub className="border-l border-sidebar-border gap-1 group-data-[collapsible=icon]:hidden mx-3.5 px-2.5 py-0.5 translate-x-px" sidebar="menu-sub" id="subnav-reports">
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/reports/activity">
                              Activity
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/reports/analytics" data-active="" status="active" aria-current="page">
                              Analytics
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/reports/ai-ops">
                              AI Ops
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
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
                <BreadcrumbItem className="gap-1 hidden md:flex">
                  <BreadcrumbLink className="active hover:text-foreground transition-colors" href="/reports" status="active" aria-current="page">
                    Reports
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden items-center md:flex" role="presentation" aria-hidden="true">
                  <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1">
                  <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                    Analytics
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
                Analytics
              </h1>
              <div className="@container flex flex-col gap-4.5 w-full">
                <div className="@5xl:auto-rows-fr @5xl:grid-cols-12 gap-4.5 grid grid-cols-1 items-stretch">
                  <div className="@5xl:col-span-8 flex h-full">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                      <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
                        <h2 className="font-semibold text-sm">
                          Activation Funnel
                        </h2>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-[140px] pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_r_fr_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            Last 30 days
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_fr_-hidden-input" tabIndex="-1" aria-hidden="true" value="30d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col gap-6 rounded-(--frame-radius)">
                        <div className="gap-6 grid grid-cols-2 md:grid-cols-4 p-2">
                          <div className="space-y-1">
                            <div className="flex gap-2.5 items-center">
                              <div className="bg-border h-12 rounded-full w-0.5"></div>
                              <div className="flex flex-col gap-2">
                                <div className="font-medium text-muted-foreground text-xs">
                                  Account Created
                                </div>
                                <div className="flex gap-2.5 items-center">
                                  <span className="font-semibold leading-none text-base">
                                    3,572
                                  </span>
                                  <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    14%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex gap-2.5 items-center">
                              <div className="bg-border h-12 rounded-full w-0.5"></div>
                              <div className="flex flex-col gap-2">
                                <div className="font-medium text-muted-foreground text-xs">
                                  Invite Sent
                                </div>
                                <div className="flex gap-2.5 items-center">
                                  <span className="font-semibold leading-none text-base">
                                    2,638
                                  </span>
                                  <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    19%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex gap-2.5 items-center">
                              <div className="bg-border h-12 rounded-full w-0.5"></div>
                              <div className="flex flex-col gap-2">
                                <div className="font-medium text-muted-foreground text-xs">
                                  Saved Report
                                </div>
                                <div className="flex gap-2.5 items-center">
                                  <span className="font-semibold leading-none text-base">
                                    1,788
                                  </span>
                                  <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    11%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex gap-2.5 items-center">
                              <div className="bg-border h-12 rounded-full w-0.5"></div>
                              <div className="flex flex-col gap-2">
                                <div className="font-medium text-muted-foreground text-xs">
                                  Week Four Retained
                                </div>
                                <div className="flex gap-2.5 items-center">
                                  <span className="font-semibold leading-none text-base">
                                    1,014
                                  </span>
                                  <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-destructive text-xs">
                                    <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M16 17h6v-6"></path>
                                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                    </svg>
                                    6%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-[250px] justify-center mt-auto text-xs w-full" data-chart="chart-_r_fu_">
                          <style>{`
 [data-chart=chart-_r_fu_] {
  --color-accountCreated: var(--color-indigo-400);
  --color-inviteSent: var(--color-indigo-500);
  --color-savedReport: var(--color-indigo-600);
  --color-weekFourRetained: var(--color-indigo-700);
}


.dark [data-chart=chart-_r_fu_] {
  --color-accountCreated: var(--color-indigo-400);
  --color-inviteSent: var(--color-indigo-500);
  --color-savedReport: var(--color-indigo-600);
  --color-weekFourRetained: var(--color-indigo-700);
}
`}</style>
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                            <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                              <div className="recharts-wrapper" width="959" height="250" style={{position: "relative", cursor: "default", width: "959px", height: "250px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" role="application" tabIndex="0" width="959" height="250" viewBox="0 0 959 250" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                    <g className="recharts-cartesian-grid">
                                      <g className="recharts-cartesian-grid-horizontal">
                                        <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="949" height="200" x1="5" y1="210" x2="954" y2="210"></line>
                                        <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="949" height="200" x1="5" y1="160" x2="954" y2="160"></line>
                                        <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="949" height="200" x1="5" y1="110" x2="954" y2="110"></line>
                                        <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="949" height="200" x1="5" y1="60" x2="954" y2="60"></line>
                                        <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="5" y="10" width="949" height="200" x1="5" y1="10" x2="954" y2="10"></line>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts103-clip">
                                      <rect x="5" y="10" height="200" width="949"></rect>
                                    </clippath>
                                  </defs>
                                  <defs>
                                    <lineargradient id="fillAccountCreated" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-accountCreated)" stopOpacity="0.8"></stop>
                                      <stop offset="95%" stopColor="var(--color-accountCreated)" stopOpacity="0.1"></stop>
                                    </lineargradient>
                                    <lineargradient id="fillInviteSent" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-inviteSent)" stopOpacity="0.8"></stop>
                                      <stop offset="95%" stopColor="var(--color-inviteSent)" stopOpacity="0.1"></stop>
                                    </lineargradient>
                                    <lineargradient id="fillSavedReport" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-savedReport)" stopOpacity="0.8"></stop>
                                      <stop offset="95%" stopColor="var(--color-savedReport)" stopOpacity="0.1"></stop>
                                    </lineargradient>
                                    <lineargradient id="fillWeekFourRetained" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="5%" stopColor="var(--color-weekFourRetained)" stopOpacity="0.8"></stop>
                                      <stop offset="95%" stopColor="var(--color-weekFourRetained)" stopOpacity="0.1"></stop>
                                    </lineargradient>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_h5_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillWeekFourRetained)" fillOpacity="0.6" height="200" stroke="none" width="949" id="recharts-area-_r_h5_" d="M5,196.32C68.267,195.049,131.533,193.778,194.8,193.56C258.067,193.342,321.333,194.177,384.6,195.84C447.867,197.503,511.133,199.994,574.4,198.96C637.667,197.926,700.933,193.367,764.2,191.24C827.467,189.113,890.733,189.416,954,189.72L954,210C890.733,210,827.467,210,764.2,210C700.933,210,637.667,210,574.4,210C511.133,210,447.867,210,384.6,210C321.333,210,258.067,210,194.8,210C131.533,210,68.267,210,5,210Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-weekFourRetained)" width="949" d="M5,196.32C68.267,195.049,131.533,193.778,194.8,193.56C258.067,193.342,321.333,194.177,384.6,195.84C447.867,197.503,511.133,199.994,574.4,198.96C637.667,197.926,700.933,193.367,764.2,191.24C827.467,189.113,890.733,189.416,954,189.72"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_h6_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillSavedReport)" fillOpacity="0.6" height="200" stroke="none" width="949" id="recharts-area-_r_h6_" d="M5,171.04C68.267,167.458,131.533,163.877,194.8,163.32C258.067,162.763,321.333,165.232,384.6,169.88C447.867,174.528,511.133,181.356,574.4,178.64C637.667,175.924,700.933,163.664,764.2,157.96C827.467,152.256,890.733,153.108,954,153.96L954,189.72C890.733,189.416,827.467,189.113,764.2,191.24C700.933,193.367,637.667,197.926,574.4,198.96C511.133,199.994,447.867,197.503,384.6,195.84C321.333,194.177,258.067,193.342,194.8,193.56C131.533,193.778,68.267,195.049,5,196.32Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-savedReport)" width="949" d="M5,171.04C68.267,167.458,131.533,163.877,194.8,163.32C258.067,162.763,321.333,165.232,384.6,169.88C447.867,174.528,511.133,181.356,574.4,178.64C637.667,175.924,700.933,163.664,764.2,157.96C827.467,152.256,890.733,153.108,954,153.96"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_h7_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillInviteSent)" fillOpacity="0.6" height="200" stroke="none" width="949" id="recharts-area-_r_h7_" d="M5,131.44C68.267,125.115,131.533,118.789,194.8,117.44C258.067,116.091,321.333,119.718,384.6,127.76C447.867,135.802,511.133,148.261,574.4,143.8C637.667,139.339,700.933,117.96,764.2,108.04C827.467,98.12,890.733,99.66,954,101.2L954,153.96C890.733,153.108,827.467,152.256,764.2,157.96C700.933,163.664,637.667,175.924,574.4,178.64C511.133,181.356,447.867,174.528,384.6,169.88C321.333,165.232,258.067,162.763,194.8,163.32C131.533,163.877,68.267,167.458,5,171.04Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-inviteSent)" width="949" d="M5,131.44C68.267,125.115,131.533,118.789,194.8,117.44C258.067,116.091,321.333,119.718,384.6,127.76C447.867,135.802,511.133,148.261,574.4,143.8C637.667,139.339,700.933,117.96,764.2,108.04C827.467,98.12,890.733,99.66,954,101.2"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_h8_)">
                                          <g className="recharts-layer">
                                            <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#fillAccountCreated)" fillOpacity="0.6" height="200" stroke="none" width="949" id="recharts-area-_r_h8_" d="M5,74.64C68.267,65.548,131.533,56.455,194.8,54.28C258.067,52.105,321.333,56.847,384.6,68.24C447.867,79.633,511.133,97.677,574.4,91.44C637.667,85.203,700.933,54.687,764.2,40.36C827.467,26.033,890.733,27.897,954,29.76L954,101.2C890.733,99.66,827.467,98.12,764.2,108.04C700.933,117.96,637.667,139.339,574.4,143.8C511.133,148.261,447.867,135.802,384.6,127.76C321.333,119.718,258.067,116.091,194.8,117.44C131.533,118.789,68.267,125.115,5,131.44Z"></path>
                                            <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="200" stroke="var(--color-accountCreated)" width="949" d="M5,74.64C68.267,65.548,131.533,56.455,194.8,54.28C258.067,52.105,321.333,56.847,384.6,68.24C447.867,79.633,511.133,97.677,574.4,91.44C637.667,85.203,700.933,54.687,764.2,40.36C827.467,26.033,890.733,27.897,954,29.76"></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_500" tabIndex="-1">
                                    <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                      <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                        <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                          <g className="recharts-cartesian-axis-tick recharts-layer"></g>
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
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="949" stroke="none" fontSize="12" x="194.8" y="226" textAnchor="middle" fill="#666">
                                          <tspan x="194.8" dy="0.71em">
                                            W2
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="949" stroke="none" fontSize="12" x="384.6" y="226" textAnchor="middle" fill="#666">
                                          <tspan x="384.6" dy="0.71em">
                                            W3
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="949" stroke="none" fontSize="12" x="574.4000000000001" y="226" textAnchor="middle" fill="#666">
                                          <tspan x="574.4000000000001" dy="0.71em">
                                            W4
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="949" stroke="none" fontSize="12" x="764.2" y="226" textAnchor="middle" fill="#666">
                                          <tspan x="764.2" dy="0.71em">
                                            W5
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="949" stroke="none" fontSize="12" x="949.3671875" y="226" textAnchor="middle" fill="#666">
                                          <tspan x="949.3671875" dy="0.71em">
                                            W6
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
                  </div>
                  <div className="@5xl:col-span-4 flex h-full">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                      <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
                        <div className="flex gap-2 items-center">
                          <h2 className="font-semibold text-sm">
                            Segment Mix
                          </h2>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                            <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            <span>
                              +8.6%
                            </span>
                          </Badge>
                        </div>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                          Export
                        </Button>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col gap-6 rounded-(--frame-radius)">
                        <div className="flex flex-1 flex-col gap-6">
                          <div className="flex gap-3 items-center px-2">
                            <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5 text-sm" variant="default" size="default">
                              <ItemMedia className="[&_svg:not([class*='size-']):not([class~='w-auto'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                </svg>
                              </ItemMedia>
                            </Item>
                            <div>
                              <div className="font-medium text-muted-foreground text-sm">
                                Activated Workspaces
                              </div>
                              <div className="font-bold text-2xl">
                                976
                              </div>
                            </div>
                          </div>
                          <Tabs className="gap-2 w-full" data-orientation="horizontal" activationDirection="none">
                            <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_fv_" compositeItemActive="">
                                5D
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_g0_">
                                2W
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_g1_">
                                1M
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square flex justify-center max-h-[200px] mt-auto mx-auto overflow-visible text-xs w-full" data-chart="chart-_r_g2_">
                            <style>{`
 [data-chart=chart-_r_g2_] {
  --color-organic: var(--color-blue-500);
  --color-partner: var(--color-sky-500);
  --color-sales: var(--color-orange-500);
  --color-imported: var(--color-indigo-500);
  --color-dormant: var(--color-slate-500);
}


.dark [data-chart=chart-_r_g2_] {
  --color-organic: var(--color-blue-500);
  --color-partner: var(--color-sky-500);
  --color-sales: var(--color-orange-500);
  --color-imported: var(--color-indigo-500);
  --color-dormant: var(--color-slate-500);
}
`}</style>
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                <div className="overflow-visible recharts-wrapper" width="959" height="200" style={{position: "relative", cursor: "default", width: "959px", height: "200px"}}>
                                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                  <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="959" height="200" viewBox="0 0 959 200" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts104-clip">
                                        <rect x="5" y="5" height="190" width="949"></rect>
                                      </clippath>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-layer recharts-pie" tabIndex="0">
                                        <g className="recharts-layer">
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="479.5" cy="100" fill="var(--color-blue-500)" name="organic" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_h9_" d={"M 571.1515,100\n    A8,8,0,0,0,579.1212,91.3043\n    A100,100,0,0,0,446.8634,5.4757\n    A8,8,0,0,0,442.1681,16.2962\n  L462.2908,61.4145\n      A8,8,0,0,0,471.4395,65.9408\n      A35,35,0,0,1,513.8889,93.4884\n      A8,8,0,0,0,521.7493,100Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="479.5" cy="100" fill="var(--color-sky-500)" name="partner" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_h9_" d={"M 439.2696,17.6501\n    A8,8,0,0,0,427.9581,14.3061\n    A100,100,0,0,0,385.1001,132.9947\n    A8,8,0,0,0,395.9383,137.649\n  L440.98,117.3553\n      A8,8,0,0,0,445.4716,108.1896\n      A35,35,0,0,1,458.5542,71.9594\n      A8,8,0,0,0,460.9547,62.0386Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="479.5" cy="100" fill="var(--color-orange-500)" name="sales" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_h9_" d={"M 397.3032,140.5423\n    A8,8,0,0,0,394.0022,151.8663\n    A100,100,0,0,0,474.7007,199.8848\n    A8,8,0,0,0,483.0786,191.5816\n  L481.1496,142.217\n      A8,8,0,0,0,474.3361,134.617\n      A35,35,0,0,1,451.539,121.0519\n      A8,8,0,0,0,441.6091,118.6891Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="479.5" cy="100" fill="var(--color-indigo-500)" name="imported" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_h9_" d={"M 486.2725,191.4009\n    A8,8,0,0,0,495.5333,198.7063\n    A100,100,0,0,0,560.1521,159.1206\n    A8,8,0,0,0,557.8506,147.552\n  L515.6178,121.9204\n      A8,8,0,0,0,505.5198,123.4088\n      A35,35,0,0,1,488.535,133.8137\n      A8,8,0,0,0,482.622,142.1338Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="479.5" cy="100" fill="var(--color-slate-500)" name="dormant" tabIndex="-1" data-recharts-item-index="4" data-recharts-item-id="recharts-pie-_r_h9_" d={"M 559.4624,144.7886\n    A8,8,0,0,0,570.665,141.0966\n    A100,100,0,0,0,578.7571,112.1671\n    A8,8,0,0,0,571.0957,103.1986\n  L521.7235,101.4745\n      A8,8,0,0,0,513.6407,107.7078\n      A35,35,0,0,1,512.6851,111.1242\n      A8,8,0,0,0,516.3608,120.6465Z"}></path>
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
                                    <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                      <g className="recharts-label-list recharts-layer">
                                        <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="516.244910993398" y="43.3779061135385" textAnchor="middle" fill="white">
                                          <tspan x="516.244910993398" dy="0.355em">
                                            318
                                          </tspan>
                                        </text>
                                        <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="416.01232921181935" y="77.07478118116218" textAnchor="middle" fill="white">
                                          <tspan x="416.01232921181935" dy="0.355em">
                                            246
                                          </tspan>
                                        </text>
                                        <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="444.9835673341358" y="158.00746396820725" textAnchor="middle" fill="white">
                                          <tspan x="444.9835673341358" dy="0.355em">
                                            184
                                          </tspan>
                                        </text>
                                        <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="514.7604192080333" y="157.5582560305101" textAnchor="middle" fill="white">
                                          <tspan x="514.7604192080333" dy="0.355em">
                                            152
                                          </tspan>
                                        </text>
                                        <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="544.5048964632981" y="118.1827785499328" textAnchor="middle" fill="white">
                                          <tspan x="544.5048964632981" dy="0.355em">
                                            76
                                          </tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center px-2 text-muted-foreground text-xs">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                            <span>
                              Mix reflects retained workspaces in the active cohort.
                            </span>
                          </div>
                        </div>
                      </FramePanel>
                    </Frame>
                  </div>
                </div>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                  <header className="flex flex-col gap-3 items-start px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h2 className="font-semibold text-sm">
                        Stage Breakdown
                      </h2>
                      <div className="text-muted-foreground text-pretty text-xs">
                        Segment cohorts by invite, report, and retained usage.
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center shrink-0 sm:w-auto w-full">
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-0 pl-2.5 pr-2 py-2 rounded-lg select-none sm:flex-none sm:min-w-[170px] text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_r_g3_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          All Segments
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_g3_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                        <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                        Export
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        New segment
                      </Button>
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] p-0! rounded-(--frame-radius) shadow-none!">
                    <div className="relative">
                      <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_g6_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "145px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                            <DataGridTableViewport style={{width: "calc(1136px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                              <DataGridTable style={{"--header-segment-size": "260", "--col-segment-size": "260", "--header-owner-size": "160", "--col-owner-size": "160", "--header-inviteSent-size": "130", "--col-inviteSent-size": "130", "--header-savedReport-size": "150", "--col-savedReport-size": "150", "--header-weekFourRetained-size": "140", "--col-weekFourRetained-size": "140", "--header-risk-size": "120", "--col-risk-size": "120", "--header-updatedAt-size": "120", "--col-updatedAt-size": "120", "--header-actions-size": "56", "--col-actions-size": "56", width: "calc(1136px + var(--data-grid-fill-size, 0px))"}}>
                                <colgroup>
                                  <col style={{width: "calc(var(--col-segment-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-inviteSent-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-savedReport-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-risk-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-updatedAt-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                  <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                </colgroup>
                                <thead>
                                  <tr className="[&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible ps-5 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-segment-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Segment
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden lg:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Owner
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "calc(var(--header-inviteSent-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Invites
                                          <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M12 5v14"></path>
                                            <path d="m19 12-7 7-7-7"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden md:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-savedReport-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Saved Reports
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden overflow-visible px-2 relative rtl:text-right text-foreground text-left xl:table-cell" scope="col" style={{width: "calc(var(--header-weekFourRetained-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          W4 Retained
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden md:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-risk-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Risk
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 hidden lg:table-cell overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-updatedAt-size) * 1px)"}}>
                                      <div className="-ms-2 flex h-full items-center">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                          Updated
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </Button>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-5 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}>
                                      <span className="sr-only">
                                        Actions
                                      </span>
                                    </th>
                                    <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                  </tr>
                                </thead>
                                <DataGridTableBody>
                                  <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="0">
                                    <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          Trial workspaces over 20 seats
                                        </span>
                                        <span className="text-muted-foreground text-xs truncate">
                                          SEG-307 - May activation cohort
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="text-muted-foreground text-sm truncate">
                                          Mira Stone
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          1,046
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          73%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          721
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          50%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          418
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          29%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        Healthy
                                      </Badge>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        8 min ago
                                      </span>
                                    </td>
                                    <td className="align-middle pe-5 px-2 py-1.5 text-end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Segment actions" aria-haspopup="menu" id="base-ui-_r_ga_" aria-expanded="false">
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
                                  <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                                    <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          Invite driven teams
                                        </span>
                                        <span className="text-muted-foreground text-xs truncate">
                                          COH-071 - Q3 onboarding accounts
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="text-muted-foreground text-sm truncate">
                                          Leo Grant
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          902
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          76%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          534
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          45%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          286
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          24%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Watch
                                      </Badge>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        18 min ago
                                      </span>
                                    </td>
                                    <td className="align-middle pe-5 px-2 py-1.5 text-end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Segment actions" aria-haspopup="menu" id="base-ui-_r_gf_" aria-expanded="false">
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
                                  <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                                    <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          Expansion accounts with automation
                                        </span>
                                        <span className="text-muted-foreground text-xs truncate">
                                          MET-609 - Automation trial cohort
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="text-muted-foreground text-sm truncate">
                                          Nora Vale
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          688
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          71%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          462
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          48%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          301
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          31%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        Healthy
                                      </Badge>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        24 min ago
                                      </span>
                                    </td>
                                    <td className="align-middle pe-5 px-2 py-1.5 text-end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Segment actions" aria-haspopup="menu" id="base-ui-_r_gk_" aria-expanded="false">
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
                                  <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                                    <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          Template gallery default
                                        </span>
                                        <span className="text-muted-foreground text-xs truncate">
                                          EXP-224 - Invite copy refresh
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="text-muted-foreground text-sm truncate">
                                          Theo Park
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          548
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          74%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          388
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          53%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          214
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          29%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Watch
                                      </Badge>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        1 hr ago
                                      </span>
                                    </td>
                                    <td className="align-middle pe-5 px-2 py-1.5 text-end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Segment actions" aria-haspopup="menu" id="base-ui-_r_gp_" aria-expanded="false">
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
                                  <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                                    <td className="align-middle ps-5 px-2 py-1.5 truncate" style={{width: "calc(var(--col-segment-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          Dormant admins
                                        </span>
                                        <span className="text-muted-foreground text-xs truncate">
                                          EVT-1842 - Checklist nudge exposure
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="text-muted-foreground text-sm truncate">
                                          Sana Qureshi
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-inviteSent-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          486
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          58%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-savedReport-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          248
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          29%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden px-2 py-1.5 truncate xl:table-cell" style={{width: "calc(var(--col-weekFourRetained-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          118
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          14%
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle hidden md:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-risk-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        Drop Off
                                      </Badge>
                                    </td>
                                    <td className="align-middle hidden lg:table-cell px-2 py-1.5 truncate" style={{width: "calc(var(--col-updatedAt-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        42 min ago
                                      </span>
                                    </td>
                                    <td className="align-middle pe-5 px-2 py-1.5 text-end" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Segment actions" aria-haspopup="menu" id="base-ui-_r_gu_" aria-expanded="false">
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
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_g6_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "862.7632042253522px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                    </div>
                  </FramePanel>
                  <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <DataGridPagination>
                      <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                        <div className="text-muted-foreground text-sm">
                          Rows per page
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_h0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                          <SelectValue className="flex flex-1 text-left">
                            5
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_h0_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          1 - 5 of 6
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
      W1
    </span>
  </>
  )
}
