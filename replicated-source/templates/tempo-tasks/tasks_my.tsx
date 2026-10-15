import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  GanttNavNext,
  GanttNavPrev,
  GanttNavToday,
  GanttScaleSwitcher,
} from "@/registry-neui/bases/base/neui/gantt/gantt-nav"
import { GanttBar } from "@/registry-neui/bases/radix/neui/gantt/gantt-bar"
import {
  GanttTitle,
  GanttToolbar,
} from "@/registry-neui/bases/radix/neui/gantt/gantt-nav"
import { GanttView } from "@/registry-neui/bases/radix/neui/gantt/gantt-view"
import { Gantt } from "@/registry-neui/bases/radix/neui/gantt/gantt"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/base/ui/button-group"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <a className="-translate-y-16 bg-background border border-border fixed focus:translate-y-0 font-medium px-3 py-2 rounded-md shadow-xs start-2 text-sm top-2 whitespace-nowrap z-50" href="#main-content">
      {"Skip to main content"}
    </a>
    <SidebarProvider>
    <div className="**:data-[slot=sidebar-menu-button]:hover:bg-zinc-800! **:data-[slot=sidebar-menu-button]:hover:text-zinc-100 **:data-[slot=sidebar-menu-button]:text-zinc-400 **:data-[slot=sidebar-menu-sub-button]:hover:bg-zinc-800! **:data-[slot=sidebar-menu-sub-button]:hover:text-zinc-100 **:data-[slot=sidebar-menu-sub-button]:text-zinc-400 [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-50 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-white [&_[data-slot=sidebar-menu-button][data-active]]:bg-zinc-800! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-zinc-800! [&_[data-slot=sidebar-menu-button][data-active]]:text-zinc-50 [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-50 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-white [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-zinc-800! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-zinc-800! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-zinc-50 flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "250px", "--sidebar-width-icon": "3rem", "--header-height": "50px", "--sidebar": "var(--color-zinc-900)", "--sidebar-foreground": "var(--color-zinc-100)", "--sidebar-border": "color-mix(in oklab, var(--color-zinc-700) 60%, transparent)", "--sidebar-accent": "var(--color-zinc-800)", "--sidebar-accent-foreground": "var(--color-zinc-100)", "--sidebar-primary": "var(--color-zinc-100)", "--sidebar-primary-foreground": "var(--color-zinc-900)", "--sidebar-ring": "var(--color-zinc-500)"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="dark data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between p-2" sidebar="header">
              <div className="duration-200 ease-linear gap-2 inline-flex items-center min-h-10 px-0.5 transition-all">
                <span className="flex items-center justify-center relative shrink-0 size-7 text-white">
                  <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-[0.875] size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="[&_svg:not([class*='size-']):not([class~='w-auto'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
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
              <div className="gap-0.5 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:mx-auto inline-flex items-center">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:[&_svg]:opacity-100 hover:bg-zinc-700 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm text-zinc-200 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications, 5 unread" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                  <span className="absolute bg-zinc-100 right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
              </div>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <div className="py-2">
                <form>
                  <SidebarProvider>
                  <SidebarGroup className="p-2 py-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-zinc-800 border border-border border-none dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:bg-zinc-700 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:text-white font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-zinc-700 hover:text-white in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:w-8! justify-start overflow-hidden pl-7 px-2.5 rounded-lg text-sm transition-[width,padding] w-full" type="button" tabIndex={0} id="search" aria-label="Search">
                        <span className="duration-200 ease-linear in-data-[state=collapsed]:opacity-0 opacity-100 transition-opacity whitespace-nowrap">
                          {"Search..."}
                        </span>
                      </Button>
                      <svg className="-translate-y-1/2 absolute duration-200 ease-linear in-data-[state=collapsed]:left-[9px] left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2 transition-[left]" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx={11} cy={11} r={8}></circle>
                      </svg>
                      <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-zinc-700 dark:in-data-[slot=tooltip-content]:bg-background/10 duration-200 ease-linear font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:opacity-0 min-w-5 opacity-100 px-1 right-2 rounded-sm text-xs text-zinc-200 top-1/2 transition-opacity w-fit">
                        {"⌘K"}
                      </Kbd>
                    </SidebarGroupContent>
                    </SidebarProvider>
                  </SidebarGroup>
                  </SidebarProvider>
                </form>
              </div>
              <nav className="flex flex-col" aria-label="Main">
                <SidebarProvider>
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                    {"Platform"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/home">
                          <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          <span>
                            {"Home"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="subnav-tasks" data-active="">
                          <svg className="lucide lucide-list-todo" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M13 5h8"></path>
                            <path d="M13 12h8"></path>
                            <path d="M13 19h8"></path>
                            <path d="m3 17 2 2 4-4"></path>
                            <rect x={3} y={4} width={6} height={6} rx={1}></rect>
                          </svg>
                          <span>
                            {"Tasks"}
                          </span>
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                        </SidebarProvider>
                        <SidebarMenuSub className="border-l border-sidebar-border gap-1 group-data-[collapsible=icon]:hidden mx-3.5 px-2.5 py-0.5 translate-x-px" sidebar="menu-sub" id="subnav-tasks">
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" data-active="" href="/tasks/my" status="active" aria-current="page">
                              {"My tasks"}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/team">
                              {"Team tasks"}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/board">
                              {"Board"}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem sidebar="menu-sub-item">
                            <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/tasks/calendar">
                              {"Calendar"}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-reports">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <span>
                            {"Reports"}
                          </span>
                          <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                          <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                            <circle cx={12} cy={12} r={3}></circle>
                          </svg>
                          <span>
                            {"Settings"}
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
                <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="saved-views-list" sidebar="group-label">
                    {"Saved Views"}
                    <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent className="text-sm" sidebar="group-content" id="saved-views-list">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/my" status="active" aria-current="page">
                          <svg className="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <circle cx={12} cy={10} r={3}></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            {"Assigned to me"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                            {"12"}
                          </Badge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/board">
                          <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                            <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                            <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                            <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            {"Active sprint"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-info-foreground text-xs transition-shadow">
                            {"24"}
                          </Badge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tasks/calendar">
                          <svg className="lucide lucide-calendar-days" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                            <path d="M3 10h18"></path>
                            <path d="M8 14h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 18h.01"></path>
                            <path d="M12 18h.01"></path>
                            <path d="M16 18h.01"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            {"Week ahead"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-warning-foreground text-xs transition-shadow">
                            {"8"}
                          </Badge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports/activity">
                          <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                          <span className="flex-1 min-w-0 text-sm truncate">
                            {"Recent activity"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                            {"4"}
                          </Badge>
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
              </nav>
              <div className="mt-auto">
                <SidebarProvider>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden p-2" sidebar="group">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] bg-zinc-900/90 border-zinc-700 md:w-[230px] mx-auto overflow-hidden shrink-0" spacing="sm">
                    <header className="bg-zinc-900/90 flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <h2 className="font-semibold text-warning text-xs">
                        {"Usage Limit"}
                      </h2>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] bg-zinc-900/80 border-zinc-700 rounded-(--frame-radius) space-y-3 text-zinc-100">
                      <p className="leading-snug text-xs text-zinc-400">
                        {"Your usage resets at the end of the month"}
                      </p>
                      <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                        <div className="absolute inset-0 opacity-20 pointer-events-none text-white" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" aria-valuetext="82%" role="progressbar">
                          <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                            <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "82%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                      </div>
                      <div className="flex items-center justify-between leading-none text-xs text-zinc-300">
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-zinc-100">
                            {"82%"}
                          </span>
                          <span className="text-zinc-400">
                            {"Used"}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <span className="font-semibold text-zinc-100">
                            {"18%"}
                          </span>
                          <span className="text-zinc-400">
                            {"Free"}
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-2 p-2 pb-2" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:-ml-1! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button pr-0! ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open workspace menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Claude" src="https://github.com/claude.png"></AvatarImage>
                    </Avatar>
                    <span className="font-medium text-sm truncate">
                      {"Claude"}
                    </span>
                    <svg className="lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed group/rail h-12 hidden items-center md:flex outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
      <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm min-h-svh ml-0! overflow-y-auto">
        <header className="bg-background flex gap-2 h-(--header-height) items-center px-4.5 shrink-0 sticky top-0 z-20">
          <div className="flex gap-2 items-center">
            <SidebarProvider>
            <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1 hidden md:flex">
                  <BreadcrumbLink className="active hover:text-foreground transition-colors" href="/tasks" status="active" aria-current="page">
                    {"Tasks"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden items-center md:flex" role="presentation" aria-hidden="true">
                  <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1">
                  <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                    {"My tasks"}
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
            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="More options" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Open context panel" aria-expanded="false">
              <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M15 3v18"></path>
              </svg>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4.5 isolate pb-4.5 px-4.5">
          <div className="flex flex-1 flex-col gap-4.5 outline-none" id="main-content" tabIndex={-1}>
            <div className="flex flex-1 flex-col min-h-0" aria-labelledby="page-heading">
              <h1 className="sr-only" id="page-heading">
                {"My tasks"}
              </h1>
              <div className="bg-background flex flex-col h-full w-full">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] flex-1 min-h-0">
                  <Gantt className="flex-1">
                    <header className="flex flex-row flex-wrap gap-2 items-center px-3 py-(--frame-panel-header-py)">
                      <GanttNavToday className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex={0} id="base-ui-_r_43_" baseUiTooltipTrigger="">
                        {"Today"}
                      </GanttNavToday>
                      <GanttScaleSwitcher className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Select view" id="base-ui-_r_48_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                        {"Month"}
                        <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </GanttScaleSwitcher>
                      <div className="flex items-center">
                        <GanttNavPrev className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Previous" id="base-ui-_r_4c_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </GanttNavPrev>
                        <GanttNavNext className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Next" id="base-ui-_r_4e_" baseUiTooltipTrigger="">
                          <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </GanttNavNext>
                      </div>
                      <GanttTitle aria-live="polite">
                        {"July 2026"}
                      </GanttTitle>
                      <div className="grow"></div>
                      <GanttToolbar>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter by assignee" baseUiClickTrigger="" id="base-ui-_r_4g_" aria-haspopup="dialog" aria-expanded="false">
                          <AvatarGroup className="-space-x-1.5">
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                              <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                              <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                              <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                              <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-5 text-[10px] text-muted-foreground">
                              {"+1"}
                            </AvatarGroupCount>
                          </AvatarGroup>
                        </PopoverTrigger>
                        </Popover>
                        <ButtonGroup className="**:data-[slot=button]:border-r-0 [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0}>
                            <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            {"Add Task"}
                          </Button>
                          <ButtonGroupSeparator className="bg-primary/72 data-horizontal:h-px data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="vertical" role="separator" aria-orientation="vertical"></ButtonGroupSeparator>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-l border-primary-foreground/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-primary/80 inline-flex items-center justify-center outline-none rounded-l-none rounded-lg select-none shrink-0 size-8 text-primary-foreground text-sm transition-all w-7! whitespace-nowrap" type="button" tabIndex={0} aria-label="More create options" aria-haspopup="menu" id="base-ui-_r_4k_" aria-expanded="false">
                            <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </ButtonGroup>
                      </GanttToolbar>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col min-h-0 p-0! rounded-(--frame-radius) shadow-none!">
                      <GanttView scale="month">
                        <div className="flex flex-1 min-h-0 relative">
                          <div className="h-full relative shrink-0" style={{width: "520px"}}>
                            <ScrollArea className="[&>[data-orientation=vertical]]:hidden h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_4m_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <div role="presentation" style={{minWidth: "fit-content"}}>
                                  <div className="flex flex-col min-h-full min-w-full pb-2.5 w-max">
                                    <div className="bg-background border-b border-b-transparent box-content h-16 shrink-0 sticky top-0 z-30">
                                      <div className="border-b flex h-8">
                                        <div className="flex flex-1 h-full min-w-0">
                                          <div className="flex h-full items-center shrink-0" style={{width: "208px", paddingInlineStart: "3.125rem"}}>
                                            <span className="font-medium text-muted-foreground truncate">
                                              {"Name"}
                                            </span>
                                          </div>
                                          <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="status" style={{width: "96px"}}>
                                            <span className="truncate">
                                              {"Status"}
                                            </span>
                                          </div>
                                          <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="assignee" style={{width: "72px"}}>
                                            <span className="truncate">
                                              {"Assignee"}
                                            </span>
                                          </div>
                                          <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="due" style={{width: "72px"}}>
                                            <span className="truncate">
                                              {"Due date"}
                                            </span>
                                          </div>
                                          <div className="flex font-medium h-full items-center px-2 shrink-0 text-muted-foreground" data-column="actions" style={{width: "32px"}}>
                                            <span className="truncate"></span>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                        <div className="before:-start-5 before:absolute before:bg-linear-to-l before:from-background before:inset-y-0 before:pointer-events-none before:to-transparent before:w-5 bg-background end-0 flex h-full items-center pe-2.5 ps-1.5 rtl:before:bg-linear-to-r shrink-0 sticky z-10">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Add or remove columns" aria-haspopup="menu" id="base-ui-_r_4r_" baseUiTooltipTrigger="" aria-expanded="false">
                                            <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M5 12h14"></path>
                                              <path d="M12 5v14"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="bug-tracking" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:bg-transparent! aria-expanded:text-foreground aria-expanded:text-muted-foreground! aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground hover:text-foreground! in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] size-5! size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-expanded="true" aria-label="Bug Tracking">
                                                  <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                                </Button>
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <svg className="lucide lucide-list-checks shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="M13 5h8"></path>
                                                  <path d="M13 12h8"></path>
                                                  <path d="M13 19h8"></path>
                                                  <path d="m3 17 2 2 4-4"></path>
                                                  <path d="m3 7 2 2 4-4"></path>
                                                </svg>
                                                <span className="truncate">
                                                  {"Bug Tracking"}
                                                </span>
                                                <Tooltip>
                                                <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="49% complete" id="base-ui-_r_4v_" baseUiTooltipTrigger="">
                                                  <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={28.8398205599543} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                </TooltipTrigger>
                                                </Tooltip>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Bug Tracking" aria-haspopup="menu" id="base-ui-_r_53_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="login-redirect" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_55_" aria-checked="false" aria-label="Login redirect"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Login redirect"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                                {"Done"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone, Leo Grant" id="base-ui-_r_59_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 14"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Login redirect" aria-haspopup="menu" id="base-ui-_r_5d_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="access-rules" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5f_" aria-checked="false" aria-label="Access rules"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Access rules"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                                {"In Progress"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant" id="base-ui-_r_5j_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 19"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Access rules" aria-haspopup="menu" id="base-ui-_r_5n_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="mobile-crash" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:bg-transparent! aria-expanded:text-foreground aria-expanded:text-muted-foreground! aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground hover:text-foreground! in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] size-5! size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-expanded="true" aria-label="Mobile crash">
                                                  <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                                </Button>
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Mobile crash"}
                                                </span>
                                                <Tooltip>
                                                <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="27% complete" id="base-ui-_r_5q_" baseUiTooltipTrigger="">
                                                  <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={41.28052746816988} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                </TooltipTrigger>
                                                </Tooltip>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                                {"In Progress"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone, Nora Vale, Theo Park" id="base-ui-_r_5s_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Mobile crash" aria-haspopup="menu" id="base-ui-_r_60_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="crash-ios" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "1.75rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_62_" aria-checked="false" aria-label="iOS audit"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"iOS audit"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                                {"In Progress"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Nora Vale" id="base-ui-_r_66_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 20"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for iOS audit" aria-haspopup="menu" id="base-ui-_r_6a_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="crash-android" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "1.75rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6c_" aria-checked="false" aria-label="Android audit"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Android audit"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 25"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Android audit" aria-haspopup="menu" id="base-ui-_r_6i_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="button-text" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6k_" aria-checked="false" aria-label="Button truncation"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Button truncation"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                                                {"Review"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Theo Park" id="base-ui-_r_6o_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-destructive truncate">
                                                {"Jul 14"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Button truncation" aria-haspopup="menu" id="base-ui-_r_6s_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="offline-sync" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6u_" aria-checked="false" aria-label="Offline sync"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Offline sync"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant, Theo Park" id="base-ui-_r_72_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 27"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Offline sync" aria-haspopup="menu" id="base-ui-_r_76_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="api-keys" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_78_" aria-checked="false" aria-label="API key rotation"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"API key rotation"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                                                {"Done"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Nora Vale" id="base-ui-_r_7c_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 14"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for API key rotation" aria-haspopup="menu" id="base-ui-_r_7g_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="session-replay" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_7i_" aria-checked="false" aria-label="Session replay"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Session replay"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Session replay" aria-haspopup="menu" id="base-ui-_r_7o_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="release-24" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex font-medium items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:bg-transparent! aria-expanded:text-foreground aria-expanded:text-muted-foreground! aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground hover:text-foreground! in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),10px)] size-5! size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-expanded="true" aria-label="Release 2.4">
                                                  <svg className="lucide lucide-chevron-right rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                  </svg>
                                                </Button>
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <svg className="lucide lucide-list-checks shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <path d="M13 5h8"></path>
                                                  <path d="M13 12h8"></path>
                                                  <path d="M13 19h8"></path>
                                                  <path d="m3 17 2 2 4-4"></path>
                                                  <path d="m3 7 2 2 4-4"></path>
                                                </svg>
                                                <span className="truncate">
                                                  {"Release 2.4"}
                                                </span>
                                                <Tooltip>
                                                <TooltipTrigger className="inline-flex ms-0.5" role="img" aria-label="21% complete" id="base-ui-_r_7r_" baseUiTooltipTrigger="">
                                                  <svg className="shrink-0 size-4 text-primary" viewBox="0 0 24 24" aria-hidden="true">
                                                    <circle className="stroke-border" cx={12} cy={12} r={9} fill="none" strokeWidth={3}></circle>
                                                    <circle className="stroke-current" cx={12} cy={12} r={9} fill="none" strokeWidth={3} strokeLinecap="round" strokeDasharray={56.548667764616276} strokeDashoffset={44.67344753404686} transform="rotate(-90 12 12)"></circle>
                                                  </svg>
                                                </TooltipTrigger>
                                                </Tooltip>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Release 2.4" aria-haspopup="menu" id="base-ui-_r_7v_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="data-export" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_81_" aria-checked="false" aria-label="Data export"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Data export"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-info-foreground text-xs transition-shadow">
                                                {"In Progress"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Theo Park, Mira Stone" id="base-ui-_r_85_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 22"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Data export" aria-haspopup="menu" id="base-ui-_r_89_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="form-validation" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_8b_" aria-checked="false" aria-label="Form validation"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Form validation"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Mira Stone" id="base-ui-_r_8f_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 27"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Form validation" aria-haspopup="menu" id="base-ui-_r_8j_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="nav-focus" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_8l_" aria-checked="false" aria-label="Nav focus"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Nav focus"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 28"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Nav focus" aria-haspopup="menu" id="base-ui-_r_8r_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="perf-audit" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_8t_" aria-checked="false" aria-label="Perf audit"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Perf audit"}
                                                </span>
                                                <svg className="lucide lucide-lock shrink-0 size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                                                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                                                {"Review"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Tooltip>
                                              <TooltipTrigger className="inline-flex" role="img" aria-label="Leo Grant" id="base-ui-_r_91_" baseUiTooltipTrigger="">
                                                <AvatarGroup className="-space-x-1.5">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                </AvatarGroup>
                                              </TooltipTrigger>
                                              </Tooltip>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Jul 22"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Perf audit" aria-haspopup="menu" id="base-ui-_r_95_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="changelog" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_97_" aria-checked="false" aria-label="Changelog"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Changelog"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="text-muted-foreground truncate">
                                                {"Aug 4"}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Changelog" aria-haspopup="menu" id="base-ui-_r_9d_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/40 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 flex group/gantt-row" data-gantt-row-id="release-notes" style={{height: "2.5rem"}}>
                                        <div className="flex h-full min-w-0 w-full">
                                          <div className="flex items-start pe-3 ps-3 shrink-0" style={{width: "208px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <button className="-ms-1.5 cursor-grab flex focus-visible:opacity-100 group-data-hover/gantt-row:opacity-100 group-hover/gantt-row:opacity-100 hover:text-foreground items-center justify-center me-1.5 opacity-0 pointer-coarse:opacity-100 shrink-0 text-muted-foreground/60 touch-none w-3.5" type="button" aria-label="Reorder">
                                                <svg className="lucide lucide-grip-vertical size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={9} cy={12} r={1}></circle>
                                                  <circle cx={9} cy={5} r={1}></circle>
                                                  <circle cx={9} cy={19} r={1}></circle>
                                                  <circle cx={15} cy={12} r={1}></circle>
                                                  <circle cx={15} cy={5} r={1}></circle>
                                                  <circle cx={15} cy={19} r={1}></circle>
                                                </svg>
                                              </button>
                                              <span className="shrink-0" aria-hidden="true" style={{width: "0.875rem"}}></span>
                                              <span className="flex items-center justify-start me-1 shrink-0 w-5">
                                                <span className="after:-inset-x-3 after:-inset-y-2 after:absolute aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 flex focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 group-data-hover/gantt-row:opacity-100 group-has-disabled/field:opacity-50 group-hover/gantt-row:opacity-100 items-center justify-center opacity-0 outline-none peer relative rounded-[4px] shrink-0 size-3.5 transition-opacity" data-unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_9f_" aria-checked="false" aria-label="Release notes"></span>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </span>
                                              <span className="flex gap-1.5 items-center min-w-0">
                                                <span className="bg-transparent border-2 border-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                                <span className="truncate">
                                                  {"Release notes"}
                                                </span>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="status" style={{width: "96px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-xs transition-shadow">
                                                {"Todo"}
                                              </Badge>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="assignee" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <span className="border border-dashed border-muted-foreground/40 rounded-full shrink-0 size-5" role="img" aria-label="Unassigned"></span>
                                            </div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="due" style={{width: "72px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}></div>
                                          </div>
                                          <div className="flex items-start px-2 shrink-0" data-column="actions" style={{width: "32px"}}>
                                            <div className="flex items-center min-w-0 w-full" style={{height: "2.5rem"}}>
                                              <DropdownMenu>
                                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Release notes" aria-haspopup="menu" id="base-ui-_r_9l_" aria-expanded="false">
                                                <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                  <circle cx={12} cy={12} r={1}></circle>
                                                  <circle cx={19} cy={12} r={1}></circle>
                                                  <circle cx={5} cy={12} r={1}></circle>
                                                </svg>
                                              </DropdownMenuTrigger>
                                              </DropdownMenu>
                                            </div>
                                          </div>
                                          <div className="flex-1 min-w-0"></div>
                                        </div>
                                      </div>
                                      <button className="border-b flex h-10 hover:bg-muted/40 hover:text-foreground items-center pe-3 ps-3 shrink-0 text-muted-foreground w-full" type="button">
                                        <span className="flex h-full items-center w-full">
                                          <span className="shrink-0 w-3.5" aria-hidden="true"></span>
                                          <span className="flex items-center justify-center me-1 shrink-0 w-5">
                                            <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M5 12h14"></path>
                                              <path d="M12 5v14"></path>
                                            </svg>
                                          </span>
                                          <span>
                                            {"Add task"}
                                          </span>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ScrollArea>
                            <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
                          </div>
                          <div className="after:-end-1 after:-start-1 after:absolute after:inset-y-0 bg-border cursor-col-resize data-resizing:bg-primary focus-visible:ring-2 focus-visible:ring-ring/50 group/gantt-splitter hover:bg-primary/60 outline-none relative shrink-0 touch-none w-px z-30" role="separator" aria-orientation="vertical" aria-label="Resize panel" aria-valuenow="520" aria-valuemin="180" aria-valuemax="640" tabIndex={0}>
                            <span className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary/60 duration-150 group-data-resizing/gantt-splitter:bg-primary group-data-resizing/gantt-splitter:opacity-100 group-focus-visible/gantt-splitter:opacity-100 group-hover/gantt-splitter:opacity-100 h-6 left-1/2 opacity-0 rounded-full top-1/2 transition-opacity w-0.75" aria-hidden="true"></span>
                          </div>
                          <div className="flex-1 h-full min-w-0 relative">
                            <div className="absolute bg-background border bottom-5 end-3 flex flex-col rounded-md shadow-sm z-40">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] rounded-b-none select-none shrink-0 size-5! size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom in" id="base-ui-_r_9o_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                              <Tooltip>
                              <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-disabled:cursor-not-allowed aria-disabled:hover:bg-transparent aria-disabled:opacity-50 aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-t border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),10px)] rounded-t-none select-none shrink-0 size-5! size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Zoom out" id="base-ui-_r_9q_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-minus size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                            <ScrollArea className="[&>[data-orientation=vertical]]:bottom-4! [&>[data-orientation=vertical]]:h-auto! [&>[data-orientation=vertical]]:top-[65px]! h-full" role="presentation" hasOverflowX="" overflowXStart="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_9r_-viewport" tabIndex={0} data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "2869px", "--scroll-area-overflow-x-end": "2549px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <div className="flex flex-col min-h-full" role="presentation" data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                                  <div className="flex flex-col grow min-h-full min-w-full pb-2.5 w-max">
                                    <div className="bg-background border-b shrink-0 sticky top-0 z-30" style={{minWidth: "368rem"}}>
                                      <div className="border-b h-8 relative">
                                        <div className="flex h-full">
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "6 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W23 May 31 - 6"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W24 Jun 7 - 13"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W25 Jun 14 - 20"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W26 Jun 21 - 27"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W27 Jun 28 - 4"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W28 Jul 5 - 11"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W29 Jul 12 - 18"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W30 Jul 19 - 25"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W31 Jul 26 - 1"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W32 Aug 2 - 8"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W33 Aug 9 - 15"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W34 Aug 16 - 22"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "7 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W35 Aug 23 - 29"}
                                            </span>
                                          </div>
                                          <div className="flex items-center min-w-0 pe-2 ps-3 text-muted-foreground" style={{flex: "2 0 0px"}}>
                                            <span className="max-w-full start-3 sticky truncate">
                                              {"W36 Aug 30 - 5"}
                                            </span>
                                          </div>
                                        </div>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                                      </div>
                                      <div className="h-8 relative" data-gantt-axis="" data-gantt-range-start="1780243200000" data-gantt-range-end="1788192000000" data-gantt-snap="1440">
                                        <div className="absolute inset-0" aria-hidden="true">
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "5.43478%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "6.52174%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "13.0435%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "14.1304%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "20.6522%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "21.7391%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "28.2609%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "29.3478%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "35.8696%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "36.9565%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "43.4783%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "44.5652%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "51.087%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "52.1739%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "58.6957%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "59.7826%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "66.3043%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "67.3913%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "73.913%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "75%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "81.5217%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "82.6087%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "89.1304%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "90.2174%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "96.7391%", width: "1.08696%"}}></span>
                                          <span className="absolute bg-muted/40 inset-y-0" style={{insetInlineStart: "97.8261%", width: "1.08696%"}}></span>
                                        </div>
                                        <div className="flex h-full">
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 1"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 2"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 3"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 4"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 5"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 6"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 7"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 8"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 9"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 10"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 11"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 12"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 13"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 14"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 15"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 16"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 17"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 18"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 19"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 20"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 21"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 22"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 23"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 24"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 25"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 26"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 27"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 28"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 29"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 30"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 1"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 2"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 3"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 4"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 5"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 6"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 7"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 8"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 9"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 10"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 11"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 12"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 13"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 14"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 15"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 16"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 17"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 18"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 19"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 20"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 21"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 22"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 23"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 24"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 25"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 26"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 27"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 28"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 29"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 30"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 31"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 1"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 2"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 3"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 4"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 5"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 6"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 7"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 8"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 9"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 10"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 11"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 12"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 13"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 14"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 15"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 16"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 17"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 18"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 19"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 20"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 21"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 22"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 23"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 24"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Tue 25"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Wed 26"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Thu 27"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Fri 28"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sat 29"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" data-off="true" style={{flex: "1 0 0px"}}>
                                            {"Sun 30"}
                                          </div>
                                          <div className="flex items-center justify-center min-w-0 px-1.5 text-center text-muted-foreground truncate" style={{flex: "1 0 0px"}}>
                                            {"Mon 31"}
                                          </div>
                                        </div>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(1.08696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(2.17391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(3.26087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(4.34783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(5.43478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(7.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(8.69565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(9.78261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(10.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(11.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(13.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(15.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(16.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(17.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(18.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(19.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(20.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(22.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(23.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(26.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(27.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(28.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(30.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(31.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(32.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(33.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(34.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(35.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(38.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(39.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(40.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(41.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(42.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(43.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(45.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(46.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(47.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(48.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(51.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(53.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(54.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(55.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(56.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(57.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(58.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(60.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(61.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(63.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(64.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(65.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(66.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(68.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(69.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(70.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(71.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(72.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(73.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(76.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(77.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(78.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(79.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(80.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(81.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(83.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(84.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(85.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(86.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(88.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(89.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(91.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(92.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(93.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(94.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(95.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(96.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" aria-hidden="true" data-axis="vertical" style={{insetInlineStart: "calc(98.913% - 1px)"}}></span>
                                      </div>
                                    </div>
                                    <div className="flex flex-col grow min-h-0 relative">
                                      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "5.43478%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "6.52174%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "13.0435%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "14.1304%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "20.6522%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "21.7391%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "28.2609%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "29.3478%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "35.8696%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "36.9565%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "43.4783%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "44.5652%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "51.087%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "52.1739%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "58.6957%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "59.7826%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "66.3043%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "67.3913%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "73.913%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "75%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "81.5217%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "82.6087%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "89.1304%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "90.2174%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents"></span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "96.7391%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents">
                                          <span className="absolute bg-[repeating-linear-gradient(135deg,transparent,transparent_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_5px,color-mix(in_oklab,var(--color-border)_35%,transparent)_6px)] bg-muted/25 inset-y-0" data-off="" style={{insetInlineStart: "97.8261%", width: "1.08696%"}}></span>
                                        </span>
                                        <span className="contents"></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(1.08696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(2.17391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(3.26087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(4.34783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(5.43478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(6.52174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(7.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(8.69565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(9.78261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(10.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(11.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(13.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(14.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(15.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(16.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(17.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(18.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(19.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(20.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(21.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(22.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(23.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(25% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(26.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(27.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(28.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(29.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(30.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(31.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(32.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(33.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(34.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(35.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(36.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(38.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(39.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(40.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(41.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(42.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(43.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(44.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(45.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(46.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(47.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(48.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(50% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(51.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(52.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(53.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(54.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(55.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(56.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(57.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(58.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(59.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(60.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(61.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(63.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(64.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(65.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(66.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(67.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(68.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(69.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(70.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(71.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(72.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(73.913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(75% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(76.087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(77.1739% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(78.2609% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(79.3478% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(80.4348% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(81.5217% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(82.6087% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(83.6957% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(84.7826% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(85.8696% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(86.9565% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(88.0435% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(89.1304% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(90.2174% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(91.3043% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(92.3913% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(93.4783% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(94.5652% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(95.6522% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(96.7391% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(97.8261% - 1px)"}}></span>
                                        <span className="absolute bg-border inset-y-0 w-px" data-axis="vertical" style={{insetInlineStart: "calc(98.913% - 1px)"}}></span>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="bug-tracking" data-gantt-row-id="bug-tracking" data-gantt-row-static="true" data-gantt-bar-min="0.43478260869565216" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-label="Bug Tracking" data-gantt-bar-start-ms="1783699200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "43.4783%", width: "18.4783%"}}>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                            <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                              <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "49%"}}></div>
                                            </div>
                                            <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                              {"49%"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="login-redirect" data-gantt-row-id="login-redirect" data-gantt-bar-min="0.43478260869565216" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="Login redirect" data-gantt-bar-start-ms="1783699200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "43.4783%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="100" completed="true" aria-label="Login redirect, Jul 11 - Jul 14, 2026, Login redirect, 100% complete" id="base-ui-_r_a1_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                              <svg className="lucide lucide-check opacity-80 relative shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Login redirect"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="access-rules" data-gantt-row-id="access-rules" data-gantt-bar-min="0.4782608695652174" data-gantt-bar-max="0.532608695652174" data-gantt-bar-color="var(--color-violet-500)" data-gantt-bar-label="Access rules" data-gantt-bar-start-ms="1784044800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "47.8261%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="45" aria-label="Access rules, Jul 15 - Jul 19, 2026, Access rules, 45% complete" id="base-ui-_r_a7_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-violet-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "45%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Access rules"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="mobile-crash" data-gantt-row-id="mobile-crash" data-gantt-row-static="true" data-gantt-bar-min="0.5" data-gantt-bar-max="0.5978260869565217" data-gantt-bar-label="Mobile crash" data-gantt-bar-start-ms="1784217600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "50%", width: "9.78261%"}}>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                            <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                              <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "27%"}}></div>
                                            </div>
                                            <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                              {"27%"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="crash-ios" data-gantt-row-id="crash-ios" data-gantt-bar-min="0.5" data-gantt-bar-max="0.5434782608695652" data-gantt-bar-color="var(--color-cyan-500)" data-gantt-bar-label="iOS audit" data-gantt-bar-start-ms="1784217600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "50%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="60" aria-label="iOS audit, Jul 17 - Jul 20, 2026, iOS audit, 60% complete" id="base-ui-_r_ad_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-cyan-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "60%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"iOS audit"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="crash-android" data-gantt-row-id="crash-android" data-gantt-bar-min="0.5434782608695652" data-gantt-bar-max="0.5978260869565217" data-gantt-bar-color="var(--color-teal-500)" data-gantt-bar-label="Android audit" data-gantt-bar-start-ms="1784563200000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "54.3478%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Android audit, Jul 21 - Jul 25, 2026, Android audit" id="base-ui-_r_aj_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-teal-500)"}}>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Android audit"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="button-text" data-gantt-row-id="button-text" data-gantt-bar-min="0.45652173913043476" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-amber-500)" data-gantt-bar-label="Button truncation" data-gantt-bar-start-ms="1783872000000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "2.17391%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "45.6522%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="70" aria-label="Button truncation, Jul 13 - Jul 14, 2026, Button truncation, 70% complete" id="base-ui-_r_ap_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-amber-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "70%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Button truncation"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="offline-sync" data-gantt-row-id="offline-sync" data-gantt-bar-min="0.5543478260869565" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-color="var(--color-emerald-500)" data-gantt-bar-label="Offline sync" data-gantt-bar-start-ms="1784649600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "6.52174%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "55.4348%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="20" aria-label="Offline sync, Jul 22 - Jul 27, 2026, Offline sync, 20% complete" id="base-ui-_r_av_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-emerald-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "20%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Offline sync"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="api-keys" data-gantt-row-id="api-keys" data-gantt-bar-min="0.44565217391304346" data-gantt-bar-max="0.4782608695652174" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="API key rotation" data-gantt-bar-start-ms="1783785600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "3.26087%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "44.5652%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="100" completed="true" aria-label="API key rotation, Jul 12 - Jul 14, 2026, API key rotation, 100% complete" id="base-ui-_r_b5_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" data-full="true" style={{width: "100%"}}></span>
                                              <svg className="lucide lucide-check opacity-80 relative shrink-0 size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"API key rotation"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="session-replay" data-gantt-row-id="session-replay" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="release-24" data-gantt-row-id="release-24" data-gantt-row-static="true" data-gantt-bar-min="0.5217391304347826" data-gantt-bar-max="0.7065217391304348" data-gantt-bar-label="Release 2.4" data-gantt-bar-start-ms="1784390400000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="-translate-y-1/2 absolute pointer-events-none top-1/2" aria-hidden="true" style={{insetInlineStart: "52.1739%", width: "18.4783%"}}>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 h-3 rounded-full start-0 top-1/2 w-0.5" aria-hidden="true"></span>
                                            <span className="-translate-y-1/2 absolute bg-muted-foreground/50 end-0 h-3 rounded-full top-1/2 w-0.5" aria-hidden="true"></span>
                                            <div className="bg-muted-foreground/20 h-1.5 overflow-hidden relative rounded-full">
                                              <div className="absolute bg-muted-foreground/50 inset-y-0 rounded-full start-0" style={{width: "21%"}}></div>
                                            </div>
                                            <span className="-translate-y-1/2 absolute ms-2 start-full text-muted-foreground top-1/2 whitespace-nowrap">
                                              {"21%"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="data-export" data-gantt-row-id="data-export" data-gantt-bar-min="0.5217391304347826" data-gantt-bar-max="0.5652173913043478" data-gantt-bar-color="var(--color-blue-500)" data-gantt-bar-label="Data export" data-gantt-bar-start-ms="1784390400000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "52.1739%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="55" aria-label="Data export, Jul 19 - Jul 22, 2026, Data export, 55% complete" id="base-ui-_r_bb_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-blue-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "55%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Data export"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="form-validation" data-gantt-row-id="form-validation" data-gantt-bar-min="0.5652173913043478" data-gantt-bar-max="0.6195652173913043" data-gantt-bar-color="var(--color-pink-500)" data-gantt-bar-label="Form validation" data-gantt-bar-start-ms="1784736000000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "5.43478%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "56.5217%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="10" aria-label="Form validation, Jul 23 - Jul 27, 2026, Form validation, 10% complete" id="base-ui-_r_bh_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-pink-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "10%"}}></span>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Form validation"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="nav-focus" data-gantt-row-id="nav-focus" data-gantt-bar-min="0.5869565217391305" data-gantt-bar-max="0.6304347826086957" data-gantt-bar-color="var(--color-orange-500)" data-gantt-bar-label="Nav focus" data-gantt-bar-start-ms="1784908800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "58.6957%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Nav focus, Jul 25 - Jul 28, 2026, Nav focus" id="base-ui-_r_bn_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-orange-500)"}}>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Nav focus"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="perf-audit" data-gantt-row-id="perf-audit" data-gantt-bar-min="0.532608695652174" data-gantt-bar-max="0.5652173913043478" data-gantt-bar-color="var(--color-rose-500)" data-gantt-bar-label="Perf audit" data-gantt-bar-start-ms="1784476800000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{width: "3.26087%", top: "0.625rem", height: "1.25rem", zIndex: "10", insetInlineStart: "53.2609%"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" progress="50" aria-label="Perf audit, Jul 20 - Jul 22, 2026, Perf audit, 50% complete" id="base-ui-_r_bt_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-rose-500)"}}>
                                              <span className="absolute bg-(--gantt-event-color)/40 border-(--gantt-event-color)/65 border-e data-full:border-e-0 inset-y-0 pointer-events-none start-0" aria-hidden="true" style={{width: "50%"}}></span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Perf audit"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="changelog" data-gantt-row-id="changelog" data-gantt-bar-min="0.6630434782608695" data-gantt-bar-max="0.7065217391304348" data-gantt-bar-color="var(--color-indigo-500)" data-gantt-bar-label="Changelog" data-gantt-bar-start-ms="1785513600000" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}>
                                          <div className="absolute data-[drag-kind=move]:opacity-0 group/gantt-seg pointer-events-auto px-px" data-lane="0" data-lane-count="1" style={{insetInlineStart: "66.3043%", width: "4.34783%", top: "0.625rem", height: "1.25rem", zIndex: "10"}}>
                                            <GanttBar className="h-full" type="button" allDay="true" past="true" labelOutside="true" aria-label="Changelog, Aug 1 - Aug 4, 2026, Changelog" id="base-ui-_r_c6_" baseUiTooltipTrigger="" style={{"--gantt-event-color": "var(--color-indigo-500)"}}>
                                              <span className="absolute cursor-ew-resize flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-start opacity-0 pointer-coarse:opacity-100 start-0.5 w-2" data-edge="start">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                              <span className="absolute cursor-ew-resize end-0.5 flex group-hover/gantt-bar-group:opacity-100 inset-y-0 items-center justify-end opacity-0 pointer-coarse:opacity-100 w-2" data-edge="end">
                                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                                              </span>
                                            </GanttBar>
                                            <span className="-translate-y-1/2 absolute font-medium group-data-[drag-kind^=resize]/gantt-seg:opacity-0 max-w-60 ms-2 pointer-events-none start-full text-foreground top-1/2 truncate z-10" data-placement="after">
                                              {"Changelog"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="border-b data-hover:bg-muted/30 data-selected:bg-primary/5 data-selected:data-hover:bg-primary/5 min-w-0 relative w-full" data-gantt-row="" data-gantt-resource="release-notes" data-gantt-row-id="release-notes" style={{height: "2.5rem", minWidth: "368rem"}}>
                                        <div className="absolute inset-0 pointer-events-none" style={{contentVisibility: "auto"}}></div>
                                      </div>
                                      <div className="border-b h-10" aria-hidden="true" style={{minWidth: "368rem"}}></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-background border-t-border! data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 end-0! flex h-4! p-px py-1 rounded-none select-none touch-none transition-colors z-40" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-start="" data-overflow-x-end="" data-id="base-ui-_r_9r_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "37.35733695652174px"}}>
                                  <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(228.039px, 0px, 0px)"}}></div>
                                </div>
                              </div>
                            </ScrollArea>
                            <div className="absolute bg-background border-t border-t-border bottom-0 h-4 inset-x-0 pointer-events-none" aria-hidden="true"></div>
                            <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
                              <button className="-translate-y-1/2 absolute bg-background border cursor-pointer flex hover:text-foreground items-center justify-center pointer-events-auto rounded-full shadow-xs size-5 text-muted-foreground" type="button" data-side="start" aria-label={"Scroll to \"Login redirect\""} id="base-ui-_r_c8_" data-base-ui-tooltip-trigger="" style={{top: "125px", insetInlineStart: "0.5rem"}}>
                                <svg className="lucide lucide-chevron-left size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m15 18-6-6 6-6"></path>
                                </svg>
                                <span className="-end-px -top-px absolute ring-1 ring-background rounded-full size-1.5" aria-hidden="true" style={{background: "var(--color-blue-500)"}}></span>
                              </button>
                              <button className="-translate-y-1/2 absolute bg-background border cursor-pointer flex hover:text-foreground items-center justify-center pointer-events-auto rounded-full shadow-xs size-5 text-muted-foreground" type="button" data-side="start" aria-label={"Scroll to \"Button truncation\""} id="base-ui-_r_ca_" data-base-ui-tooltip-trigger="" style={{top: "325px", insetInlineStart: "0.5rem"}}>
                                <svg className="lucide lucide-chevron-left size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m15 18-6-6 6-6"></path>
                                </svg>
                                <span className="-end-px -top-px absolute ring-1 ring-background rounded-full size-1.5" aria-hidden="true" style={{background: "var(--color-amber-500)"}}></span>
                              </button>
                              <button className="-translate-y-1/2 absolute bg-background border cursor-pointer flex hover:text-foreground items-center justify-center pointer-events-auto rounded-full shadow-xs size-5 text-muted-foreground" type="button" data-side="start" aria-label={"Scroll to \"API key rotation\""} id="base-ui-_r_cc_" data-base-ui-tooltip-trigger="" style={{top: "405px", insetInlineStart: "0.5rem"}}>
                                <svg className="lucide lucide-chevron-left size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m15 18-6-6 6-6"></path>
                                </svg>
                                <span className="-end-px -top-px absolute ring-1 ring-background rounded-full size-1.5" aria-hidden="true" style={{background: "var(--color-rose-500)"}}></span>
                              </button>
                              <button className="-translate-y-1/2 absolute bg-background border cursor-pointer flex hover:text-foreground items-center justify-center pointer-events-auto rounded-full shadow-xs size-5 text-muted-foreground" type="button" data-side="end" aria-label={"Scroll to \"Nav focus\""} id="base-ui-_r_ce_" data-base-ui-tooltip-trigger="" style={{top: "605px", insetInlineEnd: "14px"}}>
                                <svg className="lucide lucide-chevron-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="-end-px -top-px absolute ring-1 ring-background rounded-full size-1.5" aria-hidden="true" style={{background: "var(--color-orange-500)"}}></span>
                              </button>
                              <button className="-translate-y-1/2 absolute bg-background border cursor-pointer flex hover:text-foreground items-center justify-center pointer-events-auto rounded-full shadow-xs size-5 text-muted-foreground" type="button" data-side="end" aria-label={"Scroll to \"Changelog\""} id="base-ui-_r_cg_" data-base-ui-tooltip-trigger="" style={{top: "685px", insetInlineEnd: "14px"}}>
                                <svg className="lucide lucide-chevron-right size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="-end-px -top-px absolute ring-1 ring-background rounded-full size-1.5" aria-hidden="true" style={{background: "var(--color-indigo-500)"}}></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </GanttView>
                    </FramePanel>
                    <div className="sr-only" aria-live="polite"></div>
                  </Gantt>
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
                  {"October 2026"}
                </span>
                <div className="flex gap-0.5 items-center justify-center">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Previous month">
                    <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Next month">
                    <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        {"October 2026"}
                      </span>
                    </div>
                    <table className="border-collapse rdp-month_grid w-full" role="grid" aria-multiselectable="false" aria-label="October 2026">
                      <thead aria-hidden="true">
                        <tr className="flex rdp-weekdays">
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Sunday" scope="col">
                            {"Su"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Monday" scope="col">
                            {"Mo"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Tuesday" scope="col">
                            {"Tu"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Wednesday" scope="col">
                            {"We"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Thursday" scope="col">
                            {"Th"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Friday" scope="col">
                            {"Fr"}
                          </th>
                          <th className="flex-1 font-normal rdp-weekday rounded-(--cell-radius) select-none text-[0.8rem] text-muted-foreground" aria-label="Saturday" scope="col">
                            {"Sa"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="rdp-weeks">
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-27" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/27" aria-label="Sunday, September 27th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"27"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-28" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/28" aria-label="Monday, September 28th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"28"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-29" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/29" aria-label="Tuesday, September 29th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"29"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-30" data-month="2026-09" data-outside="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/30" aria-label="Wednesday, September 30th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"30"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-01">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/1" aria-label="Thursday, October 1st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"1"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-02">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/2" aria-label="Friday, October 2nd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"2"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-03">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/3" aria-label="Saturday, October 3rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"3"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-04">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/4" aria-label="Sunday, October 4th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"4"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-05">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/5" aria-label="Monday, October 5th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"5"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-06">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/6" aria-label="Tuesday, October 6th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"6"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-07">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/7" aria-label="Wednesday, October 7th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"7"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-08">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/8" aria-label="Thursday, October 8th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"8"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-09">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/9" aria-label="Friday, October 9th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"9"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-10">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/10" aria-label="Saturday, October 10th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"10"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-11">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/11" aria-label="Sunday, October 11th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"11"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-12">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/12" aria-label="Monday, October 12th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"12"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-13">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/13" aria-label="Tuesday, October 13th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"13"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-14">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/14" aria-label="Wednesday, October 14th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"14"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square bg-accent group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) rounded-md select-none text-center text-foreground w-full" role="gridcell" aria-selected="true" data-day="2026-10-15" data-selected="true" data-today="true">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={0} day="2026/10/15" selectedSingle="true" aria-label="Today, Thursday, October 15th, 2026, selected">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"15"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-16">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/16" aria-label="Friday, October 16th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"16"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-17">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/17" aria-label="Saturday, October 17th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"17"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-18">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/18" aria-label="Sunday, October 18th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"18"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-19">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/19" aria-label="Monday, October 19th, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"19"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-20">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/20" aria-label="Tuesday, October 20th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"20"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-21">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/21" aria-label="Wednesday, October 21st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"21"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-22">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/22" aria-label="Thursday, October 22nd, 2026">
                              <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                              {"22"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-23">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/23" aria-label="Friday, October 23rd, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"23"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-24">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/24" aria-label="Saturday, October 24th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"24"}
                            </Button>
                          </td>
                        </tr>
                        <tr className="flex mt-2 rdp-week w-full">
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-25">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/25" aria-label="Sunday, October 25th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"25"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-26">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/26" aria-label="Monday, October 26th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"26"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-27">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/27" aria-label="Tuesday, October 27th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"27"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-28">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/28" aria-label="Wednesday, October 28th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"28"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-29">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/29" aria-label="Thursday, October 29th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"29"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-30">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/30" aria-label="Friday, October 30th, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"30"}
                            </Button>
                          </td>
                          <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-31">
                            <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/31" aria-label="Saturday, October 31st, 2026">
                              <span className="size-1" aria-hidden="true"></span>
                              {"31"}
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
                <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2d_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "270px"}}>
                  <div className="flex flex-col h-full">
                    <div className="border-b border-border py-2">
                      <div className="px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          {"My Calendars"}
                        </span>
                      </div>
                      <div className="px-2" role="list">
                        <div role="listitem">
                          <Collapsible data-open="">
                            <div className="flex gap-0.5 group/account items-center">
                              <Collapsible>
                              <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start min-w-0 outline-none px-1.5 rounded-[min(var(--radius-md),12px)] select-none text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Toggle nick@neui.io" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_2e_" aria-expanded="true">
                                <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  {"nick@neui.io"}
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:opacity-100 aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/account:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for nick@neui.io" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mr-1 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                                {"3"}
                              </Badge>
                            </div>
                            <CollapsibleContent data-open="" id="base-ui-_r_2e_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                              <div className="py-0.5">
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_2k_" aria-checked="true" aria-label="Toggle Work">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Work"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Work" aria-haspopup="menu" id="base-ui-_r_2q_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(22, 163, 74)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_2s_" aria-checked="true" aria-label="Toggle Personal">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Personal"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Personal" aria-haspopup="menu" id="base-ui-_r_32_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="flex gap-2 group h-9 items-center pl-5 pr-6">
                                  <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                  <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_34_" aria-checked="true" aria-label="Toggle Meetings">
                                    <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                      </svg>
                                    </span>
                                  </Checkbox>
                                  <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  <span className="flex-1 font-medium text-foreground text-sm truncate">
                                    {"Meetings"}
                                  </span>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Meetings" aria-haspopup="menu" id="base-ui-_r_3a_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx={12} cy={12} r={1}></circle>
                                      <circle cx={19} cy={12} r={1}></circle>
                                      <circle cx={5} cy={12} r={1}></circle>
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
                              <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start min-w-0 outline-none px-1.5 rounded-[min(var(--radius-md),12px)] select-none text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Toggle nick@gmail.com" aria-disabled="false" aria-expanded="false">
                                <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="truncate">
                                  {"nick@gmail.com"}
                                </span>
                              </CollapsibleTrigger>
                              </Collapsible>
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:opacity-100 aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/account:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for nick@gmail.com" aria-haspopup="menu" id="base-ui-_r_3g_" aria-expanded="false">
                                <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx={12} cy={12} r={1}></circle>
                                  <circle cx={19} cy={12} r={1}></circle>
                                  <circle cx={5} cy={12} r={1}></circle>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mr-1 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                                {"2"}
                              </Badge>
                            </div>
                          </Collapsible>
                        </div>
                      </div>
                      <div className="pt-1 px-1.5">
                        <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2 rounded-[min(var(--radius-md),12px)] text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
                          <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add account"}
                        </Button>
                      </div>
                    </div>
                    <div className="border-b border-border py-2">
                      <div className="flex gap-2 items-center justify-between px-3 py-1">
                        <span className="font-medium text-muted-foreground text-xs tracking-wide truncate uppercase">
                          {"Today"}
                        </span>
                        <div className="flex gap-1 items-center shrink-0">
                          <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-1.5 rounded-[min(var(--radius-md),10px)] text-[11px] text-muted-foreground" type="button" tabIndex={0}>
                            {"Show all"}
                          </Button>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                            {"3"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-0.5 px-1.5" role="list">
                        <div role="listitem">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Open Weekly Team Standup">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(79, 70, 229)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Weekly Team Standup"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"9:00 AM to 9:30 AM"}
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
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Open Design Review · Component Library v3">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Design Review · Component Library v3"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"11:00 AM to 12:00 PM"}
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
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Open Coffee with Alex">
                            <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                              <span className="font-medium leading-snug text-foreground text-sm truncate">
                                {"Coffee with Alex"}
                              </span>
                              <span className="text-muted-foreground text-xs">
                                {"2:00 PM to 2:30 PM"}
                              </span>
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 grow px-3 py-3">
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground w-full" type="button" tabIndex={0}>
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        {"New Event"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex={0}>
                        <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx={18} cy={5} r={3}></circle>
                          <circle cx={6} cy={12} r={3}></circle>
                          <circle cx={18} cy={19} r={3}></circle>
                          <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
                          <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
                        </svg>
                        {"Share Availability"}
                      </Button>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex gap-2 items-center px-3 py-2.5">
                      <svg className="lucide lucide-globe shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      <div className="flex flex-col">
                        <span className="font-medium text-[11px] text-muted-foreground/60">
                          {"Your timezone"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"GMT+5 (+05:00) · Asia/Tashkent"}
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
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"Fri"}
    </span>
  </>
  )
}
