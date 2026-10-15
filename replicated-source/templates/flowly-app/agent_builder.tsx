import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  EmptyDescription,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
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
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { ToggleGroup } from "@/registry/bases/base/ui/toggle-group"
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
              <nav className="flex flex-col h-full" aria-label="Main">
                <SidebarHeader className="gap-2 in-data-[mobile=true]:hidden items-center justify-center p-2 py-3" sidebar="header">
                  <Item className="[a]:hover:bg-primary bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" aria-label="Flowly home" variant="default" size="default" href="/dashboard">
                    <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                      <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_f6cpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Dashboard" href="/dashboard">
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_facpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflow Editor" href="/workflow-editor">
                            <svg className="lucide lucide-spline-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                              <path d="M5 17A12 12 0 0 1 17 5"></path>
                              <circle cx="19" cy="5" r="2"></circle>
                              <circle cx="5" cy="19" r="2"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fecpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="AI Agent Builder" href="/agent-builder" data-active="" aria-current="page">
                            <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 8V4H8"></path>
                              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                              <path d="M2 14h2"></path>
                              <path d="M20 14h2"></path>
                              <path d="M15 13v2"></path>
                              <path d="M9 13v2"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_ficpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflows" href="/workflows">
                            <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                              <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                              <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fmcpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Agents" href="/agents">
                            <svg className="lucide lucide-brain-circuit" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                              <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                              <path d="M12 13h4"></path>
                              <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                              <path d="M12 8h8"></path>
                              <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                              <circle cx="16" cy="13" r=".5"></circle>
                              <circle cx="18" cy="3" r=".5"></circle>
                              <circle cx="20" cy="21" r=".5"></circle>
                              <circle cx="20" cy="8" r=".5"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fqcpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Settings" href="/settings">
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
                  <Popover>
                  <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications, 4 unread" baseUiClickTrigger="" id="base-ui-_R_7ncpflb_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                    <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                  </PopoverTrigger>
                  </Popover>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open account menu for Nick Bold" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_qrcpflb_">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                      <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </nav>
            </div>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 hidden items-center lg:flex motion-reduce:transition-none outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse inner sidebar" style={{left: "calc(var(--sidebar-width-inner) + var(--sidebar-width))"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-none overflow-hidden shadow-none">
        <header className="bg-background border-b border-border flex gap-2 h-(--header-height) items-center pe-2 ps-3 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-2 items-center md:flex-none min-w-0">
            <SidebarProvider>
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <span className="-ml-2 md:hidden shrink-0">
              <Item className="[a]:hover:bg-primary bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" aria-label="Flowly home" variant="default" size="default" href="/dashboard">
                <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                  <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
            </span>
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1.5 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1 min-w-0">
                  <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                    {"AI Agent Builder"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <div className="flex gap-2 items-center">
              <Popover>
              <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center max-md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_3p_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </PopoverTrigger>
              </Popover>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  {"Ask AI"}
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  {"Add step"}
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  {"Run test"}
                </span>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Agent actions" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_4t_">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r hidden md:flex overflow-hidden shrink-0 w-(--sidebar-width-inner)" aria-label="Step library">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
              <div className="flex flex-col grow min-h-0">
                <div className="border-b border-border p-3 shrink-0 space-y-0.5">
                  <h2 className="font-medium text-foreground text-sm">
                    {"Step Library"}
                  </h2>
                  <p className="leading-snug text-muted-foreground text-xs">
                    {"Drag a step onto the canvas, or click it to add one."}
                  </p>
                </div>
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full scroll-fade-y" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_60_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "421px"}}>
                      <div className="flex flex-col py-1">
                        <p id="_r_5v_" hidden>
                          {"Adds this step under the selected step, or at the end of the run. Drag it onto a step or a connector to put it there."}
                        </p>
                        <div role="group" aria-labelledby="_r_61_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_61_">
                            {"Models"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                                  <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Claude"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="dark:hidden" viewBox="0 0 611 611" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M252.794 108.802C289.191 99.0484 326.265 110.305 351.148 135.135C385.113 126.072 422.85 134.862 449.492 161.505C476.136 188.149 484.925 225.888 475.862 259.85V259.854C500.696 284.735 511.95 321.81 502.198 358.207C492.447 394.602 464.161 421.084 430.215 430.217C421.083 464.162 394.603 492.448 358.206 502.199C321.812 511.951 284.734 500.693 259.852 475.864C225.887 484.927 188.15 476.137 161.507 449.495C134.864 422.851 126.073 385.111 135.136 351.149C110.304 326.266 99.0496 289.192 108.801 252.795C118.552 216.4 146.84 189.918 180.784 180.785C189.917 146.841 216.396 118.553 252.794 108.802ZM374.292 407.145C374.292 411.271 372.092 415.086 368.517 417.148L283.723 466.102C302.487 480.585 327.555 486.459 352.217 479.852C386.997 470.532 410.068 439.312 410.555 405.006V317.717C410.555 315.08 409.125 312.621 406.843 311.303L374.292 292.509V407.145ZM251.868 415.897C248.296 417.959 243.893 417.959 240.317 415.897L155.526 366.942C152.366 390.436 159.811 415.08 177.866 433.136H177.863C203.325 458.594 241.896 462.962 271.85 446.232L347.449 402.586C349.735 401.268 351.148 398.8 351.148 396.163V358.579L251.868 415.897ZM368.602 220.628C366.319 219.309 363.474 219.318 361.191 220.637L328.641 239.431L427.921 296.749C431.496 298.811 433.697 302.627 433.697 306.752V404.661C455.622 395.654 473.244 376.881 479.851 352.218C489.169 317.442 473.668 281.85 444.201 264.274L368.602 220.628ZM177.303 206.34C155.377 215.348 137.756 234.122 131.148 258.783C121.832 293.561 137.331 329.153 166.799 346.727L242.398 390.373C244.68 391.692 247.525 391.684 249.807 390.366L282.357 371.572L183.078 314.253C179.504 312.189 177.303 308.375 177.303 304.251V206.34ZM259.849 279.145V331.858L305.5 358.213L351.15 331.858V279.145L305.5 252.789L259.849 279.145ZM327.276 144.9C308.512 130.418 283.445 124.543 258.782 131.15C224.002 140.471 200.931 171.691 200.445 205.995V293.286C200.445 295.923 201.875 298.381 204.158 299.7L236.707 318.493V203.856C236.707 199.731 238.909 195.916 242.483 193.853L327.276 144.9ZM433.137 177.867C407.675 152.407 369.103 148.038 339.149 164.769L263.55 208.415C261.265 209.734 259.852 212.202 259.852 214.838V252.423L359.132 195.105C362.703 193.041 367.108 193.041 370.682 195.105L455.473 244.06C458.635 220.567 451.189 195.922 433.135 177.867H433.137Z" fill="black"></path>
                                </svg>
                                <svg className="dark:block hidden" viewBox="0 0 611 611" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M252.794 108.802C289.191 99.0484 326.265 110.305 351.148 135.135C385.113 126.072 422.85 134.862 449.492 161.505C476.136 188.149 484.925 225.888 475.862 259.85V259.854C500.696 284.735 511.95 321.81 502.198 358.207C492.447 394.602 464.161 421.084 430.215 430.217C421.083 464.162 394.603 492.448 358.206 502.199C321.812 511.951 284.734 500.693 259.852 475.864C225.887 484.927 188.15 476.137 161.507 449.495C134.864 422.851 126.073 385.111 135.136 351.149C110.304 326.266 99.0496 289.192 108.801 252.795C118.552 216.4 146.84 189.918 180.784 180.785C189.917 146.841 216.396 118.553 252.794 108.802ZM374.292 407.145C374.292 411.271 372.092 415.086 368.517 417.148L283.723 466.102C302.487 480.585 327.555 486.459 352.217 479.852C386.997 470.532 410.068 439.312 410.555 405.006V317.717C410.555 315.08 409.125 312.621 406.843 311.303L374.292 292.509V407.145ZM251.868 415.897C248.296 417.959 243.893 417.959 240.317 415.897L155.526 366.942C152.366 390.436 159.811 415.08 177.866 433.136H177.863C203.325 458.594 241.896 462.962 271.85 446.232L347.449 402.586C349.735 401.268 351.148 398.8 351.148 396.163V358.579L251.868 415.897ZM368.602 220.628C366.319 219.309 363.474 219.318 361.191 220.637L328.641 239.431L427.921 296.749C431.496 298.811 433.697 302.627 433.697 306.752V404.661C455.622 395.654 473.244 376.881 479.851 352.218C489.169 317.442 473.668 281.85 444.201 264.274L368.602 220.628ZM177.303 206.34C155.377 215.348 137.756 234.122 131.148 258.783C121.832 293.561 137.331 329.153 166.799 346.727L242.398 390.373C244.68 391.692 247.525 391.684 249.807 390.366L282.357 371.572L183.078 314.253C179.504 312.189 177.303 308.375 177.303 304.251V206.34ZM259.849 279.145V331.858L305.5 358.213L351.15 331.858V279.145L305.5 252.789L259.849 279.145ZM327.276 144.9C308.512 130.418 283.445 124.543 258.782 131.15C224.002 140.471 200.931 171.691 200.445 205.995V293.286C200.445 295.923 201.875 298.381 204.158 299.7L236.707 318.493V203.856C236.707 199.731 238.909 195.916 242.483 193.853L327.276 144.9ZM433.137 177.867C407.675 152.407 369.103 148.038 339.149 164.769L263.55 208.415C261.265 209.734 259.852 212.202 259.852 214.838V252.423L359.132 195.105C362.703 193.041 367.108 193.041 370.682 195.105L455.473 244.06C458.635 220.567 451.189 195.922 433.135 177.867H433.137Z" fill="white"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"OpenAI"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 296 298" fill="none">
                                  <mask id="a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                    <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                  </mask>
                                  <g mask="url(#a)">
                                    <g filter="url(#b)">
                                      <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                    </g>
                                    <g filter="url(#c)">
                                      <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                    </g>
                                    <g filter="url(#d)">
                                      <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                    </g>
                                    <g filter="url(#e)">
                                      <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                    </g>
                                    <g filter="url(#f)">
                                      <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                    </g>
                                    <g filter="url(#g)">
                                      <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                    </g>
                                    <g filter="url(#h)">
                                      <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                    </g>
                                  </g>
                                  <defs>
                                    <filter id="b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                    </filter>
                                    <filter id="c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                    <filter id="h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                      <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                      <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                      <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                    </filter>
                                  </defs>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Gemini"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 233">
                                  <path d="M186.18182 0h46.54545v46.54545h-46.54545z"></path>
                                  <path fill="#F7D046" d="M209.45454 0h46.54545v46.54545h-46.54545z"></path>
                                  <path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"></path>
                                  <path fill="#F7D046" d="M23.27273 0h46.54545v46.54545H23.27273z"></path>
                                  <path fill="#F2A73B" d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"></path>
                                  <path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"></path>
                                  <path fill="#F2A73B" d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"></path>
                                  <path fill="#EE792F" d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"></path>
                                  <path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"></path>
                                  <path fill="#EB5829" d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"></path>
                                  <path fill="#EE792F" d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"></path>
                                  <path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"></path>
                                  <path fill="#EB5829" d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"></path>
                                  <path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"></path>
                                  <path fill="#EB5829" d="M23.27273 139.63636h46.54545v46.54545H23.27273z"></path>
                                  <path fill="#EA3326" d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Mistral"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div role="group" aria-labelledby="_r_62_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_62_">
                            {"Data"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                  <defs>
                                    <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                      <stop offset="0%" stopColor="#62F755"></stop>
                                      <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                    </lineargradient>
                                    <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                      <stop offset="0%" stopOpacity=".9"></stop>
                                      <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                  <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Neon"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg fill="none" viewBox="100 100 312 312">
                                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Stripe"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 109 113" fill="none">
                                  <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                                  <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                                  <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                  <defs>
                                    <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#249361"></stop>
                                      <stop offset="1" stopColor="#3ECF8E"></stop>
                                    </lineargradient>
                                    <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                      <stop></stop>
                                      <stop offset="1" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Supabase"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="dark:hidden" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                  <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                </svg>
                                <svg className="dark:block hidden" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                  <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"PlanetScale"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                                  <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                  <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                                  <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                                  <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                                  <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                                  <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                                  <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                                  <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                                  <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Redis"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 256 228">
                                  <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                                  <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                                  <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                                  <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                                  <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Google Drive"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div role="group" aria-labelledby="_r_63_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_63_">
                            {"Messages"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="dark:hidden" viewBox="0 0 1800 1800" fill="none">
                                  <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                                </svg>
                                <svg className="dark:block hidden" viewBox="0 0 1800 1800" fill="none">
                                  <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Resend"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 2447.6 2452.5">
                                  <g clipRule="evenodd" fillRule="evenodd">
                                    <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                    <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                    <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                    <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                  </g>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Slack"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 49.4 512 399.42">
                                  <g fill="none" fillRule="evenodd">
                                    <g fillRule="nonzero">
                                      <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path>
                                      <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path>
                                      <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path>
                                    </g>
                                    <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path>
                                    <path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path>
                                  </g>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Gmail"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                                  <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Discord"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg fill="none" viewBox="4 4 36 38">
                                  <path fill="url(#a)" d="M22 20h12a6 6 0 0 1 6 6v10a6 6 0 0 1-12 0V26a6 6 0 0 0-6-6Z"></path>
                                  <path fill="url(#b)" d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"></path>
                                  <path fill="url(#c)" fillOpacity=".7" d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"></path>
                                  <path fill="url(#d)" fillOpacity=".7" d="M8 24a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6H18c-5.523 0-10-4.477-10-10v-8Z"></path>
                                  <path fill="url(#e)" d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
                                  <path fill="url(#f)" fillOpacity=".46" d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
                                  <path fill="url(#g)" fillOpacity=".4" d="M33 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
                                  <path fill="url(#h)" d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                                  <path fill="url(#i)" fillOpacity=".6" d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                                  <path fill="url(#j)" fillOpacity=".5" d="M18 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                                  <rect width="16" height="16" x="4" y="23" fill="url(#k)" rx="3.25"></rect>
                                  <rect width="16" height="16" x="4" y="23" fill="url(#l)" fillOpacity=".7" rx="3.25"></rect>
                                  <path fill="#fff" d="M15.48 28.105h-2.448v7.466h-2.065v-7.466H8.52V26.43h6.96v1.676Z"></path>
                                  <defs>
                                    <radialgradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(13.4784 0 0 33.2694 39.797 22.174)" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#A98AFF"></stop>
                                      <stop offset=".14" stopColor="#8C75FF"></stop>
                                      <stop offset=".565" stopColor="#5F50E2"></stop>
                                      <stop offset=".9" stopColor="#3C2CB8"></stop>
                                    </radialgradient>
                                    <radialgradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(12.1875 30.39997 -30.74442 12.3256 8.812 16.4)" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#85C2FF"></stop>
                                      <stop offset=".69" stopColor="#7588FF"></stop>
                                      <stop offset="1" stopColor="#6459FE"></stop>
                                    </radialgradient>
                                    <radialgradient id="d" cx="0" cy="0" r="1" gradientTransform="rotate(113.326 8.093 17.645) scale(19.2186 15.4273)" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#BD96FF"></stop>
                                      <stop offset=".687" stopColor="#BD96FF" stopOpacity="0"></stop>
                                    </radialgradient>
                                    <radialgradient id="e" cx="0" cy="0" r="1" gradientTransform="matrix(0 -10 12.6216 0 33 11.571)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".268" stopColor="#6868F7"></stop>
                                      <stop offset="1" stopColor="#3923B1"></stop>
                                    </radialgradient>
                                    <radialgradient id="f" cx="0" cy="0" r="1" gradientTransform="matrix(5.47024 4.59847 -6.65117 7.91208 28.867 10.544)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".271" stopColor="#A1D3FF"></stop>
                                      <stop offset=".813" stopColor="#A1D3FF" stopOpacity="0"></stop>
                                    </radialgradient>
                                    <radialgradient id="g" cx="0" cy="0" r="1" gradientTransform="rotate(-41.658 32.118 -43.42) scale(8.51275 20.8824)" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#E3ACFD"></stop>
                                      <stop offset=".816" stopColor="#9FA2FF" stopOpacity="0"></stop>
                                    </radialgradient>
                                    <radialgradient id="h" cx="0" cy="0" r="1" gradientTransform="matrix(0 -12 15.146 0 18 8.286)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".268" stopColor="#8282FF"></stop>
                                      <stop offset="1" stopColor="#3923B1"></stop>
                                    </radialgradient>
                                    <radialgradient id="i" cx="0" cy="0" r="1" gradientTransform="rotate(40.052 -3.155 21.416) scale(8.57554 12.4035)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".271" stopColor="#A1D3FF"></stop>
                                      <stop offset=".813" stopColor="#A1D3FF" stopOpacity="0"></stop>
                                    </radialgradient>
                                    <radialgradient id="j" cx="0" cy="0" r="1" gradientTransform="rotate(-41.658 20.382 -26.516) scale(10.2153 25.0589)" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#E3ACFD"></stop>
                                      <stop offset=".816" stopColor="#9FA2FF" stopOpacity="0"></stop>
                                    </radialgradient>
                                    <radialgradient id="k" cx="0" cy="0" r="1" gradientTransform="rotate(45 -25.763 16.328) scale(22.6274)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".047" stopColor="#688EFF"></stop>
                                      <stop offset=".947" stopColor="#230F94"></stop>
                                    </radialgradient>
                                    <radialgradient id="l" cx="0" cy="0" r="1" gradientTransform="matrix(0 11.2 -13.0702 0 12 32.6)" gradientUnits="userSpaceOnUse">
                                      <stop offset=".571" stopColor="#6965F6" stopOpacity="0"></stop>
                                      <stop offset="1" stopColor="#8F8FFF"></stop>
                                    </radialgradient>
                                    <lineargradient id="c" x1="20.594" x2="20.594" y1="18" y2="42" gradientUnits="userSpaceOnUse">
                                      <stop offset=".801" stopColor="#6864F6" stopOpacity="0"></stop>
                                      <stop offset="1" stopColor="#5149DE"></stop>
                                    </lineargradient>
                                  </defs>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Microsoft Teams"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 64 64">
                                  <g transform="translate(0 .047) scale(.93704)" fill="#e31e26">
                                    <path d="M34.1 0C15.3 0 0 15.3 0 34.1s15.3 34.1 34.1 34.1C53 68.3 68.3 53 68.3 34.1S53 0 34.1 0zm0 59.3C20.3 59.3 9 48 9 34.1 9 20.3 20.3 9 34.1 9 48 9 59.3 20.3 59.3 34.1 59.3 48 48 59.3 34.1 59.3z"></path>
                                    <circle cx="42.6" cy="25.6" r="7.1"></circle>
                                    <circle cx="42.6" cy="42.6" r="7.1"></circle>
                                    <circle cx="25.6" cy="42.6" r="7.1"></circle>
                                    <circle cx="25.6" cy="25.6" r="7.1"></circle>
                                  </g>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Twilio"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                        <div role="group" aria-labelledby="_r_64_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_64_">
                            {"Tools"}
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg viewBox="0 0 64 64" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.43828 50.2095C5.81176 49.4456 5.94882 48.3212 6.71918 47.7027L14.0169 41.8433C14.6535 41.3322 15.5841 41.4476 16.1032 42.0777C21.06 48.0956 26.32 50.8815 32.142 50.8815C37.9238 50.8815 43.0403 48.135 47.7801 42.1839C48.2888 41.5452 49.2172 41.4131 49.8629 41.9129L57.2604 47.6377C58.0415 48.2422 58.1989 49.3637 57.5855 50.1379C50.5775 58.9839 41.9971 63.6446 32.142 63.6446C22.3156 63.6446 13.6586 59.013 6.43828 50.2095Z" fill="url(#paint0_linear_8_569)"></path>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M32.4953 17.1804C32.2202 16.9368 31.8067 16.9367 31.5314 17.1801L15.663 31.2116C15.0564 31.748 14.1285 31.6857 13.599 31.0731L7.40986 23.9122C6.88774 23.3082 6.95019 22.3961 7.54979 21.8688L31.0527 1.20062C31.6021 0.717503 32.4248 0.717611 32.9741 1.20088L56.4822 21.8847C57.0822 22.4125 57.1439 23.3256 56.6205 23.9294L50.4164 31.0866C49.8862 31.6982 48.9589 31.7594 48.353 31.2229L32.4953 17.1804Z" fill="url(#paint1_linear_8_569)"></path>
                                  <defs>
                                    <lineargradient id="paint0_linear_8_569" x1="5.3335" y1="32.1624" x2="58.6653" y2="32.1624" gradientUnits="userSpaceOnUse">
                                      <stop offset="0.225962" stopColor="#6647F0"></stop>
                                      <stop offset="0.793269" stopColor="#0091FF"></stop>
                                    </lineargradient>
                                    <lineargradient id="paint1_linear_8_569" x1="5.3335" y1="31.6447" x2="58.6653" y2="31.6447" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#FF02F0"></stop>
                                      <stop offset="0.778846" stopColor="#F76808"></stop>
                                    </lineargradient>
                                  </defs>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"ClickUp"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg fill="none" viewBox="0 0 100 100">
                                  <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Linear"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="dark:hidden" viewBox="0 0 1024 1024" fill="none">
                                  <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                </svg>
                                <svg className="dark:block hidden" viewBox="0 0 1024 1024" fill="none">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"GitHub"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 268">
                                  <path fill="#FFF" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"></path>
                                  <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Notion"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                  <path d="M2 12h20"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"HTTP Request"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                            <Button className="[&>span:first-child]:opacity-100 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_5v_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m16 18 6-6-6-6"></path>
                                  <path d="m8 6-6 6 6 6"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                {"Custom Code"}
                              </span>
                              <svg className="duration-150 ease-out group-focus-visible/button:opacity-60 group-hover/button:opacity-60 lucide lucide-grip-vertical ml-auto motion-reduce:transition-none opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_60_-scrollbar" aria-hidden="true" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                      <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                    </div>
                  </ScrollArea>
                </div>
                <div className="border-border border-t p-3 shrink-0">
                  <div className="**:data-[slot=progress-indicator]:bg-success space-y-1.5 text-success">
                    <div className="flex gap-1 items-center">
                      <span className="[&_svg]:size-4 shrink-0 size-4">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </span>
                      <p className="font-medium text-foreground text-xs truncate">
                        {"Last Test Run"}
                      </p>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Passed"}
                      </Badge>
                    </div>
                    <p className="leading-snug line-clamp-2 text-muted-foreground text-xs">
                      {"5 of 9 steps passed."}
                    </p>
                    <Progress className="py-0.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="56" aria-valuetext="56%" role="progressbar" aria-label="Steps passed: 56%">
                      <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                        <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "56%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="-m-4 flex flex-1 flex-col min-h-0">
              <div className="bg-background flex flex-1 flex-col min-h-0 w-full">
                <h1 className="sr-only">
                  {"Collections Agent"}
                </h1>
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  <div className="@container [--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:var(--border)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-muted/30 flex-1 min-h-0 min-w-0 relative">
                    <div className="data-[ready]:opacity-100 duration-200 ease-out light motion-reduce:transition-none opacity-0 react-flow transition-opacity" data-testid="rf__wrapper" role="application" data-ready="true" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
                      <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                        <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                          <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(56px, 32px) scale(1)"}}>
                            <div className="react-flow__edges">
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="overdue->ledger" data-testid="rf__edge-overdue->ledger" aria-label="Edge from overdue to ledger" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="overdue->ledger" d="M448.5 83.5L448.5 103.5L448.5 111.5L448.5 111.5L448.5 119.5L448.5 139.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 83.5L448.5 103.5L448.5 111.5L448.5 111.5L448.5 119.5L448.5 139.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="ledger->triage" data-testid="rf__edge-ledger->triage" aria-label="Edge from ledger to triage" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="ledger->triage" d="M448.5 226.5L448.5 246.5L448.5 254.5L448.5 254.5L448.5 262.5L448.5 282.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 226.5L448.5 246.5L448.5 254.5L448.5 254.5L448.5 262.5L448.5 282.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->charges" data-testid="rf__edge-triage->charges" aria-label="Edge from triage to charges" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="triage->charges" d="M448.5 369.5L448.5 389.5L 448.5,393.5Q 448.5,397.5 452.5,397.5L 764.5,397.5Q 768.5,397.5 768.5,401.5L768.5 405.5L768.5 425.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 369.5L448.5 389.5L 448.5,393.5Q 448.5,397.5 452.5,397.5L 764.5,397.5Q 768.5,397.5 768.5,401.5L768.5 405.5L768.5 425.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="charges->assign" data-testid="rf__edge-charges->assign" aria-label="Edge from charges to assign" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="charges->assign" d="M768.5 512.5L768.5 532.5L768.5 540.5L768.5 540.5L768.5 548.5L768.5 568.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M768.5 512.5L768.5 532.5L768.5 540.5L768.5 540.5L768.5 548.5L768.5 568.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->terms" data-testid="rf__edge-triage->terms" aria-label="Edge from triage to terms" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="triage->terms" d="M448.5 369.5L448.5 389.5L448.5 397.5L448.5 397.5L448.5 405.5L448.5 425.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 369.5L448.5 389.5L448.5 397.5L448.5 397.5L448.5 405.5L448.5 425.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="terms->confirm" data-testid="rf__edge-terms->confirm" aria-label="Edge from terms to confirm" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="terms->confirm" d="M448.5 512.5L448.5 532.5L448.5 540.5L448.5 540.5L448.5 548.5L448.5 568.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 512.5L448.5 532.5L448.5 540.5L448.5 540.5L448.5 548.5L448.5 568.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="triage->redact" data-testid="rf__edge-triage->redact" aria-label="Edge from triage to redact" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="triage->redact" d="M448.5 369.5L448.5 389.5L 448.5,393.5Q 448.5,397.5 444.5,397.5L 132.5,397.5Q 128.5,397.5 128.5,401.5L128.5 405.5L128.5 425.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M448.5 369.5L448.5 389.5L 448.5,393.5Q 448.5,397.5 444.5,397.5L 132.5,397.5Q 128.5,397.5 128.5,401.5L128.5 405.5L128.5 425.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-tree selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="redact->callback" data-testid="rf__edge-redact->callback" aria-label="Edge from redact to callback" aria-describedby="react-flow__edge-desc-1">
                                  <path className="in-data-drop-target:stroke-primary! react-flow__edge-path" id="redact->callback" d="M128.5 512.5L128.5 532.5L128.5 540.5L128.5 540.5L128.5 548.5L128.5 568.5" fill="none" style={{strokeWidth: "1"}}></path>
                                  <path className="react-flow__edge-interaction" d="M128.5 512.5L128.5 532.5L128.5 540.5L128.5 540.5L128.5 548.5L128.5 568.5" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                </g>
                              </svg>
                            </div>
                            <div className="react-flow__edgelabel-renderer">
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="overdue->ledger" style={{transform: "translate(-50%, -50%) translate(448.5px, 111.5px)"}}>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove this connection">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="ledger->triage" style={{transform: "translate(-50%, -50%) translate(448.5px, 254.5px)"}}>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove this connection">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="triage->charges" style={{transform: "translate(-50%, -50%) translate(768.5px, 397.5px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 in-data-drop-target:opacity-0 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-opacity">
                                  {"Disputed"}
                                </Badge>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the Disputed path">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove the connection on the Disputed path">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="charges->assign" style={{transform: "translate(-50%, -50%) translate(768.5px, 540.5px)"}}>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove this connection">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="triage->terms" style={{transform: "translate(-50%, -50%) translate(448.5px, 397.5px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 in-data-drop-target:opacity-0 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-opacity">
                                  {"Promised"}
                                </Badge>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the Promised path">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove the connection on the Promised path">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="terms->confirm" style={{transform: "translate(-50%, -50%) translate(448.5px, 540.5px)"}}>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove this connection">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="triage->redact" style={{transform: "translate(-50%, -50%) translate(128.5px, 397.5px)"}}>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-(--xy-edge-stroke) dark:bg-input/32 data-revealed:opacity-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 in-data-drop-target:opacity-0 min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-opacity">
                                  {"No reply"}
                                </Badge>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step on the No reply path">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove the connection on the No reply path">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                              <div className="absolute flex group/edge-controls items-center justify-center nodrag nopan pointer-events-auto" data-edge-id="redact->callback" style={{transform: "translate(-50%, -50%) translate(128.5px, 540.5px)"}}>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-(--xy-edge-stroke) focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg in-data-drop-target:opacity-100 motion-reduce:transition-none opacity-0 rounded-full size-6 text-sm transition-opacity" type="button" tabIndex="0" aria-label="Add a step here">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-3 absolute active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background data-revealed:opacity-100 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-hover/edge-controls:opacity-100 hover:bg-background hover:text-destructive in-data-[slot=button-group]:rounded-lg motion-reduce:transition-none opacity-0 rounded-full size-6 text-muted-foreground text-sm transition-opacity translate-x-7" type="button" tabIndex="0" aria-label="Remove this connection">
                                  <svg className="lucide lucide-unlink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"></path>
                                    <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"></path>
                                    <line x1="8" x2="8" y1="2" y2="5"></line>
                                    <line x1="2" x2="5" y1="8" y2="8"></line>
                                    <line x1="16" x2="16" y1="19" y2="22"></line>
                                    <line x1="19" x2="22" y1="16" y2="16"></line>
                                  </svg>
                                </Button>
                              </div>
                            </div>
                            <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="overdue" data-testid="rf__node-overdue" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 0px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg fill="none" viewBox="100 100 312 312">
                                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Stripe"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Invoice 3 days overdue"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_68_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Passed"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"inv_9412"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"EUR 4,180"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="overdue" data-handlepos="bottom" data-id="1-overdue-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="ledger" data-testid="rf__node-ledger" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 143px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                          <defs>
                                            <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                              <stop offset="0%" stopColor="#62F755"></stop>
                                              <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                            </lineargradient>
                                            <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                              <stop offset="0%" stopOpacity=".9"></stop>
                                              <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                            </lineargradient>
                                          </defs>
                                          <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                          <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                          <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                          <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Neon"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Runs query_db on invoices"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Neon" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_6d_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Passed"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"1 row"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"42ms"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="ledger" data-handlepos="top" data-id="1-ledger-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="ledger" data-handlepos="bottom" data-id="1-ledger-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="triage" data-testid="rf__node-triage" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 286px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                                          <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Claude Sonnet 5"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Triages the account"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Claude Sonnet 5" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_6i_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Passed"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"1,842 tokens"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"USD 0.031"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="triage" data-handlepos="top" data-id="1-triage-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="triage" data-handlepos="bottom" data-id="1-triage-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="charges" data-testid="rf__node-charges" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(640px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg fill="none" viewBox="100 100 312 312">
                                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Stripe"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Pulls the dispute evidence"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_6n_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Skipped"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"Branch not taken"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="charges" data-handlepos="top" data-id="1-charges-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="charges" data-handlepos="bottom" data-id="1-charges-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="assign" data-testid="rf__node-assign" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(640px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg viewBox="0 0 64 64" fill="none">
                                          <path fillRule="evenodd" clipRule="evenodd" d="M6.43828 50.2095C5.81176 49.4456 5.94882 48.3212 6.71918 47.7027L14.0169 41.8433C14.6535 41.3322 15.5841 41.4476 16.1032 42.0777C21.06 48.0956 26.32 50.8815 32.142 50.8815C37.9238 50.8815 43.0403 48.135 47.7801 42.1839C48.2888 41.5452 49.2172 41.4131 49.8629 41.9129L57.2604 47.6377C58.0415 48.2422 58.1989 49.3637 57.5855 50.1379C50.5775 58.9839 41.9971 63.6446 32.142 63.6446C22.3156 63.6446 13.6586 59.013 6.43828 50.2095Z" fill="url(#paint0_linear_8_569)"></path>
                                          <path fillRule="evenodd" clipRule="evenodd" d="M32.4953 17.1804C32.2202 16.9368 31.8067 16.9367 31.5314 17.1801L15.663 31.2116C15.0564 31.748 14.1285 31.6857 13.599 31.0731L7.40986 23.9122C6.88774 23.3082 6.95019 22.3961 7.54979 21.8688L31.0527 1.20062C31.6021 0.717503 32.4248 0.717611 32.9741 1.20088L56.4822 21.8847C57.0822 22.4125 57.1439 23.3256 56.6205 23.9294L50.4164 31.0866C49.8862 31.6982 48.9589 31.7594 48.353 31.2229L32.4953 17.1804Z" fill="url(#paint1_linear_8_569)"></path>
                                          <defs>
                                            <lineargradient id="paint0_linear_8_569" x1="5.3335" y1="32.1624" x2="58.6653" y2="32.1624" gradientUnits="userSpaceOnUse">
                                              <stop offset="0.225962" stopColor="#6647F0"></stop>
                                              <stop offset="0.793269" stopColor="#0091FF"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear_8_569" x1="5.3335" y1="31.6447" x2="58.6653" y2="31.6447" gradientUnits="userSpaceOnUse">
                                              <stop stopColor="#FF02F0"></stop>
                                              <stop offset="0.778846" stopColor="#F76808"></stop>
                                            </lineargradient>
                                          </defs>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"ClickUp"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Assigns Hanna Berg"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for ClickUp" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_6s_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Skipped"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"Upstream skipped"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="assign" data-handlepos="top" data-id="1-assign-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="assign" data-handlepos="bottom" data-id="1-assign-null-source"></div>
                                  </div>
                                  <div className="absolute flex flex-col items-center left-0 pointer-events-none top-full w-full">
                                    <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                                    <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background focus-visible:border-(--xy-edge-stroke) focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg nodrag nopan pointer-events-auto rounded-full size-6 text-sm" type="button" tabIndex="0" aria-label="Add a step after ClickUp">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="terms" data-testid="rf__node-terms" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg fill="none" viewBox="100 100 312 312">
                                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Stripe"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Offers a payment plan"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Stripe" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_71_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Passed"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"3 instalments"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"EUR 1,393"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="terms" data-handlepos="top" data-id="1-terms-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="terms" data-handlepos="bottom" data-id="1-terms-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="confirm" data-testid="rf__node-confirm" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(320px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg className="dark:hidden" viewBox="0 0 1800 1800" fill="none">
                                          <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                                        </svg>
                                        <svg className="dark:block hidden" viewBox="0 0 1800 1800" fill="none">
                                          <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Resend"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Emails the terms to Maren"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Resend" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_76_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-success">
                                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="m9 12 2 2 4-4"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Passed"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"Delivered"}
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"1 email"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="confirm" data-handlepos="top" data-id="1-confirm-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="confirm" data-handlepos="bottom" data-id="1-confirm-null-source"></div>
                                  </div>
                                  <div className="absolute flex flex-col items-center left-0 pointer-events-none top-full w-full">
                                    <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                                    <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background focus-visible:border-(--xy-edge-stroke) focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg nodrag nopan pointer-events-auto rounded-full size-6 text-sm" type="button" tabIndex="0" aria-label="Add a step after Resend">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="redact" data-testid="rf__node-redact" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 429px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m16 18 6-6-6-6"></path>
                                          <path d="m8 6-6 6 6 6"></path>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"PII Guardrail"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Scans outbound text"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for PII Guardrail" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_7b_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Skipped"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"Branch not taken"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="redact" data-handlepos="top" data-id="1-redact-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="redact" data-handlepos="bottom" data-id="1-redact-null-source"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-agent selectable" data-id="callback" data-testid="rf__node-callback" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 572px)", pointerEvents: "all", visibility: "visible"}}>
                                <div className="relative w-64">
                                  <div className="relative w-full">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border data-link-target:hover:border-primary data-link-target:hover:ring-[3px] data-link-target:hover:ring-primary/20 data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 in-data-drop-target:border-primary in-data-drop-target:ring-[3px] in-data-drop-target:ring-primary/20 overflow-hidden p-2 rounded-lg text-sm" variant="outline" size="xs">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                        <svg viewBox="0 0 2447.6 2452.5">
                                          <g clipRule="evenodd" fillRule="evenodd">
                                            <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                            <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                            <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                            <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                          </g>
                                        </svg>
                                      </IconTile>
                                      <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                        <ItemTitle className="font-semibold gap-2 leading-4 text-[13px] underline-offset-4 w-full">
                                          <span className="truncate">
                                            {"Slack"}
                                          </span>
                                        </ItemTitle>
                                        <ItemDescription className="group-data-[size=xs]/item:text-[13px] leading-4 line-clamp-1 text-[13px] text-left text-muted-foreground">
                                          {"Posts to #collections"}
                                        </ItemDescription>
                                      </ItemContent>
                                      <ItemActions className="gap-2">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="-me-1 [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:not-hover:text-muted-foreground aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center nodrag nopan outline-none rounded-[min(var(--radius-md),10px)] select-none shrink-0 size-6 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Slack" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_7g_">
                                          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </ItemActions>
                                      <ItemFooter className="-mb-2 -mx-2 bg-muted/50 border-t gap-1.5 grow justify-start px-2 py-1.5">
                                        <span className="[&_svg]:size-3.5 shrink-0 text-muted-foreground">
                                          <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14"></path>
                                          </svg>
                                        </span>
                                        <span className="sr-only">
                                          {"Skipped"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"Upstream skipped"}
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-top size-2! target transition-[scale]" data-nodeid="callback" data-handlepos="top" data-id="1-callback-null-target"></div>
                                    <div className="[&.connectingto]:scale-150 after:-inset-2 after:absolute after:content-[''] connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-150 motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-bottom size-2! source transition-[scale]" data-nodeid="callback" data-handlepos="bottom" data-id="1-callback-null-source"></div>
                                  </div>
                                  <div className="absolute flex flex-col items-center left-0 pointer-events-none top-full w-full">
                                    <span className="bg-(--xy-edge-stroke) h-5 relative" aria-hidden="true" style={{left: "0.5px", width: "1px"}}></span>
                                    <Button className="[&_svg:not([class*='size-'])]:size-3 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-(--xy-edge-stroke) dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-background dark:border-(--xy-edge-stroke) dark:hover:bg-background focus-visible:border-(--xy-edge-stroke) focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background hover:text-foreground in-data-[slot=button-group]:rounded-lg nodrag nopan pointer-events-auto rounded-full size-6 text-sm" type="button" tabIndex="0" aria-label="Add a step after Slack">
                                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5v14"></path>
                                      </svg>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="react-flow__viewport-portal"></div>
                          </div>
                        </div>
                      </div>
                      <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                        <pattern id="pattern-1" x="8" y="8" width="24" height="24" patternUnits="userSpaceOnUse" patterntransform="translate(-12,-12)">
                          <circle className="dots react-flow__background-pattern" cx="1" cy="1" r="1"></circle>
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
                      </svg>
                      <div className="bottom left m-6! react-flow__panel">
                        <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 flex-row gap-1 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 items-center overflow-hidden p-1 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm" role="group" aria-label="Canvas controls">
                          <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg" data-orientation="horizontal" role="group" size="sm" spacing="0.5" aria-label="Canvas tool" style={{"--gap": "0.5"}}>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 focus:z-10 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-0 rounded-[min(var(--radius-md),12px)] shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="default" size="sm" spacing="0.5" aria-label="Select" id="base-ui-_r_56_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 focus:z-10 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-0 rounded-[min(var(--radius-md),12px)] shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="sm" spacing="0.5" aria-label="Pan" id="base-ui-_r_59_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-hand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                                <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                                <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ToggleGroup>
                          <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                          <div className="flex gap-0.5 items-center" role="group" aria-label="Zoom">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_5c_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 tabular-nums text-[0.8rem] transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 100%" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_5g_">
                              {"100%"}
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_5j_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                          <div className="flex gap-0.5 items-center" role="group" aria-label="Layout">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Tidy tree" id="base-ui-_r_5l_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                        </Card>
                      </div>
                      <div className="bottom center react-flow__attribution react-flow__panel" data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev?utm_source=attribution">
                        <a href="https://reactflow.dev?utm_source=attribution" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
                          {"React Flow"}
                        </a>
                      </div>
                      <div id="react-flow__node-desc-1" style={{display: "none"}}>
                        {"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel."}
                      </div>
                      <div id="react-flow__edge-desc-1" style={{display: "none"}}>
                        {"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."}
                      </div>
                      <div id="react-flow__aria-live-1" aria-live="assertive" aria-atomic="true" style={{position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)"}}></div>
                    </div>
                  </div>
                  <aside className="duration-200 ease-linear motion-reduce:transition-none overflow-hidden shrink-0 transition-[width] w-0" aria-label="Step panel" aria-hidden="true" inert="">
                    <div className="border-s h-full nokey w-(--inspector-width)">
                      <div className="bg-card flex flex-col h-full">
                        <header className="border-b flex gap-3 items-start px-4 py-3 shrink-0">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                            <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m16 18 6-6-6-6"></path>
                              <path d="m8 6-6 6 6 6"></path>
                            </svg>
                          </IconTile>
                          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <h2 className="font-semibold text-sm truncate"></h2>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                {"Custom Code"}
                              </Badge>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate">
                                {"Viewing"}
                              </span>
                            </div>
                          </div>
                          <Button className="-me-2 -mt-1.5 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex="0" aria-label="Close step panel">
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </header>
                        <Tabs className="flex-1 gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
                          <div className="pt-3 px-4 shrink-0">
                            <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_5m_" compositeItemActive="" aria-controls="base-ui-_r_5p_">
                                {"Build"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5n_">
                                {"Status"}
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_5o_">
                                {"Logs"}
                              </TabsTrigger>
                            </TabsList>
                          </div>
                          <TabsContent className="data-hidden:hidden flex flex-col min-h-0 text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_5p_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_5m_">
                            <ScrollArea className="flex-1 min-h-0 scroll-fade-y" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5q_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <div className="flex flex-col gap-5 p-4">
                                  <section className="flex flex-col gap-3" aria-labelledby="node-facts">
                                    <h3 className="font-semibold text-sm" id="node-facts">
                                      {"Details"}
                                    </h3>
                                    <dl className="flex flex-col gap-3">
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Type"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Name"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Description"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                                          {"None"}
                                        </dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Next steps"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                                          {"0"}
                                        </dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Last run"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          {"Step ID"}
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                                          <code className="font-mono text-xs"></code>
                                        </dd>
                                      </div>
                                    </dl>
                                  </section>
                                </div>
                              </div>
                            </ScrollArea>
                            <footer className="border-t flex flex-col gap-3 p-4 shrink-0">
                              <div className="gap-3 grid grid-cols-2">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                                  <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                    <path d="m15 5 4 4"></path>
                                  </svg>
                                  {"Edit step"}
                                </Button>
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-destructive px-2.5 rounded-lg text-destructive text-sm" type="button" tabIndex="0">
                                  <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M10 11v6"></path>
                                    <path d="M14 11v6"></path>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  </svg>
                                  {"Delete"}
                                </Button>
                              </div>
                              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Next step"}
                              </Button>
                            </footer>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"0"}
    </span>
    <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] [--window-h:min(40rem,calc(100svh-6rem))] [--window-max-h:calc(100svh-6rem)] bg-popover bottom-4 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-(--window-h) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 max-sm:h-(--window-max-h) origin-bottom-right overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl rtl:origin-bottom-left shadow-md sm:data-[expanded=true]:h-(--window-max-h) sm:max-w-104 text-card-foreground text-sm w-[calc(100vw-2rem)] z-50" size="default" role="dialog" aria-modal="false" aria-labelledby="_r_3q_" aria-describedby="_r_3r_" data-state="closed" expanded="false" inert="">
      <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
        <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
        <div className="flex gap-1 items-center min-h-12 px-3">
          <div className="flex gap-2 items-center min-w-0 ps-1">
            <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm normal-case text-sm tracking-normal truncate" id="_r_3q_" role="heading" aria-level="2">
              {"Flowly Assistant"}
            </CardTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
              {"Beta"}
            </Badge>
            <CardDescription className="sr-only text-muted-foreground text-sm" id="_r_3r_">
              {"Answers from Collections Agent and what you attach."}
            </CardDescription>
          </div>
          <div className="flex gap-0.5 items-center ms-auto shrink-0">
            <div className="flex gap-0.5 items-center" data-fold="controls">
              <Tooltip>
              <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="New chat" id="base-ui-_r_3t_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="flex" id="base-ui-_r_40_" baseUiTooltipTrigger="">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat history" baseUiClickTrigger="" id="base-ui-_r_41_" aria-haspopup="dialog" aria-expanded="false">
                  <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M12 7v5l4 2"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
              </TooltipTrigger>
              </Tooltip>
              <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            </div>
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button group/expand hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_43_" baseUiTooltipTrigger="">
              <svg className="group-aria-pressed/expand:hidden lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="m21 3-7 7"></path>
                <path d="m3 21 7-7"></path>
                <path d="M9 21H3v-6"></path>
              </svg>
              <svg className="group-aria-pressed/expand:block hidden lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m14 10 7-7"></path>
                <path d="M20 10h-6V4"></path>
                <path d="m3 21 7-7"></path>
                <path d="M4 14h6v6"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Minimize chat" id="base-ui-_r_45_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_47_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col min-h-0" data-fold="body">
        <div className="flex flex-1 flex-col min-h-0" data-fold="content">
          <div className="[--scroll-fade-reveal:--spacing(8)] data-[at-end=true]:scroll-fade-b-0 data-[fits=true]:scroll-fade-none flex flex-1 flex-col gap-5 min-h-0 no-scrollbar overflow-y-auto overscroll-contain pb-2 pt-18 px-4 scroll-fade-b scroll-pb-10 scroll-pt-18" data-fold="starters" data-fits="true" data-at-end="true">
            <div className="flex flex-col gap-1">
              <EmptyTitle className="font-heading font-medium text-sm tracking-tight">
                {"Hi Nick"}
              </EmptyTitle>
              <EmptyDescription className="text-sm/relaxed">
                {"I read the Collections Agent, its last test run and anything you attach."}
              </EmptyDescription>
            </div>
            <div className="flex flex-col gap-1" role="group" aria-labelledby="_r_48_">
              <p className="font-medium text-muted-foreground text-xs" id="_r_48_">
                {"Try Asking"}
              </p>
              <div className="flex flex-col">
                <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="min-w-0 truncate">
                    {"What did the last test run do?"}
                  </span>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="min-w-0 truncate">
                    {"Which path does a promised payment take?"}
                  </span>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="min-w-0 truncate">
                    {"How much does one run cost?"}
                  </span>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="min-w-0 truncate">
                    {"Draft a reminder for an overdue invoice"}
                  </span>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="min-w-0 truncate">
                    {"What should run after Slack?"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-3 px-4 shrink-0">
          <form>
            <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical" invalid="false">
              <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none sr-only text-sm" htmlFor="_r_49_">
                {"Ask a question"}
              </FieldLabel>
              <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                <textarea className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 max-h-32 md:text-sm min-h-14 outline-none placeholder:text-muted-foreground px-2.5 py-2 resize-none ring-0 rounded-none shadow-none text-base transition-colors w-full" name="prompt" id="_r_49_" placeholder="Ask about this agent" aria-invalid="false"></textarea>
                <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 [.border-t]:pt-2 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 group-has-[>input]/input-group:pb-2 h-auto justify-between pb-2 px-2.5 py-1.5 text-muted-foreground text-sm" role="group" data-align="block-end">
                  <Tooltip>
                  <TooltipTrigger className="flex" id="base-ui-_r_4f_" baseUiTooltipTrigger="">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-lg select-none shadow-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Attach context" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_4g_">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-7 text-primary-foreground text-sm transition-all whitespace-nowrap" type="submit" tabIndex="0" aria-label="Send question" id="base-ui-_r_4j_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </form>
          <p className="text-center text-muted-foreground text-xs">
            {"Replies can be wrong. Check before acting."}
          </p>
        </div>
      </div>
    </Card>
    <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-popover bottom-4 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-12 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-md sm:max-w-104 text-card-foreground text-sm w-[calc(100vw-2rem)] z-40" size="minimized" role="region" aria-label="Flowly Assistant" data-state="closed" inert="">
      <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
        <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
        <div className="flex gap-1 items-center min-h-12 px-3">
          <div className="flex gap-2 items-center min-w-0 ps-1">
            <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm normal-case text-sm tracking-normal truncate">
              {"Flowly Assistant"}
            </CardTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
              {"Beta"}
            </Badge>
            <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs" role="status" data-fold="status"></span>
          </div>
          <div className="flex gap-0.5 items-center ms-auto shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button group/expand hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_4l_" baseUiTooltipTrigger="">
              <svg className="group-aria-pressed/expand:hidden lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="m21 3-7 7"></path>
                <path d="m3 21 7-7"></path>
                <path d="M9 21H3v-6"></path>
              </svg>
              <svg className="group-aria-pressed/expand:block hidden lucide lucide-minimize-2 lucide-minimize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m14 10 7-7"></path>
                <path d="M20 10h-6V4"></path>
                <path d="m3 21 7-7"></path>
                <path d="M4 14h6v6"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Restore chat" id="base-ui-_r_4n_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_4p_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </div>
        </div>
      </div>
    </Card>
  </>
  )
}
