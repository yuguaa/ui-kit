import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
  EventCalendarViewSwitcher,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-nav"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { EventCalendarContent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-content"
import { EventCalendarEvent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-event"
import { EventCalendarMonthView } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-month-view"
import {
  EventCalendarNav,
  EventCalendarTitle,
  EventCalendarToolbar,
} from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-nav"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
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
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div id="root">
      <div className="**:data-[slot=sidebar-menu-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-button]:hover:text-foreground **:data-[slot=sidebar-menu-button]:text-accent-foreground/80 **:data-[slot=sidebar-menu-sub-button]:hover:bg-transparent! **:data-[slot=sidebar-menu-sub-button]:hover:text-foreground **:data-[slot=sidebar-menu-sub-button]:text-accent-foreground/80 [&_[data-collapsible=icon]_[data-slot=sidebar-menu-button][data-active]>svg]:-ml-px [&_[data-slot=sidebar-menu-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:border [&_[data-slot=sidebar-menu-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-button][data-active]]:text-foreground [&_[data-slot=sidebar-menu-sub-button]:hover>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button]>svg]:opacity-60 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:opacity-100 [&_[data-slot=sidebar-menu-sub-button][data-active]>svg]:text-primary [&_[data-slot=sidebar-menu-sub-button][data-active]]:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:border [&_[data-slot=sidebar-menu-sub-button][data-active]]:border-border/60! [&_[data-slot=sidebar-menu-sub-button][data-active]]:hover:bg-background! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-black/5! [&_[data-slot=sidebar-menu-sub-button][data-active]]:shadow-xs! [&_[data-slot=sidebar-menu-sub-button][data-active]]:text-foreground [--sidebar-border:transparent] [--sidebar-width:260px] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
        <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
          <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
          <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
              <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center justify-between p-2" sidebar="header">
                <a className="duration-200 ease-linear focus-visible:ring-2 focus-visible:ring-sidebar-ring gap-2 inline-flex items-center min-h-10 outline-none px-0.5 rounded-md transition-all" aria-label="Roster, go to the dashboard" href="/" data-discover="true">
                  <span className="flex items-center justify-center relative shrink-0 size-7">
                    <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-[0.875] size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                        <svg className="size-5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </span>
                  <span className="font-medium in-data-[state=collapsed]:hidden text-sm truncate">
                    Roster
                  </span>
                </a>
                <div className="gap-0.5 in-data-[state=collapsed]:flex-col inline-flex items-center">
                  <Popover>
                  <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M15.5 18C15.5 19.933 13.933 21.5 12 21.5C10.067 21.5 8.5 19.933 8.5 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M19.2311 18H4.76887C3.79195 18 3 17.208 3 16.2311C3 15.762 3.18636 15.3121 3.51809 14.9803L4.12132 14.3771C4.68393 13.8145 5 13.0514 5 12.2558V9.5C5 5.63401 8.13401 2.5 12 2.5C15.866 2.5 19 5.634 19 9.5V12.2558C19 13.0514 19.3161 13.8145 19.8787 14.3771L20.4819 14.9803C20.8136 15.3121 21 15.762 21 16.2311C21 17.208 20.208 18 19.2311 18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                  </PopoverTrigger>
                  </Popover>
                  <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:duration-200 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-[state=collapsed]:[&_svg]:rotate-180 inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                      <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="currentColor" strokeWidth="2"></path>
                      <path d="M9.5 3L9.5 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M5 7H6M5 10H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="sr-only">
                      Toggle Sidebar
                    </span>
                  </SidebarTrigger>
                </div>
              </SidebarHeader>
              <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
                <div className="pt-2 py-2">
                  <form>
                    <SidebarGroup className="p-2 py-0" sidebar="group">
                      <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-background hover:text-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent! in-data-[state=collapsed]:w-8! justify-start overflow-hidden pl-7 px-2.5 rounded-lg text-sm transition-[width] w-full" type="button" tabIndex="0" id="search">
                          Search...
                        </Button>
                        <svg className="-translate-y-1/2 absolute left-2 opacity-50 pointer-events-none select-none size-4 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5 px-1 right-2 rounded-sm text-muted-foreground text-xs top-1/2 w-fit">
                          ⌘K
                        </Kbd>
                      </SidebarGroupContent>
                    </SidebarGroup>
                    <DialogHeader className="gap-2 sr-only">
                      <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_4_">
                        Search
                      </DialogTitle>
                      <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_5_">
                        Search your workspace content.
                      </DialogDescription>
                    </DialogHeader>
                  </form>
                </div>
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                    Workspace
                  </SidebarGroupLabel>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarMenu className="gap-0" sidebar="menu">
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/" discover="true" data-active="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M10.5 8.75V6.75C10.5 5.10626 10.5 4.28439 10.046 3.73121C9.96291 3.62995 9.87005 3.53709 9.76879 3.45398C9.21561 3 8.39374 3 6.75 3C5.10626 3 4.28439 3 3.73121 3.45398C3.62995 3.53709 3.53709 3.62995 3.45398 3.73121C3 4.28439 3 5.10626 3 6.75V8.75C3 10.3937 3 11.2156 3.45398 11.7688C3.53709 11.8701 3.62995 11.9629 3.73121 12.046C4.28439 12.5 5.10626 12.5 6.75 12.5C8.39374 12.5 9.21561 12.5 9.76879 12.046C9.87005 11.9629 9.96291 11.8701 10.046 11.7688C10.5 11.2156 10.5 10.3937 10.5 8.75Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M7.75 15.5H5.75C5.05222 15.5 4.70333 15.5 4.41943 15.5861C3.78023 15.78 3.28002 16.2802 3.08612 16.9194C3 17.2033 3 17.5522 3 18.25C3 18.9478 3 19.2967 3.08612 19.5806C3.28002 20.2198 3.78023 20.72 4.41943 20.9139C4.70333 21 5.05222 21 5.75 21H7.75C8.44778 21 8.79667 21 9.08057 20.9139C9.71977 20.72 10.22 20.2198 10.4139 19.5806C10.5 19.2967 10.5 18.9478 10.5 18.25C10.5 17.5522 10.5 17.2033 10.4139 16.9194C10.22 16.2802 9.71977 15.78 9.08057 15.5861C8.79667 15.5 8.44778 15.5 7.75 15.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M21 17.25V15.25C21 13.6063 21 12.7844 20.546 12.2312C20.4629 12.1299 20.3701 12.0371 20.2688 11.954C19.7156 11.5 18.8937 11.5 17.25 11.5C15.6063 11.5 14.7844 11.5 14.2312 11.954C14.1299 12.0371 14.0371 12.1299 13.954 12.2312C13.5 12.7844 13.5 13.6063 13.5 15.25V17.25C13.5 18.8937 13.5 19.7156 13.954 20.2688C14.0371 20.3701 14.1299 20.4629 14.2312 20.546C14.7844 21 15.6063 21 17.25 21C18.8937 21 19.7156 21 20.2688 20.546C20.3701 20.4629 20.4629 20.3701 20.546 20.2688C21 19.7156 21 18.8937 21 17.25Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M18.25 3H16.25C15.5522 3 15.2033 3 14.9194 3.08612C14.2802 3.28002 13.78 3.78023 13.5861 4.41943C13.5 4.70333 13.5 5.05222 13.5 5.75C13.5 6.44778 13.5 6.79667 13.5861 7.08057C13.78 7.71977 14.2802 8.21998 14.9194 8.41388C15.2033 8.5 15.5522 8.5 16.25 8.5H18.25C18.9478 8.5 19.2967 8.5 19.5806 8.41388C20.2198 8.21998 20.72 7.71977 20.9139 7.08057C21 6.79667 21 6.44778 21 5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span>
                            Dashboard
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/approvals" discover="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span>
                            Approvals
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-people">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            People
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/hiring/pipeline" discover="true">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M17.5 21L17.5 14M14 17.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span>
                            Hiring
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-time">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M16 2V6M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            <path d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            Time
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-settings">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                          </svg>
                          <span className="truncate">
                            Settings
                          </span>
                          <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                  <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full whitespace-nowrap" aria-expanded="true" aria-controls="active-projects-list" sidebar="group-label">
                    Headcount by department
                    <svg className="duration-200 ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </SidebarGroupLabel>
                  <SidebarGroupContent className="text-sm" sidebar="group-content" id="active-projects-list">
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Engineering" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-blue-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="0" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            Engineering
                          </span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Engineering" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=People" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-violet-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            People
                          </span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for People" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Sales" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-emerald-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="15.079644737231007" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            Sales
                          </span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Sales" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_18_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Customer%20Success" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-orange-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="22.61946710584651" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            Customer Success
                          </span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Customer Success" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_1f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/people/directory?department=Design" discover="true">
                          <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                            <circle className="stroke-rose-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="22.61946710584651" strokeLinecap="round"></circle>
                          </svg>
                          <span className="min-w-0 truncate">
                            Design
                          </span>
                        </SidebarMenuButton>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for Design" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <div className="mt-auto">
                  <SidebarGroup className="group-data-[collapsible=icon]:hidden overflow-hidden p-2" sidebar="group">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] border-border md:w-[225px] shrink-0" spacing="xs">
                      <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                        <div className="font-semibold text-warning text-xs">
                          Headcount plan
                        </div>
                      </header>
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] space-y-2">
                        <p className="leading-snug text-muted-foreground text-xs">
                          Approved headcount for FY26. Resets when the plan is re-baselined.
                        </p>
                        <div className="bg-muted/55 h-1.5 overflow-hidden relative rounded-sm">
                          <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                          <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar">
                            <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                              <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                            </ProgressTrack>
                            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                              x
                            </span>
                          </Progress>
                        </div>
                        <div className="flex items-center justify-between leading-none text-xs">
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              92%
                            </span>
                            <span className="text-muted-foreground">
                              Filled
                            </span>
                          </div>
                          <div className="flex gap-1 items-center">
                            <span className="font-semibold text-foreground">
                              8%
                            </span>
                            <span className="text-muted-foreground">
                              Open
                            </span>
                          </div>
                        </div>
                      </FramePanel>
                    </Frame>
                  </SidebarGroup>
                </div>
              </SidebarContent>
              <SidebarFooter className="gap-2 p-2" sidebar="footer">
                <SidebarMenu className="gap-0" sidebar="menu">
                  <SidebarMenuItem sidebar="menu-item">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-ml-1 [&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-transparent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:ml-0! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button pr-0! ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Open account menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                        <AvatarImage className="rounded-full" alt="" src="/avatars/15.jpg"></AvatarImage>
                      </Avatar>
                      <div className="flex flex-col in-data-[state=collapsed]:hidden leading-tight min-w-0">
                        <span className="font-medium text-xs truncate">
                          Bruno Duarte
                        </span>
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="bg-emerald-500 font-semibold inline-flex items-center justify-center ring-1 ring-foreground/10 rounded-full shrink-0 size-2 text-white! tracking-tight" aria-hidden="true"></span>
                          <span className="text-[10px] text-muted-foreground truncate">
                            Roster UK
                          </span>
                        </span>
                      </div>
                      <svg className="in-data-[state=collapsed]:hidden ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                        <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                        <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
            </div>
          </div>
        </Sidebar>
        <SidebarInset className="bg-background border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm ml-0! overflow-y-auto">
          <header className="ease-linear flex gap-2 group-has-data-[collapsible=icon]/sidebar-wrapper:h-14 h-14 items-center shrink-0 transition-[width,height]">
            <div className="flex gap-2 items-center max-w-[96rem] mx-auto px-4 w-full">
              <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                  <path d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M9.5 3L9.5 21" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M5 7H6M5 10H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <span className="sr-only">
                  Toggle Sidebar
                </span>
              </SidebarTrigger>
              <Breadcrumb aria-label="breadcrumb">
                <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                  <BreadcrumbItem className="gap-1 hidden md:flex">
                    <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center transition-colors" href="/people/directory" discover="true">
                      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M15 21.5V16.5C15 15.0858 15 14.3787 14.5607 13.9393C14.1213 13.5 13.4142 13.5 12 13.5C10.5858 13.5 9.87868 13.5 9.43934 13.9393C9 14.3787 9 15.0858 9 16.5V21.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      People
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden items-center md:flex" role="presentation" aria-hidden="true">
                    <span className="bg-foreground/30 h-0.5 inline-flex rounded-full shrink-0 w-2"></span>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      Dashboard
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex items-center ml-auto shrink-0">
                <div className="flex gap-2 items-center shrink-0">
                  <Popover>
                  <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group/button group/pick-date h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-between leading-none max-w-full outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 tabular-nums text-[0.8rem] transition-all w-[250px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_so_" aria-haspopup="dialog" aria-expanded="false">
                    <span className="truncate">
                      Jul 1, 2026 - Jul 30, 2026
                    </span>
                    <svg className="group-hover/pick-date:text-foreground shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M16 2V6M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </PopoverTrigger>
                  </Popover>
                  <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground" type="button" tabIndex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path d="M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span className="hidden sm:block">
                      Export
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 max-w-[96rem] mx-auto pb-4 px-4 w-full">
            <div className="flex flex-col gap-4">
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] text-foreground w-full">
                <FramePanel className="[&::before]:z-0 before:rounded-[calc(var(--frame-panel-radius)_-_1px)] isolate overflow-visible">
                  <canvas className="[mask-image:linear-gradient(to_bottom,black,transparent_70%)] absolute h-full inset-0 pointer-events-none rounded-[calc(var(--frame-radius)-1px)] text-muted-foreground w-full" aria-hidden="true" width="980" height="188"></canvas>
                  <div className="relative z-10">
                    <div className="flex flex-col gap-4 pb-1 pt-1 px-1.5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex flex-col gap-1 mb-5 min-w-0">
                        <h2 className="font-semibold text-sm">
                          Workforce overview
                        </h2>
                        <p className="text-muted-foreground text-xs">
                          Headcount, hiring pressure and absence in one pass.
                        </p>
                      </div>
                      <Tabs className="gap-2 shrink-0 sm:w-auto w-full" data-orientation="horizontal" activationDirection="none">
                        <TabsList className="data-[variant=line]:rounded-none grid grid-cols-3 group-data-horizontal/tabs:h-8 h-9 p-[3px] rounded-lg sm:w-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_sp_">
                            Week
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_sq_">
                            Month
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md sm:min-w-16 text-xs" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_sr_" compositeItemActive="">
                            Year
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <div className="grid items-stretch lg:grid-cols-4 sm:grid-cols-2">
                      <div className="border-border/70 flex h-full lg:pe-5 min-h-0 min-w-0 pe-3 py-0 w-full">
                        <div className="flex flex-1 flex-col lg:py-0 min-h-0 min-w-0 ps-1.5 py-3">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2"></path>
                              <path d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Headcount
                            </span>
                          </div>
                          <div className="flex gap-2.5 items-end justify-between min-h-0">
                            <div className="flex flex-col gap-1.5 justify-center min-w-0 pb-2">
                              <span className="font-semibold text-xl">
                                198
                              </span>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  </svg>
                                  +3
                                </Badge>
                              </div>
                            </div>
                            <div className="h-16 max-w-40 relative w-full">
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-full justify-center text-xs w-full" data-chart="chart-_r_ss_" aria-label="Headcount trend">
                                <style>{`
 [data-chart=chart-_r_ss_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_ss_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px", "--color-trend": "var(--color-success)"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts16-clip">
                                            <rect x="2" y="6" height="52" width="156"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_101_" height="52" width="156" d="M2,28.964C6.727,26.826,11.455,24.687,16.182,25.665C20.909,26.643,25.636,30.739,30.364,32.264C35.091,33.789,39.818,32.743,44.545,35.563C49.273,38.384,54,45.072,58.727,45.462C63.455,45.851,68.182,39.942,72.909,35.563C77.636,31.185,82.364,28.336,87.091,28.964C91.818,29.593,96.545,33.699,101.273,32.264C106,30.829,110.727,23.852,115.455,22.365C120.182,20.879,124.909,24.884,129.636,25.665C134.364,26.446,139.091,24.003,143.818,22.365C148.545,20.728,153.273,19.897,158,19.066"></path>
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
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full lg:pe-5 min-h-0 min-w-0 pe-3 py-0 sm:border-t-0 w-full">
                        <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col lg:ps-5 lg:py-0 min-h-0 min-w-0 ps-3 py-3">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M17.5 21L17.5 14M14 17.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Open roles
                            </span>
                          </div>
                          <div className="flex gap-2.5 items-end justify-between min-h-0">
                            <div className="flex flex-col gap-1.5 justify-center min-w-0 pb-2">
                              <span className="font-semibold text-xl">
                                5
                              </span>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  </svg>
                                  +2
                                </Badge>
                              </div>
                            </div>
                            <div className="h-16 max-w-40 relative w-full">
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-full justify-center text-xs w-full" data-chart="chart-_r_st_" aria-label="Open roles trend">
                                <style>{`
 [data-chart=chart-_r_st_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_st_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="155" height="64" style={{position: "relative", cursor: "default", width: "155px", height: "64px", "--color-trend": "var(--color-success)"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="155" height="64" viewBox="0 0 155 64" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts17-clip">
                                            <rect x="2" y="6" height="52" width="151"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_102_" height="52" width="151" d="M2,57.019C6.576,49.737,11.152,42.455,15.727,40.667C20.303,38.878,24.879,42.582,29.455,40.667C34.03,38.751,38.606,31.216,43.182,24.314C47.758,17.413,52.333,11.145,56.909,7.962C61.485,4.779,66.061,4.68,70.636,7.962C75.212,11.244,79.788,17.907,84.364,24.314C88.939,30.722,93.515,36.873,98.091,40.667C102.667,44.461,107.242,45.898,111.818,40.667C116.394,35.435,120.97,23.535,125.545,24.314C130.121,25.094,134.697,38.553,139.273,40.667C143.848,42.78,148.424,33.547,153,24.314"></path>
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
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full lg:border-t-0 lg:pe-5 min-h-0 min-w-0 pe-3 py-0 sm:border-t w-full">
                        <div className="bg-border/70 h-18 hidden lg:block mb-2 self-center shrink-0 w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col lg:ps-5 lg:py-0 min-h-0 min-w-0 ps-3 py-3">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M14.5 8C14.5 5.23858 12.2614 3 9.5 3C6.73858 3 4.5 5.23858 4.5 8C4.5 10.7614 6.73858 13 9.5 13C12.2614 13 14.5 10.7614 14.5 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M15.5 21L18.5 18M18.5 18L21.5 15M18.5 18L15.5 15M18.5 18L21.5 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M2.5 20C2.5 16.134 5.63401 13 9.5 13C10.775 13 11.9704 13.3409 13 13.9365" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Voluntary attrition
                            </span>
                          </div>
                          <div className="flex gap-2.5 items-end justify-between min-h-0">
                            <div className="flex flex-col gap-1.5 justify-center min-w-0 pb-2">
                              <span className="font-semibold text-xl">
                                12.8%
                              </span>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  </svg>
                                  +0.9
                                </Badge>
                              </div>
                            </div>
                            <div className="h-16 max-w-40 relative w-full">
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-full justify-center text-xs w-full" data-chart="chart-_r_su_" aria-label="Voluntary attrition trend">
                                <style>{`
 [data-chart=chart-_r_su_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_su_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="143" height="64" style={{position: "relative", cursor: "default", width: "143px", height: "64px", "--color-trend": "var(--color-success)"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="143" height="64" viewBox="0 0 143 64" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts18-clip">
                                            <rect x="2" y="6" height="52" width="139"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_103_" height="52" width="139" d="M2,51.831C6.212,50.275,10.424,48.719,14.636,46.646C18.848,44.573,23.061,41.983,27.273,38.869C31.485,35.756,35.697,32.118,39.909,28.5C44.121,24.883,48.333,21.285,52.545,18.132C56.758,14.978,60.97,12.27,65.182,12.947C69.394,13.624,73.606,17.688,77.818,20.724C82.03,23.76,86.242,25.769,90.455,25.908C94.667,26.047,98.879,24.315,103.091,23.316C107.303,22.317,111.515,22.05,115.727,20.724C119.939,19.398,124.152,17.012,128.364,18.132C132.576,19.251,136.788,23.876,141,28.5"></path>
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
                          </div>
                        </div>
                      </div>
                      <div className="border-border/70 border-t flex h-full lg:border-t-0 min-h-0 min-w-0 pr-2 py-0 sm:border-t w-full">
                        <div className="bg-border/70 h-18 hidden mb-2 self-center shrink-0 sm:block w-px" aria-hidden="true"></div>
                        <div className="flex flex-1 flex-col lg:ps-5 lg:py-0 min-h-0 min-w-0 ps-3 py-3">
                          <div className="flex gap-2 items-center mb-2 min-w-0">
                            <svg className="shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M16 2V6M8 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M3 10H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                            <span className="font-medium text-xs whitespace-nowrap">
                              Absence rate
                            </span>
                          </div>
                          <div className="flex gap-2.5 items-end justify-between min-h-0">
                            <div className="flex flex-col gap-1.5 justify-center min-w-0 pb-2">
                              <span className="font-semibold text-xl">
                                1.5%
                              </span>
                              <div className="flex gap-1.5 items-center min-w-0">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                  <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path d="M20 11V16H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    <path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  </svg>
                                  -0.6
                                </Badge>
                              </div>
                            </div>
                            <div className="h-16 max-w-40 relative w-full">
                              <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-full justify-center text-xs w-full" data-chart="chart-_r_sv_" aria-label="Absence rate trend">
                                <style>{`
 [data-chart=chart-_r_sv_] {
  --color-trend: var(--color-muted-foreground);
}


.dark [data-chart=chart-_r_sv_] {
  --color-trend: var(--color-muted-foreground);
}
`}</style>
                                <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                  <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                    <div className="recharts-wrapper" width="160" height="64" style={{position: "relative", cursor: "default", width: "160px", height: "64px", "--color-trend": "var(--color-destructive)"}}>
                                      <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "50"}}></div>
                                      <svg className="recharts-surface" role="application" tabIndex="0" width="160" height="64" viewBox="0 0 160 64" style={{width: "100%", height: "100%", display: "block"}}>
                                        <title></title>
                                        <desc></desc>
                                        <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                        <defs>
                                          <clippath id="recharts19-clip">
                                            <rect x="2" y="6" height="52" width="156"></rect>
                                          </clippath>
                                        </defs>
                                        <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                        <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                          <g className="recharts-layer recharts-line">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-curve recharts-line-curve" stroke="var(--color-trend)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" id="recharts-line-_r_104_" height="52" width="156" d="M2,22.217C6.727,28.46,11.455,34.703,16.182,31.031C20.909,27.358,25.636,13.77,30.364,13.403C35.091,13.037,39.818,25.891,44.545,25.155C49.273,24.418,54,10.09,58.727,7.528C63.455,4.965,68.182,14.168,72.909,19.279C77.636,24.39,82.364,25.409,87.091,28.093C91.818,30.777,96.545,35.126,101.273,33.968C106,32.811,110.727,26.147,115.455,25.155C120.182,24.163,124.909,28.842,129.636,36.906C134.364,44.97,139.091,56.418,143.818,57.471C148.545,58.525,153.273,49.184,158,39.844"></path>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-4 py-(--frame-panel-footer-py) py-1.5! sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-1.5 items-center text-muted-foreground text-sm">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                      <path d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M12.125 16.75H12M12.25 16.75C12.25 16.8881 12.1381 17 12 17C11.8619 17 11.75 16.8881 11.75 16.75C11.75 16.6119 11.8619 16.5 12 16.5C12.1381 16.5 12.25 16.6119 12.25 16.75Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    28 hires, 25 exits, now 198.
                  </div>
                  <Button className="-me-2 [&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-primary in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" role="button" tabIndex="0" type="button" href="/people/directory" discover="true">
                    View the directory
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-end" aria-hidden="true">
                      <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </Button>
                </footer>
              </Frame>
              <div className="gap-4 grid grid-cols-1 items-stretch xl:grid-cols-3">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] min-h-[626px] min-w-0 overflow-hidden xl:col-span-2">
                  <EventCalendar className="flex-1">
                    <header className="flex flex-row flex-wrap gap-2 items-center p-0 pe-4">
                      <EventCalendarNav className="flex-1">
                        <EventCalendarNavToday className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" id="base-ui-_r_t1_" baseUiTooltipTrigger="">
                          Today
                        </EventCalendarNavToday>
                        <EventCalendarViewSwitcher className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_t6_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                          Month
                          <svg className="opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </EventCalendarViewSwitcher>
                        <div className="flex items-center">
                          <EventCalendarNavPrev className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_ta_" baseUiTooltipTrigger="">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </EventCalendarNavPrev>
                          <EventCalendarNavNext className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_tc_" baseUiTooltipTrigger="">
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </EventCalendarNavNext>
                        </div>
                        <EventCalendarTitle className="ms-3" aria-live="polite">
                          July 2026
                        </EventCalendarTitle>
                        <div className="grow"></div>
                      </EventCalendarNav>
                      <EventCalendarToolbar>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_tg_" aria-expanded="false">
                          <span className="-space-x-1 flex" aria-hidden="true">
                            <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-success)"}}></span>
                            <span className="ring-2 ring-background rounded-full size-2.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
                          </span>
                          Streams
                          <svg className="opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </EventCalendarToolbar>
                    </header>
                    <FramePanel className="-mb-px [&>[data-slot=event-calendar-content]>*]:border-t-0 before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col min-h-0 p-0!">
                      <EventCalendarContent view="month">
                        <EventCalendarMonthView view="month" role="grid" aria-label="July 2026">
                          <div className="@container border-b grid" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Mon
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                M
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Tue
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                T
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Wed
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                W
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Thu
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                T
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Fri
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                F
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Sat
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                S
                              </span>
                            </div>
                            <div className="font-medium px-2 py-1.5 text-muted-foreground truncate" role="columnheader">
                              <span className="@max-[36rem]:hidden">
                                Sun
                              </span>
                              <span className="@max-[36rem]:inline hidden">
                                S
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 grid min-h-0" style={{gridTemplateRows: "repeat(6, minmax(0px, 1fr))"}}>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1782691200000" aria-label="Monday, June 29th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    29
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1782777600000" aria-label="Tuesday, June 30th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    30
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1782864000000" aria-label="Wednesday, July 1st, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    1
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1782950400000" aria-label="Thursday, July 2nd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    2
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783036800000" aria-label="Friday, July 3rd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    3
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783123200000" aria-label="Saturday, July 4th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    4
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783209600000" aria-label="Sunday, July 5th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    5
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783296000000" aria-label="Monday, July 6th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    6
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783382400000" aria-label="Tuesday, July 7th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    7
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783468800000" aria-label="Wednesday, July 8th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    8
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783555200000" aria-label="Thursday, July 9th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    9
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783641600000" aria-label="Friday, July 10th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783728000000" aria-label="Saturday, July 11th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    11
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1783814400000" aria-label="Sunday, July 12th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    12
                                  </span>
                                </div>
                              </div>
                              <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                                <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 5 / auto / span 1"}}>
                                  <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Aisha Rahman: annual leave, All day" aria-label="Aisha Rahman: annual leave, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Aisha Rahman: annual leave
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/12.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                            </div>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783900800000" aria-label="Monday, July 13th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    13
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1783987200000" aria-label="Tuesday, July 14th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    14
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784073600000" aria-label="Wednesday, July 15th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    15
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784160000000" aria-label="Thursday, July 16th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    16
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784246400000" aria-label="Friday, July 17th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    17
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784332800000" aria-label="Saturday, July 18th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    18
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784419200000" aria-label="Sunday, July 19th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    19
                                  </span>
                                </div>
                              </div>
                              <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                                <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 2"}}>
                                  <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Ingrid Larsen: annual leave, All day" aria-label="Ingrid Larsen: annual leave, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Ingrid Larsen: annual leave
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/17.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                            </div>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784505600000" aria-label="Monday, July 20th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Weekly leads sync, 9:30 AM - 10:15 AM" aria-label="Weekly leads sync, 9:30 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Weekly leads sync
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/01.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/05.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/09.jpg"></AvatarImage>
                                        </Avatar>
                                        <AvatarGroupCount className="[&>svg]:size-4 bg-muted font-medium group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-4 text-[10px] text-muted-foreground">
                                          +3
                                        </AvatarGroupCount>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    20
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784592000000" aria-label="Tuesday, July 21st, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Screening: Senior Engineer, 2:00 PM - 2:30 PM" aria-label="Screening: Senior Engineer, 2:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Screening: Senior Engineer
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/16.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    21
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784678400000" aria-label="Wednesday, July 22nd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Weekly 1:1, 11:00 AM - 11:30 AM" aria-label="Weekly 1:1, 11:00 AM - 11:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Weekly 1:1
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/02.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/04.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    22
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784764800000" aria-label="Thursday, July 23rd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Panel: Support Engineer, 3:00 PM - 3:45 PM" aria-label="Panel: Support Engineer, 3:00 PM - 3:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Panel: Support Engineer
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/14.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/08.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    23
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1784851200000" aria-label="Friday, July 24th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    24
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1784937600000" aria-label="Saturday, July 25th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    25
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-weekend="true" data-ec-day="1785024000000" aria-label="Sunday, July 26th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    26
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785110400000" aria-label="Monday, July 27th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Week 3 check-in, 10:00 AM - 10:30 AM" aria-label="Week 3 check-in, 10:00 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Week 3 check-in
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/08.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/14.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    27
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785196800000" aria-label="Tuesday, July 28th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="H2 calibration: Engineering, 1:30 PM - 2:30 PM" aria-label="H2 calibration: Engineering, 1:30 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      H2 calibration: Engineering
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/01.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/02.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/15.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    28
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785283200000" aria-label="Wednesday, July 29th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(2 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <button className="cursor-pointer hover:text-foreground px-1.5 rounded-sm text-muted-foreground text-start truncate" type="button" tabIndex="0" data-base-ui-click-trigger="" id="base-ui-_r_tk_" aria-haspopup="dialog" aria-expanded="false">
                                    +1 more
                                  </button>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    29
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785369600000" aria-label="Thursday, July 30th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(2 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <button className="cursor-pointer hover:text-foreground px-1.5 rounded-sm text-muted-foreground text-start truncate" type="button" tabIndex="0" data-base-ui-click-trigger="" id="base-ui-_r_tn_" aria-haspopup="dialog" aria-expanded="false">
                                    +7 more
                                  </button>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    30
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-ec-day="1785456000000" aria-label="Friday, July 31st, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(2 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <button className="cursor-pointer hover:text-foreground px-1.5 rounded-sm text-muted-foreground text-start truncate" type="button" tabIndex="0" data-base-ui-click-trigger="" id="base-ui-_r_tq_" aria-haspopup="dialog" aria-expanded="false">
                                    +1 more
                                  </button>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5">
                                    31
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1785542400000" aria-label="Saturday, August 1st, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    1
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1785628800000" aria-label="Sunday, August 2nd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    2
                                  </span>
                                </div>
                              </div>
                              <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                                <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 4"}}>
                                  <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Abena Mensah: parental leave, All day" aria-label="Abena Mensah: parental leave, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Abena Mensah: parental leave
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/08.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "2 / 3 / auto / span 3"}}>
                                  <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Priya Nair: annual leave, All day" aria-label="Priya Nair: annual leave, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Priya Nair: annual leave
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/03.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                            </div>
                            <div className="border-b grid last:border-b-0 min-h-0 relative" role="row" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))"}}>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785715200000" aria-label="Monday, August 3rd, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="First day: Joon-ho Park, 9:00 AM - 10:00 AM" aria-label="First day: Joon-ho Park, 9:00 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      First day: Joon-ho Park
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/02.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/15.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    3
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785801600000" aria-label="Tuesday, August 4th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Assessment debrief: Senior Engineer, 10:30 AM - 11:15 AM" aria-label="Assessment debrief: Senior Engineer, 10:30 AM - 11:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Assessment debrief: Senior Engineer
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/01.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/02.jpg"></AvatarImage>
                                        </Avatar>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/16.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    4
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785888000000" aria-label="Wednesday, August 5th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                  <EventCalendarEvent className="shrink-0" type="button" view="month" past="true" title="Screening: Product Manager, 2:00 PM - 2:30 PM" aria-label="Screening: Product Manager, 2:00 PM - 2:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-success)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Screening: Product Manager
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/05.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    5
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1785974400000" aria-label="Thursday, August 6th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1">
                                  <div className="shrink-0" aria-hidden="true" style={{height: "calc(1 * var(--ec-month-bar-h, 1.75rem) - 0.125rem)"}}></div>
                                </div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    6
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-ec-day="1786060800000" aria-label="Friday, August 7th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    7
                                  </span>
                                </div>
                              </div>
                              <div className="border-e flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1786147200000" aria-label="Saturday, August 8th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    8
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col group/ec-cell min-h-0 min-w-0 overflow-hidden relative" role="gridcell" data-outside="true" data-weekend="true" data-ec-day="1786233600000" aria-label="Sunday, August 9th, 2026">
                                <div className="flex flex-1 flex-col gap-0.5 min-h-0 overflow-hidden pt-1.5 px-1"></div>
                                <div className="flex gap-1 items-center justify-end pb-1.5 px-2">
                                  <span className="flex items-center justify-center rounded-full size-5 text-muted-foreground">
                                    9
                                  </span>
                                </div>
                              </div>
                              <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0 z-10" style={{gridTemplateColumns: "repeat(7, minmax(0px, 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.75rem)"}}>
                                <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 4"}}>
                                  <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.75rem)-0.125rem)]" type="button" view="month" allDay="true" past="true" title="Marco Bianchi: annual leave, All day" aria-label="Marco Bianchi: annual leave, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                                    <span className="bg-(--ec-event-color) rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                    <span className="font-medium truncate">
                                      Marco Bianchi: annual leave
                                    </span>
                                    <span className="flex ms-auto shrink-0">
                                      <AvatarGroup>
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="" loading="lazy" src="/avatars/06.jpg"></AvatarImage>
                                        </Avatar>
                                      </AvatarGroup>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                            </div>
                          </div>
                        </EventCalendarMonthView>
                      </EventCalendarContent>
                    </FramePanel>
                    <div className="sr-only" aria-live="polite"></div>
                  </EventCalendar>
                </Frame>
                <div className="flex flex-col gap-4">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="font-semibold text-balance text-sm">
                          H2 review cycle
                        </div>
                        <div className="text-muted-foreground text-pretty text-sm">
                          Where reviews stand.
                        </div>
                      </div>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 hover:bg-muted pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-32" type="button" tabIndex="0" id="base-ui-_r_ts_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          All teams
                        </SelectValue>
                        <svg className="pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_ts_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col gap-5">
                      <div className="grow mb-6">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-muted-foreground text-sm">
                            Reviews complete
                          </span>
                          <span className="font-semibold text-muted-foreground text-sm">
                            9 / 21
                          </span>
                        </div>
                        <Progress className="**:data-[slot=progress-indicator]:bg-success" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" aria-valuetext="43%" role="progressbar">
                          <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                            <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "43%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            x
                          </span>
                        </Progress>
                      </div>
                      <div className="space-y-6">
                        <div className="gap-2.5 grid grid-cols-3">
                          <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                            <span className="font-bold text-lg text-success">
                              4
                            </span>
                            <span className="flex items-center min-h-8 text-accent-foreground text-center text-xs">
                              Not started
                            </span>
                          </div>
                          <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                            <span className="font-bold text-amber-500 text-lg">
                              4
                            </span>
                            <span className="flex items-center min-h-8 text-accent-foreground text-center text-xs">
                              Self review
                            </span>
                          </div>
                          <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                            <span className="font-bold text-indigo-500 text-lg">
                              4
                            </span>
                            <span className="flex items-center min-h-8 text-accent-foreground text-center text-xs">
                              Manager review
                            </span>
                          </div>
                        </div>
                        <div className="text-center text-muted-foreground text-xs">
                          Cycle closes in
                          <span className="font-semibold text-foreground">
                            32 days
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] flex-1 w-full">
                    <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="font-semibold text-balance text-sm">
                          Headcount
                        </div>
                        <div className="text-muted-foreground text-pretty text-sm">
                          Starters against leavers.
                        </div>
                      </div>
                      <Tooltip>
                      <TooltipTrigger className="-mr-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground/70 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About headcount" id="base-ui-_r_u0_" baseUiTooltipTrigger="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" data-icon="inline-start" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
                          <path d="M12 16V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                          <path d="M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col space-y-8">
                      <div className="flex flex-1 flex-col p-0 space-y-4">
                        <div className="space-y-6">
                          <div className="space-y-1">
                            <div className="font-semibold text-3xl text-foreground">
                              198
                            </div>
                            <div className="flex gap-2 items-center text-sm">
                              <svg className="size-4 text-success-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                              <span className="font-medium text-success-foreground">
                                +3
                              </span>
                              <span className="text-muted-foreground">
                                net over 12M
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-h-40 w-full">
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-full justify-center overflow-hidden rounded-b-xl text-xs w-full" data-chart="chart-_r_u1_">
                            <style>{`
 [data-chart=chart-_r_u1_] {
  --color-headcount: var(--color-chart-4);
}


.dark [data-chart=chart-_r_u1_] {
  --color-headcount: var(--color-chart-4);
}
`}</style>
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                              <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                <div className="recharts-wrapper" width="283" height="188" style={{position: "relative", cursor: "default", width: "283px", height: "188px"}}>
                                  <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                  <svg className="recharts-surface" role="application" tabIndex="0" width="283" height="188" viewBox="0 0 283 188" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts20-clip">
                                        <rect x="0" y="10" height="178" width="283"></rect>
                                      </clippath>
                                    </defs>
                                    <defs>
                                      <lineargradient id="headcountGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-chart-4)" stopOpacity="0.8"></stop>
                                        <stop offset="95%" stopColor="var(--color-chart-4)" stopOpacity="0.1"></stop>
                                      </lineargradient>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-area recharts-layer">
                                        <g className="recharts-layer">
                                          <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#headcountGradient)" fillOpacity="0.6" height="178" stroke="none" width="283" id="recharts-area-_r_105_" d="M0,73.571C8.576,65.329,17.152,57.087,25.727,60.857C34.303,64.627,42.879,80.41,51.455,86.286C60.03,92.161,68.606,88.13,77.182,99C85.758,109.87,94.333,135.642,102.909,137.143C111.485,138.644,120.061,115.874,128.636,99C137.212,82.126,145.788,71.149,154.364,73.571C162.939,75.994,171.515,91.817,180.091,86.286C188.667,80.755,197.242,53.869,205.818,48.143C214.394,42.416,222.97,57.848,231.545,60.857C240.121,63.866,248.697,54.451,257.273,48.143C265.848,41.834,274.424,38.631,283,35.429L283,188C274.424,188,265.848,188,257.273,188C248.697,188,240.121,188,231.545,188C222.97,188,214.394,188,205.818,188C197.242,188,188.667,188,180.091,188C171.515,188,162.939,188,154.364,188C145.788,188,137.212,188,128.636,188C120.061,188,111.485,188,102.909,188C94.333,188,85.758,188,77.182,188C68.606,188,60.03,188,51.455,188C42.879,188,34.303,188,25.727,188C17.152,188,8.576,188,0,188Z"></path>
                                          <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="178" stroke="var(--color-chart-4)" width="283" d="M0,73.571C8.576,65.329,17.152,57.087,25.727,60.857C34.303,64.627,42.879,80.41,51.455,86.286C60.03,92.161,68.606,88.13,77.182,99C85.758,109.87,94.333,135.642,102.909,137.143C111.485,138.644,120.061,115.874,128.636,99C137.212,82.126,145.788,71.149,154.364,73.571C162.939,75.994,171.515,91.817,180.091,86.286C188.667,80.755,197.242,53.869,205.818,48.143C214.394,42.416,222.97,57.848,231.545,60.857C240.121,63.866,248.697,54.451,257.273,48.143C265.848,41.834,274.424,38.631,283,35.429"></path>
                                        </g>
                                      </g>
                                    </g>
                                    <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                      <g className="recharts-area-dots recharts-layer">
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="0" cy="73.57142857142857"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="25.727272727272727" cy="60.857142857142854"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="51.45454545454545" cy="86.28571428571429"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="77.18181818181819" cy="99"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="102.9090909090909" cy="137.14285714285714"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="128.63636363636363" cy="99"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="154.36363636363637" cy="73.57142857142857"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="180.0909090909091" cy="86.28571428571429"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="205.8181818181818" cy="48.142857142857146"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="231.54545454545453" cy="60.857142857142854"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="257.27272727272725" cy="48.142857142857146"></circle>
                                        <circle className="recharts-area-dot recharts-dot" r="4" strokeWidth="2" fill="var(--color-chart-4)" fillOpacity="0.6" height="178" stroke="white" width="283" cx="283" cy="35.42857142857144"></circle>
                                      </g>
                                    </g>
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
                        <div className="w-full">
                          <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                            <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_u2_">
                                3M
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_u3_">
                                6M
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_u4_" compositeItemActive="">
                                12M
                              </TabsTrigger>
                            </TabsList>
                          </Tabs>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
              </div>
              <div className="gap-4 grid grid-cols-1 items-stretch xl:grid-cols-3">
                <div className="flex flex-col gap-4 min-w-0 xl:col-span-2">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py-adjust:2px] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0 w-full" spacing="sm">
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-semibold text-balance text-sm">
                          Awaiting your action
                        </div>
                        <div className="text-muted-foreground text-pretty text-sm">
                          20 waiting, 4 urgent, oldest 14d
                        </div>
                      </div>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" role="button" tabIndex="0" href="/approvals" discover="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                        All requests
                      </Button>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] bg-card flex-1 min-h-0 p-0! shadow-none!">
                      <div className="px-3 py-3">
                        <div className="flex flex-wrap gap-3 items-center justify-between">
                          <div className="flex flex-wrap gap-2 items-center">
                            <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-48 rounded-lg sm:w-48 transition-colors" role="group">
                              <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                  <path d="M17 17L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                  <path d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                </svg>
                              </InputGroupAddon>
                              <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_u5_" placeholder="Search requests..." aria-label="Search requests" value="" />
                            </InputGroup>
                            <Popover>
                            <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by decision status" baseUiClickTrigger="" id="base-ui-_r_u7_" aria-haspopup="dialog" aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                              Status
                            </PopoverTrigger>
                            </Popover>
                            <Popover>
                            <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by request type" baseUiClickTrigger="" id="base-ui-_r_u9_" aria-haspopup="dialog" aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                              Type
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Table actions" aria-haspopup="menu" id="base-ui-_r_ud_" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                              <path d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z" stroke="currentColor" strokeWidth="2"></path>
                              <path d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z" stroke="currentColor" strokeWidth="2"></path>
                            </svg>
                            Actions
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="relative">
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_uf_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridTableViewport>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "200px"}} />
                                    <col style={{width: "104px"}} />
                                    <col style={{width: "132px"}} />
                                    <col style={{width: "76px"}} />
                                    <col style={{width: "110px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "200px"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_uj_" aria-expanded="false">
                                            Request
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "104px"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_uo_" aria-expanded="false">
                                            Type
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "132px"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_ut_" aria-expanded="false">
                                            Requested by
                                            <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "76px"}}>
                                        <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_v2_" aria-expanded="false">
                                            Waiting
                                            <svg className="size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M12 18.502V5.00195" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "110px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridTableBody>
                                    <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a-018">
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) max-w-[16rem] px-2 py-1.5" style={{width: "200px"}}>
                                        <div className="flex flex-col gap-1 min-w-0">
                                          <button className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/request hover:underline items-center min-w-0 rounded-sm text-left text-sm underline-offset-4" type="button">
                                            <span className="truncate">
                                              Campaign shoot: £4,200
                                            </span>
                                            <svg className="group-focus-visible/request:opacity-100 group-hover/request:opacity-100 opacity-0 shrink-0 size-3.5 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </button>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Over the £1,000 threshold, agency invoice
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "104px"}}>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M10 16H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M14.5 16L18 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M2 9H22" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                          </svg>
                                          <span className="truncate" title="Expense">
                                            Expense
                                          </span>
                                        </span>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "132px"}}>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/12.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="min-w-0">
                                            <div className="font-medium text-sm truncate">
                                              Aisha Rahman
                                            </div>
                                            <div className="text-muted-foreground text-xs truncate">
                                              Marketing
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "76px"}}>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="tabular-nums text-sm">
                                            14d
                                          </span>
                                          <span className="text-muted-foreground text-xs">
                                            16 Jul
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "110px"}}>
                                        <div className="flex gap-1 items-center justify-end">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Approve: Campaign shoot: £4,200" id="base-ui-_r_v5_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject: Campaign shoot: £4,200" id="base-ui-_r_v7_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a-016">
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) max-w-[16rem] px-2 py-1.5" style={{width: "200px"}}>
                                        <div className="flex flex-col gap-1 min-w-0">
                                          <button className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/request hover:underline items-center min-w-0 rounded-sm text-left text-sm underline-offset-4" type="button">
                                            <span className="truncate">
                                              Right to work renewal
                                            </span>
                                            <svg className="group-focus-visible/request:opacity-100 group-hover/request:opacity-100 opacity-0 shrink-0 size-3.5 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </button>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Visa expires 30 Sep, blocks payroll if it lapses
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "104px"}}>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path d="M15.5 8C15.5 5.23858 13.2614 3 10.5 3C7.73858 3 5.5 5.23858 5.5 8C5.5 10.7614 7.73858 13 10.5 13C13.2614 13 15.5 10.7614 15.5 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M3.5 20C3.5 16.134 6.63401 13 10.5 13C11.775 13 12.9704 13.3409 14 13.9365" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M20.1887 14.9339L19.5661 14.3113C19.151 13.8962 18.478 13.8962 18.0629 14.3113L14.7141 17.6601C14.269 18.1052 13.9656 18.6722 13.8421 19.2895L13.5 21L15.2105 20.6579C15.8278 20.5344 16.3948 20.231 16.8399 19.7859L20.1887 16.4371C20.6038 16.022 20.6038 15.349 20.1887 14.9339Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                          </svg>
                                          <span className="truncate" title="Profile change">
                                            Profile change
                                          </span>
                                        </span>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "132px"}}>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/05.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="min-w-0">
                                            <div className="font-medium text-sm truncate">
                                              Hannah Weber
                                            </div>
                                            <div className="text-muted-foreground text-xs truncate">
                                              Product
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "76px"}}>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="tabular-nums text-sm">
                                            13d
                                          </span>
                                          <span className="text-muted-foreground text-xs">
                                            17 Jul
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "110px"}}>
                                        <div className="flex gap-1 items-center justify-end">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Approve: Right to work renewal" id="base-ui-_r_v9_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject: Right to work renewal" id="base-ui-_r_vb_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a-017">
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) max-w-[16rem] px-2 py-1.5" style={{width: "200px"}}>
                                        <div className="flex flex-col gap-1 min-w-0">
                                          <button className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/request hover:underline items-center min-w-0 rounded-sm text-left text-sm underline-offset-4" type="button">
                                            <span className="truncate">
                                              Promotion to Staff Engineer
                                            </span>
                                            <svg className="group-focus-visible/request:opacity-100 group-hover/request:opacity-100 opacity-0 shrink-0 size-3.5 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </button>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Level change, effective 1 Sep
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "104px"}}>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path d="M2.01733 15C4.2169 15 6.00001 16.7831 6.00001 18.9827" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M18 18.9827V18.8908C18 16.742 19.742 15 21.8908 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M6.00001 5.01733C6.00001 7.2169 4.2169 9.00001 2.01733 9.00001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M18 5.01733C18 7.19765 19.769 8.96876 21.9423 8.9996" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M16 5H8C5.17157 5 3.75736 5 2.87868 5.87868C2 6.75736 2 8.17157 2 11V13C2 15.8284 2 17.2426 2.87868 18.1213C3.75736 19 5.17157 19 8 19H16C18.8284 19 20.2426 19 21.1213 18.1213C22 17.2426 22 15.8284 22 13V11C22 8.17157 22 6.75736 21.1213 5.87868C20.2426 5 18.8284 5 16 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                          </svg>
                                          <span className="truncate" title="Compensation">
                                            Compensation
                                          </span>
                                        </span>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "132px"}}>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/01.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="min-w-0">
                                            <div className="font-medium text-sm truncate">
                                              Amara Okafor
                                            </div>
                                            <div className="text-muted-foreground text-xs truncate">
                                              Engineering
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "76px"}}>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="tabular-nums text-sm">
                                            13d
                                          </span>
                                          <span className="text-muted-foreground text-xs">
                                            17 Jul
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "110px"}}>
                                        <div className="flex gap-1 items-center justify-end">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Approve: Promotion to Staff Engineer" id="base-ui-_r_vd_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject: Promotion to Staff Engineer" id="base-ui-_r_vf_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a-015">
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) max-w-[16rem] px-2 py-1.5" style={{width: "200px"}}>
                                        <div className="flex flex-col gap-1 min-w-0">
                                          <button className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/request hover:underline items-center min-w-0 rounded-sm text-left text-sm underline-offset-4" type="button">
                                            <span className="truncate">
                                              Offer sign-off: Account Executive
                                            </span>
                                            <svg className="group-focus-visible/request:opacity-100 group-hover/request:opacity-100 opacity-0 shrink-0 size-3.5 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </button>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Candidate holds a competing offer
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "104px"}}>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path d="M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M17.5 21L17.5 14M14 17.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                          </svg>
                                          <span className="truncate" title="Offer">
                                            Offer
                                          </span>
                                        </span>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "132px"}}>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/15.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="min-w-0">
                                            <div className="font-medium text-sm truncate">
                                              Bruno Duarte
                                            </div>
                                            <div className="text-muted-foreground text-xs truncate">
                                              People
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "76px"}}>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="tabular-nums text-sm">
                                            12d
                                          </span>
                                          <span className="text-muted-foreground text-xs">
                                            18 Jul
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "110px"}}>
                                        <div className="flex gap-1 items-center justify-end">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Approve: Offer sign-off: Account Executive" id="base-ui-_r_vh_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject: Offer sign-off: Account Executive" id="base-ui-_r_vj_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="a-014">
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) max-w-[16rem] px-2 py-1.5" style={{width: "200px"}}>
                                        <div className="flex flex-col gap-1 min-w-0">
                                          <button className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/request hover:underline items-center min-w-0 rounded-sm text-left text-sm underline-offset-4" type="button">
                                            <span className="truncate">
                                              Developer tooling renewal: £3,600
                                            </span>
                                            <svg className="group-focus-visible/request:opacity-100 group-hover/request:opacity-100 opacity-0 shrink-0 size-3.5 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18.5 12L4.99997 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                              <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </button>
                                          <span className="text-muted-foreground text-xs truncate">
                                            Annual licence, over the £1,000 threshold
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "104px"}}>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                                          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                            <path d="M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M10 16H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M14.5 16L18 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            <path d="M2 9H22" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                                          </svg>
                                          <span className="truncate" title="Expense">
                                            Expense
                                          </span>
                                        </span>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "132px"}}>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="" src="/avatars/02.jpg"></AvatarImage>
                                          </Avatar>
                                          <div className="min-w-0">
                                            <div className="font-medium text-sm truncate">
                                              Daniel Reyes
                                            </div>
                                            <div className="text-muted-foreground text-xs truncate">
                                              Engineering
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "76px"}}>
                                        <div className="flex flex-col gap-0.5">
                                          <span className="tabular-nums text-sm">
                                            11d
                                          </span>
                                          <span className="text-muted-foreground text-xs">
                                            19 Jul
                                          </span>
                                        </div>
                                      </td>
                                      <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "110px"}}>
                                        <div className="flex gap-1 items-center justify-end">
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Approve: Developer tooling renewal: £3,600" id="base-ui-_r_vl_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                          <Tooltip>
                                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reject: Developer tooling renewal: £3,600" id="base-ui-_r_vn_" baseUiTooltipTrigger="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                              <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                            </svg>
                                          </TooltipTrigger>
                                          </Tooltip>
                                        </div>
                                      </td>
                                    </tr>
                                  </DataGridTableBody>
                                </DataGridTable>
                              </DataGridTableViewport>
                            </div>
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
                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_vo_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue className="flex flex-1 text-left">
                              5
                            </SelectValue>
                            <svg className="pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                              <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_vo_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            1 - 5 of 20 requests
                          </div>
                          <div className="flex items-center order-1 space-x-1">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
                              <span className="sr-only">
                                Go to previous page
                              </span>
                              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-accent-foreground text-sm" type="button" tabIndex="0">
                              1
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                              2
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                              3
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                              4
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" tabIndex="0">
                              <span className="sr-only">
                                Go to next page
                              </span>
                              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor">
                                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </DataGridPagination>
                    </footer>
                  </Frame>
                  <div className="[&>button]:hidden contents">
                    <Sheet>
                    <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_vs_" aria-haspopup="dialog" aria-expanded="false">
                      Open details sheet
                    </SheetTrigger>
                    </Sheet>
                  </div>
                </div>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] text-foreground w-full">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="font-semibold text-balance text-sm">
                        Hiring pipeline
                      </div>
                      <div className="text-muted-foreground text-pretty text-sm">
                        Candidates by stage.
                      </div>
                    </div>
                    <Select>
                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 hover:bg-muted min-w-31 pl-2.5 pr-2 py-2 rounded-lg select-none shrink-0 text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_r_vu_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter stages shown">
                      <SelectValue className="flex flex-1 text-left">
                        All roles
                      </SelectValue>
                      <svg className="pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                        <path d="M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_vu_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col">
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="space-y-4">
                        <div className="flex gap-3 items-end justify-between">
                          <div className="flex gap-2 items-end">
                            <span className="font-medium leading-none text-3xl">
                              36
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-none border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                              <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path d="M20 13V8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                <path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                              </svg>
                              <span>
                                3.8% to offer
                              </span>
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-1 h-2.5 w-full" role="img" aria-label="Capital distribution: Sourced 31%,Screening 28%,Interview 14%,Assessment 14%,Offer 14%">
                          <div className="bg-slate-400 min-w-3 rounded-full" style={{flexBasis: "30.5556%"}}></div>
                          <div className="bg-success min-w-3 rounded-full" style={{flexBasis: "27.7778%"}}></div>
                          <div className="bg-cyan-600 min-w-3 rounded-full" style={{flexBasis: "13.8889%"}}></div>
                          <div className="bg-amber-400 min-w-3 rounded-full" style={{flexBasis: "13.8889%"}}></div>
                          <div className="bg-orange-500 min-w-3 rounded-full" style={{flexBasis: "13.8889%"}}></div>
                        </div>
                      </div>
                      <ul className="flex flex-col mt-auto">
                        <li className="-mx-(--frame-panel-px) border-b border-border flex gap-3 h-16 items-center last:border-0 px-(--frame-panel-px)">
                          <span className="bg-slate-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              Sourced
                            </p>
                          </div>
                          <div className="shrink-0 space-y-1 text-right">
                            <p className="text-muted-foreground text-xs">
                              Candidates
                            </p>
                            <p className="font-medium text-sm">
                              11
                            </p>
                          </div>
                        </li>
                        <li className="-mx-(--frame-panel-px) border-b border-border flex gap-3 h-16 items-center last:border-0 px-(--frame-panel-px)">
                          <span className="bg-success rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              Screening
                            </p>
                          </div>
                          <div className="shrink-0 space-y-1 text-right">
                            <p className="text-muted-foreground text-xs">
                              Candidates
                            </p>
                            <p className="font-medium text-sm">
                              10
                            </p>
                          </div>
                        </li>
                        <li className="-mx-(--frame-panel-px) border-b border-border flex gap-3 h-16 items-center last:border-0 px-(--frame-panel-px)">
                          <span className="bg-cyan-600 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              Interview
                            </p>
                          </div>
                          <div className="shrink-0 space-y-1 text-right">
                            <p className="text-muted-foreground text-xs">
                              Candidates
                            </p>
                            <p className="font-medium text-sm">
                              5
                            </p>
                          </div>
                        </li>
                        <li className="-mx-(--frame-panel-px) border-b border-border flex gap-3 h-16 items-center last:border-0 px-(--frame-panel-px)">
                          <span className="bg-amber-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              Assessment
                            </p>
                          </div>
                          <div className="shrink-0 space-y-1 text-right">
                            <p className="text-muted-foreground text-xs">
                              Candidates
                            </p>
                            <p className="font-medium text-sm">
                              5
                            </p>
                          </div>
                        </li>
                        <li className="-mx-(--frame-panel-px) border-b border-border flex gap-3 h-16 items-center last:border-0 px-(--frame-panel-px)">
                          <span className="bg-orange-500 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">
                              Offer
                            </p>
                          </div>
                          <div className="shrink-0 space-y-1 text-right">
                            <p className="text-muted-foreground text-xs">
                              Candidates
                            </p>
                            <p className="font-medium text-sm">
                              5
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
      <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    </div>
  )
}
