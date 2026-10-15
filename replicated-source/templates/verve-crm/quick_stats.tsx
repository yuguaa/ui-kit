import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
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
import {
  Kbd,
  KbdGroup,
} from "@/registry/bases/base/ui/kbd"
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
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div className="fixed h-0.5 inset-x-0 opacity-0 pointer-events-none top-0 will-change-[opacity] z-[9999]" aria-hidden="true" style={{transition: "opacity 350ms ease-out", opacity: "0"}}>
      <div className="bg-primary h-full w-0 will-change-[width]" style={{transition: "none", width: "0%"}}></div>
    </div>
    <SidebarProvider>
    <div className="[--header-height:50px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <div className="flex grow h-full">
              <div className="flex flex-col h-full">
                <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
                  <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                      <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent className="flex-row gap-0 md:flex-col no-scrollbar" sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup className="p-2" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.5" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1kpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1l9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-target" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="12" r="6"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1m9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1mpj5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1n9j5ulb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
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
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_R_1tj5ulb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                      <AvatarImage className="rounded-full" alt="Nick Bold" src="/avatars/002cb8910d.jpg"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </div>
              <div className="border-border/60 border-l flex flex-1 flex-col grow md:hidden overflow-hidden">
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_R_6j5ulb_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                      <nav className="flex flex-col py-1">
                        <div>
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                            {"Overview"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Dashboard"}
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/today">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Today"}
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/activity-feed">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                  <path d="M3 3v5h5"></path>
                                  <path d="M12 7v5l4 2"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Activity Feed"}
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" href="/quick-stats" aria-current="page">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Quick Stats"}
                              </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                            {"Goals"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/attainment">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-gauge" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m12 14 4-4"></path>
                                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Attainment"}
                              </span>
                            </a>
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/quota-plan">
                              <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                                <svg className="lucide lucide-pencil-ruler" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                                  <path d="m8 6 2-2"></path>
                                  <path d="m18 16 2-2"></path>
                                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Quota Plan"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </ScrollArea>
                </div>
                <div className="shrink-0">
                  <div className="group pt-3 px-3" data-active="true">
                    <div className="relative size-full">
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-8%", "--scale": "0.94", "--opacity": "0.8"}} aria-hidden="true" inert="">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div className="invisible">
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"Approvals route by deal size"}
                              </span>
                              <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                                {"Discount requests above your threshold now reach a second approver automatically."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2F39c253fb06.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2F39c253fb06.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/approvals">
                                    {"Read more"}
                                  </a>
                                  <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                    {"Dismiss"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-4%", "--scale": "0.97", "--opacity": "0.9"}} aria-hidden="true" inert="">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"Quote builder is live"}
                              </span>
                              <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                                {"Build a quote from your product catalogue, apply a discount, and send it for signature."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/quotes/new">
                                    {"Read more"}
                                  </a>
                                  <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                    {"Dismiss"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-0%", "--scale": "1", "--opacity": "1"}} aria-hidden="false">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"Forecast rolls up by territory"}
                              </span>
                              <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                                {"Commit, best case, and pipeline now total per territory alongside the quarter view."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/forecast">
                                    {"Read more"}
                                  </a>
                                  <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                    {"Dismiss"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invisible pointer-events-none" aria-hidden="true">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"Title"}
                              </span>
                              <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                                {"Description"}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full"></div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/">
                                    {"Read more"}
                                  </a>
                                  <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                    {"Dismiss"}
                                  </button>
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
            </div>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <button className="-translate-y-1/2 cursor-pointer fixed focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 hidden items-center lg:flex outline-none pl-2 top-1/2 w-7 z-30" type="button" aria-label="Collapse inner sidebar" style={{left: "calc(var(--sidebar-width-inner) + var(--sidebar-width))"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm overflow-hidden shadow-none">
        <header className="bg-background border-b border-border flex gap-2 h-(--header-height) items-center md:ps-0 pe-2 ps-2.5 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-1.5 items-center md:flex-none">
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
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="gap-0.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_r5f5ulb_" aria-expanded="false">
                    <span className="inline-flex items-center justify-center leading-none shrink-0 size-3">
                      <svg className="block size-full" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="ws-acme" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="35%" stopColor="#7c3aed"></stop>
                            <stop offset="70%" stopColor="#a21caf"></stop>
                            <stop offset="100%" stopColor="#db2777"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx="14" cy="14" r="14" fill="url(#ws-acme)"></circle>
                      </svg>
                    </span>
                    <span className="leading-none sm:not-sr-only sr-only">
                      {"Acme Inc"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 text-xs" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_v5f5ulb_" aria-expanded="false">
                    <span className="hidden sm:inline">
                      {"CRM"}
                    </span>
                    <span className="sm:hidden">
                      {"CRM"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center md:-translate-x-1/2 md:absolute md:left-1/2 ml-auto">
            <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border border-r-0 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search scope" aria-haspopup="menu" id="base-ui-_R_6pf5ulb_" aria-expanded="false">
                {"All"}
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
              <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/30 outline-none rounded-4xl w-80" type="button" aria-label="Search">
                <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-7 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 pointer-events-none rounded-l-none rounded-lg transition-colors" role="group">
                  <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                    <svg className="lucide lucide-search opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </InputGroupAddon>
                  <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex flex-1 font-normal gap-2 items-center ps-1.5 text-muted-foreground text-sm">
                    {"Search..."}
                  </span>
                  <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end" aria-hidden="true">
                    <KbdGroup className="gap-1">
                      <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background min-w-5 px-1 rounded-sm text-muted-foreground text-xs w-fit">
                        {"⌘"}
                      </Kbd>
                      <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background min-w-5 px-1 rounded-sm text-muted-foreground text-xs w-fit">
                        {"K"}
                      </Kbd>
                    </KbdGroup>
                  </InputGroupAddon>
                </InputGroup>
              </button>
            </ButtonGroup>
          </div>
          <div className="flex gap-1 items-center ml-auto">
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:px-0 max-sm:size-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6tf5ulb_" aria-expanded="false">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="hidden sm:inline">
                {"Create"}
              </span>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_rdf5ulb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <DialogHeader className="gap-2 sr-only">
          <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_bef5ulb_">
            {"Search"}
          </DialogTitle>
          <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_jef5ulb_">
            {"Search your workspace content."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r duration-300 ease-in-out hidden md:flex overflow-hidden relative shrink-0 transition-[width] w-(--sidebar-width-inner)" aria-label="Home navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
              <div className="grow max-h-full min-h-0">
                <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_R_ln5ulb_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <nav className="flex flex-col py-1">
                      <div>
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                          {"Overview"}
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Dashboard"}
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/today">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Today"}
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/activity-feed">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                <path d="M3 3v5h5"></path>
                                <path d="M12 7v5l4 2"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Activity Feed"}
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" href="/quick-stats" aria-current="page">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Quick Stats"}
                            </span>
                          </a>
                        </div>
                      </div>
                      <div>
                        <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-foreground/70 uppercase">
                          {"Goals"}
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/attainment">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-gauge" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m12 14 4-4"></path>
                                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Attainment"}
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/quota-plan">
                            <span className="[&_svg]:size-4 opacity-100 shrink-0 size-4">
                              <svg className="lucide lucide-pencil-ruler" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                                <path d="m8 6 2-2"></path>
                                <path d="m18 16 2-2"></path>
                                <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              {"Quota Plan"}
                            </span>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </ScrollArea>
              </div>
              <div className="shrink-0">
                <div className="group pt-3 px-3" data-active="true">
                  <div className="relative size-full">
                    <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-8%", "--scale": "0.94", "--opacity": "0.8"}} aria-hidden="true" inert="">
                      <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                        <div className="invisible">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium line-clamp-1 text-foreground">
                              {"Approvals route by deal size"}
                            </span>
                            <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                              {"Discount requests above your threshold now reach a second approver automatically."}
                            </p>
                          </div>
                          <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                            <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2F39c253fb06.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2F39c253fb06.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2F39c253fb06.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                          </div>
                          <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                            <div className="min-h-0">
                              <div className="flex items-center justify-between pt-3 text-xs">
                                <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/approvals">
                                  {"Read more"}
                                </a>
                                <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                  {"Dismiss"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-4%", "--scale": "0.97", "--opacity": "0.9"}} aria-hidden="true" inert="">
                      <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                        <div>
                          <div className="flex flex-col gap-1">
                            <span className="font-medium line-clamp-1 text-foreground">
                              {"Quote builder is live"}
                            </span>
                            <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                              {"Build a quote from your product catalogue, apply a discount, and send it for signature."}
                            </p>
                          </div>
                          <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                            <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2F4232d01ca9.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                          </div>
                          <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                            <div className="min-h-0">
                              <div className="flex items-center justify-between pt-3 text-xs">
                                <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/quotes/new">
                                  {"Read more"}
                                </a>
                                <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                  {"Dismiss"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-0%", "--scale": "1", "--opacity": "1"}} aria-hidden="false">
                      <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                        <div>
                          <div className="flex flex-col gap-1">
                            <span className="font-medium line-clamp-1 text-foreground">
                              {"Forecast rolls up by territory"}
                            </span>
                            <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                              {"Commit, best case, and pipeline now total per territory alongside the quarter view."}
                            </p>
                          </div>
                          <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                            <img className="object-center object-cover" alt="" draggable="false" loading="lazy" decoding="async" data-nimg="fill" style={{position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0", color: "transparent"}} sizes="(max-width: 767px) 100vw, 320px" srcSet="/_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=640&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 640w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=750&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 750w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=828&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 828w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1080&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1080w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1200&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1200w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=1920&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 1920w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=2048&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 2048w, /_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH 3840w" src="/_next/image?url=%2Favatars%2Fb448b5e86c.jpg&w=3840&q=75&dpl=dpl_3uBwtipA3i8ZniUAQXEcQMohSHaH" />
                          </div>
                          <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                            <div className="min-h-0">
                              <div className="flex items-center justify-between pt-3 text-xs">
                                <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/forecast">
                                  {"Read more"}
                                </a>
                                <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                  {"Dismiss"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invisible pointer-events-none" aria-hidden="true">
                      <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                        <div>
                          <div className="flex flex-col gap-1">
                            <span className="font-medium line-clamp-1 text-foreground">
                              {"Title"}
                            </span>
                            <p className="h-10 leading-normal line-clamp-2 text-muted-foreground">
                              {"Description"}
                            </p>
                          </div>
                          <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full"></div>
                          <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                            <div className="min-h-0">
                              <div className="flex items-center justify-between pt-3 text-xs">
                                <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/">
                                  {"Read more"}
                                </a>
                                <button className="duration-75 hover:text-foreground hover:underline text-muted-foreground transition-colors" type="button">
                                  {"Dismiss"}
                                </button>
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
            <div className="absolute cursor-col-resize flex group/resize inset-y-0 justify-end right-0 touch-none w-2 z-20" role="separator" aria-orientation="vertical" aria-label="Resize sidebar">
              <span className="bg-transparent group-hover/resize:bg-ring/50 h-full transition-colors w-px" aria-hidden="true"></span>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="max-w-7xl mx-auto w-full">
              <header className="flex gap-2 items-center justify-between min-h-9 shrink-0 w-full" aria-label="Page header">
                <Breadcrumb className="min-w-0" aria-label="breadcrumb">
                  <BreadcrumbList className="flex-nowrap gap-1.5 text-muted-foreground text-sm">
                    <BreadcrumbItem className="gap-1 hidden md:inline-flex">
                      <BreadcrumbLink className="hover:text-foreground transition-colors" href="/">
                        {"Home"}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden md:flex" role="presentation" aria-hidden="true">
                      <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="gap-1 hidden md:inline-flex">
                      <span>
                        {"CRM"}
                      </span>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden md:flex" role="presentation" aria-hidden="true">
                      <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="gap-1 min-w-0">
                      <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                        {"Quick Stats"}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className="flex gap-2 items-center shrink-0">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_r6n5ulb_" aria-expanded="false">
                    <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span className="hidden sm:block">
                      {"Jun 22 to Jul 12, 2026"}
                    </span>
                    <span className="sm:hidden">
                      {"Jun 22"}
                    </span>
                    <svg className="lucide lucide-chevron-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                    <svg className="lucide lucide-download size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                    {"Export"}
                  </Button>
                </div>
              </header>
            </div>
            <div className="@container flex flex-col gap-5 max-w-7xl mx-auto text-foreground w-full">
              <h1 className="sr-only">
                {"Quick stats"}
              </h1>
              <section className="@3xl:flex-row @3xl:items-stretch flex flex-col gap-5 min-w-0" aria-label="Pipeline by source and stage">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] max-w-[29rem] w-full">
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col p-5!">
                    <Tabs className="flex-1 flex-col gap-5" data-orientation="horizontal" activationDirection="none">
                      <div className="flex flex-wrap gap-3 items-center justify-between">
                        <div className="flex gap-0.5 items-center min-w-0">
                          <h2 className="font-medium text-sm">
                            {"Pipeline by Source"}
                          </h2>
                          <Tooltip>
                          <TooltipTrigger className="cursor-help focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:text-foreground inline-flex items-center outline-none rounded-full text-muted-foreground" type="button" aria-label="About Pipeline by Source" id="base-ui-_r_1s_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                        <TabsList className="@sm:w-auto data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1t_">
                            {"Week"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1u_" compositeItemActive="" aria-controls="base-ui-_r_21_">
                            {"Month"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1v_">
                            {"Year"}
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      <TabsContent className="flex flex-col mt-0 text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_21_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_1u_">
                        <div className="flex flex-1 flex-col gap-5">
                          <div className="flex gap-8 items-start">
                            <div className="flex flex-col gap-1">
                              <span className="font-medium text-[11px] text-muted-foreground uppercase">
                                {"Pipeline created"}
                              </span>
                              <span className="font-semibold tabular-nums text-2xl text-foreground">
                                {"$3.1M"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium text-[11px] text-muted-foreground uppercase">
                                {"Deals"}
                              </span>
                              <span className="font-semibold tabular-nums text-2xl text-foreground">
                                {"36"}
                              </span>
                            </div>
                          </div>
                          <div className="bg-muted flex gap-0.5 h-2.5 items-center overflow-hidden rounded-full w-full" aria-hidden="true">
                            <span className="h-full rounded-full" title="Inbound: 47%" style={{width: "47%", backgroundColor: "oklch(0.76 0.161 80.1)"}}></span>
                            <span className="h-full rounded-full" title="Partner: 25%" style={{width: "25%", backgroundColor: "oklch(0.6 0.145 181.2)"}}></span>
                            <span className="h-full rounded-full" title="Outbound: 23%" style={{width: "23%", backgroundColor: "oklch(0.66 0.19 42.8)"}}></span>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 justify-between">
                            <div className="bg-muted/30 border border-border/50 flex gap-3 items-center justify-between px-3 py-2.5 rounded-lg">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "oklch(0.76 0.161 80.1)"}}></span>
                                <div className="min-w-0">
                                  <p className="font-medium text-foreground text-sm truncate">
                                    {"Inbound"}
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {"18 deals · $81K avg"}
                                  </p>
                                </div>
                              </div>
                              <div className="shrink-0 text-end">
                                <p className="font-semibold tabular-nums text-foreground text-sm">
                                  {"$1.46M"}
                                </p>
                                <p className="tabular-nums text-muted-foreground text-xs">
                                  {"47%"}
                                </p>
                              </div>
                            </div>
                            <div className="bg-muted/30 border border-border/50 flex gap-3 items-center justify-between px-3 py-2.5 rounded-lg">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "oklch(0.6 0.145 181.2)"}}></span>
                                <div className="min-w-0">
                                  <p className="font-medium text-foreground text-sm truncate">
                                    {"Partner"}
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {"9 deals · $86K avg"}
                                  </p>
                                </div>
                              </div>
                              <div className="shrink-0 text-end">
                                <p className="font-semibold tabular-nums text-foreground text-sm">
                                  {"$775K"}
                                </p>
                                <p className="tabular-nums text-muted-foreground text-xs">
                                  {"25%"}
                                </p>
                              </div>
                            </div>
                            <div className="bg-muted/30 border border-border/50 flex gap-3 items-center justify-between px-3 py-2.5 rounded-lg">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="rounded-full shrink-0 size-2" aria-hidden="true" style={{backgroundColor: "oklch(0.66 0.19 42.8)"}}></span>
                                <div className="min-w-0">
                                  <p className="font-medium text-foreground text-sm truncate">
                                    {"Outbound"}
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {"9 deals · $79K avg"}
                                  </p>
                                </div>
                              </div>
                              <div className="shrink-0 text-end">
                                <p className="font-semibold tabular-nums text-foreground text-sm">
                                  {"$713K"}
                                </p>
                                <p className="tabular-nums text-muted-foreground text-xs">
                                  {"23%"}
                                </p>
                              </div>
                            </div>
                            <p className="px-0.5 text-[11px] text-muted-foreground">
                              {"The remaining 5% came from sources we don't track separately."}
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </FramePanel>
                </Frame>
                <div className="flex flex-1 min-w-0">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] min-h-full overflow-hidden w-full">
                    <header className="flex flex-row gap-3 items-start justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="min-w-0">
                        <div className="flex gap-1.5 items-center">
                          <div className="font-semibold text-sm">
                            {"Deals by Stage"}
                          </div>
                          <svg className="lucide lucide-circle-question-mark size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {"Open deals by pipeline stage"}
                        </div>
                      </div>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:text-primary-foreground/70 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 hover:bg-primary/90 min-w-28 pl-2.5 pr-2 py-2 rounded-lg select-none shrink-0 text-primary-foreground text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_r_23_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Stage metric">
                        <SelectValue className="flex flex-1 text-left">
                          {"Deals"}
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_23_-hidden-input" tabIndex="-1" aria-hidden="true" value="deals" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                      <div className="px-4 py-4 space-y-3">
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-blue-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "100%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"New Lead"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-blue-400 font-semibold justify-self-end tabular-nums text-blue-600 text-end text-xs">
                            {"9"}
                          </span>
                        </div>
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-violet-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "89%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Qualified"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-violet-400 font-semibold justify-self-end tabular-nums text-end text-violet-600 text-xs">
                            {"8"}
                          </span>
                        </div>
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-amber-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "67%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Discovery"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-amber-400 font-semibold justify-self-end tabular-nums text-amber-600 text-end text-xs">
                            {"6"}
                          </span>
                        </div>
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-emerald-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "56%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Proposal"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-emerald-400 font-semibold justify-self-end tabular-nums text-emerald-600 text-end text-xs">
                            {"5"}
                          </span>
                        </div>
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-rose-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "44%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-rose-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Negotiation"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-rose-400 font-semibold justify-self-end tabular-nums text-end text-rose-600 text-xs">
                            {"4"}
                          </span>
                        </div>
                        <div className="gap-3 grid grid-cols-[minmax(0,1fr)_3.5rem] items-center min-w-0">
                          <div className="bg-muted h-8 min-w-0 overflow-hidden relative rounded-full">
                            <div className="absolute bg-cyan-500 inset-y-0 opacity-20 rounded-full start-0" aria-hidden="true" style={{width: "44%"}}></div>
                            <span className="flex font-medium gap-2 h-full items-center min-w-0 px-3 relative text-xs z-10">
                              <span className="bg-cyan-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Closing"}
                              </span>
                            </span>
                          </div>
                          <span className="dark:text-cyan-400 font-semibold justify-self-end tabular-nums text-cyan-600 text-end text-xs">
                            {"4"}
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
              </section>
              <section aria-label="Time by rep">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] w-full">
                  <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-px">
                      <div className="font-semibold text-balance text-sm">
                        {"Time by Rep"}
                      </div>
                      <div className="text-muted-foreground text-pretty text-xs">
                        {"Weekly hours logged against accounts"}
                      </div>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] sm:w-auto text-[0.8rem] text-primary-foreground w-full" type="button" tabIndex="0">
                      {"New log"}
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] bg-card p-0! shadow-none!">
                    <div className="flex flex-wrap gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-wrap gap-2 items-center">
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_r_26_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            {"People"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_26_-hidden-input" tabIndex="-1" aria-hidden="true" value="everyone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_r_29_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            {"Tracked time"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_29_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_r_2c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            {"Client time"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_2c_-hidden-input" tabIndex="-1" aria-hidden="true" value="any" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                      <div className="flex flex-wrap gap-2 items-center justify-end">
                        <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Previous week">
                            <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m15 18-6-6 6-6"></path>
                            </svg>
                          </Button>
                          <Popover>
                          <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-between outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 tabular-nums text-[0.8rem] transition-all w-[168px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_2g_" aria-haspopup="dialog" aria-expanded="false">
                            <span className="truncate">
                              {"Jul 13 - 19"}
                            </span>
                            <svg className="lucide lucide-calendar text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M8 2v4"></path>
                              <path d="M16 2v4"></path>
                              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                              <path d="M3 10h18"></path>
                            </svg>
                          </PopoverTrigger>
                          </Popover>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Next week">
                            <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridProvider>
                      <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_2h_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "179px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                            <DataGridProvider>
                            <DataGridTableViewport>
                              <DataGridProvider>
                              <DataGridTable>
                                <colgroup>
                                  <col style={{width: "240px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "112px"}} />
                                  <col style={{width: "120px"}} />
                                </colgroup>
                                <thead>
                                  <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 ps-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "240px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                        {"People"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Mon, Jul 13"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Tue, Jul 14"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Wed, Jul 15"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Thu, Jul 16"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Fri, Jul 17"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Sat, Jul 18"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                        {"Sun, Jul 19"}
                                      </div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-end text-foreground" scope="col" style={{width: "120px"}}>
                                      <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-end text-secondary-foreground/80 w-full">
                                        {"Total"}
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <DataGridProvider>
                                <DataGridTableBody>
                                  <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="mira-stone">
                                    <td className="align-middle border-e ps-(--frame-panel-px) px-2 py-1.5">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="Mira Stone" src="/avatars/4c0e4bd47b.jpg"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <div className="flex flex-col leading-tight min-w-0">
                                          <div className="font-medium text-foreground text-sm truncate">
                                            {"Mira Stone"}
                                          </div>
                                          <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Sales manager">
                                            {"Sales manager"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jul 13: 6h logged as client. Brightwave Media proposal walkthrough" id="base-ui-_r_2j_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jul 14: 5h 30m logged as client. Orbit Software kickoff planning" id="base-ui-_r_2l_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jul 15: 4h 30m logged as internal. Forecast call" id="base-ui-_r_2n_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"4h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-sky-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Internal"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jul 16: 6h 30m logged as client. Summit Retail Group pricing" id="base-ui-_r_2p_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jul 17: 5h logged as client. Deal desk review" id="base-ui-_r_2r_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jul 18: No weekend hours were logged for this day." id="base-ui-_r_2t_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jul 19: No weekend hours were logged for this day." id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e pe-(--frame-panel-px) px-2 py-1.5 text-end">
                                      <div className="flex flex-col gap-1 items-end text-end">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"27h 30m"}
                                        </span>
                                        <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                          <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                          </svg>
                                          {"86%"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="leo-grant">
                                    <td className="align-middle border-e ps-(--frame-panel-px) px-2 py-1.5">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="Leo Grant" src="/avatars/32cc0568ba.jpg"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <div className="flex flex-col leading-tight min-w-0">
                                          <div className="font-medium text-foreground text-sm truncate">
                                            {"Leo Grant"}
                                          </div>
                                          <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Account executive">
                                            {"Account executive"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jul 13: 7h 30m logged as client. Cobalt Logistics renewal review" id="base-ui-_r_31_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"7h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jul 14: 6h 30m logged as client. Vera Capital terms" id="base-ui-_r_33_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jul 15: 7h logged as client. Northwind Traders demo" id="base-ui-_r_35_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"7h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jul 16: 6h logged as client. Quote revisions" id="base-ui-_r_37_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jul 17: 6h 30m logged as client. Late-stage deal pushes" id="base-ui-_r_39_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jul 18: No weekend hours were logged for this day." id="base-ui-_r_3b_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jul 19: No weekend hours were logged for this day." id="base-ui-_r_3d_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e pe-(--frame-panel-px) px-2 py-1.5 text-end">
                                      <div className="flex flex-col gap-1 items-end text-end">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"33h 30m"}
                                        </span>
                                        <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                          <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                          </svg>
                                          {"99%"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="nora-vale">
                                    <td className="align-middle border-e ps-(--frame-panel-px) px-2 py-1.5">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="Nora Vale" src="/avatars/7caf20fe22.jpg"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <div className="flex flex-col leading-tight min-w-0">
                                          <div className="font-medium text-foreground text-sm truncate">
                                            {"Nora Vale"}
                                          </div>
                                          <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Account executive">
                                            {"Account executive"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jul 13: 6h 30m logged as client. Helio Manufacturing redlines" id="base-ui-_r_3f_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jul 14: 6h logged as client. Pioneer Robotics demo" id="base-ui-_r_3h_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jul 15: 5h logged as client. Keystone Transit intro" id="base-ui-_r_3j_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jul 16: 5h 30m logged as client. Redline turnaround" id="base-ui-_r_3l_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jul 17: 4h logged as internal. Deal desk" id="base-ui-_r_3n_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"4h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-sky-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Internal"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jul 18: No weekend hours were logged for this day." id="base-ui-_r_3p_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jul 19: No weekend hours were logged for this day." id="base-ui-_r_3r_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e pe-(--frame-panel-px) px-2 py-1.5 text-end">
                                      <div className="flex flex-col gap-1 items-end text-end">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"27h"}
                                        </span>
                                        <span className="gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                          <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 17h6v-6"></path>
                                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                          </svg>
                                          {"79%"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="sana-qureshi">
                                    <td className="align-middle border-e ps-(--frame-panel-px) px-2 py-1.5">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="Sana Qureshi" src="/avatars/3a9131cbe0.jpg"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <div className="flex flex-col leading-tight min-w-0">
                                          <div className="font-medium text-foreground text-sm truncate">
                                            {"Sana Qureshi"}
                                          </div>
                                          <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Account executive">
                                            {"Account executive"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jul 13: 8h logged as client. Cobalt Logistics uplift negotiation" id="base-ui-_r_3t_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"8h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jul 14: 7h 30m logged as client. CFO deck for Cobalt Logistics" id="base-ui-_r_3v_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"7h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jul 15: 7h logged as client. Contoso Freight proposal" id="base-ui-_r_41_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"7h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jul 16: 7h logged as client. Renewal desk review" id="base-ui-_r_43_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"7h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jul 17: 6h 30m logged as client. Board-meeting prep support" id="base-ui-_r_45_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"6h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jul 18: No weekend hours were logged for this day." id="base-ui-_r_47_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jul 19: No weekend hours were logged for this day." id="base-ui-_r_49_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e pe-(--frame-panel-px) px-2 py-1.5 text-end">
                                      <div className="flex flex-col gap-1 items-end text-end">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"36h"}
                                        </span>
                                        <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                          <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 7h6v6"></path>
                                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                          </svg>
                                          {"106%"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="priya-shah">
                                    <td className="align-middle border-e ps-(--frame-panel-px) px-2 py-1.5">
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="rounded-full" alt="Priya Shah" src="/avatars/ed87deabec.jpg"></AvatarImage>
                                          </Avatar>
                                        </div>
                                        <div className="flex flex-col leading-tight min-w-0">
                                          <div className="font-medium text-foreground text-sm truncate">
                                            {"Priya Shah"}
                                          </div>
                                          <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Sales development">
                                            {"Sales development"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Jul 13: 5h 30m logged as client. Outbound sequences" id="base-ui-_r_4b_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Jul 14: 5h logged as client. Luma Hospitality qualification" id="base-ui-_r_4d_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Jul 15: 4h 30m logged as internal. Lead routing rules" id="base-ui-_r_4f_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"4h 30m"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-sky-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Internal"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Jul 16: 5h logged as client. Atlas Education intro" id="base-ui-_r_4h_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"5h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Jul 17: 4h logged as client. Handoff notes to AEs" id="base-ui-_r_4j_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                            {"4h"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Client"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Jul 18: No weekend hours were logged for this day." id="base-ui-_r_4l_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e px-2 py-1.5">
                                      <Tooltip>
                                      <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Jul 19: No weekend hours were logged for this day." id="base-ui-_r_4n_" baseUiTooltipTrigger="">
                                        <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                          <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                            {"-"}
                                          </span>
                                          <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                            <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                          </span>
                                          <span className="leading-none text-[11px] text-muted-foreground">
                                            {"Off"}
                                          </span>
                                        </div>
                                      </TooltipTrigger>
                                      </Tooltip>
                                    </td>
                                    <td className="align-middle border-e pe-(--frame-panel-px) px-2 py-1.5 text-end">
                                      <div className="flex flex-col gap-1 items-end text-end">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"24h"}
                                        </span>
                                        <span className="gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                          <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 17h6v-6"></path>
                                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                          </svg>
                                          {"80%"}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </DataGridTableBody>
                                </DataGridProvider>
                              </DataGridTable>
                              </DataGridProvider>
                            </DataGridTableViewport>
                            </DataGridProvider>
                          </div>
                        </div>
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_2h_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "812.3208041958042px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                      </DataGridProvider>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <DataGridProvider>
                      <DataGridPagination>
                        <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                          <div className="text-muted-foreground text-sm">
                            {"Rows per page"}
                          </div>
                          <Select>
                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_4o_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue className="flex flex-1 text-left">
                              {"5"}
                            </SelectValue>
                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_4o_-hidden-input" tabIndex="-1" aria-hidden="true" value="5" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            {"1 - 5 of 9"}
                          </div>
                          <div className="flex items-center order-1 space-x-1">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
                              <span className="sr-only">
                                {"Go to previous page"}
                              </span>
                              <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m15 18-6-6 6-6"></path>
                              </svg>
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-accent-foreground text-sm" type="button" tabIndex="0">
                              {"1"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                              {"2"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" tabIndex="0">
                              <span className="sr-only">
                                {"Go to next page"}
                              </span>
                              <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </DataGridPagination>
                      </DataGridProvider>
                    </footer>
                  </FramePanel>
                </Frame>
              </section>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
