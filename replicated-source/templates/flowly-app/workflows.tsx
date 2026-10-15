import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
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
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div className="[--header-height:50px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
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
                <SidebarContent className="flex-row gap-0 md:flex-col no-scrollbar" sidebar="content">
                  <SidebarGroup className="p-2" sidebar="group">
                    <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                      <SidebarMenu className="gap-0.5" sidebar="menu">
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_f6cpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Dashboard" href="/dashboard">
                            <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_facpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflow Editor" href="/workflow-editor">
                            <svg className="lucide lucide-spline-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                              <path d="M5 17A12 12 0 0 1 17 5"></path>
                              <circle cx="19" cy="5" r="2"></circle>
                              <circle cx="5" cy="19" r="2"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
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
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_ficpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflows" href="/workflows" data-active="" aria-current="page">
                            <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                              <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                              <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
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
                        </SidebarMenuItem>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fqcpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Settings" href="/settings">
                            <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
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
        </div>
      </Sidebar>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-none overflow-hidden shadow-none">
        <header className="bg-background border-b border-border flex gap-2 h-(--header-height) items-center pe-2 ps-3 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-2 items-center md:flex-none min-w-0">
            <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
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
                    Workflows
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center shrink-0">
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  <span className="md:not-sr-only sr-only">
                    New workflow
                  </span>
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More options" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_7l_">
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
        </header>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r hidden md:border-r-0 md:flex md:invisible md:w-0 overflow-hidden shrink-0 w-(--sidebar-width-inner)" aria-label="Workflows navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)"></div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="-m-4 flex flex-1 flex-col">
              <main className="flex flex-1 flex-col gap-4 p-4 w-full" aria-labelledby="page-heading">
                <h1 className="sr-only" id="page-heading">
                  Workflows
                </h1>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <div className="flex flex-col gap-3 lg:flex-row lg:gap-4 lg:items-center lg:min-h-12 lg:py-0 px-4 py-3">
                    <div className="flex gap-2 items-center min-w-0">
                      <svg className="lucide lucide-workflow shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                        <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                        <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                      </svg>
                      <h2 className="font-medium text-foreground text-sm truncate">
                        Workflows
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap lg:ml-auto min-w-0">
                      <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg shrink-0" data-orientation="horizontal" role="group" variant="outline" size="default" spacing="0" aria-label="Workflows view" style={{"--gap": "0"}}>
                        <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2 rounded-lg text-sm transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Card view">
                          <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                          </svg>
                        </ToggleGroupItem>
                        <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2 rounded-lg text-sm transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="List view">
                          <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 5h.01"></path>
                            <path d="M3 12h.01"></path>
                            <path d="M3 19h.01"></path>
                            <path d="M8 5h13"></path>
                            <path d="M8 12h13"></path>
                            <path d="M8 19h13"></path>
                          </svg>
                        </ToggleGroupItem>
                      </ToggleGroup>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-secondary aria-expanded:text-secondary-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-secondary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] rounded-lg size-8 text-secondary-foreground text-sm" type="button" tabIndex="0" aria-label="Hide filter row" aria-pressed="true">
                        <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                        </svg>
                      </Button>
                      <Popover>
                      <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7r_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M14 17H5"></path>
                          <path d="M19 7h-9"></path>
                          <circle cx="17" cy="17" r="3"></circle>
                          <circle cx="7" cy="7" r="3"></circle>
                        </svg>
                        Display
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                    <div className="[&::-webkit-scrollbar]:hidden [scrollbar-width:none] overflow-x-auto overflow-y-visible px-4">
                      <TabsList className="data-[variant=line]:rounded-none gap-6 group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:bottom-[-1px] border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 pt-3 px-0 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_7s_" compositeItemActive="">
                          All
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:bottom-[-1px] border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 pt-3 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7t_">
                          Active
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:bottom-[-1px] border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 pt-3 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7u_">
                          Paused
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:bottom-[-1px] border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 pb-3 pt-3 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7v_">
                          Failing
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </Tabs>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="bg-muted/40 flex flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
                    <Filters>
                      <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                        <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg items-stretch w-fit" role="group" aria-label="Last run is no value" ruleId="last-run-1" tabIndex="0" index="0">
                          <div className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-1.5 items-center px-2.5 rounded-lg text-sm" title="Last run">
                            <span className="flex items-center">
                              <span>
                                Last run
                              </span>
                            </span>
                          </div>
                          <Popover>
                          <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_82_" aria-haspopup="dialog" aria-expanded="false">
                            is
                          </PopoverTrigger>
                          </Popover>
                          <Popover>
                          <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" aria-label="Select..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_84_" aria-haspopup="dialog" aria-expanded="false">
                            Select
                          </PopoverTrigger>
                          </Popover>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Last run filter options" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_88_">
                            <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </FilterChip>
                      </div>
                      <Popover>
                      <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add workflow filter" baseUiClickTrigger="" id="base-ui-_r_8b_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2.25 3.25h11.5L9.5 8.15v2.95l-3 1.5V8.15L2.25 3.25Z"></path>
                          <path d="M11.5 9.75v4"></path>
                          <path d="M9.5 11.75h4"></path>
                        </svg>
                      </PopoverTrigger>
                      </Popover>
                      <div className="sr-only" aria-live="polite" role="status">
                        <span></span>
                      </div>
                    </Filters>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg self-start sm:self-auto text-sm" type="button" tabIndex="0">
                      Clear all
                    </Button>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative">
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                        <div role="presentation" style={{minWidth: "fit-content"}}>
                          <DataGridTableViewport>
                            <DataGridTable>
                              <colgroup>
                                <col style={{width: "280px"}} />
                                <col style={{width: "200px"}} />
                                <col style={{width: "104px"}} />
                                <col style={{width: "180px"}} />
                                <col style={{width: "140px"}} />
                                <col style={{width: "90px"}} />
                                <col style={{width: "112px"}} />
                              </colgroup>
                              <thead>
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="name" style={{width: "280px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Workflow
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" style={{width: "200px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Owner
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="enabled" style={{width: "104px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Status
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="tags" style={{width: "180px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                      Tags
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" data-col-id="lastRun" style={{width: "140px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Last run
                                        <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 5v14"></path>
                                          <path d="m19 12-7 7-7-7"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="runs" style={{width: "90px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        Runs
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                      Actions
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <DataGridTableBody>
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_6k5m1n">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Order Fulfillment
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Event
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On paid order
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Tomas Lindqvist
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Solutions Engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_8d_" aria-checked="true" size="sm" aria-label="Pause Order Fulfillment">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_8e_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Operations, Critical">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Operations
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Critical
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:44
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      3,946
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Order Fulfillment">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Order Fulfillment">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Order Fulfillment" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_8j_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_8k2m4p">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Lead Routing
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Webhook
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On new lead
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Ines Marchetti
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Head of Operations
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_8l_" aria-checked="true" size="sm" aria-label="Pause Lead Routing">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_8m_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Sales, AI">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Sales
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          AI
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:42
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      1,208
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Lead Routing">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Lead Routing">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Lead Routing" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_8r_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_5n1q3r">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Support Triage
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Event
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On new ticket
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Hanna Berg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Hanna Berg
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Support Lead
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_8t_" aria-checked="true" size="sm" aria-label="Pause Support Triage">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_8u_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Support, AI, Critical">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Support
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          AI
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                                        +1
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-destructive-foreground text-xs transition-shadow">
                                        <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Failed
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:37
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      904
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Support Triage">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Support Triage">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Support Triage" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_93_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_5t1u3v">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Social Mentions Alert
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Event
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On brand mention
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Ines Marchetti
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Head of Operations
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_95_" aria-checked="true" size="sm" aria-label="Pause Social Mentions Alert">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_96_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Marketing, AI">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Marketing
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          AI
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-destructive-foreground text-xs transition-shadow">
                                        <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Failed
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:31
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      397
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Social Mentions Alert">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Social Mentions Alert">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Social Mentions Alert" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_9b_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_7h3j5k">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Onboarding Emails
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Event
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On signup
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Hanna Berg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Hanna Berg
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Support Lead
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_9d_" aria-checked="true" size="sm" aria-label="Pause Onboarding Emails">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_9e_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Marketing, Growth">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Marketing
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Growth
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:28
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      465
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Onboarding Emails">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Onboarding Emails">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Onboarding Emails" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_9j_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_1p7r4s">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Meeting Notes to CRM
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Event
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          On call ended
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Nick Bold
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Workspace Admin
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_9l_" aria-checked="true" size="sm" aria-label="Pause Meeting Notes to CRM">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_9m_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Sales, AI">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Sales
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          AI
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-destructive-foreground text-xs transition-shadow">
                                        <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Failed
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:10
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      184
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Meeting Notes to CRM">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Meeting Notes to CRM">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Meeting Notes to CRM" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_9r_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_4d2f8g">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Data Warehouse Export
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Schedule
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Every hour
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Omar Haddad
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Data Engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_9t_" aria-checked="true" size="sm" aria-label="Pause Data Warehouse Export">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_9u_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Data">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Data
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 09:00
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      672
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Data Warehouse Export">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Data Warehouse Export">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Data Warehouse Export" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_a3_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_2h7c9d">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Invoice Reminders
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Schedule
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Daily at 08:00
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Tomas Lindqvist
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Solutions Engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_a5_" aria-checked="true" size="sm" aria-label="Pause Invoice Reminders">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_a6_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Finance">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Finance
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 08:00
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      28
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Invoice Reminders">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Invoice Reminders">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Invoice Reminders" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_ab_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_2q9r6s">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Inventory Restock
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Schedule
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Daily at 06:00
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Tomas Lindqvist
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Solutions Engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_ad_" aria-checked="true" size="sm" aria-label="Pause Inventory Restock">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_ae_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Operations">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Operations
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 6, 06:00
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      28
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Inventory Restock">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Inventory Restock">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Inventory Restock" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_aj_">
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
                                <tr className="[&:not(:last-child)>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 group/work-row hover:bg-muted/40" data-row-id="wf_9t4v6w">
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex flex-col gap-1 min-w-0">
                                      <span className="font-medium leading-5 text-foreground text-sm truncate">
                                        Churn Risk Digest
                                      </span>
                                      <div className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                                        <span className="truncate">
                                          Schedule
                                        </span>
                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Mondays at 07:00
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center min-w-0">
                                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                        <AvatarImage className="rounded-full" alt="Omar Haddad" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm truncate">
                                          Omar Haddad
                                        </div>
                                        <div className="text-muted-foreground text-sm truncate">
                                          Data Engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_al_" aria-checked="true" size="sm" aria-label="Pause Churn Risk Digest">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_r_am_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      <span className="text-foreground text-sm">
                                        On
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-1 items-center min-w-0" title="Growth, Data">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Growth
                                        </span>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-xs transition-shadow">
                                        <span className="truncate">
                                          Data
                                        </span>
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex flex-col gap-1 items-start min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 justify-start max-w-full min-w-0 outline-none px-1.25 py-0.5 relative rounded-sm shrink text-success-foreground text-xs transition-shadow">
                                        <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Succeeded
                                        </span>
                                      </Badge>
                                      <span className="leading-4 tabular-nums text-muted-foreground text-xs truncate">
                                        Oct 5, 07:00
                                      </span>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="block tabular-nums text-sm truncate">
                                      4
                                    </span>
                                  </td>
                                  <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                    <div className="flex gap-1 items-center justify-end">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Edit Churn Risk Digest">
                                        <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                          <path d="m15 5 4 4"></path>
                                        </svg>
                                      </Button>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-destructive in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex="0" aria-label="Delete Churn Risk Digest">
                                        <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M10 11v6"></path>
                                          <path d="M14 11v6"></path>
                                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                          <path d="M3 6h18"></path>
                                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                      </Button>
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="More actions for Churn Risk Digest" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_ar_">
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
                            </DataGridTable>
                          </DataGridTableViewport>
                        </div>
                      </div>
                    </DataGridScrollArea>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="px-4 py-3">
                    <DataGridPagination className="py-0">
                      <div className="flex flex-wrap gap-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
                        <div className="text-muted-foreground text-sm">
                          Rows per page
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_at_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                          <SelectValue className="flex flex-1 text-left">
                            10
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_at_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          1 - 10 of 12 workflows
                        </div>
                        <div className="flex gap-1 items-center order-1">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
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
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 size-7 text-sm" type="button" tabIndex="0">
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
                  </div>
                </Card>
              </main>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      0
    </span>
  </>
  )
}
