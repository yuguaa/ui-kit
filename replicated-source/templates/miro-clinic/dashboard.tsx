import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFoot,
  DataGridTableFootRow,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Calendar } from "@/registry/bases/base/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
import { Switch } from "@/registry/bases/base/ui/switch"
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
import { Select } from "@/registry/bases/radix/ui/select"
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
                          <svg className="size-3.5" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
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
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Dashboard" data-active="">
                              <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                                <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                                <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                                <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Calendar">
                              <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 2v3"></path>
                                <path d="M16 2v3"></path>
                                <rect x={3} y={3} width={18} height={18} rx={2}></rect>
                                <path d="M3 9h18"></path>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Appointments">
                              <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 2v3"></path>
                                <path d="M16 2v3"></path>
                                <rect x={3} y={3} width={18} height={18} rx={2}></rect>
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
                              <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx={9} cy={7} r={4}></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Staff">
                              <svg className="lucide lucide-stethoscope" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11 2v2"></path>
                                <path d="M5 2v2"></path>
                                <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                                <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                                <circle cx={20} cy={10} r={2}></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Payments">
                              <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                                <circle cx={12} cy={12} r={2}></circle>
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
                            <PopoverTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center! outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Notifications" tabIndex={0} baseUiClickTrigger="" aria-haspopup="dialog" aria-expanded="false">
                              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx={11} cy={11} r={8}></circle>
                              </svg>
                            </SidebarMenuButton>
                            </SidebarProvider>
                          </SidebarMenuItem>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarMenuItem sidebar="menu-item">
                            <SidebarProvider>
                            <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center! p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Settings">
                              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx={12} cy={12} r={3}></circle>
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
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                        <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarFooter>
                </Sidebar>
                </SidebarProvider>
                <div className="flex flex-1 overflow-hidden w-[calc(var(--sidebar-width)-var(--sidebar-width-icon))]">
                  <div className="bg-background flex flex-1 flex-col overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Open Time"}
                      </span>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Book the first open slot">
                        <svg className="lucide lucide-clock-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_p_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "344px"}}>
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
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Chairs that ran group" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_q_" aria-expanded="true">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(37, 99, 235)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Amara Chen"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"6h 45m"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(192, 38, 211)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Ravi Menon"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"6h"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Elena Novak"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"7h 15m"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(13, 148, 136)"}}></span>
                                          <span className="flex-1 font-normal min-w-0 text-left text-sm truncate">
                                            {"Dr. Tomas Reyes"}
                                          </span>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-muted-foreground text-xs transition-shadow">
                                            {"3h"}
                                          </Badge>
                                        </Button>
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start pl-5 pr-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
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
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Never opened group" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Book 8:00 AM with Dr. Amara Chen">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Book 8:00 AM with Dr. Ravi Menon">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Book 8:00 AM with Dr. Elena Novak">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Book 8:45 AM with Dr. Hana Sato">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0} aria-label="Book 9:00 AM with Dr. Amara Chen">
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
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
                                  {"Show all 18"}
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 grow px-3 py-3">
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex={0}>
                                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Book the first open slot"}
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2.5 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
                                <svg className="lucide lucide-calendar-days" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M8 2v3"></path>
                                  <path d="M16 2v3"></path>
                                  <rect x={3} y={3} width={18} height={18} rx={2}></rect>
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
                              <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={10}></circle>
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="New booking">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/27" aria-label="Sunday, September 27th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
                                      {"27"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-28" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/28" aria-label="Monday, September 28th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"28"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-29" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/29" aria-label="Tuesday, September 29th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"29"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aria-selected:text-muted-foreground aspect-square group/day h-full p-0 rdp-day rdp-outside relative rounded-(--cell-radius) select-none text-center text-muted-foreground w-full" role="gridcell" data-day="2026-09-30" data-month="2026-09" data-outside="true">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/9/30" aria-label="Wednesday, September 30th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"30"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-01">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/1" aria-label="Thursday, October 1st, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"1"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-02">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/2" aria-label="Friday, October 2nd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"2"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-03">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/3" aria-label="Saturday, October 3rd, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"5"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-06">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/6" aria-label="Tuesday, October 6th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"6"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-07">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/7" aria-label="Wednesday, October 7th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"7"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-08">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/8" aria-label="Thursday, October 8th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"8"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-09">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/9" aria-label="Friday, October 9th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"9"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-10">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/10" aria-label="Saturday, October 10th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"17"}
                                    </Button>
                                  </td>
                                </tr>
                                <tr className="flex mt-2 rdp-week w-full">
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-18">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/18" aria-label="Sunday, October 18th, 2026">
                                      <span className="size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"20"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-21">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/21" aria-label="Wednesday, October 21st, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"23"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-24">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/24" aria-label="Saturday, October 24th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
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
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"26"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-27">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/27" aria-label="Tuesday, October 27th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"27"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-28">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/28" aria-label="Wednesday, October 28th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"28"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-29">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/29" aria-label="Thursday, October 29th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"29"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-30">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/30" aria-label="Friday, October 30th, 2026">
                                      <span className="bg-primary in-data-[selected-single=true]:bg-primary-foreground! rounded-full size-1" aria-hidden="true"></span>
                                      {"30"}
                                    </Button>
                                  </td>
                                  <td className="[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius) [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius) aspect-square group/day h-full p-0 rdp-day relative rounded-(--cell-radius) select-none text-center w-full" role="gridcell" data-day="2026-10-31">
                                    <Button className="[&>span]:opacity-70 [&>span]:text-xs [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aspect-square bg-clip-padding border-0 border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 dark:hover:text-foreground data-[range-end=true]:bg-primary data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:text-primary-foreground data-[range-middle=true]:bg-muted data-[range-middle=true]:rounded-none data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground flex flex-col focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:relative group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 group-data-[focused=true]/day:z-10 hover:bg-muted hover:text-foreground isolate leading-none min-w-(--cell-size) rdp-day relative rounded-md size-auto text-sm w-full z-10" type="button" tabIndex={-1} day="2026/10/31" aria-label="Saturday, October 31st, 2026">
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
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_s_-viewport" tabIndex={-1} style={{overflow: "scroll"}}>
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
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Daily chairs group" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_t_" aria-expanded="true">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_u_" aria-checked="true" aria-label="Toggle Dr. Amara Chen">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Amara Chen"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Dr. Amara Chen" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(192, 38, 211)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_16_" aria-checked="true" aria-label="Toggle Dr. Ravi Menon">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Ravi Menon"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Dr. Ravi Menon" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(234, 88, 12)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_1e_" aria-checked="true" aria-label="Toggle Dr. Elena Novak">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Elena Novak"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Dr. Elena Novak" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(13, 148, 136)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_1m_" aria-checked="true" aria-label="Toggle Dr. Tomas Reyes">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Tomas Reyes"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Dr. Tomas Reyes" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                        <div className="flex gap-2 group h-9 items-center pl-5 pr-1">
                                          <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "rgb(147, 51, 234)"}}></span>
                                          <Checkbox className="aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:data-checked:border-primary group-has-[:focus-visible]/field-label:not-data-checked:border-input group-has-[:focus-visible]/field-label:ring-0 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex={0} id="base-ui-_r_1u_" aria-checked="true" aria-label="Toggle Dr. Hana Sato">
                                            <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                              <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M20 6 9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                          </Checkbox>
                                          <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                          <span className="flex-1 font-normal text-foreground text-sm truncate">
                                            {"Dr. Hana Sato"}
                                          </span>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover:opacity-100 group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Options for Dr. Hana Sato" aria-haspopup="menu" id="base-ui-_r_24_" aria-expanded="false">
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
                                    <Collapsible>
                                    <CollapsibleTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-start outline-none px-1.5 rounded-lg select-none shrink-0 text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex={0} aria-label="Relief chairs group" aria-disabled="false" aria-expanded="false">
                                      <svg className="duration-150 in-data-panel-open:opacity-100 in-data-panel-open:rotate-90 lucide lucide-chevron-right opacity-60 shrink-0 size-3.5 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
                                  <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0}>
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0}>
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0}>
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0}>
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
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-start px-3 py-2 rounded-lg text-left text-sm w-full" type="button" tabIndex={0}>
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
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
                                  {"Show all 10"}
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 grow px-3 py-3">
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex={0}>
                                <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"New Booking"}
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2.5 rounded-lg text-muted-foreground text-sm w-full" type="button" tabIndex={0}>
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
                                  {"Clinic timezone"}
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Asia/Shanghai"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                  <div className="bg-background flex-1 flex-col hidden overflow-hidden" aria-hidden="true">
                    <div className="border-b border-border flex h-(--header-height) items-center justify-between px-3 shrink-0">
                      <span className="font-semibold text-foreground text-sm">
                        {"Agenda"}
                      </span>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filter appointments" aria-haspopup="menu" id="base-ui-_r_2a_" aria-expanded="false">
                        <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M14 17H5"></path>
                          <path d="M19 7h-9"></path>
                          <circle cx={17} cy={17} r={3}></circle>
                          <circle cx={7} cy={7} r={3}></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2c_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1244px"}}>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                        <svg className="lucide lucide-map-pin shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                          <circle cx={12} cy={10} r={3}></circle>
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
                                          <svg className="lucide lucide-message-square size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 justify-start px-2.5 rounded-lg text-primary-foreground text-sm w-full" type="button" tabIndex={0}>
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Add patient">
                        <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx={9} cy={7} r={4}></circle>
                          <line x1={19} x2={19} y1={8} y2={14}></line>
                          <line x1={22} x2={16} y1={11} y2={11}></line>
                        </svg>
                      </Button>
                    </div>
                    <div className="border-b border-border px-3 py-2">
                      <div className="relative">
                        <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-3.5 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx={11} cy={11} r={8}></circle>
                        </svg>
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm pl-8 px-2.5 py-1 rounded-lg text-sm transition-colors" id="base-ui-_r_2d_" placeholder="Search patients..." aria-label="Search patients" value=""></Input>
                      </div>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2e_-viewport" tabIndex={-1} style={{overflow: "scroll"}}>
                          <div className="flex flex-col gap-0 px-1.5 py-2">
                            <div role="group" aria-labelledby="patient-group-in-chair">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="patient-group-in-chair">
                                  {"In Chair"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Elsa Lindqvist" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Elsa Lindqvist" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Laila Abadi" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Laila Abadi" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Ifeoma Okafor" id="base-ui-_r_2o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Ifeoma Okafor" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Samir Haddad" id="base-ui-_r_2s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Samir Haddad" id="base-ui-_r_2u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Mateo Santos" id="base-ui-_r_30_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Mateo Santos" id="base-ui-_r_32_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Gregory Whitfield" id="base-ui-_r_34_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Gregory Whitfield" id="base-ui-_r_36_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Wei Ling Tan" id="base-ui-_r_38_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Wei Ling Tan" id="base-ui-_r_3a_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Chiara Novello" id="base-ui-_r_3c_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Chiara Novello" id="base-ui-_r_3e_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Declan Brennan" id="base-ui-_r_3g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Declan Brennan" id="base-ui-_r_3i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Yuki Nakamura" id="base-ui-_r_3k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Yuki Nakamura" id="base-ui-_r_3m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Kwame Osei" id="base-ui-_r_3o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Kwame Osei" id="base-ui-_r_3q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Irina Petrova" id="base-ui-_r_3s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Irina Petrova" id="base-ui-_r_3u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Nadia Rahman" id="base-ui-_r_40_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Nadia Rahman" id="base-ui-_r_42_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Bruno Silva" id="base-ui-_r_44_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Bruno Silva" id="base-ui-_r_46_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Marta Kowalski" id="base-ui-_r_48_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Marta Kowalski" id="base-ui-_r_4a_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Dawit Bekele" id="base-ui-_r_4c_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Dawit Bekele" id="base-ui-_r_4e_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Camille Fontaine" id="base-ui-_r_4g_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Camille Fontaine" id="base-ui-_r_4i_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Lea Moreau" id="base-ui-_r_4k_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Lea Moreau" id="base-ui-_r_4m_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Diego Ibarra" id="base-ui-_r_4o_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Diego Ibarra" id="base-ui-_r_4q_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Henrik Olsen" id="base-ui-_r_4s_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Henrik Olsen" id="base-ui-_r_4u_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0}>
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
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Message Priya Chowdhury" id="base-ui-_r_50_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-message-square size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                      </TooltipTrigger>
                                      </Tooltip>
                                      <Tooltip>
                                      <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-60 outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Book Priya Chowdhury" id="base-ui-_r_52_" baseUiTooltipTrigger="">
                                        <svg className="lucide lucide-calendar-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Add clinician">
                        <svg className="lucide lucide-user-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx={9} cy={7} r={4}></circle>
                          <line x1={19} x2={19} y1={8} y2={14}></line>
                          <line x1={22} x2={16} y1={11} y2={11}></line>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_53_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "121px"}}>
                          <div className="flex flex-col gap-0 px-1.5 py-2">
                            <div role="group" aria-labelledby="staff-on-floor">
                              <div className="px-3 py-1.5">
                                <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase" id="staff-on-floor">
                                  {"On the floor"}
                                </span>
                              </div>
                              <div role="list">
                                <div role="listitem">
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Ravi Menon">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Amara Chen">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Hana Sato">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Elena Novak">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Tomas Reyes">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Ines Duarte">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Jonas Falk">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Noah Weber">
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
                                  <div className="cursor-pointer flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2.5 group hover:bg-accent items-center px-3 py-2 rounded-md" role="button" tabIndex={0} aria-label="Open Dr. Priya Raman">
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="New invoice">
                        <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_54_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "3947px"}}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                                    <div className="cursor-pointer focus-visible:ring-2 focus-visible:ring-ring min-w-0 outline-none pt-1 rounded-md space-y-1" role="button" tabIndex={0}>
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
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" disabled="" tabIndex={0} disabled aria-label="Reset to shipped defaults">
                        <svg className="lucide lucide-rotate-ccw size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                          <path d="M3 3v5h5"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="grow max-h-full min-h-0">
                      <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_55_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div className="px-3 py-3">
                            <Tabs className="gap-0 w-full" data-orientation="vertical" activationDirection="none">
                              <TabsList className="data-[variant=line]:rounded-none flex-col group-data-horizontal/tabs:h-8 h-auto items-stretch p-0 rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-muted! border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_56_" compositeItemActive="">
                                  <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx={12} cy={7} r={4}></circle>
                                  </svg>
                                  <span className="truncate">
                                    {"My Profile"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_57_">
                                  <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={10}></circle>
                                    <path d="M12 6v6l4 2"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Hours"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_58_">
                                  <svg className="lucide lucide-armchair" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                                    <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
                                    <path d="M5 18v2"></path>
                                    <path d="M19 18v2"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Chairs"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_59_">
                                  <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M13 16H8"></path>
                                    <path d="M14 8H8"></path>
                                    <path d="M16 12H8"></path>
                                    <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Procedures"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5a_">
                                  <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                                    <circle cx={12} cy={12} r={2}></circle>
                                    <path d="M6 12h.01M18 12h.01"></path>
                                  </svg>
                                  <span className="truncate">
                                    {"Billing"}
                                  </span>
                                </TabsTrigger>
                                <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 [box-shadow:none]! bg-transparent border border-transparent font-medium gap-3 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 justify-start px-3 py-1.5 rounded-md text-sm w-full" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_5b_">
                                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <h1 className="font-semibold min-w-0 sm:text-lg text-base text-foreground truncate">
              {"Clinic Dashboard"}
            </h1>
            <div className="flex gap-2 items-center ml-auto shrink-0">
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0} aria-label="Export the day sheet">
                <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                <span className="hidden sm:inline">
                  {"Export"}
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0} aria-label="Share the dashboard">
                <svg className="lucide lucide-share-2 lucide-share2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx={18} cy={5} r={3}></circle>
                  <circle cx={6} cy={12} r={3}></circle>
                  <circle cx={18} cy={19} r={3}></circle>
                  <line x1={8.59} x2={15.42} y1={13.51} y2={17.49}></line>
                  <line x1={15.41} x2={8.59} y1={6.51} y2={10.49}></line>
                </svg>
                <span className="hidden sm:inline">
                  {"Share"}
                </span>
              </Button>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 min-h-0 overflow-y-auto p-4.5">
            <div className="@container flex flex-col gap-4 text-foreground w-full">
              <h1 className="sr-only" id="page-heading">
                {"Clinic overview"}
              </h1>
              <section aria-label="Today at a glance">
                <div className="@2xl:grid-cols-2 @5xl:grid-cols-4 gap-4 grid">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm">
                    <CardContent className="px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Item className="[&_svg]:size-5 [&_svg]:text-white [a]:hover:bg-muted [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-neutral-950 border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M8 2v3"></path>
                              <path d="M16 2v3"></path>
                              <rect x={3} y={3} width={18} height={18} rx={2}></rect>
                              <path d="M3 9h18"></path>
                              <path d="m9 15 2 2 4-4"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="flex flex-col gap-1 min-w-0">
                          <p className="leading-tight text-muted-foreground text-sm truncate">
                            {"Schedule"}
                          </p>
                          <h3 className="font-medium leading-tight text-sm truncate">
                            {"Booked Today"}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <p className="leading-tight text-muted-foreground text-sm">
                          {"Appointments"}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-medium tabular-nums text-xl tracking-tight">
                            {"16"}
                          </span>
                          <span className="font-medium text-sm text-teal-600">
                            {"94% (kept)"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm">
                    <CardContent className="px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Item className="[&_svg]:size-5 [&_svg]:text-white [a]:hover:bg-muted [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-indigo-600 border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="lucide lucide-gauge" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m12 14 4-4"></path>
                              <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="flex flex-col gap-1 min-w-0">
                          <p className="leading-tight text-muted-foreground text-sm truncate">
                            {"Capacity"}
                          </p>
                          <h3 className="font-medium leading-tight text-sm truncate">
                            {"Chair Load"}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <p className="leading-tight text-muted-foreground text-sm">
                          {"Utilisation"}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-medium tabular-nums text-xl tracking-tight">
                            {"25%"}
                          </span>
                          <span className="font-medium text-sm text-teal-600">
                            {"13h 30m (of 55h)"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm">
                    <CardContent className="px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Item className="[&_svg]:size-5 [&_svg]:text-white [a]:hover:bg-muted [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-cyan-600 border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx={12} cy={12} r={10}></circle>
                              <path d="M12 6v6l4 2"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="flex flex-col gap-1 min-w-0">
                          <p className="leading-tight text-muted-foreground text-sm truncate">
                            {"Open Time"}
                          </p>
                          <h3 className="font-medium leading-tight text-sm truncate">
                            {"Still Sellable"}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <p className="leading-tight text-muted-foreground text-sm">
                          {"Unbooked"}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-medium tabular-nums text-xl tracking-tight">
                            {"27h 30m"}
                          </span>
                          <span className="font-medium text-sm text-teal-600">
                            {"50% (18 slots)"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm">
                    <CardContent className="px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Item className="[&_svg]:size-5 [&_svg]:text-white [a]:hover:bg-muted [background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] bg-amber-400 border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                              <path d="M12 9v4"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="flex flex-col gap-1 min-w-0">
                          <p className="leading-tight text-muted-foreground text-sm truncate">
                            {"Risk"}
                          </p>
                          <h3 className="font-medium leading-tight text-sm truncate">
                            {"Watchlist"}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <p className="leading-tight text-muted-foreground text-sm">
                          {"Needs Desk"}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <span className="font-medium tabular-nums text-xl tracking-tight">
                            {"2"}
                          </span>
                          <span className="font-medium text-rose-600 text-sm">
                            {"1 (unpaid)"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <section className="@5xl:grid-cols-2 gap-4 grid grid-cols-1" aria-label="Demand and volume">
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                  <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                  <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                  <CardContent className="flex flex-col gap-5 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-0.5">
                        <h2 className="font-semibold leading-4 text-sm">
                          {"Procedure Mix"}
                        </h2>
                        <p className="leading-4 text-muted-foreground text-xs">
                          {"Chair Demand"}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4 items-center shrink-0 sm:justify-end text-muted-foreground text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-blue-600 rounded-full size-2" aria-hidden="true"></span>
                          {"Completed"}
                        </span>
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-sky-300 rounded-full size-2" aria-hidden="true"></span>
                          {"Scheduled"}
                        </span>
                      </div>
                    </div>
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_gb_">
                      <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_gb_] {\n  --color-completed: var(--color-blue-600);\n  --color-scheduled: var(--color-sky-300);\n}\n\n\n.dark [data-chart=chart-_r_gb_] {\n  --color-completed: var(--color-blue-600);\n  --color-scheduled: var(--color-sky-300);\n}\n" }} />
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width={862} height={224} style={{position: "relative", cursor: "default", width: "862px", height: "224px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex={0} width={862} height={224} viewBox="0 0 862 224" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={4} y={8} width={854} height={186} x1={4} y1={194} x2={858} y2={194} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={4} y={8} width={854} height={186} x1={4} y1={146.3076923076923} x2={858} y2={146.3076923076923} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={4} y={8} width={854} height={186} x1={4} y1={98.61538461538463} x2={858} y2={98.61538461538463} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={4} y={8} width={854} height={186} x1={4} y1={50.92307692307691} x2={858} y2={50.92307692307691} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={4} y={8} width={854} height={186} x1={4} y1={8} x2={858} y2={8} fill="none"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                              <defs>
                                <clippath id="recharts29-clip">
                                  <rect x={4} y={8} height={186} width={854}></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <pattern id="clinic-procedure-completed" patternUnits="userSpaceOnUse" width={8} height={8}>
                                  <rect width={8} height={8} fill="var(--color-completed)" opacity={0.1}></rect>
                                  <path d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4" stroke="var(--color-completed)" strokeWidth={1.5} opacity={0.55}></path>
                                  <path d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2" stroke="var(--color-completed)" strokeWidth={1} opacity={0.25}></path>
                                </pattern>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_js_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Checkup" x={12} y={112.9231} width={38} height={81.0769} d={"M12,117.9231A 5,5,0,0,1,17,112.9231L 45,112.9231A 5,5,0,0,1,\n        50,117.9231L 50,189A 5,5,0,0,1,\n        45,194L 17,194A 5,5,0,0,1,\n        12,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Scaling" x={106.8889} y={122.4615} width={38} height={71.5385} d={"M106.8889,127.4615A 5,5,0,0,1,111.8889,122.4615L 139.8889,122.4615A 5,5,0,0,1,\n        144.8889,127.4615L 144.8889,189A 5,5,0,0,1,\n        139.8889,194L 111.8889,194A 5,5,0,0,1,\n        106.8889,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Whitening" x={201.7778} y={70} width={38} height={124} d={"M201.7778,75A 5,5,0,0,1,206.7778,70L 234.7778,70A 5,5,0,0,1,\n        239.7778,75L 239.7778,189A 5,5,0,0,1,\n        234.7778,194L 206.7778,194A 5,5,0,0,1,\n        201.7778,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Filling" x={296.6667} y={141.5385} width={38} height={52.4615} d={"M296.6667,146.5385A 5,5,0,0,1,301.6667,141.5385L 329.6667,141.5385A 5,5,0,0,1,\n        334.6667,146.5385L 334.6667,189A 5,5,0,0,1,\n        329.6667,194L 301.6667,194A 5,5,0,0,1,\n        296.6667,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Root Canal" x={391.5556} y={91.4615} width={38} height={102.5385} d={"M391.5556,96.4615A 5,5,0,0,1,396.5556,91.4615L 424.5556,91.4615A 5,5,0,0,1,\n        429.5556,96.4615L 429.5556,189A 5,5,0,0,1,\n        424.5556,194L 396.5556,194A 5,5,0,0,1,\n        391.5556,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Extraction" x={486.4444} y={151.0769} width={38} height={42.9231} d={"M486.4444,156.0769A 5,5,0,0,1,491.4444,151.0769L 519.4444,151.0769A 5,5,0,0,1,\n        524.4444,156.0769L 524.4444,189A 5,5,0,0,1,\n        519.4444,194L 491.4444,194A 5,5,0,0,1,\n        486.4444,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Crown" x={581.3333} y={60.4615} width={38} height={133.5385} d={"M581.3333,65.4615A 5,5,0,0,1,586.3333,60.4615L 614.3333,60.4615A 5,5,0,0,1,\n        619.3333,65.4615L 619.3333,189A 5,5,0,0,1,\n        614.3333,194L 586.3333,194A 5,5,0,0,1,\n        581.3333,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Braces" x={676.2222} y={103.3846} width={38} height={90.6154} d={"M676.2222,108.3846A 5,5,0,0,1,681.2222,103.3846L 709.2222,103.3846A 5,5,0,0,1,\n        714.2222,108.3846L 714.2222,189A 5,5,0,0,1,\n        709.2222,194L 681.2222,194A 5,5,0,0,1,\n        676.2222,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="url(#clinic-procedure-completed)" stroke="var(--color-completed)" strokeWidth={1} name="Implant" x={771.1111} y={160.6154} width={38} height={33.3846} d={"M771.1111,165.6154A 5,5,0,0,1,776.1111,160.6154L 804.1111,160.6154A 5,5,0,0,1,\n        809.1111,165.6154L 809.1111,189A 5,5,0,0,1,\n        804.1111,194L 776.1111,194A 5,5,0,0,1,\n        771.1111,189Z"}></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-bar recharts-layer" id="recharts-bar-_r_jt_">
                                  <g className="recharts-bar-rectangles recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Checkup" x={53} y={46.1538} width={38} height={147.8462} d={"M53,51.1538A 5,5,0,0,1,58,46.1538L 86,46.1538A 5,5,0,0,1,\n        91,51.1538L 91,189A 5,5,0,0,1,\n        86,194L 58,194A 5,5,0,0,1,\n        53,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Scaling" x={147.8889} y={17.5385} width={38} height={176.4615} d={"M147.8889,22.5385A 5,5,0,0,1,152.8889,17.5385L 180.8889,17.5385A 5,5,0,0,1,\n        185.8889,22.5385L 185.8889,189A 5,5,0,0,1,\n        180.8889,194L 152.8889,194A 5,5,0,0,1,\n        147.8889,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Whitening" x={242.7778} y={115.3077} width={38} height={78.6923} d={"M242.7778,120.3077A 5,5,0,0,1,247.7778,115.3077L 275.7778,115.3077A 5,5,0,0,1,\n        280.7778,120.3077L 280.7778,189A 5,5,0,0,1,\n        275.7778,194L 247.7778,194A 5,5,0,0,1,\n        242.7778,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Filling" x={337.6667} y={79.5385} width={38} height={114.4615} d={"M337.6667,84.5385A 5,5,0,0,1,342.6667,79.5385L 370.6667,79.5385A 5,5,0,0,1,\n        375.6667,84.5385L 375.6667,189A 5,5,0,0,1,\n        370.6667,194L 342.6667,194A 5,5,0,0,1,\n        337.6667,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Root Canal" x={432.5556} y={31.8462} width={38} height={162.1538} d={"M432.5556,36.8462A 5,5,0,0,1,437.5556,31.8462L 465.5556,31.8462A 5,5,0,0,1,\n        470.5556,36.8462L 470.5556,189A 5,5,0,0,1,\n        465.5556,194L 437.5556,194A 5,5,0,0,1,\n        432.5556,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Extraction" x={527.4444} y={55.6923} width={38} height={138.3077} d={"M527.4444,60.6923A 5,5,0,0,1,532.4444,55.6923L 560.4444,55.6923A 5,5,0,0,1,\n        565.4444,60.6923L 565.4444,189A 5,5,0,0,1,\n        560.4444,194L 532.4444,194A 5,5,0,0,1,\n        527.4444,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Crown" x={622.3333} y={110.5385} width={38} height={83.4615} d={"M622.3333,115.5385A 5,5,0,0,1,627.3333,110.5385L 655.3333,110.5385A 5,5,0,0,1,\n        660.3333,115.5385L 660.3333,189A 5,5,0,0,1,\n        655.3333,194L 627.3333,194A 5,5,0,0,1,\n        622.3333,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Braces" x={717.2222} y={41.3846} width={38} height={152.6154} d={"M717.2222,46.3846A 5,5,0,0,1,722.2222,41.3846L 750.2222,41.3846A 5,5,0,0,1,\n        755.2222,46.3846L 755.2222,189A 5,5,0,0,1,\n        750.2222,194L 722.2222,194A 5,5,0,0,1,\n        717.2222,189Z"}></path>
                                        </g>
                                      </g>
                                      <g className="recharts-bar-rectangle recharts-layer">
                                        <g className="recharts-inactive-bar recharts-layer">
                                          <path className="recharts-rectangle" fill="var(--color-scheduled)" fillOpacity={0.86} stroke="var(--color-scheduled)" strokeWidth={1} name="Implant" x={812.1111} y={127.2308} width={38} height={66.7692} d={"M812.1111,132.2308A 5,5,0,0,1,817.1111,127.2308L 845.1111,127.2308A 5,5,0,0,1,\n        850.1111,132.2308L 850.1111,189A 5,5,0,0,1,\n        845.1111,194L 817.1111,194A 5,5,0,0,1,\n        812.1111,189Z"}></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                                <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                  <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                    <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={51.44444444444444} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={51.44444444444444} dy="0.71em">
                                        {"Checkup"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={146.33333333333331} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={146.33333333333331} dy="0.71em">
                                        {"Scaling"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={241.22222222222223} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={241.22222222222223} dy="0.71em">
                                        {"Whitening"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={336.1111111111111} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={336.1111111111111} dy="0.71em">
                                        {"Filling"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={431} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={431} dy="0.71em">
                                        {"Root Canal"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={525.8888888888889} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={525.8888888888889} dy="0.71em">
                                        {"Extraction"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={620.7777777777777} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={620.7777777777777} dy="0.71em">
                                        {"Crown"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={715.6666666666666} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={715.6666666666666} dy="0.71em">
                                        {"Braces"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={854} stroke="none" fontSize="10" x={810.5555555555555} y={210} textAnchor="middle" fill="#666">
                                      <tspan x={810.5555555555555} dy="0.71em">
                                        {"Implant"}
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
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                  <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                  <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                  <CardContent className="flex flex-col gap-5 p-4">
                    <div className="flex gap-3 items-start justify-between">
                      <div className="space-y-0.5">
                        <h2 className="font-semibold leading-4 text-sm">
                          {"Patient Volume"}
                        </h2>
                        <p className="leading-4 text-muted-foreground text-xs">
                          {"Appointments and new patients"}
                        </p>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                        {"+12.8%"}
                      </Badge>
                    </div>
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_r_gc_">
                      <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_gc_] {\n  --color-appointments: var(--color-yellow-500);\n  --color-newPatients: var(--color-emerald-500);\n}\n\n\n.dark [data-chart=chart-_r_gc_] {\n  --color-appointments: var(--color-yellow-500);\n  --color-newPatients: var(--color-emerald-500);\n}\n" }} />
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width={862} height={224} style={{position: "relative", cursor: "default", width: "862px", height: "224px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex={0} width={862} height={224} viewBox="0 0 862 224" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={0} y={20} width={862} height={174} x1={0} y1={194} x2={862} y2={194} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={0} y={20} width={862} height={174} x1={0} y1={150.5} x2={862} y2={150.5} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={0} y={20} width={862} height={174} x1={0} y1={107} x2={862} y2={107} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={0} y={20} width={862} height={174} x1={0} y1={63.5} x2={862} y2={63.5} fill="none"></line>
                                    <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity={0.75} x={0} y={20} width={862} height={174} x1={0} y1={20} x2={862} y2={20} fill="none"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                              <defs>
                                <clippath id="recharts30-clip">
                                  <rect x={0} y={20} height={174} width={862}></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <pattern id="clinic-volume-crosshatch-appointments" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-yellow-500)" strokeWidth={0.8} opacity={0.4}></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-yellow-500)" strokeWidth={0.8} opacity={0.2}></path>
                                </pattern>
                                <pattern id="clinic-volume-crosshatch-newPatients" x={0} y={0} width={8} height={8} patternUnits="userSpaceOnUse">
                                  <path d="M0,8 L8,0" stroke="var(--color-emerald-500)" strokeWidth={0.8} opacity={0.4}></path>
                                  <path d="M0,0 L8,8" stroke="var(--color-emerald-500)" strokeWidth={0.8} opacity={0.2}></path>
                                </pattern>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1.25} fill="url(#clinic-volume-crosshatch-newPatients)" fillOpacity={0.5} height={174} width={862} id="recharts-area-_r_ju_" stroke="none" d="M0,158.33C26.121,152.259,52.242,146.188,78.364,147.02C104.485,147.852,130.606,155.586,156.727,153.11C182.848,150.634,208.97,137.946,235.091,138.755C261.212,139.564,287.333,153.869,313.455,152.24C339.576,150.611,365.697,133.047,391.818,131.36C417.939,129.673,444.061,143.862,470.182,143.54C496.303,143.218,522.424,128.385,548.545,125.27C574.667,122.155,600.788,130.758,626.909,137.885C653.03,145.012,679.152,150.662,705.273,147.455C731.394,144.248,757.515,132.184,783.636,129.62C809.758,127.056,835.879,133.993,862,140.93L862,194C835.879,194,809.758,194,783.636,194C757.515,194,731.394,194,705.273,194C679.152,194,653.03,194,626.909,194C600.788,194,574.667,194,548.545,194C522.424,194,496.303,194,470.182,194C444.061,194,417.939,194,391.818,194C365.697,194,339.576,194,313.455,194C287.333,194,261.212,194,235.091,194C208.97,194,182.848,194,156.727,194C130.606,194,104.485,194,78.364,194C52.242,194,26.121,194,0,194Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1.25} fill="none" fillOpacity={0.5} height={174} width={862} stroke="var(--color-newPatients)" d="M0,158.33C26.121,152.259,52.242,146.188,78.364,147.02C104.485,147.852,130.606,155.586,156.727,153.11C182.848,150.634,208.97,137.946,235.091,138.755C261.212,139.564,287.333,153.869,313.455,152.24C339.576,150.611,365.697,133.047,391.818,131.36C417.939,129.673,444.061,143.862,470.182,143.54C496.303,143.218,522.424,128.385,548.545,125.27C574.667,122.155,600.788,130.758,626.909,137.885C653.03,145.012,679.152,150.662,705.273,147.455C731.394,144.248,757.515,132.184,783.636,129.62C809.758,127.056,835.879,133.993,862,140.93"></path>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-area-area recharts-curve" strokeWidth={1.25} fill="url(#clinic-volume-crosshatch-appointments)" fillOpacity={0.5} height={174} width={862} id="recharts-area-_r_jv_" stroke="none" d="M0,118.745C26.121,106.237,52.242,93.729,78.364,96.125C104.485,98.521,130.606,115.82,156.727,110.48C182.848,105.14,208.97,77.161,235.091,78.29C261.212,79.419,287.333,109.655,313.455,106.565C339.576,103.475,365.697,67.057,391.818,63.5C417.939,59.943,444.061,89.245,470.182,88.295C496.303,87.345,522.424,56.142,548.545,49.58C574.667,43.018,600.788,61.095,626.909,75.68C653.03,90.265,679.152,101.357,705.273,94.82C731.394,88.283,757.515,64.118,783.636,59.15C809.758,54.182,835.879,68.411,862,82.64L862,140.93C835.879,133.993,809.758,127.056,783.636,129.62C757.515,132.184,731.394,144.248,705.273,147.455C679.152,150.662,653.03,145.012,626.909,137.885C600.788,130.758,574.667,122.155,548.545,125.27C522.424,128.385,496.303,143.218,470.182,143.54C444.061,143.862,417.939,129.673,391.818,131.36C365.697,133.047,339.576,150.611,313.455,152.24C287.333,153.869,261.212,139.564,235.091,138.755C208.97,137.946,182.848,150.634,156.727,153.11C130.606,155.586,104.485,147.852,78.364,147.02C52.242,146.188,26.121,152.259,0,158.33Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth={1.25} fill="none" fillOpacity={0.5} height={174} width={862} stroke="var(--color-appointments)" d="M0,118.745C26.121,106.237,52.242,93.729,78.364,96.125C104.485,98.521,130.606,115.82,156.727,110.48C182.848,105.14,208.97,77.161,235.091,78.29C261.212,79.419,287.333,109.655,313.455,106.565C339.576,103.475,365.697,67.057,391.818,63.5C417.939,59.943,444.061,89.245,470.182,88.295C496.303,87.345,522.424,56.142,548.545,49.58C574.667,43.018,600.788,61.095,626.909,75.68C653.03,90.265,679.152,101.357,705.273,94.82C731.394,88.283,757.515,64.118,783.636,59.15C809.758,54.182,835.879,68.411,862,82.64"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_500" tabIndex={-1}>
                                <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                  <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                    <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={78.36363636363636} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={78.36363636363636} dy="0.71em">
                                        {"Feb"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={156.72727272727272} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={156.72727272727272} dy="0.71em">
                                        {"Mar"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={235.09090909090907} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={235.09090909090907} dy="0.71em">
                                        {"Apr"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={313.45454545454544} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={313.45454545454544} dy="0.71em">
                                        {"May"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={391.8181818181818} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={391.8181818181818} dy="0.71em">
                                        {"Jun"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={470.18181818181813} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={470.18181818181813} dy="0.71em">
                                        {"Jul"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={548.5454545454545} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={548.5454545454545} dy="0.71em">
                                        {"Aug"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={626.9090909090909} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={626.9090909090909} dy="0.71em">
                                        {"Sep"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={705.2727272727273} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={705.2727272727273} dy="0.71em">
                                        {"Oct"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={783.6363636363636} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={783.6363636363636} dy="0.71em">
                                        {"Nov"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={862} stroke="none" x={850.7421875} y={208} textAnchor="middle" fill="#666">
                                      <tspan x={850.7421875} dy="0.71em">
                                        {"Dec"}
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
                    </ChartContainer>
                  </CardContent>
                </Card>
              </section>
              <section aria-label="Day breakdown">
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <CardHeader className="[.border-b]:pb-(--card-spacing) border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-(--card-spacing) py-3 rounded-t-xl">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <CardTitle className="font-heading font-semibold group-data-[size=sm]/card:text-sm text-base">
                        {"Day Breakdown"}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-xs">
                        {"Every booking on the sheet, against the state it is in."}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 items-center min-w-0">
                      <div className="flex gap-2 items-center min-w-0">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Bookings"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                          {"17"}
                        </Badge>
                      </div>
                      <div className="flex gap-2 items-center min-w-0 sm:border-l sm:pl-3">
                        <span className="font-medium text-muted-foreground text-xs truncate">
                          {"Needs desk"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                          {"2"}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0! px-(--card-spacing)">
                    <div className="pt-2 px-4">
                      <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                        <TabsList className="data-[variant=line]:rounded-none gap-5 group-data-horizontal/tabs:h-8 p-[3px] rounded-lg" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 px-0 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_gd_" compositeItemActive="">
                            {"By chair"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_ge_">
                            {"By procedure"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_gf_">
                            {"By room"}
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex flex-wrap gap-3 items-center justify-between px-4 py-2">
                      <div className="flex flex-wrap gap-2 items-center">
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none sm:w-40 text-sm transition-colors w-full" type="button" tabIndex={0} id="base-ui-_r_gg_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by what needs the desk">
                          <SelectValue className="flex flex-1 text-left">
                            {"Everything"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_gg_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg sm:w-52 transition-colors" role="group">
                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                            <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m21 21-4.34-4.34"></path>
                              <circle cx={11} cy={11} r={8}></circle>
                            </svg>
                          </InputGroupAddon>
                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_gj_" placeholder="Search buckets" aria-label="Search buckets" value="" />
                        </InputGroup>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center justify-end">
                        <Field className="data-[invalid=true]:text-destructive gap-2 w-auto" role="group" data-orientation="horizontal">
                          <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-normal gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm">
                            {"Notes"}
                          </FieldLabel>
                          <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex={0} id="base-ui-_r_gk_" aria-checked="true" size="default" aria-label="Toggle the second line on every row">
                            <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                          </Switch>
                          <input id="base-ui-_r_gl_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                          {"Collapse"}
                        </Button>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridProvider>
                      <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_gn_-viewport" tabIndex={0} data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "118px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                            <DataGridProvider>
                            <DataGridTableViewport>
                              <DataGridProvider>
                              <DataGridTable>
                                <colgroup>
                                  <col style={{width: "260px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "128px"}} />
                                  <col style={{width: "128px"}} />
                                  <col style={{width: "128px"}} />
                                  <col style={{width: "128px"}} />
                                  <col style={{width: "128px"}} />
                                </colgroup>
                                <thead>
                                  <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "260px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                        {"Bucket"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"Bookings"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "128px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"Booked"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "128px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"Arrived"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "128px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"In Chair"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "128px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"Completed"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e first:ps-3 font-medium h-8 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 relative rtl:text-right text-foreground text-left text-right!" scope="col" style={{width: "128px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                        {"Cancelled"}
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <DataGridProvider>
                                <DataGridTableBody>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="chen">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-2 items-center min-w-0" data-matrix-row="group">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] shadow-none size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Collapse Dr. Amara Chen" aria-expanded="true">
                                          <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                        </Button>
                                        <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                        </svg>
                                        <span className="font-semibold shrink-0 text-foreground text-sm">
                                          {"Dr. Amara Chen"}
                                        </span>
                                        <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                          {"Restorative"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"4"}
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"5"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Dr. Amara Chen, Booked: 2 of 5, 40%" id="base-ui-_r_gp_">
                                        <span className="tabular-nums">
                                          {"2"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"40%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Amara Chen, Arrived: 0 of 5, 0%" id="base-ui-_r_gr_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Amara Chen, In Chair: 1 of 5, 20%" id="base-ui-_r_gt_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"20%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Dr. Amara Chen, Completed: 2 of 5, 40%" id="base-ui-_r_gv_">
                                        <span className="tabular-nums">
                                          {"2"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"40%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Dr. Amara Chen, Cancelled: 0 of 5, 0%" id="base-ui-_r_h1_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="chen:checkup" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"30m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"General Checkup"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"30 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"2"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="General Checkup, Booked: 1 of 2, 50%" id="base-ui-_r_h3_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"50%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="General Checkup, Arrived: 0 of 2, 0%" id="base-ui-_r_h5_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="General Checkup, In Chair: 0 of 2, 0%" id="base-ui-_r_h7_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="General Checkup, Completed: 1 of 2, 50%" id="base-ui-_r_h9_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"50%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="General Checkup, Cancelled: 0 of 2, 0%" id="base-ui-_r_hb_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="chen:scaling" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"45m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Scaling"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"45 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"1"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Scaling, Booked: 0 of 1, 0%" id="base-ui-_r_hd_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Scaling, Arrived: 0 of 1, 0%" id="base-ui-_r_hf_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Scaling, In Chair: 0 of 1, 0%" id="base-ui-_r_hh_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Scaling, Completed: 1 of 1, 100%" id="base-ui-_r_hj_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"100%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Scaling, Cancelled: 0 of 1, 0%" id="base-ui-_r_hl_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="chen:filling" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"45m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Composite Filling"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"45 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"1"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Composite Filling, Booked: 1 of 1, 100%" id="base-ui-_r_hn_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"100%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Composite Filling, Arrived: 0 of 1, 0%" id="base-ui-_r_hp_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Composite Filling, In Chair: 0 of 1, 0%" id="base-ui-_r_hr_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Composite Filling, Completed: 0 of 1, 0%" id="base-ui-_r_ht_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Composite Filling, Cancelled: 0 of 1, 0%" id="base-ui-_r_hv_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="chen:crown" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"60m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Crown Fitting"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"60 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"1"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Crown Fitting, Booked: 0 of 1, 0%" id="base-ui-_r_i1_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Crown Fitting, Arrived: 0 of 1, 0%" id="base-ui-_r_i3_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Crown Fitting, In Chair: 1 of 1, 100%" id="base-ui-_r_i5_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"100%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Crown Fitting, Completed: 0 of 1, 0%" id="base-ui-_r_i7_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Crown Fitting, Cancelled: 0 of 1, 0%" id="base-ui-_r_i9_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="novak">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-2 items-center min-w-0" data-matrix-row="group">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] shadow-none size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Collapse Dr. Elena Novak" aria-expanded="true">
                                          <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                        </Button>
                                        <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                        </svg>
                                        <span className="font-semibold shrink-0 text-foreground text-sm">
                                          {"Dr. Elena Novak"}
                                        </span>
                                        <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                          {"Orthodontics"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"2"}
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"4"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Dr. Elena Novak, Booked: 2 of 4, 50%" id="base-ui-_r_ib_">
                                        <span className="tabular-nums">
                                          {"2"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"50%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Elena Novak, Arrived: 1 of 4, 25%" id="base-ui-_r_id_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"25%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Elena Novak, In Chair: 0 of 4, 0%" id="base-ui-_r_if_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Elena Novak, Completed: 0 of 4, 0%" id="base-ui-_r_ih_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-red-100 cursor-help dark:bg-red-950 dark:text-red-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-700 text-xs w-full" aria-label="Dr. Elena Novak, Cancelled: 1 of 4, 25%" id="base-ui-_r_ij_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"25%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="novak:braces" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"30m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Braces Adjustment"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"30 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"3"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Braces Adjustment, Booked: 1 of 3, 33%" id="base-ui-_r_il_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"33%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Braces Adjustment, Arrived: 1 of 3, 33%" id="base-ui-_r_in_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"33%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Braces Adjustment, In Chair: 0 of 3, 0%" id="base-ui-_r_ip_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Braces Adjustment, Completed: 0 of 3, 0%" id="base-ui-_r_ir_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-red-100 cursor-help dark:bg-red-950 dark:text-red-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-red-700 text-xs w-full" aria-label="Braces Adjustment, Cancelled: 1 of 3, 33%" id="base-ui-_r_it_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"33%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="novak:implant" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"45m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Implant Review"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"45 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"1"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Implant Review, Booked: 1 of 1, 100%" id="base-ui-_r_iv_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"100%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Implant Review, Arrived: 0 of 1, 0%" id="base-ui-_r_j1_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Implant Review, In Chair: 0 of 1, 0%" id="base-ui-_r_j3_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Implant Review, Completed: 0 of 1, 0%" id="base-ui-_r_j5_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Implant Review, Cancelled: 0 of 1, 0%" id="base-ui-_r_j7_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="sato">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-2 items-center min-w-0" data-matrix-row="group">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] shadow-none size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Collapse Dr. Hana Sato" aria-expanded="true">
                                          <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m9 18 6-6-6-6"></path>
                                          </svg>
                                        </Button>
                                        <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                        </svg>
                                        <span className="font-semibold shrink-0 text-foreground text-sm">
                                          {"Dr. Hana Sato"}
                                        </span>
                                        <span className="flex-1 hidden min-w-0 sm:block text-muted-foreground text-xs truncate">
                                          {"Hygiene"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"2"}
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"3"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Hana Sato, Booked: 0 of 3, 0%" id="base-ui-_r_j9_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-100 cursor-help dark:bg-emerald-900 dark:text-emerald-200 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Hana Sato, Arrived: 1 of 3, 33%" id="base-ui-_r_jb_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"33%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Dr. Hana Sato, In Chair: 0 of 3, 0%" id="base-ui-_r_jd_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-300 cursor-help dark:bg-emerald-700 dark:text-emerald-50 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-900 text-xs w-full" aria-label="Dr. Hana Sato, Completed: 2 of 3, 67%" id="base-ui-_r_jf_">
                                        <span className="tabular-nums">
                                          {"2"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"67%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-semibold gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Dr. Hana Sato, Cancelled: 0 of 3, 0%" id="base-ui-_r_jh_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:has([data-matrix-row=group])>td]:h-11 [&:has([data-matrix-row=row])>td]:h-14 [&:not(:last-child)>td]:border-b [&>td]:h-10 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/matrix-row hover:bg-muted/40" data-row-id="sato:scaling" data-depth="1">
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 px-2 py-1.5">
                                      <div className="flex gap-3 items-center min-w-0 ps-8" data-matrix-row="row">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-muted-foreground text-xs transition-shadow">
                                          {"45m"}
                                        </Badge>
                                        <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                                          <span className="font-normal text-foreground text-sm truncate">
                                            {"Scaling"}
                                          </span>
                                          <p className="leading-5 text-muted-foreground text-sm truncate">
                                            {"45 minutes in the chair"}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5 text-right!">
                                      <div className="flex justify-end w-full">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"2"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Scaling, Booked: 0 of 2, 0%" id="base-ui-_r_jj_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Scaling, Arrived: 1 of 2, 50%" id="base-ui-_r_jl_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"50%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-50 cursor-help dark:bg-emerald-950 dark:text-emerald-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-700 text-xs w-full" aria-label="Scaling, In Chair: 0 of 2, 0%" id="base-ui-_r_jn_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-emerald-200 cursor-help dark:bg-emerald-800 dark:text-emerald-100 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-emerald-800 text-xs w-full" aria-label="Scaling, Completed: 1 of 2, 50%" id="base-ui-_r_jp_">
                                        <span className="tabular-nums">
                                          {"1"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"50%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                    <td className="align-middle border-e first:ps-3 last:pe-3 lg:first:ps-4 lg:last:pe-4 p-0! px-2 py-1.5 text-right!">
                                      <HoverCard>
                                      <HoverCardTrigger className="bg-amber-50 cursor-help dark:bg-amber-950 dark:text-amber-300 flex font-medium gap-2 h-full items-center justify-between min-h-10 min-w-28 px-2.5 text-amber-700 text-xs w-full" aria-label="Scaling, Cancelled: 0 of 2, 0%" id="base-ui-_r_jr_">
                                        <span className="tabular-nums">
                                          {"0"}
                                        </span>
                                        <span className="opacity-80 tabular-nums">
                                          {"0%"}
                                        </span>
                                      </HoverCardTrigger>
                                      </HoverCard>
                                    </td>
                                  </tr>
                                </DataGridTableBody>
                                </DataGridProvider>
                                <DataGridProvider>
                                <DataGridTableFoot>
                                  <DataGridTableFootRow className="dark:bg-background">
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-secondary-foreground/80">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <span className="font-semibold text-foreground text-sm">
                                          {"Visible buckets"}
                                        </span>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                                          {"11"}
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        {"17"}
                                      </span>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-foreground text-sm" aria-label="Booked total">
                                        {"7 / 41%"}
                                      </span>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-foreground text-sm" aria-label="Arrived total">
                                        {"2 / 12%"}
                                      </span>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-foreground text-sm" aria-label="In Chair total">
                                        {"1 / 6%"}
                                      </span>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-foreground text-sm" aria-label="Completed total">
                                        {"5 / 29%"}
                                      </span>
                                    </td>
                                    <td className="align-middle bg-muted/40 border-e dark:bg-background font-medium px-4 py-1.5 text-right! text-secondary-foreground/80">
                                      <span className="font-semibold tabular-nums text-destructive text-sm" aria-label="Cancelled total">
                                        {"1 / 6%"}
                                      </span>
                                    </td>
                                  </DataGridTableFootRow>
                                </DataGridTableFoot>
                                </DataGridProvider>
                              </DataGridTable>
                              </DataGridProvider>
                            </DataGridTableViewport>
                            </DataGridProvider>
                          </div>
                        </div>
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-overflow-x-end="" data-orientation="horizontal" data-id="base-ui-_r_gn_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "787.9920948616601px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                      </DataGridProvider>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
      </SidebarProvider>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    </div>
    <span id="recharts_measurement_span" aria-hidden="true" data-base-ui-inert="" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"Jan"}
    </span>
    <DialogPortal id="_r_fo_" baseUiPortal="">
      <div role="presentation" data-base-ui-inert="" aria-hidden="true" style={{position: "fixed", inset: "0px", userSelect: "none"}}></div>
      <DialogOverlay className="bg-black/10 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 duration-100 supports-backdrop-filter:backdrop-blur-xs" data-open="" role="presentation" aria-hidden="true" baseUiInert="" style={{userSelect: "none"}}></DialogOverlay>
      <span data-type="inside" aria-hidden="true" tabIndex={0} data-base-ui-focus-guard="" data-base-ui-inert="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
      <Dialog>
      <DialogContent className="**:data-[slot=dialog-close]:opacity-60 **:data-[slot=dialog-close]:right-4 **:data-[slot=dialog-close]:top-4 bg-popover data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 duration-100 gap-0 grid max-w-[calc(100%-2rem)] p-0 ring-1 ring-foreground/10 rounded-xl sm:max-w-2xl text-popover-foreground text-sm" data-open="" id="_r_5c_" role="dialog" tabIndex={-1} baseUiFocusable="" aria-labelledby="base-ui-_r_fp_" aria-describedby="base-ui-_r_fq_" style={{"--nested-dialogs": "0"}}>
        <DialogHeader className="gap-2 sr-only">
          <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_fp_">
            {"Search"}
          </DialogTitle>
          <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_fq_">
            {"Find patients, bookings, invoices, clinicians, planner events and pages."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 items-center px-4 py-3">
          <svg className="lucide lucide-search opacity-60 pointer-events-none select-none shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m21 21-4.34-4.34"></path>
            <circle cx={11} cy={11} r={8}></circle>
          </svg>
          <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input border-none dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-10 md:text-sm p-0 rounded-lg shadow-none text-base transition-colors" id="base-ui-_r_ft_" placeholder="Search patients, bookings, invoices..." aria-label="Search" popupOpen="" pressed="" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-autocomplete="list" value="" aria-activedescendant="base-ui-_r_fr_-0" aria-controls="_r_fs_"></Input>
        </div>
        <div className="border-t"></div>
        <div className="max-h-[min(24rem,60vh)] no-scrollbar overflow-y-auto overscroll-contain p-1 scroll-py-1" aria-orientation="vertical" role="listbox" tabIndex={-1} id="_r_fs_" aria-busy="false" aria-activedescendant="base-ui-_r_fr_-0">
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
                <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                  <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                  <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                  <rect width={7} height={5} x={3} y={16} rx={1}></rect>
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
                <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v3"></path>
                  <path d="M16 2v3"></path>
                  <rect x={3} y={3} width={18} height={18} rx={2}></rect>
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
                <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v3"></path>
                  <path d="M16 2v3"></path>
                  <rect x={3} y={3} width={18} height={18} rx={2}></rect>
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
                <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx={9} cy={7} r={4}></circle>
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
                <svg className="lucide lucide-stethoscope" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 2v2"></path>
                  <path d="M5 2v2"></path>
                  <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
                  <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
                  <circle cx={20} cy={10} r={2}></circle>
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
                <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                  <circle cx={12} cy={12} r={2}></circle>
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
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx={12} cy={12} r={3}></circle>
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
        <input id="base-ui-_r_fr_-hidden-input" autoComplete="none" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        <DialogClose className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none right-2 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm top-2 transition-all whitespace-nowrap" type="button" tabIndex={0}>
          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">
            {"Close"}
          </span>
        </DialogClose>
      </DialogContent>
      </Dialog>
      <span data-type="inside" aria-hidden="true" tabIndex={0} data-base-ui-focus-guard="" data-base-ui-inert="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}></span>
    </DialogPortal>
  </>
  )
}
