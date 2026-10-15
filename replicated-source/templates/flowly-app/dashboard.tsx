import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
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
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardTrigger,
} from "@/registry/bases/base/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
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
    <div hidden></div>
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_f6cpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" aria-label="Dashboard" aria-current="page" href="/dashboard">
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fecpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="AI Agent Builder" href="/agent-builder">
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
                    {"Dashboard"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center shrink-0">
                <div className="flex gap-2 items-center shrink-0">
                  <AvatarGroup>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Hanna Berg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                      {"+8"}
                    </AvatarGroupCount>
                  </AvatarGroup>
                  <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0" aria-label="Invite team member">
                    <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" x2="19" y1="8" y2="14"></line>
                      <line x1="22" x2="16" y1="11" y2="11"></line>
                    </svg>
                    <span className="hidden md:block">
                      {"Invite"}
                    </span>
                  </Button>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <span className="md:not-sr-only sr-only">
                      {"Add Workflow"}
                    </span>
                  </Button>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_e_">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r hidden md:border-r-0 md:flex md:invisible md:w-0 overflow-hidden shrink-0 w-(--sidebar-width-inner)" aria-label="Dashboard navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)"></div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="-m-4 flex flex-1 flex-col">
              <div className="flex flex-1 flex-col gap-4 p-4 w-full" aria-labelledby="page-heading">
                <h1 className="sr-only" id="page-heading">
                  {"Dashboard"}
                </h1>
                <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-3">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardContent className="flex flex-1 flex-col gap-3 px-(--card-spacing) py-4">
                      <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                        <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                          <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                          <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                        </svg>
                        <span className="font-medium text-foreground text-sm truncate">
                          {"Workflow Health"}
                        </span>
                        <span className="ms-auto shrink-0 text-xs">
                          {"Now"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                          <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                            {"6"}
                            <span className="font-normal text-base text-muted-foreground">
                              {"/"}
                              {"12"}
                            </span>
                          </span>
                          <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-destructive text-sm">
                            <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                              <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                              </svg>
                            </span>
                            {"25.0%"}
                            <span className="sr-only">
                              {"down"}
                              {"against yesterday"}
                            </span>
                          </span>
                        </div>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"8 healthy yesterday"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 mt-auto">
                        <div className="flex gap-1 h-2 w-full" role="img" aria-label="Workflows by health: 6 healthy, 1 degraded, 3 failing, 2 paused">
                          <span className="bg-success h-full min-w-1 rounded-full" style={{flexGrow: "6"}}></span>
                          <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "1"}}></span>
                          <span className="bg-destructive h-full min-w-1 rounded-full" style={{flexGrow: "3"}}></span>
                          <span className="bg-muted-foreground/40 h-full min-w-1 rounded-full" style={{flexGrow: "2"}}></span>
                        </div>
                        <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-success rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Healthy"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"6"}
                            </dd>
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Degraded"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"1"}
                            </dd>
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-destructive rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Failing"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"3"}
                            </dd>
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Paused"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"2"}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 border-t p-(--card-spacing) px-4 py-2 rounded-b-xl">
                      <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                        <span className="truncate">
                          {"View Support Triage"}
                        </span>
                        <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardContent className="flex flex-1 flex-col gap-3 px-(--card-spacing) py-4">
                      <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                        <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 8V4H8"></path>
                          <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                        <span className="font-medium text-foreground text-sm truncate">
                          {"Live Agents"}
                        </span>
                        <span className="ms-auto shrink-0 text-xs">
                          {"Now"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                          <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                            {"6"}
                            <span className="font-normal text-base text-muted-foreground">
                              {"/"}
                              {"12"}
                            </span>
                          </span>
                          <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-sm text-success">
                            <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                              <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </span>
                            {"20.0%"}
                            <span className="sr-only">
                              {"up"}
                              {"against last week"}
                            </span>
                          </span>
                        </div>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"5 live last week"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2.5 mt-auto">
                        <div className="flex gap-1 h-2 w-full" role="img" aria-label="Agents by state: 6 live, 2 need review, 4 draft or paused">
                          <span className="bg-info h-full min-w-1 rounded-full" style={{flexGrow: "6"}}></span>
                          <span className="bg-warning h-full min-w-1 rounded-full" style={{flexGrow: "2"}}></span>
                          <span className="bg-muted-foreground/30 h-full min-w-1 rounded-full" style={{flexGrow: "4"}}></span>
                        </div>
                        <dl className="gap-x-4 gap-y-1 grid grid-cols-2">
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-info rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Live"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"6"}
                            </dd>
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-warning rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Need review"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"2"}
                            </dd>
                          </div>
                          <div className="flex gap-1.5 items-center min-w-0 text-xs">
                            <span className="bg-muted-foreground/30 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <dt className="min-w-0 text-muted-foreground truncate">
                              {"Draft or paused"}
                            </dt>
                            <dd className="font-medium ms-auto tabular-nums">
                              {"4"}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 border-t p-(--card-spacing) px-4 py-2 rounded-b-xl">
                      <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                        <span className="truncate">
                          {"Review Invoice Reconciler"}
                        </span>
                        <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardContent className="flex flex-1 flex-col gap-3 px-(--card-spacing) py-4">
                      <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                        <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <span className="font-medium text-foreground text-sm truncate">
                          {"Workflow Runs"}
                        </span>
                        <span className="ms-auto shrink-0 text-xs">
                          {"14 days"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                          <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                            {"278"}
                          </span>
                          <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-sm text-success">
                            <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                              <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </span>
                            {"5.3%"}
                            <span className="sr-only">
                              {"up"}
                              {"against yesterday"}
                            </span>
                          </span>
                        </div>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"264 yesterday"}
                        </span>
                      </div>
                      <div className="h-14 mt-auto w-full" role="img" aria-label="Workflow runs per day, last 14 days, today 278">
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-14 justify-center text-xs w-full" data-chart="chart-_R_3lminpflpflb_">
                          <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_3lminpflpflb_] {\n  --color-rows: var(--success);\n}\n\n\n.dark [data-chart=chart-_R_3lminpflpflb_] {\n  --color-rows: var(--success);\n}\n" }} />
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                            <div style={{width: "0", height: "0", overflow: "visible"}}>
                              <div className="recharts-wrapper" width="253" height="56" style={{position: "relative", cursor: "default", width: "253px", height: "56px"}}>
                                <svg className="recharts-surface" width="253" height="56" viewBox="0 0 253 56" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts3-clip">
                                      <rect x="0" y="6" height="50" width="247"></rect>
                                    </clippath>
                                  </defs>
                                  <defs>
                                    <lineargradient id="stat-fill-R1lminpflpflb" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="var(--success)" stopOpacity="0.24"></stop>
                                      <stop offset="100%" stopColor="var(--success)" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer recharts-shape">
                                          <path className="recharts-area-area recharts-curve" strokeWidth="1.5" fill="url(#stat-fill-R1lminpflpflb)" fillOpacity="1" height="50" width="247" id="recharts-area-_r_g_" stroke="none" d="M0,13.435C6.333,12.24,12.667,11.045,19,11.045C25.333,11.045,31.667,17.152,38,17.152C44.333,17.152,50.667,7.593,57,7.593C63.333,7.593,69.667,8.036,76,8.921C82.333,9.806,88.667,20.781,95,21.666C101.333,22.552,107.667,22.994,114,22.994C120.333,22.994,126.667,14.143,133,11.842C139.333,9.54,145.667,8.39,152,8.39C158.333,8.39,164.667,9.717,171,9.717C177.333,9.717,183.667,6,190,6C196.333,6,202.667,9.894,209,11.045C215.333,12.196,221.667,12.904,228,12.904C234.333,12.904,240.667,11.045,247,9.186L247,56C240.667,56,234.333,56,228,56C221.667,56,215.333,56,209,56C202.667,56,196.333,56,190,56C183.667,56,177.333,56,171,56C164.667,56,158.333,56,152,56C145.667,56,139.333,56,133,56C126.667,56,120.333,56,114,56C107.667,56,101.333,56,95,56C88.667,56,82.333,56,76,56C69.667,56,63.333,56,57,56C50.667,56,44.333,56,38,56C31.667,56,25.333,56,19,56C12.667,56,6.333,56,0,56Z"></path>
                                          <path className="recharts-area-curve recharts-curve" strokeWidth="1.5" fill="none" fillOpacity="1" height="50" width="247" stroke="var(--success)" d="M0,13.435C6.333,12.24,12.667,11.045,19,11.045C25.333,11.045,31.667,17.152,38,17.152C44.333,17.152,50.667,7.593,57,7.593C63.333,7.593,69.667,8.036,76,8.921C82.333,9.806,88.667,20.781,95,21.666C101.333,22.552,107.667,22.994,114,22.994C120.333,22.994,126.667,14.143,133,11.842C139.333,9.54,145.667,8.39,152,8.39C158.333,8.39,164.667,9.717,171,9.717C177.333,9.717,183.667,6,190,6C196.333,6,202.667,9.894,209,11.045C215.333,12.196,221.667,12.904,228,12.904C234.333,12.904,240.667,11.045,247,9.186"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                    <g className="recharts-layer recharts-reference-line">
                                      <line className="recharts-reference-line-line" x="Oct 6" stroke="var(--success)" strokeOpacity="0.5" strokeDasharray="2 3" fill="none" fillOpacity="1" strokeWidth="1" x1="247" y1="56" x2="247" y2="6"></line>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                    <g className="recharts-layer recharts-reference-dot">
                                      <circle className="recharts-dot recharts-reference-dot-dot" x="Oct 6" y="278" r="4" fill="var(--success)" stroke="var(--card)" strokeWidth="2" fillOpacity="1" cx="247" cy="9.186404673393522"></circle>
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
                        </ChartContainer>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 border-t p-(--card-spacing) px-4 py-2 rounded-b-xl">
                      <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                        <span className="truncate">
                          {"View Order Fulfillment"}
                        </span>
                        <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardContent className="flex flex-1 flex-col gap-3 px-(--card-spacing) py-4">
                      <div className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0 text-muted-foreground">
                        <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span className="font-medium text-foreground text-sm truncate">
                          {"Failed Runs"}
                        </span>
                        <span className="ms-auto shrink-0 text-xs">
                          {"14 days"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-wrap gap-x-2.5 gap-y-1 items-center">
                          <span className="font-semibold leading-8 tabular-nums text-2xl tracking-tight">
                            {"18"}
                          </span>
                          <span className="flex font-medium font-mono gap-0.5 items-center tabular-nums text-destructive text-sm">
                            <span className="[&_svg:not([class*=size-])]:size-3.5 flex" aria-hidden="true">
                              <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m5 12 7-7 7 7"></path>
                                <path d="M12 19V5"></path>
                              </svg>
                            </span>
                            {"200%"}
                            <span className="sr-only">
                              {"up"}
                              {"against yesterday"}
                            </span>
                          </span>
                        </div>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"6 yesterday, 84 in 14 days"}
                        </span>
                      </div>
                      <div className="flex gap-1 h-14 items-end mt-auto w-full" role="img" aria-label="Failed runs per day, last 14 days: 4, 6, 3, 5, 8, 4, 2, 5, 3, 9, 7, 4, 6, 18">
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "22.22222222222222%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "33.33333333333333%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "16.666666666666664%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "27.77777777777778%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "44.44444444444444%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "22.22222222222222%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "14%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "27.77777777777778%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "16.666666666666664%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "50%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "38.88888888888889%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "22.22222222222222%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive/40 bottom-0 inset-x-0 rounded-full" style={{height: "33.33333333333333%"}}></span>
                        </span>
                        <span className="flex-1 h-full relative">
                          <span className="absolute bg-muted inset-0 rounded-full"></span>
                          <span className="absolute bg-destructive bottom-0 inset-x-0 rounded-full" style={{height: "100%"}}></span>
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 border-t p-(--card-spacing) px-4 py-2 rounded-b-xl">
                      <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-3 group/action hover:text-foreground items-center justify-between min-w-0 outline-none rounded-full text-muted-foreground text-sm w-full" type="button">
                        <span className="truncate">
                          {"View Support Triage"}
                        </span>
                        <span className="[&_svg:not([class*=size-])]:size-4 duration-150 flex group-hover/action:translate-x-0.5 motion-reduce:transition-none shrink-0 transition-transform">
                          <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 lg:col-span-2 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardHeader className="[.border-b]:pb-2 border-b flex flex-row flex-wrap gap-3 items-center justify-between px-4 py-2 rounded-t-xl">
                      <div className="flex flex-col gap-px min-w-0">
                        <CardTitle className="font-heading font-semibold group-data-[size=sm]/card:text-sm leading-5 text-sm">
                          {"Run Activity"}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {"278 runs in 24 hours, 93.5% succeeded"}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        <ul className="flex flex-wrap gap-x-3 gap-y-1 items-center text-muted-foreground text-xs">
                          <li className="flex gap-1.5 items-center">
                            <span className="bg-success rounded-full size-2" aria-hidden="true"></span>
                            {"Succeeded"}
                          </li>
                          <li className="flex gap-1.5 items-center">
                            <span className="bg-warning rounded-full size-2" aria-hidden="true"></span>
                            {"Slow"}
                          </li>
                          <li className="flex gap-1.5 items-center">
                            <span className="bg-destructive rounded-full size-2" aria-hidden="true"></span>
                            {"Failed"}
                          </li>
                        </ul>
                        <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg" data-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Activity shown" style={{"--gap": "0"}}>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                            {"Runs"}
                          </ToggleGroupItem>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                            {"Steps"}
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 px-(--card-spacing) py-4">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_R_aqinpflpflb_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_aqinpflpflb_] {\n  --color-succeeded: var(--success);\n  --color-partial: var(--warning);\n  --color-failed: var(--destructive);\n  --color-volume: var(--info);\n}\n\n\n.dark [data-chart=chart-_R_aqinpflpflb_] {\n  --color-succeeded: var(--success);\n  --color-partial: var(--warning);\n  --color-failed: var(--destructive);\n  --color-volume: var(--info);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                          <div style={{width: "0", height: "0", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="746" height="224" style={{position: "relative", cursor: "default", width: "746px", height: "224px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="746" height="224" viewBox="0 0 746 224" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1">
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="28.0333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 28.0333,10\n            A 6,6,0,0,1,34.0333,4\n            L 40.0333,4\n            A 6,6,0,0,1,46.0333,10\n            L 46.0333,192\n            A 6,6,0,0,1,40.0333,198\n            L 34.0333,198\n            A 6,6,0,0,1,28.0333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="58.2" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 58.2,10\n            A 6,6,0,0,1,64.2,4\n            L 70.2,4\n            A 6,6,0,0,1,76.2,10\n            L 76.2,192\n            A 6,6,0,0,1,70.2,198\n            L 64.2,198\n            A 6,6,0,0,1,58.2,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="88.3667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 88.3667,10\n            A 6,6,0,0,1,94.3667,4\n            L 100.3667,4\n            A 6,6,0,0,1,106.3667,10\n            L 106.3667,192\n            A 6,6,0,0,1,100.3667,198\n            L 94.3667,198\n            A 6,6,0,0,1,88.3667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="118.5333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 118.5333,10\n            A 6,6,0,0,1,124.5333,4\n            L 130.5333,4\n            A 6,6,0,0,1,136.5333,10\n            L 136.5333,192\n            A 6,6,0,0,1,130.5333,198\n            L 124.5333,198\n            A 6,6,0,0,1,118.5333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="148.7" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 148.7,10\n            A 6,6,0,0,1,154.7,4\n            L 160.7,4\n            A 6,6,0,0,1,166.7,10\n            L 166.7,192\n            A 6,6,0,0,1,160.7,198\n            L 154.7,198\n            A 6,6,0,0,1,148.7,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="178.8667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 178.8667,10\n            A 6,6,0,0,1,184.8667,4\n            L 190.8667,4\n            A 6,6,0,0,1,196.8667,10\n            L 196.8667,192\n            A 6,6,0,0,1,190.8667,198\n            L 184.8667,198\n            A 6,6,0,0,1,178.8667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="209.0333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 209.0333,10\n            A 6,6,0,0,1,215.0333,4\n            L 221.0333,4\n            A 6,6,0,0,1,227.0333,10\n            L 227.0333,192\n            A 6,6,0,0,1,221.0333,198\n            L 215.0333,198\n            A 6,6,0,0,1,209.0333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="239.2" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 239.2,10\n            A 6,6,0,0,1,245.2,4\n            L 251.2,4\n            A 6,6,0,0,1,257.2,10\n            L 257.2,192\n            A 6,6,0,0,1,251.2,198\n            L 245.2,198\n            A 6,6,0,0,1,239.2,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="269.3667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 269.3667,10\n            A 6,6,0,0,1,275.3667,4\n            L 281.3667,4\n            A 6,6,0,0,1,287.3667,10\n            L 287.3667,192\n            A 6,6,0,0,1,281.3667,198\n            L 275.3667,198\n            A 6,6,0,0,1,269.3667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="299.5333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 299.5333,10\n            A 6,6,0,0,1,305.5333,4\n            L 311.5333,4\n            A 6,6,0,0,1,317.5333,10\n            L 317.5333,192\n            A 6,6,0,0,1,311.5333,198\n            L 305.5333,198\n            A 6,6,0,0,1,299.5333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="329.7" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 329.7,10\n            A 6,6,0,0,1,335.7,4\n            L 341.7,4\n            A 6,6,0,0,1,347.7,10\n            L 347.7,192\n            A 6,6,0,0,1,341.7,198\n            L 335.7,198\n            A 6,6,0,0,1,329.7,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="359.8667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 359.8667,10\n            A 6,6,0,0,1,365.8667,4\n            L 371.8667,4\n            A 6,6,0,0,1,377.8667,10\n            L 377.8667,192\n            A 6,6,0,0,1,371.8667,198\n            L 365.8667,198\n            A 6,6,0,0,1,359.8667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="390.0333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 390.0333,10\n            A 6,6,0,0,1,396.0333,4\n            L 402.0333,4\n            A 6,6,0,0,1,408.0333,10\n            L 408.0333,192\n            A 6,6,0,0,1,402.0333,198\n            L 396.0333,198\n            A 6,6,0,0,1,390.0333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="420.2" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 420.2,10\n            A 6,6,0,0,1,426.2,4\n            L 432.2,4\n            A 6,6,0,0,1,438.2,10\n            L 438.2,192\n            A 6,6,0,0,1,432.2,198\n            L 426.2,198\n            A 6,6,0,0,1,420.2,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="450.3667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 450.3667,10\n            A 6,6,0,0,1,456.3667,4\n            L 462.3667,4\n            A 6,6,0,0,1,468.3667,10\n            L 468.3667,192\n            A 6,6,0,0,1,462.3667,198\n            L 456.3667,198\n            A 6,6,0,0,1,450.3667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="480.5333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 480.5333,10\n            A 6,6,0,0,1,486.5333,4\n            L 492.5333,4\n            A 6,6,0,0,1,498.5333,10\n            L 498.5333,192\n            A 6,6,0,0,1,492.5333,198\n            L 486.5333,198\n            A 6,6,0,0,1,480.5333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="510.7" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 510.7,10\n            A 6,6,0,0,1,516.7,4\n            L 522.7,4\n            A 6,6,0,0,1,528.7,10\n            L 528.7,192\n            A 6,6,0,0,1,522.7,198\n            L 516.7,198\n            A 6,6,0,0,1,510.7,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="540.8667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 540.8667,10\n            A 6,6,0,0,1,546.8667,4\n            L 552.8667,4\n            A 6,6,0,0,1,558.8667,10\n            L 558.8667,192\n            A 6,6,0,0,1,552.8667,198\n            L 546.8667,198\n            A 6,6,0,0,1,540.8667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="571.0333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 571.0333,10\n            A 6,6,0,0,1,577.0333,4\n            L 583.0333,4\n            A 6,6,0,0,1,589.0333,10\n            L 589.0333,192\n            A 6,6,0,0,1,583.0333,198\n            L 577.0333,198\n            A 6,6,0,0,1,571.0333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="601.2" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 601.2,10\n            A 6,6,0,0,1,607.2,4\n            L 613.2,4\n            A 6,6,0,0,1,619.2,10\n            L 619.2,192\n            A 6,6,0,0,1,613.2,198\n            L 607.2,198\n            A 6,6,0,0,1,601.2,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="631.3667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 631.3667,10\n            A 6,6,0,0,1,637.3667,4\n            L 643.3667,4\n            A 6,6,0,0,1,649.3667,10\n            L 649.3667,192\n            A 6,6,0,0,1,643.3667,198\n            L 637.3667,198\n            A 6,6,0,0,1,631.3667,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="661.5333" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 661.5333,10\n            A 6,6,0,0,1,667.5333,4\n            L 673.5333,4\n            A 6,6,0,0,1,679.5333,10\n            L 679.5333,192\n            A 6,6,0,0,1,673.5333,198\n            L 667.5333,198\n            A 6,6,0,0,1,661.5333,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="691.7" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 691.7,10\n            A 6,6,0,0,1,697.7,4\n            L 703.7,4\n            A 6,6,0,0,1,709.7,10\n            L 709.7,192\n            A 6,6,0,0,1,703.7,198\n            L 697.7,198\n            A 6,6,0,0,1,691.7,192 Z"}></path>
                                  </g>
                                  <g className="recharts-inactive-bar recharts-layer">
                                    <path className="recharts-bar-background-rectangle recharts-rectangle" x="721.8667" y="4" width="18" height="194" fill="var(--muted)" radius="6" d={"M 721.8667,10\n            A 6,6,0,0,1,727.8667,4\n            L 733.8667,4\n            A 6,6,0,0,1,739.8667,10\n            L 739.8667,192\n            A 6,6,0,0,1,733.8667,198\n            L 727.8667,198\n            A 6,6,0,0,1,721.8667,192 Z"}></path>
                                  </g>
                                </g>
                                <defs>
                                  <clippath id="recharts4-clip">
                                    <rect x="22" y="4" height="194" width="724"></rect>
                                  </clippath>
                                </defs>
                                <defs>
                                  <pattern id="Rqinpflpflb-succeeded" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width="5" height="5" fill="var(--color-succeeded)" fillOpacity="0.22"></rect>
                                    <rect width="2" height="5" fill="var(--color-succeeded)" fillOpacity="0.5"></rect>
                                  </pattern>
                                  <pattern id="Rqinpflpflb-partial" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width="5" height="5" fill="var(--color-partial)" fillOpacity="0.22"></rect>
                                    <rect width="2" height="5" fill="var(--color-partial)" fillOpacity="0.5"></rect>
                                  </pattern>
                                  <pattern id="Rqinpflpflb-failed" width="5" height="5" patternUnits="userSpaceOnUse" patterntransform="rotate(45)">
                                    <rect width="5" height="5" fill="var(--color-failed)" fillOpacity="0.22"></rect>
                                    <rect width="2" height="5" fill="var(--color-failed)" fillOpacity="0.5"></rect>
                                  </pattern>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1">
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_h_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="28.0333" y="95.5333" width="18" height="102.4667" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 28.0333,99.5333\n            A 4,4,0,0,1,32.0333,95.5333\n            L 42.0333,95.5333\n            A 4,4,0,0,1,46.0333,99.5333\n            L 46.0333,194\n            A 4,4,0,0,1,42.0333,198\n            L 32.0333,198\n            A 4,4,0,0,1,28.0333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="58.2" y="42.8" width="18" height="155.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 58.2,46.8\n            A 4,4,0,0,1,62.2,42.8\n            L 72.2,42.8\n            A 4,4,0,0,1,76.2,46.8\n            L 76.2,194\n            A 4,4,0,0,1,72.2,198\n            L 62.2,198\n            A 4,4,0,0,1,58.2,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="88.3667" y="29.8667" width="18" height="168.1333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 88.3667,33.8667\n            A 4,4,0,0,1,92.3667,29.8667\n            L 102.3667,29.8667\n            A 4,4,0,0,1,106.3667,33.8667\n            L 106.3667,194\n            A 4,4,0,0,1,102.3667,198\n            L 92.3667,198\n            A 4,4,0,0,1,88.3667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="118.5333" y="68.6667" width="18" height="129.3333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 118.5333,72.6667\n            A 4,4,0,0,1,122.5333,68.6667\n            L 132.5333,68.6667\n            A 4,4,0,0,1,136.5333,72.6667\n            L 136.5333,194\n            A 4,4,0,0,1,132.5333,198\n            L 122.5333,198\n            A 4,4,0,0,1,118.5333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="148.7" y="42.8" width="18" height="155.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 148.7,46.8\n            A 4,4,0,0,1,152.7,42.8\n            L 162.7,42.8\n            A 4,4,0,0,1,166.7,46.8\n            L 166.7,194\n            A 4,4,0,0,1,162.7,198\n            L 152.7,198\n            A 4,4,0,0,1,148.7,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="178.8667" y="68.6667" width="18" height="129.3333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 178.8667,72.6667\n            A 4,4,0,0,1,182.8667,68.6667\n            L 192.8667,68.6667\n            A 4,4,0,0,1,196.8667,72.6667\n            L 196.8667,194\n            A 4,4,0,0,1,192.8667,198\n            L 182.8667,198\n            A 4,4,0,0,1,178.8667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="209.0333" y="30.8667" width="18" height="167.1333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 209.0333,34.8667\n            A 4,4,0,0,1,213.0333,30.8667\n            L 223.0333,30.8667\n            A 4,4,0,0,1,227.0333,34.8667\n            L 227.0333,194\n            A 4,4,0,0,1,223.0333,198\n            L 213.0333,198\n            A 4,4,0,0,1,209.0333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="239.2" y="68.6667" width="18" height="129.3333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 239.2,72.6667\n            A 4,4,0,0,1,243.2,68.6667\n            L 253.2,68.6667\n            A 4,4,0,0,1,257.2,72.6667\n            L 257.2,194\n            A 4,4,0,0,1,253.2,198\n            L 243.2,198\n            A 4,4,0,0,1,239.2,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="269.3667" y="55.7333" width="18" height="142.2667" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 269.3667,59.7333\n            A 4,4,0,0,1,273.3667,55.7333\n            L 283.3667,55.7333\n            A 4,4,0,0,1,287.3667,59.7333\n            L 287.3667,194\n            A 4,4,0,0,1,283.3667,198\n            L 273.3667,198\n            A 4,4,0,0,1,269.3667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="299.5333" y="42.8" width="18" height="155.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 299.5333,46.8\n            A 4,4,0,0,1,303.5333,42.8\n            L 313.5333,42.8\n            A 4,4,0,0,1,317.5333,46.8\n            L 317.5333,194\n            A 4,4,0,0,1,313.5333,198\n            L 303.5333,198\n            A 4,4,0,0,1,299.5333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="329.7" y="4" width="18" height="194" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 329.7,8\n            A 4,4,0,0,1,333.7,4\n            L 343.7,4\n            A 4,4,0,0,1,347.7,8\n            L 347.7,194\n            A 4,4,0,0,1,343.7,198\n            L 333.7,198\n            A 4,4,0,0,1,329.7,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="359.8667" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 359.8667,86.6\n            A 4,4,0,0,1,363.8667,82.6\n            L 373.8667,82.6\n            A 4,4,0,0,1,377.8667,86.6\n            L 377.8667,194\n            A 4,4,0,0,1,373.8667,198\n            L 363.8667,198\n            A 4,4,0,0,1,359.8667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="390.0333" y="42.8" width="18" height="155.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 390.0333,46.8\n            A 4,4,0,0,1,394.0333,42.8\n            L 404.0333,42.8\n            A 4,4,0,0,1,408.0333,46.8\n            L 408.0333,194\n            A 4,4,0,0,1,404.0333,198\n            L 394.0333,198\n            A 4,4,0,0,1,390.0333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="420.2" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 420.2,86.6\n            A 4,4,0,0,1,424.2,82.6\n            L 434.2,82.6\n            A 4,4,0,0,1,438.2,86.6\n            L 438.2,194\n            A 4,4,0,0,1,434.2,198\n            L 424.2,198\n            A 4,4,0,0,1,420.2,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="450.3667" y="43.8" width="18" height="154.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 450.3667,47.8\n            A 4,4,0,0,1,454.3667,43.8\n            L 464.3667,43.8\n            A 4,4,0,0,1,468.3667,47.8\n            L 468.3667,194\n            A 4,4,0,0,1,464.3667,198\n            L 454.3667,198\n            A 4,4,0,0,1,450.3667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="480.5333" y="55.7333" width="18" height="142.2667" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 480.5333,59.7333\n            A 4,4,0,0,1,484.5333,55.7333\n            L 494.5333,55.7333\n            A 4,4,0,0,1,498.5333,59.7333\n            L 498.5333,194\n            A 4,4,0,0,1,494.5333,198\n            L 484.5333,198\n            A 4,4,0,0,1,480.5333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="510.7" y="42.8" width="18" height="155.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 510.7,46.8\n            A 4,4,0,0,1,514.7,42.8\n            L 524.7,42.8\n            A 4,4,0,0,1,528.7,46.8\n            L 528.7,194\n            A 4,4,0,0,1,524.7,198\n            L 514.7,198\n            A 4,4,0,0,1,510.7,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="540.8667" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 540.8667,86.6\n            A 4,4,0,0,1,544.8667,82.6\n            L 554.8667,82.6\n            A 4,4,0,0,1,558.8667,86.6\n            L 558.8667,194\n            A 4,4,0,0,1,554.8667,198\n            L 544.8667,198\n            A 4,4,0,0,1,540.8667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="571.0333" y="69.6667" width="18" height="128.3333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 571.0333,73.6667\n            A 4,4,0,0,1,575.0333,69.6667\n            L 585.0333,69.6667\n            A 4,4,0,0,1,589.0333,73.6667\n            L 589.0333,194\n            A 4,4,0,0,1,585.0333,198\n            L 575.0333,198\n            A 4,4,0,0,1,571.0333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="601.2" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 601.2,86.6\n            A 4,4,0,0,1,605.2,82.6\n            L 615.2,82.6\n            A 4,4,0,0,1,619.2,86.6\n            L 619.2,194\n            A 4,4,0,0,1,615.2,198\n            L 605.2,198\n            A 4,4,0,0,1,601.2,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="631.3667" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 631.3667,86.6\n            A 4,4,0,0,1,635.3667,82.6\n            L 645.3667,82.6\n            A 4,4,0,0,1,649.3667,86.6\n            L 649.3667,194\n            A 4,4,0,0,1,645.3667,198\n            L 635.3667,198\n            A 4,4,0,0,1,631.3667,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="661.5333" y="43.8" width="18" height="154.2" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 661.5333,47.8\n            A 4,4,0,0,1,665.5333,43.8\n            L 675.5333,43.8\n            A 4,4,0,0,1,679.5333,47.8\n            L 679.5333,194\n            A 4,4,0,0,1,675.5333,198\n            L 665.5333,198\n            A 4,4,0,0,1,661.5333,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="691.7" y="69.6667" width="18" height="128.3333" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 691.7,73.6667\n            A 4,4,0,0,1,695.7,69.6667\n            L 705.7,69.6667\n            A 4,4,0,0,1,709.7,73.6667\n            L 709.7,194\n            A 4,4,0,0,1,705.7,198\n            L 695.7,198\n            A 4,4,0,0,1,691.7,194 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="721.8667" y="82.6" width="18" height="115.4" fill="url(#Rqinpflpflb-succeeded)" radius="4" d={"M 721.8667,86.6\n            A 4,4,0,0,1,725.8667,82.6\n            L 735.8667,82.6\n            A 4,4,0,0,1,739.8667,86.6\n            L 739.8667,194\n            A 4,4,0,0,1,735.8667,198\n            L 725.8667,198\n            A 4,4,0,0,1,721.8667,194 Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_i_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="631.3667" y="69.6667" width="18" height="10.9333" fill="url(#Rqinpflpflb-partial)" radius="4" d={"M 631.3667,73.6667\n            A 4,4,0,0,1,635.3667,69.6667\n            L 645.3667,69.6667\n            A 4,4,0,0,1,649.3667,73.6667\n            L 649.3667,76.6\n            A 4,4,0,0,1,645.3667,80.6\n            L 635.3667,80.6\n            A 4,4,0,0,1,631.3667,76.6 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-bar recharts-layer" id="recharts-bar-_r_j_">
                                    <g className="recharts-bar-rectangles recharts-layer">
                                      <g className="recharts-layer">
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="28.0333" y="81.6" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 28.0333,85.6\n            A 4,4,0,0,1,32.0333,81.6\n            L 42.0333,81.6\n            A 4,4,0,0,1,46.0333,85.6\n            L 46.0333,89.5333\n            A 4,4,0,0,1,42.0333,93.5333\n            L 32.0333,93.5333\n            A 4,4,0,0,1,28.0333,89.5333 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="209.0333" y="16.9333" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 209.0333,20.9333\n            A 4,4,0,0,1,213.0333,16.9333\n            L 223.0333,16.9333\n            A 4,4,0,0,1,227.0333,20.9333\n            L 227.0333,24.8667\n            A 4,4,0,0,1,223.0333,28.8667\n            L 213.0333,28.8667\n            A 4,4,0,0,1,209.0333,24.8667 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="359.8667" y="68.6667" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 359.8667,72.6667\n            A 4,4,0,0,1,363.8667,68.6667\n            L 373.8667,68.6667\n            A 4,4,0,0,1,377.8667,72.6667\n            L 377.8667,76.6\n            A 4,4,0,0,1,373.8667,80.6\n            L 363.8667,80.6\n            A 4,4,0,0,1,359.8667,76.6 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="420.2" y="68.6667" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 420.2,72.6667\n            A 4,4,0,0,1,424.2,68.6667\n            L 434.2,68.6667\n            A 4,4,0,0,1,438.2,72.6667\n            L 438.2,76.6\n            A 4,4,0,0,1,434.2,80.6\n            L 424.2,80.6\n            A 4,4,0,0,1,420.2,76.6 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="450.3667" y="29.8667" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 450.3667,33.8667\n            A 4,4,0,0,1,454.3667,29.8667\n            L 464.3667,29.8667\n            A 4,4,0,0,1,468.3667,33.8667\n            L 468.3667,37.8\n            A 4,4,0,0,1,464.3667,41.8\n            L 454.3667,41.8\n            A 4,4,0,0,1,450.3667,37.8 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <g></g>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="540.8667" y="68.6667" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 540.8667,72.6667\n            A 4,4,0,0,1,544.8667,68.6667\n            L 554.8667,68.6667\n            A 4,4,0,0,1,558.8667,72.6667\n            L 558.8667,76.6\n            A 4,4,0,0,1,554.8667,80.6\n            L 544.8667,80.6\n            A 4,4,0,0,1,540.8667,76.6 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="571.0333" y="55.7333" width="18" height="11.9333" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 571.0333,59.7333\n            A 4,4,0,0,1,575.0333,55.7333\n            L 585.0333,55.7333\n            A 4,4,0,0,1,589.0333,59.7333\n            L 589.0333,63.6667\n            A 4,4,0,0,1,585.0333,67.6667\n            L 575.0333,67.6667\n            A 4,4,0,0,1,571.0333,63.6667 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="601.2" y="55.7333" width="18" height="24.8667" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 601.2,59.7333\n            A 4,4,0,0,1,605.2,55.7333\n            L 615.2,55.7333\n            A 4,4,0,0,1,619.2,59.7333\n            L 619.2,76.6\n            A 4,4,0,0,1,615.2,80.6\n            L 605.2,80.6\n            A 4,4,0,0,1,601.2,76.6 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="631.3667" y="42.8" width="18" height="24.8667" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 631.3667,46.8\n            A 4,4,0,0,1,635.3667,42.8\n            L 645.3667,42.8\n            A 4,4,0,0,1,649.3667,46.8\n            L 649.3667,63.6667\n            A 4,4,0,0,1,645.3667,67.6667\n            L 635.3667,67.6667\n            A 4,4,0,0,1,631.3667,63.6667 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="661.5333" y="16.9333" width="18" height="24.8667" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 661.5333,20.9333\n            A 4,4,0,0,1,665.5333,16.9333\n            L 675.5333,16.9333\n            A 4,4,0,0,1,679.5333,20.9333\n            L 679.5333,37.8\n            A 4,4,0,0,1,675.5333,41.8\n            L 665.5333,41.8\n            A 4,4,0,0,1,661.5333,37.8 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="691.7" y="42.8" width="18" height="24.8667" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 691.7,46.8\n            A 4,4,0,0,1,695.7,42.8\n            L 705.7,42.8\n            A 4,4,0,0,1,709.7,46.8\n            L 709.7,63.6667\n            A 4,4,0,0,1,705.7,67.6667\n            L 695.7,67.6667\n            A 4,4,0,0,1,691.7,63.6667 Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-bar-rectangle recharts-layer">
                                          <g className="recharts-inactive-bar recharts-layer">
                                            <path className="recharts-rectangle" x="721.8667" y="42.8" width="18" height="37.8" fill="url(#Rqinpflpflb-failed)" radius="4" d={"M 721.8667,46.8\n            A 4,4,0,0,1,725.8667,42.8\n            L 735.8667,42.8\n            A 4,4,0,0,1,739.8667,46.8\n            L 739.8667,76.6\n            A 4,4,0,0,1,735.8667,80.6\n            L 725.8667,80.6\n            A 4,4,0,0,1,721.8667,76.6 Z"}></path>
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
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-cartesian-axis recharts-layer recharts-yAxis yAxis">
                                    <g className="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
                                      <g className="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines">
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
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="127.58333333333333" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="127.58333333333333" dy="0.71em">
                                          {"13:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="248.25000000000003" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="248.25000000000003" dy="0.71em">
                                          {"17:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="368.9166666666667" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="368.9166666666667" dy="0.71em">
                                          {"21:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="489.5833333333333" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="489.5833333333333" dy="0.71em">
                                          {"01:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="610.2500000000001" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="610.2500000000001" dy="0.71em">
                                          {"05:00"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="26" orientation="bottom" width="724" stroke="none" x="730.9166666666667" y="212" textAnchor="middle" fill="#666">
                                        <tspan x="730.9166666666667" dy="0.71em">
                                          {"Now"}
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="12" y="198" textAnchor="end" fill="#666">
                                        <tspan x="12" dy="0.355em">
                                          {"0"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="12" y="133.33333333333337" textAnchor="end" fill="#666">
                                        <tspan x="12" dy="0.355em">
                                          {"5"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="12" y="68.66666666666669" textAnchor="end" fill="#666">
                                        <tspan x="12" dy="0.355em">
                                          {"10"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" orientation="left" height="194" stroke="none" x="12" y="9" textAnchor="end" fill="#666">
                                        <tspan x="12" dy="0.355em">
                                          {"15"}
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
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-w-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                    <CardHeader className="[.border-b]:pb-2 border-b flex flex-row flex-wrap gap-3 items-center justify-between px-4 py-2 rounded-t-xl">
                      <div className="flex flex-col gap-px min-w-0">
                        <CardTitle className="font-heading font-semibold group-data-[size=sm]/card:text-sm leading-5 text-sm">
                          {"Needs Attention"}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {"5 items, worst first"}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Attention actions" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_djainpflpflb_">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="flex-1 px-(--card-spacing) py-4">
                      <ItemGroup className="gap-0 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-0" role="list">
                        <Item className="[a]:hover:bg-muted border border-transparent gap-2 in-data-[slot=dropdown-menu-content]:p-0 px-0 py-2 rounded-lg text-sm" variant="default" size="xs">
                          <ItemMedia className="bg-transparent gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5" variant="default">
                            <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="xs" aria-hidden="true">
                              <svg aria-hidden="true" fill="none" viewBox="0 0 100 100">
                                <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                              </svg>
                            </IconTile>
                          </ItemMedia>
                          <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                            <ItemTitle className="font-medium gap-2 leading-snug max-w-full min-w-0 text-sm underline-offset-4">
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_R_fcdainpflpflb_">
                                {"Support Triage"}
                              </HoverCardTrigger>
                              </HoverCard>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Failing"}
                              </Badge>
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fix in Editor Support Triage" id="base-ui-_R_3udainpflpflb_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ItemActions>
                        </Item>
                        <Item className="[a]:hover:bg-muted border border-transparent gap-2 in-data-[slot=dropdown-menu-content]:p-0 px-0 py-2 rounded-lg text-sm" variant="default" size="xs">
                          <ItemMedia className="bg-transparent gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5" variant="default">
                            <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="xs" aria-hidden="true">
                              <svg aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                                <g clipRule="evenodd" fillRule="evenodd">
                                  <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                  <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                  <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                  <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                </g>
                              </svg>
                            </IconTile>
                          </ItemMedia>
                          <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                            <ItemTitle className="font-medium gap-2 leading-snug max-w-full min-w-0 text-sm underline-offset-4">
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_R_fclainpflpflb_">
                                {"Social Mentions Alert"}
                              </HoverCardTrigger>
                              </HoverCard>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Failing"}
                              </Badge>
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fix in Editor Social Mentions Alert" id="base-ui-_R_3ulainpflpflb_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ItemActions>
                        </Item>
                        <Item className="[a]:hover:bg-muted border border-transparent gap-2 in-data-[slot=dropdown-menu-content]:p-0 px-0 py-2 rounded-lg text-sm" variant="default" size="xs">
                          <ItemMedia className="bg-transparent gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5" variant="default">
                            <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="xs" aria-hidden="true">
                              <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 268">
                                <path fill="#FFF" d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Z"></path>
                                <path d="M164.09.608 16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608ZM69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921ZM212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.044-4.68 1.55-11.439 8.826-11.965l38.426-2.585 52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404l35.84-2.087Z"></path>
                              </svg>
                            </IconTile>
                          </ItemMedia>
                          <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                            <ItemTitle className="font-medium gap-2 leading-snug max-w-full min-w-0 text-sm underline-offset-4">
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_R_fctainpflpflb_">
                                {"Meeting Notes to CRM"}
                              </HoverCardTrigger>
                              </HoverCard>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                {"Failing"}
                              </Badge>
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Fix in Editor Meeting Notes to CRM" id="base-ui-_R_3utainpflpflb_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ItemActions>
                        </Item>
                        <Item className="[a]:hover:bg-muted border border-transparent gap-2 in-data-[slot=dropdown-menu-content]:p-0 px-0 py-2 rounded-lg text-sm" variant="default" size="xs">
                          <ItemMedia className="bg-transparent gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5" variant="default">
                            <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="xs" aria-hidden="true">
                              <svg className="dark:hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                              </svg>
                              <svg className="dark:block hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                              </svg>
                            </IconTile>
                          </ItemMedia>
                          <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                            <ItemTitle className="font-medium gap-2 leading-snug max-w-full min-w-0 text-sm underline-offset-4">
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_R_fd5ainpflpflb_">
                                {"Inventory Restock"}
                              </HoverCardTrigger>
                              </HoverCard>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                {"Degraded"}
                              </Badge>
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Review Inventory Restock" id="base-ui-_R_3v5ainpflpflb_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ItemActions>
                        </Item>
                        <Item className="[a]:hover:bg-muted border border-transparent gap-2 in-data-[slot=dropdown-menu-content]:p-0 px-0 py-2 rounded-lg text-sm" variant="default" size="xs">
                          <ItemMedia className="bg-transparent gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5" variant="default">
                            <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="xs" aria-hidden="true">
                              <svg aria-hidden="true" viewBox="0 0 256 228">
                                <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                                <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                                <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                                <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                                <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                              </svg>
                            </IconTile>
                          </ItemMedia>
                          <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                            <ItemTitle className="font-medium gap-2 leading-snug max-w-full min-w-0 text-sm underline-offset-4">
                              <HoverCard>
                              <HoverCardTrigger className="cursor-pointer focus-visible:outline-2 focus-visible:outline-ring/50 hover:text-primary hover:underline min-w-0 outline-offset-2 text-left truncate underline-offset-2" type="button" id="base-ui-_R_fddainpflpflb_">
                                {"Contract Sync"}
                              </HoverCardTrigger>
                              </HoverCard>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                {"Paused"}
                              </Badge>
                            </ItemTitle>
                          </ItemContent>
                          <ItemActions className="gap-2">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Resume Contract Sync" id="base-ui-_R_3vdainpflpflb_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </ItemActions>
                        </Item>
                      </ItemGroup>
                    </CardContent>
                  </Card>
                </div>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <div className="border-b flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-center lg:min-h-14 lg:py-0 px-4 py-3">
                    <div className="flex gap-2 items-center min-w-0">
                      <svg className="fill-amber-400 lucide lucide-flag shrink-0 size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>
                      </svg>
                      <span className="text-muted-foreground text-sm truncate">
                        {"Production"}
                      </span>
                      <svg className="lucide lucide-chevron-right shrink-0 size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                      <svg className="lucide lucide-workflow shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                        <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                      </svg>
                      <h2 className="font-medium text-foreground text-sm truncate">
                        {"Workflows"}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap lg:ml-auto min-w-0">
                      <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-40 rounded-lg sm:w-48 transition-colors" role="group">
                        <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                          <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                          </svg>
                        </InputGroupAddon>
                        <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_16finpflpflb_" placeholder="Search..." aria-label="Search workflows" value="" />
                      </InputGroup>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6qfinpflpflb_">
                        <svg className="lucide lucide-arrow-up-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                        {"Name"}
                        <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_6ufinpflpflb_">
                        <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                        </svg>
                        {"Filters"}
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="relative">
                    <DataGridProvider>
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_1ninpflpflb_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                        <div role="presentation" style={{minWidth: "fit-content"}}>
                          <DataGridProvider>
                          <DataGridTableViewport>
                            <DataGridProvider>
                            <DataGridTable>
                              <colgroup>
                                <col style={{width: "210px"}} />
                                <col style={{width: "300px"}} />
                                <col style={{width: "180px"}} />
                                <col style={{width: "126px"}} />
                                <col style={{width: "104px"}} />
                              </colgroup>
                              <thead>
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="successRate" style={{width: "210px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Success"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" style={{width: "300px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Workflow"}
                                        <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m5 12 7-7 7 7"></path>
                                          <path d="M12 19V5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="lastRunAt" style={{width: "180px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Last run"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="status" style={{width: "126px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Status"}
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" style={{width: "104px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                      {"Actions"}
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <DataGridProvider>
                              <DataGridTableBody>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/workflow-row hover:bg-muted/40" data-row-id="wf_9t4v6w">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0 size-10">
                                        <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                          <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                          <circle className="dark:text-emerald-400 stroke-current text-emerald-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="0"></circle>
                                        </svg>
                                        <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                          {"100"}
                                          {"%"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"100% success"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"4"}
                                          {"/"}
                                          {"4"}
                                          {"runs"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        {"Churn Risk Digest"}
                                      </span>
                                      <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0">
                                          {"Schedule"}
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="gap-1.5 inline-flex items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                            <AvatarImage className="rounded-full" alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate">
                                            {"Omar Haddad"}
                                          </span>
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="font-mono tracking-wide truncate">
                                          {"success/churn-digest"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                        {"Oct 05, 07:00"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"Mondays at 07:00"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Active"}
                                    </Badge>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open Churn Risk Digest in the editor">
                                        <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Star Churn Risk Digest" aria-pressed="false">
                                        <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Churn Risk Digest" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rmmin5lninpflpflb_">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="19" cy="12" r="1"></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/workflow-row hover:bg-muted/40" data-row-id="wf_3b8x2y">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0 size-10">
                                        <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                          <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                          <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="13.5716802635079"></circle>
                                        </svg>
                                        <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                          {"88"}
                                          {"%"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"88% success"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"211"}
                                          {"/"}
                                          {"240"}
                                          {"runs"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        {"Contract Sync"}
                                      </span>
                                      <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0">
                                          {"Webhook"}
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="gap-1.5 inline-flex items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                            <AvatarImage className="rounded-full" alt="Lena Wade" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate">
                                            {"Lena Wade"}
                                          </span>
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="font-mono tracking-wide truncate">
                                          {"legal/contract-sync"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                        {"Oct 04, 16:21"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"On signed contract"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                      <span className="bg-muted-foreground/50 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Paused"}
                                    </Badge>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open Contract Sync in the editor">
                                        <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Star Contract Sync" aria-pressed="false">
                                        <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Contract Sync" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rmmkn5lninpflpflb_">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="19" cy="12" r="1"></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/workflow-row hover:bg-muted/40" data-row-id="wf_4d2f8g">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0 size-10">
                                        <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                          <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                          <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="7.916813487046269"></circle>
                                        </svg>
                                        <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                          {"93"}
                                          {"%"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"93% success"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"626"}
                                          {"/"}
                                          {"672"}
                                          {"runs"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        {"Data Warehouse Export"}
                                      </span>
                                      <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0">
                                          {"Schedule"}
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="gap-1.5 inline-flex items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                            <AvatarImage className="rounded-full" alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate">
                                            {"Omar Haddad"}
                                          </span>
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="font-mono tracking-wide truncate">
                                          {"data/warehouse-export"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                        {"Oct 06, 09:00"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"Every hour"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Active"}
                                    </Badge>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open Data Warehouse Export in the editor">
                                        <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Star Data Warehouse Export" aria-pressed="false">
                                        <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Data Warehouse Export" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rmmmn5lninpflpflb_">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="19" cy="12" r="1"></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/workflow-row hover:bg-muted/40" data-row-id="wf_8l6m9n">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0 size-10">
                                        <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                          <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                          <circle className="stroke-current text-muted-foreground/35" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="113.09733552923255"></circle>
                                        </svg>
                                        <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                          {"0"}
                                          {"%"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"No runs"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"0"}
                                          {"/"}
                                          {"0"}
                                          {"runs"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        {"Expense Approvals"}
                                      </span>
                                      <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0">
                                          {"Webhook"}
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="gap-1.5 inline-flex items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                            <AvatarImage className="rounded-full" alt="Lena Wade" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate">
                                            {"Lena Wade"}
                                          </span>
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="font-mono tracking-wide truncate">
                                          {"finance/expense-approvals"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                        {"Not run yet"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"On expense filed"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                      <span className="bg-muted-foreground/50 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Paused"}
                                    </Badge>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open Expense Approvals in the editor">
                                        <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Star Expense Approvals" aria-pressed="false">
                                        <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Expense Approvals" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rmmon5lninpflpflb_">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="19" cy="12" r="1"></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-16 data-[state=selected]:bg-muted/50 group/workflow-row hover:bg-muted/40" data-row-id="wf_2q9r6s">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0 size-10">
                                        <svg className="-rotate-90 absolute inset-0 size-10" viewBox="0 0 44 44" aria-hidden="true">
                                          <circle className="stroke-muted-foreground/20" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25"></circle>
                                          <circle className="dark:text-amber-400 stroke-current text-amber-500" cx="22" cy="22" r="18" fill="none" strokeWidth="3.25" strokeLinecap="round" strokeDasharray="113.09733552923255" strokeDashoffset="20.357520395261858"></circle>
                                        </svg>
                                        <span className="absolute flex font-medium inset-0 items-center justify-center leading-none tabular-nums text-[9px] text-muted-foreground">
                                          {"82"}
                                          {"%"}
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium tabular-nums text-foreground text-sm">
                                          {"82% success"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          {"23"}
                                          {"/"}
                                          {"28"}
                                          {"runs"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        {"Inventory Restock"}
                                      </span>
                                      <div className="flex flex-wrap gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0">
                                          {"Schedule"}
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="gap-1.5 inline-flex items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                            <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                          </Avatar>
                                          <span className="truncate">
                                            {"Tomas Lindqvist"}
                                          </span>
                                        </span>
                                        <span className="bg-muted-foreground/45 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="font-mono tracking-wide truncate">
                                          {"ops/inventory-restock"}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium tabular-nums text-foreground text-sm truncate">
                                        {"Oct 06, 06:00"}
                                      </span>
                                      <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                        <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="M12 6v6l4 2"></path>
                                        </svg>
                                        {"Daily at 06:00"}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5" aria-hidden="true"></span>
                                      {"Active"}
                                    </Badge>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Open Inventory Restock in the editor">
                                        <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Star Inventory Restock" aria-pressed="false">
                                        <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Inventory Restock" aria-haspopup="menu" aria-expanded="false" id="base-ui-_R_rmmqn5lninpflpflb_">
                                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="1"></circle>
                                          <circle cx="19" cy="12" r="1"></circle>
                                          <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
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
                    </DataGridScrollArea>
                    </DataGridProvider>
                  </div>
                  <div className="border-t px-4 py-3">
                    <DataGridProvider>
                    <DataGridPagination className="py-0">
                      <div className="flex flex-wrap gap-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                        <div className="text-muted-foreground text-sm">
                          {"Rows per page"}
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_R_9vinpflpflb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                          <SelectValue className="flex flex-1 text-left">
                            {"5"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_R_9vinpflpflb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="5" />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          {"1"}
                          {"-"}
                          {"5"}
                          {"of"}
                          {"12"}
                          {"workflows"}
                        </div>
                        <div className="flex gap-1 items-center order-1">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
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
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0">
                            {"3"}
                          </Button>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 size-7 text-sm" type="button" tabIndex="0">
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
                  </div>
                </Card>
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
  </>
  )
}
