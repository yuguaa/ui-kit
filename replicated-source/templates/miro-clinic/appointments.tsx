import {
  EventCalendarNavNext,
  EventCalendarNavPrev,
  EventCalendarNavToday,
  EventCalendarViewSwitcher,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-nav"
import {
  EventCalendarNowIndicator,
  EventCalendarTimeGutter,
} from "@/registry-neui/bases/base/neui/event-calendar/event-calendar-time-grid"
import { EventCalendarContent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-content"
import { EventCalendarEvent } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-event"
import {
  EventCalendarNav,
  EventCalendarToolbar,
} from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-nav"
import { EventCalendarTimeGrid } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar-time-grid"
import { EventCalendar } from "@/registry-neui/bases/radix/neui/event-calendar/event-calendar"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div id="root" data-base-ui-inert="">
      <SidebarProvider>
      <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-svh overflow-hidden w-full" style={{"--sidebar-width": "350px", "--sidebar-width-icon": "3rem", "--header-height": "50px"}}>
        <SidebarProvider>
        <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
          <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)" aria-hidden="true"></div>
          <SidebarProvider>
          <div className="*:data-[sidebar=sidebar]:flex-row data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex overflow-hidden transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <SidebarProvider>
            <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
              <div className="flex flex-1 min-h-full">
                <SidebarProvider>
                <Sidebar className="border-r w-(--sidebar-width-icon)!" aria-hidden="true">
                  <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
                    <a className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar focus-visible:ring-ring outline-none rounded-md" aria-label="NeUI Clinic, back to the dashboard" href="/" data-discover="true">
                      <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                          <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </a>
                  </SidebarHeader>
                  <SidebarProvider>
                  <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
                    <SidebarProvider>
                    <SidebarGroup className="p-2" sidebar="group">
                      <SidebarProvider>
                      <SidebarGroupContent className="text-sm" sidebar="group-content">
                        <SidebarProvider>
                        <SidebarMenu className="gap-0.5" sidebar="menu">
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Dashboard">
                              <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Calendar">
                              <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 2v3"></path>
                                <path d="M16 2v3"></path>
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <path d="M3 9h18"></path>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Appointments" data-active="">
                              <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 2v3"></path>
                                <path d="M16 2v3"></path>
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <path d="M3 9h18"></path>
                                <path d="m9 15 2 2 4-4"></path>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Customers">
                              <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Staff">
                              <svg className="lucide lucide-stethoscope" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11 2v2"></path>
                                <path d="M5 2v2"></path>
                                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                                <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                                <circle cx="20" cy="10" r="2"></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Payments">
                              <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M6 12h.01M18 12h.01"></path>
                              </svg>
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
                    <SidebarGroup className="mt-auto p-2" sidebar="group">
                      <SidebarProvider>
                      <SidebarGroupContent className="text-sm" sidebar="group-content">
                        <SidebarProvider>
                        <SidebarMenu className="gap-0.5" sidebar="menu">
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <Popover>
                            <PopoverTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center! outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Notifications" tabIndex="0" baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                              </svg>
                              <span className="absolute bg-primary right-0.5 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                            </PopoverTrigger>
                            </Popover>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Search">
                              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Settings">
                              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
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
                  </SidebarContent>
                  </SidebarProvider>
                  <SidebarFooter className="gap-2 p-2" sidebar="footer">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                        <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarFooter>
                </Sidebar>
                </SidebarProvider>
                <div className="flex flex-1 overflow-hidden w-[calc(var(--sidebar-width)-var(--sidebar-width-icon))]">
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Open Time"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Book the first open slot">
                        <svg className="lucide lucide-clock-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 6v6l3.644 1.822"></path>
                          <path d="M16 19h6"></path>
                          <path d="M19 16v6"></path>
                          <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="border-b border-border flex flex-col gap-2 px-3 py-3 shrink-0">
                      <div className="flex gap-2 items-center justify-between">
                        <span className="font-medium text-foreground text-sm">
                          {"Today · 15 Oct"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                          {"18 slots"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-baseline">
                        <span className="font-semibold tabular-nums text-2xl text-foreground tracking-tight">
                          {"27h 30m"}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {"still sellable"}
                        </span>
                      </div>
                      <div className="bg-muted flex h-1.5 overflow-hidden rounded-full w-full" role="img" aria-label="13h 30m booked, 12h 45m held, 1h 15m in gaps too short to sell, 27h 30m open">
                        <span className="bg-primary h-full" aria-hidden="true" style={{flexGrow: "810", flexBasis: "0px"}}></span>
                        <span className="bg-muted-foreground/50 h-full" aria-hidden="true" style={{flexGrow: "765", flexBasis: "0px"}}></span>
                        <span className="bg-border h-full" aria-hidden="true" style={{flexGrow: "75", flexBasis: "0px"}}></span>
                        <span className="bg-success h-full" aria-hidden="true" style={{flexGrow: "1650", flexBasis: "0px"}}></span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {"Across 5 chairs that ran"}
                      </span>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_p_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "344px"}}>
                          <div className="flex flex-col h-full">
                            <div className="border-b border-border py-2">
                              <div className="flex items-center justify-between px-3 py-1">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  {"Open by chair"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                  {"5 of 9"}
                                </Badge>
                              </div>
                              <div className="px-2" role="list">
                                <div role="listitem">
                                  <Collapsible data-open="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Chairs that ran group" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_q_" aria-expanded="true">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Chairs that ran"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                        {"5"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                    <CollapsibleContent data-open="" id="base-ui-_r_q_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                      <div className="py-0.5">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(37, 99, 235)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Amara Chen"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"6h 45m"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(192, 38, 211)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Ravi Menon"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"6h"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Elena Novak"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"7h 15m"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(13, 148, 136)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Tomas Reyes"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"3h"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex="0">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Hana Sato"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"4h 30m"}
                                          </Badge>
                                        </Button>
                                      </div>
                                    </CollapsibleContent>
                                  </Collapsible>
                                </div>
                                <div role="listitem">
                                  <Collapsible data-closed="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Never opened group" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Never opened"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                        {"4"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                </div>
                              </div>
                            </div>
                            <div className="border-b border-border py-2">
                              <div className="flex items-center justify-between px-3 py-1">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  {"Open slots · 30m+"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                  {"18"}
                                </Badge>
                              </div>
                              <div className="flex flex-col gap-0.5 px-1.5" role="list">
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Book 8:00 AM with Dr. Amara Chen">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(37, 99, 235)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"8:00 AM to 8:30 AM"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Dr. Amara Chen · 30m"}
                                      </span>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Book 8:00 AM with Dr. Ravi Menon">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(192, 38, 211)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"8:00 AM to 9:00 AM"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Dr. Ravi Menon · 1h"}
                                      </span>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Book 8:00 AM with Dr. Elena Novak">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"8:00 AM to 10:15 AM"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Dr. Elena Novak · 2h 15m"}
                                      </span>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Book 8:45 AM with Dr. Hana Sato">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"8:45 AM to 9:15 AM"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Dr. Hana Sato · 30m"}
                                      </span>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0" aria-label="Book 9:00 AM with Dr. Amara Chen">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "rgb(37, 99, 235)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"9:00 AM to 9:30 AM"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Dr. Amara Chen · 30m"}
                                      </span>
                                    </div>
                                  </Button>
                                </div>
                              </div>
                              <div className="pt-1 px-1.5">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                                  {"Show all 18"}
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 grow px-3 py-3">
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Book the first open slot"}
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2.5 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-calendar-days" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M8 2v3"></path>
                                  <path d="M16 2v3"></path>
                                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                  <path d="M3 9h18"></path>
                                  <path d="M8 13h.01"></path>
                                  <path d="M12 13h.01"></path>
                                  <path d="M16 13h.01"></path>
                                  <path d="M8 17h.01"></path>
                                  <path d="M12 17h.01"></path>
                                  <path d="M16 17h.01"></path>
                                </svg>
                                {"Open the board on this day"}
                              </Button>
                            </div>
                            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            <div className="flex gap-2 items-center px-3 py-2.5">
                              <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 6v6l4 2"></path>
                              </svg>
                              <div className="flex flex-col min-w-0">
                                <span className="font-medium text-[11px] text-muted-foreground/60">
                                  {"Open time"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"27h 30m of 55h"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_p_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "262.03980099502485px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0" aria-hidden="true">
                      <span className="font-semibold text-foreground text-sm">
                        {"Chairs"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="New booking">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="border-b border-border flex flex-col items-center px-1 py-2 shrink-0">
                      <div className="flex items-center justify-between pb-1 px-2 w-full" aria-hidden="true">
                        <span className="font-medium text-foreground text-sm">
                          {"October 2026"}
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
                      <Calendar className="[--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] rdp-root rtl:**:[.rdp-button\\_next>svg]:rotate-180 rtl:**:[.rdp-button\\_previous>svg]:rotate-180" lang="en-US" mode="single" required="true">
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
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/27" aria-label="Sunday, September 27th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"27"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-28" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/28" aria-label="Monday, September 28th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"28"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-29" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/29" aria-label="Tuesday, September 29th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"29"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-30" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/9/30" aria-label="Wednesday, September 30th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"30"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-01">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/1" aria-label="Thursday, October 1st, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"1"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-02">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/2" aria-label="Friday, October 2nd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"2"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-03">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/3" aria-label="Saturday, October 3rd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"3"}
                                    </Button>
                                  </td>
                                </tr>
                                <tr className="flex mt-2 rdp-week w-full">
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-04">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/4" aria-label="Sunday, October 4th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"4"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-05">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/5" aria-label="Monday, October 5th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"5"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-06">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/6" aria-label="Tuesday, October 6th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"6"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-07">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/7" aria-label="Wednesday, October 7th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"7"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-08">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/8" aria-label="Thursday, October 8th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"8"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-09">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/9" aria-label="Friday, October 9th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"9"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-10">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/10" aria-label="Saturday, October 10th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"10"}
                                    </Button>
                                  </td>
                                </tr>
                                <tr className="flex mt-2 rdp-week w-full">
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-11">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/11" aria-label="Sunday, October 11th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"11"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-12">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/12" aria-label="Monday, October 12th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"12"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-13">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/13" aria-label="Tuesday, October 13th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"13"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-14">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/14" aria-label="Wednesday, October 14th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"14"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square bg-accent group/day h-full p-0 rdp-day rdp-selected relative rounded-(--cell-radius) rounded-md select-none text-center text-foreground w-full" role="gridcell" aria-selected="true" data-day="2026-10-15" data-selected="true" data-today="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="0" day="2026/10/15" selectedSingle="true" aria-label="Today, Thursday, October 15th, 2026, selected">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"15"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-16">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/16" aria-label="Friday, October 16th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"16"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-17">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/17" aria-label="Saturday, October 17th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"17"}
                                    </Button>
                                  </td>
                                </tr>
                                <tr className="flex mt-2 rdp-week w-full">
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-18">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/18" aria-label="Sunday, October 18th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"18"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-19">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/19" aria-label="Monday, October 19th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"19"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-20">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/20" aria-label="Tuesday, October 20th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"20"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-21">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/21" aria-label="Wednesday, October 21st, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"21"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-22">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/22" aria-label="Thursday, October 22nd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"22"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-23">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/23" aria-label="Friday, October 23rd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"23"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-24">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/24" aria-label="Saturday, October 24th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"24"}
                                    </Button>
                                  </td>
                                </tr>
                                <tr className="flex mt-2 rdp-week w-full">
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-25">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/25" aria-label="Sunday, October 25th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"25"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-26">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/26" aria-label="Monday, October 26th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"26"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-27">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/27" aria-label="Tuesday, October 27th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"27"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-28">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/28" aria-label="Wednesday, October 28th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"28"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-29">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/29" aria-label="Thursday, October 29th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"29"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-30">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/30" aria-label="Friday, October 30th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"30"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-31">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex="-1" day="2026/10/31" aria-label="Saturday, October 31st, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                    <div className="grow max-h-full min-h-0" aria-hidden="true">
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_s_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "575px"}} data-has-overflow-y="" data-overflow-y-end="">
                          <div className="flex flex-col h-full">
                            <div className="border-b border-border py-2">
                              <div className="flex items-center justify-between px-3 py-1">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  {"My Chairs"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                  {"5 of 9"}
                                </Badge>
                              </div>
                              <div className="px-2" role="list">
                                <div role="listitem">
                                  <Collapsible data-open="">
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Daily chairs group" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_t_" aria-expanded="true">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Daily chairs"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                        {"5"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                    <CollapsibleContent data-open="" id="base-ui-_r_t_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                      <div className="py-0.5">
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(37, 99, 235)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_u_" aria-checked="true" aria-label="Toggle Dr. Amara Chen">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Amara Chen"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Dr. Amara Chen" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="19" cy="12" r="1"></circle>
                                              <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(192, 38, 211)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_16_" aria-checked="true" aria-label="Toggle Dr. Ravi Menon">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Ravi Menon"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Dr. Ravi Menon" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="19" cy="12" r="1"></circle>
                                              <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="true" aria-label="Toggle Dr. Elena Novak">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Elena Novak"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Dr. Elena Novak" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="19" cy="12" r="1"></circle>
                                              <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(13, 148, 136)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1m_" aria-checked="true" aria-label="Toggle Dr. Tomas Reyes">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Tomas Reyes"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Dr. Tomas Reyes" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="19" cy="12" r="1"></circle>
                                              <circle cx="5" cy="12" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1u_" aria-checked="true" aria-label="Toggle Dr. Hana Sato">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Hana Sato"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Options for Dr. Hana Sato" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
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
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Relief chairs group" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Relief chairs"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                        {"4"}
                                      </Badge>
                                    </CollapsibleTrigger>
                                    </Collapsible>
                                  </Collapsible>
                                </div>
                              </div>
                              <div className="pt-1 px-1.5">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                                  <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                  {"Show every chair"}
                                </Button>
                              </div>
                            </div>
                            <div className="border-b border-border py-2">
                              <div className="flex items-center justify-between px-3 py-1">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                                  {"Up Next"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                  {"10"}
                                </Badge>
                              </div>
                              <div className="flex flex-col gap-0.5 px-1.5" role="list">
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"Laila Abadi"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"10:15 AM to 10:45 AM · Braces Adjustment"}
                                      </span>
                                    </div>
                                    <div className="-space-x-1 flex ml-auto">
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"Chiara Novello"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"10:45 AM to 11:15 AM · Braces Adjustment"}
                                      </span>
                                    </div>
                                    <div className="-space-x-1 flex ml-auto">
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"Elsa Lindqvist"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"11:00 AM to 12:00 PM · Crown Fitting"}
                                      </span>
                                    </div>
                                    <div className="-space-x-1 flex ml-auto">
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"Laila Abadi"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"12:30 PM to 1:15 PM · Scaling"}
                                      </span>
                                    </div>
                                    <div className="-space-x-1 flex ml-auto">
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                  </Button>
                                </div>
                                <div role="listitem">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex="0">
                                    <span className="rounded-full self-stretch shrink-0 w-1" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></span>
                                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                      <span className="font-medium leading-snug text-foreground text-sm truncate">
                                        {"Ifeoma Okafor"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"2:00 PM to 2:45 PM · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="-space-x-1 flex ml-auto">
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                        <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                    </div>
                                  </Button>
                                </div>
                              </div>
                              <div className="pt-1 px-1.5">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                                  {"Show all 10"}
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 grow px-3 py-3">
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"New Booking"}
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2.5 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="18" cy="5" r="3"></circle>
                                  <circle cx="6" cy="12" r="3"></circle>
                                  <circle cx="18" cy="19" r="3"></circle>
                                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                </svg>
                                {"Share Availability"}
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
                                  {"Clinic timezone"}
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Asia/Shanghai"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_s_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "82.97023809523809px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                  <div className="bg-background flex flex-1 flex-col overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Agenda"}
                      </span>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter appointments" aria-haspopup="menu" id="base-ui-_r_2a_" aria-expanded="false">
                        <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M14 17H5"></path>
                          <path d="M19 7h-9"></path>
                          <circle cx="17" cy="17" r="3"></circle>
                          <circle cx="7" cy="7" r="3"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2c_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1244px"}}>
                          <div className="flex flex-col">
                            <div>
                              <div className="py-3">
                                <div className="pb-2 px-3">
                                  <button className="focus-visible:ring-2 focus-visible:ring-ring font-medium hover:text-foreground outline-none rounded-sm text-muted-foreground text-xs tracking-wide transition-colors uppercase" type="button">
                                    {"Monday, Oct 12"}
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2 px-3" role="list">
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-amber-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Harriet Pemberton (Implant Fitting)"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"All day"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                          {"Procedure"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Elin Dahl" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Arun Iyer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Mara Ellison" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"3 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"24 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-indigo-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Consent Forms Review"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"9:00 AM to 10:30 AM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                          {"Insurance"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Op 4"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Elin Dahl" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Arun Iyer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarFallback className="bg-muted font-semibold rounded-full text-[8px] text-muted-foreground">
                                                {"RC"}
                                              </AvatarFallback>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"3 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"9 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Weekly Clinical Standup"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"1:00 PM to 2:00 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                          {"Meeting"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Video call"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Lena Brandt" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Devin Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Tomas Weber" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+6"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"9 attendees"}
                                          </span>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <div className="py-3">
                                <div className="pb-2 px-3">
                                  <button className="focus-visible:ring-2 focus-visible:ring-ring font-medium hover:text-foreground outline-none rounded-sm text-muted-foreground text-xs tracking-wide transition-colors uppercase" type="button">
                                    {"Tuesday, Oct 13"}
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2 px-3" role="list">
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Introductory Call"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"10:00 AM to 11:00 AM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary transition-shadow">
                                          {"Call"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Mara Ellison" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Devin Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarFallback className="bg-muted font-semibold rounded-full text-[8px] text-muted-foreground">
                                                {"DA"}
                                              </AvatarFallback>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+2"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"5 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"2 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Katherine Chen Plan Review"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"10:30 AM to 12:00 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary transition-shadow">
                                          {"Call"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Lena Brandt" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Tomas Weber" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"2 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"5 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <div className="py-3">
                                <div className="pb-2 px-3">
                                  <button className="focus-visible:ring-2 focus-visible:ring-ring font-medium hover:text-foreground outline-none rounded-sm text-muted-foreground text-xs tracking-wide transition-colors uppercase" type="button">
                                    {"Wednesday, Oct 14"}
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2 px-3" role="list">
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Send pre-op notes to Camila"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"All day"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"Task"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Mara Ellison" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Devin Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"2 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"4 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-emerald-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Certificate Chase"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"9:00 AM to 10:00 AM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          {"Recall"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Nadia Faris" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarFallback className="bg-muted font-semibold rounded-full text-[8px] text-muted-foreground">
                                                {"DA"}
                                              </AvatarFallback>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+1"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"4 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"6 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-sky-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Case Review Debrief"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"3:00 PM to 4:45 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary transition-shadow">
                                          {"Call"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Op 1"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Lena Brandt" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Victor Nunes" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"2 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"3 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <div className="py-3">
                                <div className="pb-2 px-3">
                                  <button className="focus-visible:ring-2 focus-visible:ring-ring font-medium outline-none rounded-sm text-foreground text-xs tracking-wide transition-colors uppercase" type="button" aria-current="date">
                                    {"Today"}
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2 px-3" role="list">
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-indigo-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Amara Mitchell insurance certificates"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"All day"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                          {"Insurance"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Nadia Faris" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Hugo Salas" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"2 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"12 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-slate-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Watchlist Prep"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"10:00 AM to 11:15 AM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                                          {"Task"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Lena Brandt" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Iris Kowalski" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"2 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"5 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Caseload Review"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"1:30 PM to 3:30 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                          {"Meeting"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Op 2"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Lena Brandt" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Iris Kowalski" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Tomas Weber" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+11"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"14 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"1 note"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <div className="py-3">
                                <div className="pb-2 px-3">
                                  <button className="focus-visible:ring-2 focus-visible:ring-ring font-medium hover:text-foreground outline-none rounded-sm text-muted-foreground text-xs tracking-wide transition-colors uppercase" type="button">
                                    {"Tomorrow"}
                                  </button>
                                </div>
                                <div className="flex flex-col gap-2 px-3" role="list">
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-violet-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Camila Rosenthal Kickoff"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"9:00 AM to 10:15 AM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                          {"Meeting"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Video call"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Mara Ellison" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Arun Iyer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Elin Dahl" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+3"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"6 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"2 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-emerald-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Consent Docs Follow Up"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"11:30 AM to 12:45 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                          {"Recall"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Arun Iyer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarFallback className="bg-muted font-semibold rounded-full text-[8px] text-muted-foreground">
                                                {"RC"}
                                              </AvatarFallback>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarFallback className="bg-muted font-semibold rounded-full text-[8px] text-muted-foreground">
                                                {"DA"}
                                              </AvatarFallback>
                                            </Avatar>
                                            <span className="bg-muted border border-background flex font-semibold items-center justify-center rounded-full size-5 text-[8px] text-muted-foreground">
                                              {"+4"}
                                            </span>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"7 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"7 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div role="listitem">
                                    <button className="border border-border/80 cursor-pointer flex flex-col focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring gap-3 group hover:bg-muted/60 outline-none px-3 py-2 rounded-md text-left transition-colors w-full" type="button">
                                      <div className="flex gap-2.5 items-start">
                                        <div className="flex flex-1 flex-col gap-1 min-w-0">
                                          <div className="flex gap-1 items-center">
                                            <div className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "var(--color-indigo-500)"}}></div>
                                            <h3 className="font-medium leading-snug text-sm truncate">
                                              {"Aftercare Handover"}
                                            </h3>
                                          </div>
                                          <span className="text-muted-foreground text-xs">
                                            {"3:00 PM to 4:15 PM"}
                                          </span>
                                        </div>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-0.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                          {"Insurance"}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-1.5 items-center pl-0 text-muted-foreground text-xs">
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="truncate">
                                          {"Op 1"}
                                        </span>
                                      </div>
                                      <div className="flex gap-2 items-center justify-between">
                                        <div className="flex gap-1.5 items-center">
                                          <AvatarGroup className="-space-x-1">
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Hugo Salas" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Iris Kowalski" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <Avatar className="after:rounded-full border border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                              <AvatarImage className="rounded-full" alt="Elin Dahl" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                          </AvatarGroup>
                                          <span className="text-muted-foreground text-xs">
                                            {"3 attendees"}
                                          </span>
                                        </div>
                                        <div className="flex gap-1 items-center ml-auto text-muted-foreground text-xs">
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                          </svg>
                                          {"3 notes"}
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_2c_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "157.74520856820743px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="border-border border-t px-3 py-2.5">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        {"New Appointment"}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Directory"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Add patient">
                        <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="19" x2="19" y1="8" y2="14"></line>
                          <line x1="22" x2="16" y1="11" y2="11"></line>
                        </svg>
                      </Button>
                    </div>
                    <div className="border-b border-border px-3 py-2">
                      <div className="relative">
                        <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-3.5 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm pl-8 px-2.5 py-1 rounded-lg text-sm transition-colors" id="base-ui-_r_2d_" placeholder="Search patients..." aria-label="Search patients" value=""></Input>
                      </div>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2e_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                          <div className="flex flex-col gap-0 px-1.5 py-2">
                            <div role="group" aria-labelledby="patient-group-in-chair">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="patient-group-in-chair">
                                  {"In Chair"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Elsa Lindqvist" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-violet-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Elsa Lindqvist is In Chair"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Elsa Lindqvist"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2113 · Extraction"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Elsa Lindqvist" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Elsa Lindqvist" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Laila Abadi" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-violet-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Laila Abadi is In Chair"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Laila Abadi"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2190 · Scaling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Laila Abadi" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Laila Abadi" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div role="group" aria-labelledby="patient-group-active">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="patient-group-active">
                                  {"Active"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Ifeoma Okafor" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Ifeoma Okafor is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Ifeoma Okafor"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2041 · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Ifeoma Okafor" id="base-ui-_r_2o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Ifeoma Okafor" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Samir Haddad" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Samir Haddad is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Samir Haddad"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2088 · Extraction"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Samir Haddad" id="base-ui-_r_2s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Samir Haddad" id="base-ui-_r_2u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Mateo Santos" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Mateo Santos is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Mateo Santos"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2156 · Crown Fitting"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Mateo Santos" id="base-ui-_r_30_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Mateo Santos" id="base-ui-_r_32_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Gregory Whitfield" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Gregory Whitfield is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Gregory Whitfield"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2204 · Scaling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Gregory Whitfield" id="base-ui-_r_34_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Gregory Whitfield" id="base-ui-_r_36_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Wei Ling Tan" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Wei Ling Tan is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Wei Ling Tan"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2231 · Composite Filling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Wei Ling Tan" id="base-ui-_r_38_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Wei Ling Tan" id="base-ui-_r_3a_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Chiara Novello" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Chiara Novello is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Chiara Novello"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2277 · Braces Adjustment"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Chiara Novello" id="base-ui-_r_3c_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Chiara Novello" id="base-ui-_r_3e_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Declan Brennan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Declan Brennan is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Declan Brennan"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2290 · Composite Filling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Declan Brennan" id="base-ui-_r_3g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Declan Brennan" id="base-ui-_r_3i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Yuki Nakamura" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Yuki Nakamura is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Yuki Nakamura"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2312 · Scaling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Yuki Nakamura" id="base-ui-_r_3k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Yuki Nakamura" id="base-ui-_r_3m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Kwame Osei" src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Kwame Osei is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Kwame Osei"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2326 · Composite Filling"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Kwame Osei" id="base-ui-_r_3o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Kwame Osei" id="base-ui-_r_3q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Irina Petrova" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Irina Petrova is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Irina Petrova"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2334 · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Irina Petrova" id="base-ui-_r_3s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Irina Petrova" id="base-ui-_r_3u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Nadia Rahman" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Nadia Rahman is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Nadia Rahman"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2347 · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Nadia Rahman" id="base-ui-_r_40_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Nadia Rahman" id="base-ui-_r_42_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Bruno Silva" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Bruno Silva is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Bruno Silva"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2355 · Extraction"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Bruno Silva" id="base-ui-_r_44_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Bruno Silva" id="base-ui-_r_46_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Marta Kowalski" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Marta Kowalski is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Marta Kowalski"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2368 · Crown Fitting"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Marta Kowalski" id="base-ui-_r_48_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Marta Kowalski" id="base-ui-_r_4a_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Dawit Bekele" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Dawit Bekele is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Dawit Bekele"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2371 · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Dawit Bekele" id="base-ui-_r_4c_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Dawit Bekele" id="base-ui-_r_4e_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Camille Fontaine" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Camille Fontaine is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Camille Fontaine"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2389 · Root Canal"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Camille Fontaine" id="base-ui-_r_4g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Camille Fontaine" id="base-ui-_r_4i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Lea Moreau" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Lea Moreau is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Lea Moreau"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2394 · General Checkup"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Lea Moreau" id="base-ui-_r_4k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Lea Moreau" id="base-ui-_r_4m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Diego Ibarra" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Diego Ibarra is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Diego Ibarra"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2402 · Braces Adjustment"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Diego Ibarra" id="base-ui-_r_4o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Diego Ibarra" id="base-ui-_r_4q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Henrik Olsen" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Henrik Olsen is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Henrik Olsen"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2417 · Extraction"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Henrik Olsen" id="base-ui-_r_4s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Henrik Olsen" id="base-ui-_r_4u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0">
                                    <div className="relative shrink-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Priya Chowdhury" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <span className="-bottom-0.5 -right-0.5 absolute bg-emerald-500 border-2 border-background rounded-full size-2.5" role="img" aria-label="Priya Chowdhury is Active"></span>
                                    </div>
                                    <div className="flex flex-1 flex-col min-w-0">
                                      <span className="font-medium text-foreground text-sm truncate">
                                        {"Priya Chowdhury"}
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"PT-2425 · Implant Review"}
                                      </span>
                                    </div>
                                    <div className="flex gap-0.5 items-center shrink-0">
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Message Priya Chowdhury" id="base-ui-_r_50_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex="0" aria-label="Book Priya Chowdhury" id="base-ui-_r_52_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 18h6"></path>
                                          <path d="M16 2v3"></path>
                                          <path d="M19 15v6"></path>
                                          <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path>
                                          <path d="M3 9h18"></path>
                                          <path d="M8 2v3"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="border-border border-t flex h-10 items-center justify-between px-3 shrink-0 text-xs">
                      <span>
                        {"21 patients"}
                      </span>
                      <span className="flex gap-1.5 items-center">
                        <span className="bg-warning rounded-full size-2 text-muted-foreground" aria-hidden="true"></span>
                        {"3 unpaid"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Load"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Add clinician">
                        <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="19" x2="19" y1="8" y2="14"></line>
                          <line x1="22" x2="16" y1="11" y2="11"></line>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_53_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "121px"}}>
                          <div className="flex flex-col gap-0 px-1.5 py-2">
                            <div role="group" aria-labelledby="staff-on-floor">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="staff-on-floor">
                                  {"On the floor"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Ravi Menon">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Ravi Menon" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          {"3h 45m"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Ravi Menon: 3h 45m in the chair today">
                                        <div className="bg-primary h-full rounded-full" style={{width: "100%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"3 today · 1 tomorrow"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Amara Chen">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Amara Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          {"3h 30m"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Amara Chen: 3h 30m in the chair today">
                                        <div className="bg-primary h-full rounded-full" style={{width: "93%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"5 today · 1 tomorrow"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Hana Sato">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Hana Sato" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          {"2h 30m"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Hana Sato: 2h 30m in the chair today">
                                        <div className="bg-primary h-full rounded-full" style={{width: "67%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"3 today · 1 tomorrow"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Elena Novak">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Elena Novak" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          {"2h 15m"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Elena Novak: 2h 15m in the chair today">
                                        <div className="bg-primary h-full rounded-full" style={{width: "60%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"4 today · 1 tomorrow"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Tomas Reyes">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Tomas Reyes" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Tomas Reyes"}
                                        </span>
                                        <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                          {"2h"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Tomas Reyes: 2h in the chair today">
                                        <div className="bg-primary h-full rounded-full" style={{width: "53%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"2 today · 0 tomorrow"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div role="group" aria-labelledby="staff-off">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="staff-off">
                                  {"Not scheduled"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Ines Duarte">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Ines Duarte" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Ines Duarte"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Ines Duarte: not on the floor today">
                                        <div className="bg-transparent h-full rounded-full" style={{width: "0%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Prosthodontics · not on the floor"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Jonas Falk">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Jonas Falk" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Jonas Falk"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Jonas Falk: not on the floor today">
                                        <div className="bg-transparent h-full rounded-full" style={{width: "0%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Implantology · not on the floor"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Noah Weber">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Noah Weber" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Noah Weber"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Noah Weber: not on the floor today">
                                        <div className="bg-transparent h-full rounded-full" style={{width: "0%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Periodontics · not on the floor"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex="0" aria-label="Open Dr. Priya Raman">
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                      <AvatarImage className="rounded-full" alt="Dr. Priya Raman" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                    </Avatar>
                                    <div className="flex flex-1 flex-col gap-1 min-w-0">
                                      <div className="flex gap-2 items-center justify-between min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          {"Dr. Priya Raman"}
                                        </span>
                                      </div>
                                      <div className="bg-muted group-hover:bg-border h-1 overflow-hidden rounded-full w-full" role="img" aria-label="Dr. Priya Raman: not on the floor today">
                                        <div className="bg-transparent h-full rounded-full" style={{width: "0%"}}></div>
                                      </div>
                                      <span className="text-muted-foreground text-xs truncate">
                                        {"Pediatrics · not on the floor"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_53_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "442.414156626506px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="border-border border-t flex h-10 items-center justify-between px-3 shrink-0 text-xs">
                      <span>
                        {"5 of 9 on the floor"}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {"14h booked"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Activity"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="New invoice">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_54_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "3947px"}}>
                          <div className="px-3 py-3">
                            <div className="max-w-sm w-full">
                              <Timeline data-orientation="vertical">
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-6"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Declan Brennan · $350"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2290"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-5"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Wei Ling Tan · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2231"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-info border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-4"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Gregory Whitfield · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Open"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2204"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Mateo Santos · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2156"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Samir Haddad · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2088"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-15">
                                      {"Oct 15"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261015-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Ifeoma Okafor · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2041"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-14">
                                      {"Oct 14"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261014-5"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Bruno Silva · $950"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Tomas Reyes"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2355"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-14">
                                      {"Oct 14"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261014-4"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Nadia Rahman · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2347"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-info border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-14">
                                      {"Oct 14"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261014-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Irina Petrova · $180"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Open"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2334"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-14">
                                      {"Oct 14"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261014-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-14">
                                      {"Oct 14"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261014-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Yuki Nakamura · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2312"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-13">
                                      {"Oct 13"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261013-5"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Diego Ibarra · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Tomas Reyes"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2402"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-13">
                                      {"Oct 13"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261013-4"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Lea Moreau · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2394"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-13">
                                      {"Oct 13"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261013-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Camille Fontaine · $140"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2389"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-info border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-13">
                                      {"Oct 13"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261013-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Dawit Bekele · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Open"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2371"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-13">
                                      {"Oct 13"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261013-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Marta Kowalski · $350"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2368"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-12">
                                      {"Oct 12"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261012-4"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-12">
                                      {"Oct 12"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261012-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Yuki Nakamura · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2312"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-12">
                                      {"Oct 12"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261012-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Priya Chowdhury · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2425"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-12">
                                      {"Oct 12"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261012-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Henrik Olsen · $220"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2417"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-10">
                                      {"Oct 10"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261010-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Declan Brennan · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2290"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-09">
                                      {"Oct 9"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261009-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Samir Haddad · $220"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2088"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-09">
                                      {"Oct 9"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261009-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $140"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-09">
                                      {"Oct 9"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261009-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Gregory Whitfield · $140"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2204"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-08">
                                      {"Oct 8"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261008-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Irina Petrova · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2334"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-08">
                                      {"Oct 8"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261008-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Henrik Olsen · $180"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2417"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-08">
                                      {"Oct 8"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261008-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Camille Fontaine · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2389"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-07">
                                      {"Oct 7"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261007-5"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Laila Abadi · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2190"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-07">
                                      {"Oct 7"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261007-4"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-07">
                                      {"Oct 7"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261007-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Declan Brennan · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2290"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-07">
                                      {"Oct 7"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261007-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Marta Kowalski · $140"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2368"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-07">
                                      {"Oct 7"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261007-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Mateo Santos · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2156"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-06">
                                      {"Oct 6"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261006-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Dawit Bekele · $120"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2371"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-06">
                                      {"Oct 6"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261006-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Henrik Olsen · $950"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2417"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-06">
                                      {"Oct 6"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261006-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Elsa Lindqvist · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2113"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-05">
                                      {"Oct 5"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261005-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Priya Chowdhury · $350"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2425"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-03">
                                      {"Oct 3"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261003-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-02">
                                      {"Oct 2"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261002-3"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Irina Petrova · $850"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2334"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-02">
                                      {"Oct 2"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261002-2"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Kwame Osei · $90"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Ravi Menon"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2326"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                  <TimelineHeader>
                                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem)]" aria-hidden="true"></TimelineSeparator>
                                    <TimelineIndicator className="bg-success border-none group-data-[orientation=vertical]/timeline:top-1 size-2" aria-hidden="true"></TimelineIndicator>
                                    <TimelineDate className="font-semibold mb-0 text-[11px] text-muted-foreground/60 uppercase" datetime="2026-10-02">
                                      {"Oct 2"}
                                    </TimelineDate>
                                  </TimelineHeader>
                                  <TimelineContent className="font-medium text-foreground">
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex="0">
                                      <p className="font-medium leading-snug">
                                        {"INV-20261002-1"}
                                      </p>
                                      <p className="font-normal leading-snug line-clamp-2 text-muted-foreground text-xs">
                                        {"Wei Ling Tan · $180"}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                                        <span className="text-muted-foreground text-sm truncate">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="sr-only">
                                          {"Paid"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          {"PT-2231"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </TimelineContent>
                                </TimelineItem>
                              </Timeline>
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_54_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "65.4260579064588px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className="border-border border-t flex h-10 items-center justify-between px-3 shrink-0 text-xs">
                      <span>
                        {"79 settled ·"}
                        <span className="tabular-nums">
                          {"$23,820"}
                        </span>
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {"$1,880 owed"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Configuration"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" disabled="" tabIndex="0" disabled aria-label="Reset to shipped defaults">
                        <svg className="lucide lucide-rotate-ccw size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_55_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div className="px-3 py-3">
                            <Tabs className="gap-0 w-full" data-orientation="vertical" activationDirection="none">
                              <TabsList className="data-[variant=line]:rounded-none flex-col group-data-horizontal/tabs:h-8 h-auto items-stretch p-0 rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-muted! border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_56_" compositeItemActive="">
                                  <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                  </svg>
                                  <span className="truncate">
                                    {"My Profile"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_57_">
                                  <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Hours"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_58_">
                                  <svg className="lucide lucide-armchair" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
                                    <path d="M5 18v2"></path>
                                    <path d="M19 18v2"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Chairs"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_59_">
                                  <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M13 16H8"></path>
                                    <path d="M14 8H8"></path>
                                    <path d="M16 12H8"></path>
                                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Procedures"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5a_">
                                  <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="M6 12h.01M18 12h.01"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Billing"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5b_">
                                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Notifications"}
                                  </span>
                                </TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </div>
              <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" aria-hidden="true" style={{left: "var(--sidebar-width)"}}>
                <span className="flex flex-col items-center">
                  <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                  <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
                </span>
                <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                  {"Collapse"}
                </span>
              </button>
            </div>
            </SidebarProvider>
          </div>
          </SidebarProvider>
        </Sidebar>
        </SidebarProvider>
        <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm min-w-0">
          <header className="bg-background border-b border-border flex gap-2 h-(--header-height) items-center min-w-0 px-4 py-1.5 shrink-0 sm:gap-3 sticky top-0 z-20" aria-hidden="true">
            <SidebarProvider>
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <h1 className="font-semibold min-w-0 sm:text-lg text-base text-foreground truncate">
              <span className="hidden lg:inline">
                {"October 12 - 18"}
              </span>
              <span className="lg:hidden">
                {"Oct 12 - 18"}
              </span>
            </h1>
            <div className="-space-x-1.5 hidden items-center md:flex" aria-hidden="true">
              <span className="border-2 border-background rounded-full size-3.5" style={{backgroundColor: "var(--color-amber-500)"}}></span>
              <span className="border-2 border-background rounded-full size-3.5" style={{backgroundColor: "var(--color-slate-500)"}}></span>
              <span className="border-2 border-background rounded-full size-3.5" style={{backgroundColor: "var(--color-indigo-500)"}}></span>
              <span className="border-2 border-background rounded-full size-3.5" style={{backgroundColor: "var(--color-sky-500)"}}></span>
              <span className="bg-muted border-2 border-background flex font-medium items-center justify-center rounded-full size-3.5 text-[8px] text-muted-foreground">
                {"+2"}
              </span>
            </div>
            <div className="flex gap-2 items-center ml-auto shrink-0">
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0" aria-label="Send reminders to everyone in view">
                <svg className="lucide lucide-send size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                <span className="hidden sm:inline">
                  {"Send reminders"}
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0" aria-label="New appointment">
                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="hidden sm:inline">
                  {"New Appointment"}
                </span>
              </Button>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto">
            <div className="flex flex-1 flex-col gap-0 min-h-0 overflow-hidden">
              <EventCalendar className="flex-1">
                <div className="flex flex-wrap gap-x-2 items-center pe-2">
                  <EventCalendarNav className="flex-1 flex-nowrap">
                    <EventCalendarNavToday className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" data-active="true" id="base-ui-_r_p8_" baseUiTooltipTrigger="">
                      {"Today"}
                    </EventCalendarNavToday>
                    <EventCalendarViewSwitcher className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Select view" id="base-ui-_r_pd_" baseUiTooltipTrigger="" aria-haspopup="menu" aria-expanded="false">
                      {"Week"}
                      <svg className="lucide lucide-chevron-down opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </EventCalendarViewSwitcher>
                    <div className="flex items-center">
                      <EventCalendarNavPrev className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Previous" id="base-ui-_r_ph_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </EventCalendarNavPrev>
                      <EventCalendarNavNext className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Next" id="base-ui-_r_pj_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </EventCalendarNavNext>
                    </div>
                    <div className="grow"></div>
                  </EventCalendarNav>
                  <EventCalendarToolbar className="max-sm:pb-2 max-sm:w-full">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_pn_" aria-expanded="false">
                      {"Category"}
                      <span className="tabular-nums text-muted-foreground">
                        {"6"}
                      </span>
                      <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_ps_" aria-expanded="false">
                      {"Clinician"}
                      <span className="tabular-nums text-muted-foreground">
                        {"6"}
                      </span>
                      <svg className="lucide lucide-chevron-down opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </EventCalendarToolbar>
                </div>
                <EventCalendarContent className="[--ec-day-col-min:8rem]" view="week">
                  <EventCalendarTimeGrid view="week" style={{"--ec-hour-height": "4rem", "--ec-scrollbar-w": "0px"}}>
                    <div className="border-b flex pe-(--ec-scrollbar-w,0px)">
                      <div className="border-e shrink-0 w-(--ec-gutter-width,4.5rem)"></div>
                      <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Mon 12"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Tue 13"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Wed 14"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate" data-today="true">
                          {"Thu 15"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Fri 16"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Sat 17"}
                        </div>
                        <div className="border-e data-today:text-primary font-medium last:border-e-0 min-w-0 px-2 py-1.5 truncate">
                          {"Sun 18"}
                        </div>
                      </div>
                    </div>
                    <div className="[--ec-month-bar-h:6.25rem] border-b flex pe-(--ec-scrollbar-w,0px)">
                      <div className="border-e pe-2.5 ps-2 pt-1.5 shrink-0 text-muted-foreground w-(--ec-gutter-width,4.5rem)">
                        <span className="flex h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)] items-center justify-end">
                          {"All day"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0 relative">
                        <div className="grid h-full" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", minHeight: "calc(1 * var(--ec-month-bar-h, 1.625rem) + 0.625rem)"}}>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1791734400000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1791820800000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1791907200000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1791993600000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1792080000000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1792166400000"></div>
                          <div className="border-e flex flex-col gap-0.5 last:border-e-0 min-w-0 px-1 py-1.5 relative" data-ec-day="1792252800000"></div>
                        </div>
                        <div className="absolute grid inset-x-0 pointer-events-none pt-1.5 top-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))", gridAutoRows: "var(--ec-month-bar-h, 1.625rem)"}}>
                          <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 1 / auto / span 1"}}>
                            <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Harriet Pemberton (Implant Fitting), All day" aria-label="Harriet Pemberton (Implant Fitting), All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-amber-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_pv_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="flex gap-0.5 items-center min-w-0 text-muted-foreground">
                                        <svg className="lucide lucide-hash shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <line x1="4" x2="20" y1="9" y2="9"></line>
                                          <line x1="4" x2="20" y1="15" y2="15"></line>
                                          <line x1="10" x2="8" y1="3" y2="21"></line>
                                          <line x1="16" x2="14" y1="3" y2="21"></line>
                                        </svg>
                                        <span className="font-medium truncate">
                                          {"PT-40218"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-amber-700)", "--kind-tag-dark": "var(--color-amber-400)"}}>
                                        {"Procedure"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                    {"Harriet Pemberton (Implant Fitting)"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-list-checks shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M13 5h8"></path>
                                      <path d="M13 12h8"></path>
                                      <path d="M13 19h8"></path>
                                      <path d="m3 17 2 2 4-4"></path>
                                      <path d="m3 7 2 2 4-4"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Tasks"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"7/8"}
                                    </span>
                                  </span>
                                  <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" aria-valuetext="88%" role="progressbar" aria-label="Tasks progress">
                                    <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                      <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "88%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 3 / auto / span 1"}}>
                            <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" past="true" title="Send pre-op notes to Camila, All day" aria-label="Send pre-op notes to Camila, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_q1_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="flex gap-1 items-center min-w-0 text-muted-foreground">
                                        <svg className="lucide lucide-calendar shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M8 2v3"></path>
                                          <path d="M16 2v3"></path>
                                          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                          <path d="M3 9h18"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"Oct 14"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-slate-700)", "--kind-tag-dark": "var(--color-slate-400)"}}>
                                        {"Task"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                    {"Send pre-op notes to Camila"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-layout-grid shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                                    </svg>
                                    <span className="truncate">
                                      {"Treatment Plan"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"1/5"}
                                    </span>
                                  </span>
                                  <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="20" aria-valuetext="20%" role="progressbar" aria-label="Treatment Plan progress">
                                    <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                      <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "20%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                          <div className="min-w-0 pointer-events-auto px-1" style={{gridArea: "1 / 4 / auto / span 1"}}>
                            <EventCalendarEvent className="h-[calc(var(--ec-month-bar-h,1.625rem)-0.125rem)]" type="button" view="week" allDay="true" title="Amara Mitchell insurance certificates, All day" aria-label="Amara Mitchell insurance certificates, All day" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                              <HoverCard>
                              <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_q3_">
                                <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                  <span className="flex gap-1.5 items-center min-w-0 w-full">
                                    <span className="@[7rem]:flex hidden min-w-0">
                                      <span className="flex gap-1 items-center min-w-0 text-muted-foreground">
                                        <svg className="lucide lucide-calendar shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M8 2v3"></path>
                                          <path d="M16 2v3"></path>
                                          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                          <path d="M3 9h18"></path>
                                        </svg>
                                        <span className="truncate">
                                          {"Oct 15"}
                                        </span>
                                      </span>
                                    </span>
                                    <span className="ms-auto shrink-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                        {"Insurance"}
                                      </Badge>
                                    </span>
                                  </span>
                                  <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                    {"Amara Mitchell insurance certificates"}
                                  </span>
                                  <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                    <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                      <path d="M12 22V12"></path>
                                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                      <path d="m7.5 4.27 9 5.15"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Paperwork"}
                                    </span>
                                    <span className="ms-auto shrink-0 tabular-nums">
                                      {"4/9"}
                                    </span>
                                  </span>
                                  <Progress className="h-1 w-full" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="44" aria-valuetext="44%" role="progressbar" aria-label="Paperwork progress">
                                    <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                      <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "44%"}}></ProgressIndicator>
                                    </ProgressTrack>
                                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                      {"x"}
                                    </span>
                                  </Progress>
                                </span>
                              </HoverCardTrigger>
                              </HoverCard>
                              <span className="absolute cursor-ew-resize duration-150 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 start-0 transition-opacity w-2" data-edge="start">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                              <span className="absolute cursor-ew-resize duration-150 end-0 flex group-hover/ec-event:opacity-100 inset-y-0 items-center justify-center opacity-0 transition-opacity w-2" data-edge="end">
                                <span className="bg-foreground/40 h-2.5 rounded-full w-0.5" aria-hidden="true"></span>
                              </span>
                            </EventCalendarEvent>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-h-0">
                      <ScrollArea className="h-full" role="presentation" hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "10px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_q4_-viewport" tabIndex="0" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "38px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "310px"}}>
                          <div className="flex relative">
                            <EventCalendarTimeGutter>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}></div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"9 AM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"10 AM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"11 AM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"12 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"1 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"2 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"3 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"4 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"5 PM"}
                                </span>
                              </div>
                              <div className="relative" style={{height: "calc(var(--ec-hour-height) * 1)"}}>
                                <span className="-top-2 absolute end-2.5 text-muted-foreground">
                                  {"6 PM"}
                                </span>
                              </div>
                            </EventCalendarTimeGutter>
                            <div className="flex-1 grid min-w-0" style={{gridTemplateColumns: "repeat(7, minmax(var(--ec-day-col-min,0px), 1fr))"}}>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1791734400000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Monday, October 12th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 1.5)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Consent Forms Review, 9:00 AM - 10:30 AM" aria-label="Consent Forms Review, 9:00 AM - 10:30 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_q6_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"9:00 AM, 90 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                              {"Insurance"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Consent Forms Review"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                            <path d="M12 22V12"></path>
                                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                            <path d="m7.5 4.27 9 5.15"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Paperwork"}
                                          </span>
                                          <span className="ms-auto shrink-0 tabular-nums">
                                            {"5/6"}
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 5)", height: "calc(var(--ec-hour-height) * 1)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Weekly Clinical Standup, 1:00 PM - 2:00 PM" aria-label="Weekly Clinical Standup, 1:00 PM - 2:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_q8_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"1:00 PM, 60 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                              {"Meeting"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Weekly Clinical Standup"}
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1791820800000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Tuesday, October 13th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 1)", left: "0%", width: "50%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Introductory Call, 10:00 AM - 11:00 AM" aria-label="Introductory Call, 10:00 AM - 11:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qa_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"10:00 AM, 60 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                              {"Call"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Introductory Call"}
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2.5)", height: "calc(var(--ec-hour-height) * 1.5)", left: "50%", width: "50%", "--ec-z": "11"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start ring-1 ring-background" type="button" view="week" past="true" title="Katherine Chen Plan Review, 10:30 AM - 12:00 PM" aria-label="Katherine Chen Plan Review, 10:30 AM - 12:00 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qc_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"10:30 AM, 90 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                              {"Call"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Katherine Chen Plan Review"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10 12h4"></path>
                                            <path d="M10 8h4"></path>
                                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Katherine Chen"}
                                          </span>
                                          <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                            <AvatarGroup>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                            </AvatarGroup>
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1791907200000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Wednesday, October 14th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 1)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Certificate Chase, 9:00 AM - 10:00 AM" aria-label="Certificate Chase, 9:00 AM - 10:00 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qe_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"9:00 AM, 60 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-emerald-700)", "--kind-tag-dark": "var(--color-emerald-400)"}}>
                                              {"Recall"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Certificate Chase"}
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7)", height: "calc(var(--ec-hour-height) * 1.75)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Case Review Debrief, 3:00 PM - 4:45 PM" aria-label="Case Review Debrief, 3:00 PM - 4:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-sky-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qg_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"3:00 PM, 105 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-sky-700)", "--kind-tag-dark": "var(--color-sky-400)"}}>
                                              {"Call"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                          {"Case Review Debrief"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10 12h4"></path>
                                            <path d="M10 8h4"></path>
                                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Katherine Chen"}
                                          </span>
                                          <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                            <AvatarGroup>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                            </AvatarGroup>
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-today="true" data-ec-day="1791993600000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Thursday, October 15th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 2)", height: "calc(var(--ec-hour-height) * 1.25)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" past="true" title="Watchlist Prep, 10:00 AM - 11:15 AM" aria-label="Watchlist Prep, 10:00 AM - 11:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-slate-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qi_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"10:00 AM, 75 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-slate-700)", "--kind-tag-dark": "var(--color-slate-400)"}}>
                                              {"Task"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Watchlist Prep"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                          <svg className="lucide lucide-list-checks shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M13 5h8"></path>
                                            <path d="M13 12h8"></path>
                                            <path d="M13 19h8"></path>
                                            <path d="m3 17 2 2 4-4"></path>
                                            <path d="m3 7 2 2 4-4"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Tasks"}
                                          </span>
                                          <span className="ms-auto shrink-0 tabular-nums">
                                            {"3/6"}
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 5.5)", height: "calc(var(--ec-hour-height) * 2)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" title="Caseload Review, 1:30 PM - 3:30 PM" aria-label="Caseload Review, 1:30 PM - 3:30 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qk_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"1:30 PM, 120 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                              {"Meeting"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium line-clamp-2 min-w-0 text-foreground w-full">
                                          {"Caseload Review"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10 12h4"></path>
                                            <path d="M10 8h4"></path>
                                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Internal"}
                                          </span>
                                          <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                            <AvatarGroup>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-4 text-[9px] text-muted-foreground">
                                                {"+11"}
                                              </AvatarGroupCount>
                                            </AvatarGroup>
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1792080000000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Friday, October 16th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 1)", height: "calc(var(--ec-hour-height) * 1.25)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" title="Camila Rosenthal Kickoff, 9:00 AM - 10:15 AM" aria-label="Camila Rosenthal Kickoff, 9:00 AM - 10:15 AM" aria-pressed="false" style={{"--ec-event-color": "var(--color-violet-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qm_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"9:00 AM, 75 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-violet-700)", "--kind-tag-dark": "var(--color-violet-400)"}}>
                                              {"Meeting"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Camila Rosenthal Kickoff"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10 12h4"></path>
                                            <path d="M10 8h4"></path>
                                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Camila Rosenthal"}
                                          </span>
                                          <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                            <AvatarGroup>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-4 text-[9px] text-muted-foreground">
                                                {"+3"}
                                              </AvatarGroupCount>
                                            </AvatarGroup>
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 3.5)", height: "calc(var(--ec-hour-height) * 1.25)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" title="Consent Docs Follow Up, 11:30 AM - 12:45 PM" aria-label="Consent Docs Follow Up, 11:30 AM - 12:45 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-emerald-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qo_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"11:30 AM, 75 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-emerald-700)", "--kind-tag-dark": "var(--color-emerald-400)"}}>
                                              {"Recall"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Consent Docs Follow Up"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <svg className="lucide lucide-building-2 lucide-building2 shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M10 12h4"></path>
                                            <path d="M10 8h4"></path>
                                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Oliver Lindqvist"}
                                          </span>
                                          <span className="@[9rem]:flex hidden ms-auto shrink-0">
                                            <AvatarGroup>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarImage className="rounded-full" alt="" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarFallback className="bg-muted rounded-full text-[8px] text-muted-foreground">
                                                  {"RC"}
                                                </AvatarFallback>
                                              </Avatar>
                                              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                                <AvatarFallback className="bg-muted rounded-full text-[8px] text-muted-foreground">
                                                  {"DA"}
                                                </AvatarFallback>
                                              </Avatar>
                                              <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-4 text-[9px] text-muted-foreground">
                                                {"+4"}
                                              </AvatarGroupCount>
                                            </AvatarGroup>
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                                <div className="absolute hover:z-40 min-h-(--ec-event-min-h,1.5rem) px-0.5 z-(--ec-z)" style={{top: "calc(var(--ec-hour-height) * 7)", height: "calc(var(--ec-hour-height) * 1.25)", left: "0%", width: "100%", "--ec-z": "10"}}>
                                  <EventCalendarEvent className="flex-col gap-0 h-full items-start justify-start" type="button" view="week" title="Aftercare Handover, 3:00 PM - 4:15 PM" aria-label="Aftercare Handover, 3:00 PM - 4:15 PM" aria-pressed="false" style={{"--ec-event-color": "var(--color-indigo-500)"}}>
                                    <HoverCard>
                                    <HoverCardTrigger className="flex gap-1.5 h-full items-center min-w-0 w-full" id="base-ui-_r_qq_">
                                      <span className="flex flex-col gap-1 h-full justify-start min-w-0 overflow-hidden py-0.5 w-full">
                                        <span className="flex gap-1.5 items-center min-w-0 w-full">
                                          <span className="@[7rem]:flex hidden min-w-0">
                                            <span className="text-muted-foreground truncate">
                                              {"3:00 PM, 75 min"}
                                            </span>
                                          </span>
                                          <span className="ms-auto shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-(--kind-tag) border border-transparent dark:bg-(--kind-tag-dark) dark:text-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-white text-xs transition-shadow" style={{"--kind-tag": "var(--color-indigo-700)", "--kind-tag-dark": "var(--color-indigo-400)"}}>
                                              {"Insurance"}
                                            </Badge>
                                          </span>
                                        </span>
                                        <span className="font-medium min-w-0 text-foreground truncate w-full">
                                          {"Aftercare Handover"}
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground w-full">
                                          <svg className="lucide lucide-package shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                            <path d="M12 22V12"></path>
                                            <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                            <path d="m7.5 4.27 9 5.15"></path>
                                          </svg>
                                          <span className="truncate">
                                            {"Paperwork"}
                                          </span>
                                          <span className="ms-auto shrink-0 tabular-nums">
                                            {"2/4"}
                                          </span>
                                        </span>
                                      </span>
                                    </HoverCardTrigger>
                                    </HoverCard>
                                    <span className="absolute cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 top-0 transition-opacity" data-edge="start">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                    <span className="absolute bottom-0 cursor-ns-resize duration-150 flex group-hover/ec-event:opacity-100 h-1.5 inset-x-1 items-center justify-center opacity-0 transition-opacity" data-edge="end">
                                      <span className="bg-foreground/40 h-0.5 rounded-full w-2.5" aria-hidden="true"></span>
                                    </span>
                                  </EventCalendarEvent>
                                </div>
                              </div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1792166400000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Saturday, October 17th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                              <div className="border-e last:border-e-0 min-w-0 relative" data-ec-day="1792252800000" data-ec-bounds-start="480" data-ec-bounds-end="1140" role="group" aria-label="Sunday, October 18th, 2026" style={{height: "calc(var(--ec-hour-height) * 11)", backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1 - var(--ec-slot-line-width, 1px)), var(--ec-slot-line-color, var(--color-border)) calc(var(--ec-hour-height) * 1))"}}></div>
                            </div>
                            <EventCalendarNowIndicator style={{top: "calc(var(--ec-hour-height) * 5.666666666666666)"}}>
                              <div className="absolute bg-destructive/40 end-0 h-px start-(--ec-gutter-width,4.5rem)"></div>
                              <div className="absolute h-px" style={{left: "calc(var(--ec-gutter-width, 4.5rem) + (100% - var(--ec-gutter-width, 4.5rem)) * 0.4285714285714286)", width: "calc((100% - var(--ec-gutter-width, 4.5rem)) * 0.14285714285714288)"}}>
                                <div className="absolute bg-destructive h-px inset-x-0 top-0"></div>
                                <div className="-start-1 -translate-y-1/2 absolute bg-destructive rounded-full size-1.5 top-0"></div>
                              </div>
                            </EventCalendarNowIndicator>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_q4_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "219.38636363636365px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                        <div style={{position: "absolute", bottom: "0px", insetInlineEnd: "0px", width: "10px", height: "0px"}}></div>
                      </ScrollArea>
                    </div>
                  </EventCalendarTimeGrid>
                </EventCalendarContent>
                <div className="sr-only" aria-live="polite"></div>
              </EventCalendar>
            </div>
          </div>
        </SidebarInset>
      </div>
      </SidebarProvider>
      <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    </div>
    <span id="recharts_measurement_span" aria-hidden="true" data-base-ui-inert="" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"Jan"}
    </span>
    <DialogPortal id="_r_fo_" baseUiPortal="">
      <div role="presentation" data-base-ui-inert="" aria-hidden="true" style={{position: "fixed", inset: "0px", userSelect: "none"}}></div>
      <DialogOverlay className="bg-black/10 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 duration-100 supports-backdrop-filter:backdrop-blur-xs" data-open="" role="presentation" aria-hidden="true" baseUiInert="" style={{userSelect: "none"}}></DialogOverlay>
      <span data-type="inside" aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" data-base-ui-inert="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
      <Dialog>
      <DialogContent className="**:data-[slot=dialog-close]:opacity-60 **:data-[slot=dialog-close]:right-4 **:data-[slot=dialog-close]:top-4 bg-popover data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 duration-100 gap-0 grid max-w-[calc(100%-2rem)] p-0 ring-1 ring-foreground/10 rounded-xl sm:max-w-2xl text-popover-foreground text-sm" data-open="" id="_r_5c_" role="dialog" tabIndex="-1" baseUiFocusable="" aria-labelledby="base-ui-_r_fp_" aria-describedby="base-ui-_r_fq_" style={{"--nested-dialogs": "0"}}>
        <DialogHeader className="gap-2 sr-only">
          <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_fp_">
            {"Search"}
          </DialogTitle>
          <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_fq_">
            {"Find patients, bookings, invoices, clinicians, planner events and pages."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 items-center px-4 py-3">
          <svg className="lucide lucide-search opacity-60 pointer-events-none select-none shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input border-none dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-10 md:text-sm p-0 rounded-lg shadow-none text-base transition-colors" id="base-ui-_r_ft_" placeholder="Search patients, bookings, invoices..." aria-label="Search" popupOpen="" pressed="" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-autocomplete="list" value="" aria-activedescendant="base-ui-_r_fr_-0" aria-controls="_r_fs_"></Input>
        </div>
        <div className="border-t"></div>
        <div className="max-h-[min(24rem,60vh)] no-scrollbar overflow-y-auto overscroll-contain p-1 scroll-py-1" aria-orientation="vertical" role="listbox" tabIndex="-1" id="_r_fs_" aria-busy="false" aria-activedescendant="base-ui-_r_fr_-0">
          <div role="group" aria-labelledby="base-ui-_r_fv_">
            <div className="px-2 py-1.5 text-muted-foreground text-xs" id="base-ui-_r_fv_">
              {"Thursday 15 Oct"}
              <span className="tabular-nums">
                {"· 5 of 16"}
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-0" aria-selected="false" data-highlighted="">
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Wei Ling Tan"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Completed"}
                  </Badge>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Scaling"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Dr. Hana Sato"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Op 2"}
                  </span>
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                {"15 Oct, 8:00 am"}
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-1" aria-selected="false">
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Ifeoma Okafor"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Completed"}
                  </Badge>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"General Checkup"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Dr. Amara Chen"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Op 1"}
                  </span>
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                {"15 Oct, 8:30 am"}
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-2" aria-selected="false">
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Mateo Santos"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Completed"}
                  </Badge>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Root Canal"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Dr. Ravi Menon"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Op 3"}
                  </span>
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                {"15 Oct, 9:00 am"}
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-3" aria-selected="false">
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Declan Brennan"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Completed"}
                  </Badge>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Whitening"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Dr. Hana Sato"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Op 2"}
                  </span>
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                {"15 Oct, 9:15 am"}
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-4" aria-selected="false">
              <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Samir Haddad"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Completed"}
                  </Badge>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Scaling"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Dr. Amara Chen"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="truncate">
                    {"Op 1"}
                  </span>
                </span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                {"15 Oct, 9:30 am"}
              </span>
            </div>
          </div>
          <div role="group" aria-labelledby="base-ui-_r_g0_">
            <div className="px-2 py-1.5 text-muted-foreground text-xs" id="base-ui-_r_g0_">
              {"Go to"}
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-5" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Dashboard"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-6" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v3"></path>
                  <path d="M16 2v3"></path>
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18"></path>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Calendar"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-7" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v3"></path>
                  <path d="M16 2v3"></path>
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="m9 15 2 2 4-4"></path>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Appointments"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-8" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Customers"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-9" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-stethoscope" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx="20" cy="10" r="2"></circle>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Staff"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-10" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M6 12h.01M18 12h.01"></path>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Payments"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-default data-highlighted:bg-accent data-highlighted:text-accent-foreground flex gap-3 items-center outline-hidden px-2 py-2 relative rounded-md select-none text-sm w-full" role="option" id="base-ui-_r_fr_-11" aria-selected="false">
              <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </IconTile>
              <span className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="flex gap-2 items-center min-w-0">
                  <span className="font-medium truncate">
                    {"Settings"}
                  </span>
                </span>
                <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                  <span className="truncate">
                    {"Page"}
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="sr-only" aria-live="polite" role="status"></div>
        <div className="border-t flex gap-3 items-center px-4 py-2 text-muted-foreground text-xs">
          <span>
            <kbd className="font-sans">
              {"↑↓"}
            </kbd>
            {"navigate"}
          </span>
          <span>
            <kbd className="font-sans">
              {"↵"}
            </kbd>
            {"open"}
          </span>
          <span>
            <kbd className="font-sans">
              {"esc"}
            </kbd>
            {"close"}
          </span>
        </div>
        <input id="base-ui-_r_fr_-hidden-input" autoComplete="none" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        <DialogClose className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none right-2 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm top-2 transition-all whitespace-nowrap" type="button" tabIndex="0">
          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">
            {"Close"}
          </span>
        </DialogClose>
      </DialogContent>
      </Dialog>
      <span data-type="inside" aria-hidden="true" tabIndex="0" data-base-ui-focus-guard="" data-base-ui-inert="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
    </DialogPortal>
  </>
  )
}
