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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div hidden></div>
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
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" aria-current="page" href="/">
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
                            <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/quick-stats">
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
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" aria-current="page" href="/">
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
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all w-full whitespace-nowrap" href="/quick-stats">
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
                        {"Dashboard"}
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
                {"Home overview"}
              </h1>
              <section aria-label="Overview metrics">
                <div className="gap-5 grid lg:grid-cols-4 sm:grid-cols-2">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)]">
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col gap-3 justify-between min-h-28">
                      <div className="flex gap-2 items-start justify-between">
                        <div className="flex gap-3 items-start min-w-0">
                          <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="min-w-0 pt-0.5">
                            <span className="block font-medium text-sm truncate">
                              {"Open Pipeline"}
                            </span>
                            <span className="block text-muted-foreground text-xs truncate">
                              {"11.8% above plan"}
                            </span>
                          </div>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          {"+11.8%"}
                        </Badge>
                      </div>
                      <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                        <div className="min-w-0">
                          <div className="font-semibold tabular-nums text-xl tracking-tight">
                            {"$4.82M"}
                          </div>
                        </div>
                        <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "66.66666666666666%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "72.22222222222221%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "69.44444444444444%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "80.55555555555556%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "84.72222222222221%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "76.38888888888889%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "90.27777777777779%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "100%"}}></span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)]">
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col gap-3 justify-between min-h-28">
                      <div className="flex gap-2 items-start justify-between">
                        <div className="flex gap-3 items-start min-w-0">
                          <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="lucide lucide-kanban size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 3v14"></path>
                                <path d="M12 3v8"></path>
                                <path d="M19 3v18"></path>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="min-w-0 pt-0.5">
                            <span className="block font-medium text-sm truncate">
                              {"Open Deals"}
                            </span>
                            <span className="block text-muted-foreground text-xs truncate">
                              {"84% of quota target"}
                            </span>
                          </div>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                          {"+9.4%"}
                        </Badge>
                      </div>
                      <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                        <div className="min-w-0">
                          <div className="font-semibold tabular-nums text-xl tracking-tight">
                            {"36"}
                          </div>
                        </div>
                        <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "55.35714285714286%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "62.5%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "75%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "69.64285714285714%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "78.57142857142857%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "92.85714285714286%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "87.5%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="info" style={{height: "100%"}}></span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)]">
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col gap-3 justify-between min-h-28">
                      <div className="flex gap-2 items-start justify-between">
                        <div className="flex gap-3 items-start min-w-0">
                          <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="min-w-0 pt-0.5">
                            <span className="block font-medium text-sm truncate">
                              {"New Contacts"}
                            </span>
                            <span className="block text-muted-foreground text-xs truncate">
                              {"42 via referral"}
                            </span>
                          </div>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          {"+18.6%"}
                        </Badge>
                      </div>
                      <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                        <div className="min-w-0">
                          <div className="font-semibold tabular-nums text-xl tracking-tight">
                            {"128"}
                          </div>
                        </div>
                        <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "38.297872340425535%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "55.319148936170215%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "51.06382978723404%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "65.95744680851064%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "74.46808510638297%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "80.85106382978722%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "93.61702127659575%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="success" style={{height: "100%"}}></span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)]">
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col gap-3 justify-between min-h-28">
                      <div className="flex gap-2 items-start justify-between">
                        <div className="flex gap-3 items-start min-w-0">
                          <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="min-w-0 pt-0.5">
                            <span className="block font-medium text-sm truncate">
                              {"Deals At Risk"}
                            </span>
                            <span className="block text-muted-foreground text-xs truncate">
                              {"$3.96M exposure"}
                            </span>
                          </div>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"-2.1%"}
                        </Badge>
                      </div>
                      <div className="gap-2 grid grid-cols-[1fr_auto] items-end">
                        <div className="min-w-0">
                          <div className="font-semibold tabular-nums text-xl tracking-tight">
                            {"17"}
                          </div>
                        </div>
                        <div className="flex gap-0.5 h-10 items-end" aria-hidden="true">
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "100%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "95.45454545454545%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "93.18181818181817%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "88.63636363636364%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "90.9090909090909%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "84.0909090909091%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "86.36363636363636%"}}></span>
                          <span className="bg-primary/20 data-[tone=destructive]:bg-destructive/30 data-[tone=info]:bg-info/30 data-[tone=success]:bg-success/30 data-[tone=warning]:bg-warning/30 rounded-full w-1" data-tone="warning" style={{height: "81.81818181818183%"}}></span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
              </section>
              <section className="@5xl:grid-cols-2 gap-5 grid items-stretch min-w-0" aria-label="Performance and capacity">
                <div className="flex min-w-0">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] h-full w-full">
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                      <div className="flex gap-3 items-start justify-between mb-6">
                        <div className="flex flex-col gap-px">
                          <h3 className="font-semibold text-base">
                            {"Performance"}
                          </h3>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Select>
                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 h-7! pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-28" type="button" tabIndex="0" id="base-ui-_R_9aqnqn5ulb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue className="flex flex-1 text-left">
                              {"Quarter"}
                            </SelectValue>
                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_R_9aqnqn5ulb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="quarter" />
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div className="gap-2 grid grid-cols-3">
                          <div className="flex flex-col items-start justify-start">
                            <div className="font-bold text-foreground text-xl">
                              {"$2.4M"}
                            </div>
                            <div className="font-medium mb-1 text-muted-foreground text-xs">
                              {"Closed Won"}
                            </div>
                            <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"+11.8%"}
                            </span>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <div className="font-bold text-foreground text-xl">
                              {"26.4%"}
                            </div>
                            <div className="font-medium mb-1 text-muted-foreground text-xs">
                              {"Win Rate"}
                            </div>
                            <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-emerald-500 text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"+1.2 pts"}
                            </span>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <div className="font-bold text-foreground text-xl">
                              {"48 days"}
                            </div>
                            <div className="font-medium mb-1 text-muted-foreground text-xs">
                              {"Sales Cycle"}
                            </div>
                            <span className="[&_svg]:h-3 [&_svg]:w-3 flex font-semibold gap-0.5 items-center text-destructive text-xs">
                              <svg className="lucide lucide-trending-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 17h6v-6"></path>
                                <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                              </svg>
                              {"+9.4%"}
                            </span>
                          </div>
                        </div>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="font-medium text-foreground text-sm">
                              {"Pipeline Progress"}
                            </span>
                            <span className="font-semibold text-foreground text-xs">
                              {"76"}
                              {"%"}
                            </span>
                          </div>
                          <Progress className="**:data-[slot=progress-track]:h-1 h-1!" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar">
                            <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                              <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0", height: "inherit", width: "76%"}}></ProgressIndicator>
                            </ProgressTrack>
                            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}}>
                              {"x"}
                            </span>
                          </Progress>
                        </div>
                        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div>
                          <div className="font-medium mb-2.5 text-foreground text-sm">
                            {"Recent Activity"}
                          </div>
                          <ul className="space-y-3">
                            <li className="flex gap-2.5 items-center justify-between text-sm">
                              <span className="flex gap-2 items-center min-w-0">
                                <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-emerald-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-foreground text-xs truncate">
                                  {"Helio Manufacturing returned redlines"}
                                </span>
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                {"Cleared"}
                              </Badge>
                            </li>
                            <li className="flex gap-2.5 items-center justify-between text-sm">
                              <span className="flex gap-2 items-center min-w-0">
                                <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-sky-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-foreground text-xs truncate">
                                  {"Quartz Payments booked a security review"}
                                </span>
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                {"Review"}
                              </Badge>
                            </li>
                            <li className="flex gap-2.5 items-center justify-between text-sm">
                              <span className="flex gap-2 items-center min-w-0">
                                <svg className="h-3.5 lucide lucide-circle-check shrink-0 text-amber-500 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-foreground text-xs truncate">
                                  {"Vera Capital lost its exec sponsor"}
                                </span>
                              </span>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Watch"}
                              </Badge>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </FramePanel>
                    <footer className="flex flex-row gap-2.5 items-center p-2! px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                        {"Schedule"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground" type="button" tabIndex="0">
                        {"Full Report"}
                      </Button>
                    </footer>
                  </Frame>
                </div>
                <div className="flex min-w-0">
                  <div className="@container auto-rows-fr gap-3 grid h-full min-w-0 w-full">
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] h-full w-full">
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)]">
                        <Tabs className="gap-4 h-full min-w-0 w-full" data-orientation="horizontal" activationDirection="none">
                          <div className="flex flex-wrap gap-3 items-center justify-between">
                            <div className="flex gap-1.5 items-center min-w-0">
                              <h2 className="font-medium text-sm">
                                {"Quota Coverage"}
                              </h2>
                              <Tooltip>
                              <TooltipTrigger className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-full shrink-0 text-muted-foreground/70 transition-colors" type="button" aria-label="Quota Coverage info" id="base-ui-_R_r5cqnqn5ulb_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                            <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_pcqnqn5ulb_" compositeItemActive="" aria-controls="base-ui-_R_6cqnqn5ulb_">
                                {"Week"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_19cqnqn5ulb_">
                                {"Month"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_1pcqnqn5ulb_">
                                {"Year"}
                              </TabsTrigger>
                            </TabsList>
                          </div>
                          <TabsContent className="mt-0 text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_R_6cqnqn5ulb_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_R_pcqnqn5ulb_">
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-wrap gap-x-2 items-baseline">
                                <span className="font-medium text-[26px]">
                                  {"86%"}
                                </span>
                                <span className="font-medium text-success text-xs">
                                  {"+5.8%"}
                                </span>
                                <span className="text-muted-foreground/70 text-xs">
                                  {"vs quota plan"}
                                </span>
                              </div>
                              <div className="flex h-7 items-stretch justify-between w-full" aria-label="Week quota coverage is 86%" role="img">
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-success h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                                <span className="bg-muted h-full rounded-full shrink-0 w-1" aria-hidden="true"></span>
                              </div>
                              <div className="flex flex-wrap gap-3 items-center justify-between mt-1">
                                <p>
                                  <span className="text-muted-foreground/70 text-xs">
                                    {"In play:"}
                                  </span>
                                  <span className="font-medium text-sm">
                                    {"$3.84M"}
                                  </span>
                                </p>
                                <div className="flex gap-2 items-center">
                                  <AvatarGroup>
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                      <AvatarImage className="rounded-full" alt="Mira Stone" src="/avatars/4c0e4bd47b.jpg"></AvatarImage>
                                    </Avatar>
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                      <AvatarImage className="rounded-full" alt="Leo Grant" src="/avatars/32cc0568ba.jpg"></AvatarImage>
                                    </Avatar>
                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                      <AvatarImage className="rounded-full" alt="Sana Qureshi" src="/avatars/3a9131cbe0.jpg"></AvatarImage>
                                    </Avatar>
                                  </AvatarGroup>
                                  <span className="text-muted-foreground text-xs whitespace-nowrap">
                                    {"9"}
                                    {"Members"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </FramePanel>
                    </Frame>
                    <style dangerouslySetInnerHTML={{ __html: "\n/*\n * Only the TOP inset animates (100% -> 0) to reveal the donut upward. The other\n * three sides are pushed OUTSIDE the box (-999px) instead of 0: an \"inset(0 0 0\n * 0)\" resting state clips descendants to the 132px donut, which chopped the\n * right end off the hover tooltip (it extends ~50px past the donut into the\n * legend). Extending the clip region sideways keeps the reveal identical while\n * letting the tooltip show in full.\n */\n@keyframes dashboard-1-flow-reveal-up {\n  from {\n    clip-path: inset(100% -999px -999px -999px);\n    opacity: 0.75;\n  }\n  to {\n    clip-path: inset(0 -999px -999px -999px);\n    opacity: 1;\n  }\n}\n\n.dashboard-1-flow-reveal-up {\n  animation: dashboard-1-flow-reveal-up 680ms cubic-bezier(0.22, 1, 0.36, 1) both;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dashboard-1-flow-reveal-up {\n    animation: none;\n    clip-path: none;\n    opacity: 1;\n  }\n}\n" }} />
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] h-full w-full">
                      <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] pb-3.5! pe-5! ps-3.5! pt-5!">
                        <Tabs className="gap-6" data-orientation="horizontal" activationDirection="none">
                          <div className="flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex gap-0.5 items-center min-w-0 ps-1.5">
                              <h2 className="font-medium text-sm">
                                {"Pipeline Sourced"}
                              </h2>
                              <Tooltip>
                              <TooltipTrigger className="-my-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground/70 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Pipeline Sourced" id="base-ui-_R_3cmkqnqn5ulb_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-info text-sm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-icon="inline-start">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 16v-4"></path>
                                  <path d="M12 8h.01"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </div>
                            <TabsList className="@sm:w-auto data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_36kqnqn5ulb_" compositeItemActive="" aria-controls="base-ui-_R_qkqnqn5ulb_">
                                {"Week"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_56kqnqn5ulb_">
                                {"Month"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_76kqnqn5ulb_">
                                {"Year"}
                              </TabsTrigger>
                            </TabsList>
                          </div>
                          <TabsContent className="mt-0 text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_R_qkqnqn5ulb_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_R_36kqnqn5ulb_">
                            <div className="@sm:grid-cols-[8.25rem_minmax(0,1fr)] @sm:items-center gap-6 grid">
                              <div className="dashboard-1-flow-reveal-up relative shrink-0 size-[8.25rem]">
                                <ChartContainer>
                                <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square flex justify-center size-[8.25rem] text-xs" data-chart="chart-_R_mqkqnqn5ulb_" aria-label="Pipeline Sourced: $842K total for Week">
                                  <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_mqkqnqn5ulb_] {\n  --color-inbound: oklch(0.62 0.19 149);\n  --color-outbound: oklch(0.58 0.18 257);\n  --color-partner: oklch(0.72 0.16 78);\n  --color-reserve: oklch(0.7 0.04 260);\n}\n\n\n.dark [data-chart=chart-_R_mqkqnqn5ulb_] {\n  --color-inbound: oklch(0.62 0.19 149);\n  --color-outbound: oklch(0.58 0.18 257);\n  --color-partner: oklch(0.72 0.16 78);\n  --color-reserve: oklch(0.7 0.04 260);\n}\n" }} />
                                  <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                                    <div style={{width: "0", height: "0", overflow: "visible"}}>
                                      <div className="recharts-wrapper" width="132" height="132" style={{position: "relative", cursor: "default", width: "132px", height: "132px"}}>
                                        <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px", zIndex: "10"}}></div>
                                        <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="132" height="132" viewBox="0 0 132 132" style={{width: "100%", height: "100%", display: "block"}}>
                                          <title></title>
                                          <desc></desc>
                                          <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                          <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                          <defs>
                                            <clippath id="recharts1-clip">
                                              <rect x="2" y="2" height="128" width="128"></rect>
                                            </clippath>
                                          </defs>
                                          <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                            <g className="recharts-layer recharts-pie" tabIndex="0">
                                              <g className="recharts-layer">
                                                <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                                  <g className="recharts-layer recharts-shape">
                                                    <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-inbound)" name="Inbound" color="oklch(0.62 0.19 149)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_0_" d={"M 28.1246,20.8618\n    A3,3,0,0,1,28.6137,16.5403\n    A62,62,0,0,1,117.1537,101.0328\n    A3,3,0,0,1,112.8598,101.7234\n  L105.6915,96.2587\n      A3,3,0,0,1,105.0196,92.2005\n      A47,47,0,0,0,38.0037,28.2481\n      A3,3,0,0,1,33.9185,27.7668Z"}></path>
                                                  </g>
                                                </g>
                                                <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                                  <g className="recharts-layer recharts-shape">
                                                    <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-outbound)" name="Outbound" color="oklch(0.58 0.18 257)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_0_" d={"M 112.2292,102.5358\n    A3,3,0,0,1,112.6251,106.8669\n    A62,62,0,0,1,37.5778,121.1015\n    A3,3,0,0,1,36.3602,116.9263\n  L40.8943,109.1359\n      A3,3,0,0,1,44.8379,107.9662\n      A47,47,0,0,0,101.0593,97.3024\n      A3,3,0,0,1,105.1573,96.9468Z"}></path>
                                                  </g>
                                                </g>
                                                <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                                  <g className="recharts-layer recharts-shape">
                                                    <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-partner)" name="Partner" color="oklch(0.72 0.16 78)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_0_" d={"M 35.4759,116.4012\n    A3,3,0,0,1,31.2273,117.3309\n    A62,62,0,0,1,10.8985,37.5778\n    A3,3,0,0,1,15.0737,36.3602\n  L22.8641,40.8943\n      A3,3,0,0,1,24.0338,44.8379\n      A47,47,0,0,0,39.2845,104.6689\n      A3,3,0,0,1,40.1453,108.6912Z"}></path>
                                                  </g>
                                                </g>
                                                <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                                  <g className="recharts-layer recharts-shape">
                                                    <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-reserve)" name="Reserve" color="var(--muted)" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_0_" d={"M 15.5988,35.4759\n    A3,3,0,0,1,14.6691,31.2273\n    A62,62,0,0,1,22.9977,21.3368\n    A3,3,0,0,1,27.3426,21.5297\n  L33.2561,28.3325\n      A3,3,0,0,1,33.0925,32.4426\n      A47,47,0,0,0,27.3311,39.2845\n      A3,3,0,0,1,23.3088,40.1453Z"}></path>
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
                                          <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                </ChartContainer>
                                <div className="absolute flex inset-0 items-center justify-center pointer-events-none" aria-hidden="true">
                                  <div className="bg-background/90 border border-border/70 border-dashed flex flex-col items-center justify-center px-2 rounded-full size-[5.25rem] text-center">
                                    <span className="max-w-full text-muted-foreground/70 text-xs truncate">
                                      {"Sourced"}
                                    </span>
                                    <span className="font-semibold mt-0.5 tabular-nums text-sm">
                                      {"$842K"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <ul className="flex flex-1 flex-col min-w-0">
                                <li>
                                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.62 0.19 149)"}}></span>
                                      <span className="font-medium text-sm">
                                        {"Inbound"}
                                      </span>
                                    </div>
                                    <span className="font-medium text-sm">
                                      {"$396K"}
                                    </span>
                                    <span className="text-end text-muted-foreground/70 text-xs w-8">
                                      {"47"}
                                      {"%"}
                                    </span>
                                  </div>
                                  <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                </li>
                                <li>
                                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.58 0.18 257)"}}></span>
                                      <span className="font-medium text-sm">
                                        {"Outbound"}
                                      </span>
                                    </div>
                                    <span className="font-medium text-sm">
                                      {"$194K"}
                                    </span>
                                    <span className="text-end text-muted-foreground/70 text-xs w-8">
                                      {"23"}
                                      {"%"}
                                    </span>
                                  </div>
                                  <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                </li>
                                <li>
                                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.72 0.16 78)"}}></span>
                                      <span className="font-medium text-sm">
                                        {"Partner"}
                                      </span>
                                    </div>
                                    <span className="font-medium text-sm">
                                      {"$210K"}
                                    </span>
                                    <span className="text-end text-muted-foreground/70 text-xs w-8">
                                      {"25"}
                                      {"%"}
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </FramePanel>
                    </Frame>
                  </div>
                </div>
              </section>
              <section aria-label="Team performance">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-panel-radius:calc(var(--frame-radius)_-_var(--frame-px)_-_1px)] [--frame-radius:var(--radius-xl)] h-full">
                  <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-px">
                      <div className="font-semibold text-sm">
                        {"Team Performance"}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {"Quota and open deals by rep"}
                      </div>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                      {"6"}
                      {"reps"}
                    </Badge>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                    <div className="overflow-x-auto">
                      <div className="overflow-x-auto relative w-full">
                        <Table className="caption-bottom text-sm w-full">
                          <TableHeader className="[&_tr]:border-b">
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 ps-(--frame-panel-header-px) px-2 text-foreground text-left whitespace-nowrap">
                                {"Rep"}
                              </TableHead>
                              <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left whitespace-nowrap">
                                {"Quota"}
                              </TableHead>
                              <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left whitespace-nowrap">
                                {"Response"}
                              </TableHead>
                              <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 hidden md:table-cell px-2 text-foreground text-left whitespace-nowrap">
                                {"Open Deals"}
                              </TableHead>
                              <TableHead className="[&:has([role=checkbox])]:pr-0 align-middle font-medium h-10 px-2 text-foreground text-left whitespace-nowrap">
                                {"Status"}
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="[&_tr:last-child]:border-0">
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Mira Stone" src="/avatars/4c0e4bd47b.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Mira Stone"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Enterprise AE"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"94"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Two deals in negotiation"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-success h-full rounded-full" style={{width: "94%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"6"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"2"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Stable"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Leo Grant" src="/avatars/32cc0568ba.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Leo Grant"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Strategic AE"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"81"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Close window tight"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-warning h-full rounded-full" style={{width: "81%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"3"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"5"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                  {"Watch"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Nora Vale" src="/avatars/7caf20fe22.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Nora Vale"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Commercial AE"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"72"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Sponsor churn risk"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-destructive h-full rounded-full" style={{width: "72%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"2"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"6"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Critical"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Theo Park" src="/avatars/de1af8efc4.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Theo Park"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Sales Engineer"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"89"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Ramp on track"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-success h-full rounded-full" style={{width: "89%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"5"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"3"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Stable"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Sana Qureshi" src="/avatars/3a9131cbe0.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Sana Qureshi"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Renewals Lead"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"78"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Awaiting renewal signature"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-violet-500 h-full rounded-full" style={{width: "78%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"4"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"4"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                  {"Pending"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-b data-[state=selected]:bg-muted hover:bg-muted/50 transition-colors">
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 ps-(--frame-panel-px) whitespace-nowrap">
                                <div className="flex gap-3 items-center min-w-0">
                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                    <AvatarImage className="rounded-full" alt="Alex Johnson" src="/avatars/bd26d6c2a5.jpg"></AvatarImage>
                                  </Avatar>
                                  <div className="min-w-0">
                                    <div className="font-medium truncate">
                                      {"Alex Johnson"}
                                    </div>
                                    <div className="text-muted-foreground text-xs truncate">
                                      {"Customer Success"}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <div className="flex flex-col gap-1.5 min-w-24">
                                  <div className="flex gap-2 items-center justify-between">
                                    <span className="font-medium tabular-nums">
                                      {"91"}
                                      {"%"}
                                    </span>
                                    <span className="hidden sm:inline text-muted-foreground text-xs">
                                      {"Expansion locked"}
                                    </span>
                                  </div>
                                  <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                                    <div className="bg-success h-full rounded-full" style={{width: "91%"}}></div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 tabular-nums whitespace-nowrap">
                                {"7"}
                                {"h"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle hidden md:table-cell p-2 tabular-nums whitespace-nowrap">
                                {"1"}
                              </TableCell>
                              <TableCell className="[&:has([role=checkbox])]:pr-0 align-middle p-2 whitespace-nowrap">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Stable"}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
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
