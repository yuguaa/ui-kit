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
  ContextMenu,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_facpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflow Editor" href="/workflow-editor" data-active="" aria-current="page">
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_ficpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Workflows" href="/workflows">
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
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 hidden items-center lg:flex motion-reduce:transition-none outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse inner sidebar" style={{left: "calc(var(--sidebar-width-inner) + var(--sidebar-width))"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          Collapse
        </span>
      </button>
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
                    Workflow Editor
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <div className="flex gap-2 items-center">
              <Popover>
              <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center max-md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Keyboard shortcuts" baseUiClickTrigger="" id="base-ui-_r_o_" aria-haspopup="dialog" aria-expanded="false">
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
                  Ask AI
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  Add step
                </span>
              </Button>
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  Run once
                </span>
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Workflow actions" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_s_">
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
                    Step Library
                  </h2>
                  <p className="leading-snug text-muted-foreground text-xs">
                    Drag a step onto the canvas, or click it to add one.
                  </p>
                </div>
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full scroll-fade-y" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2u_-viewport" tabIndex="0" data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "301px"}}>
                      <div className="flex flex-col py-1">
                        <p id="_r_2t_" hidden>
                          Adds this step to the middle of the canvas. Drag it to put it somewhere else.
                        </p>
                        <div role="group" aria-labelledby="_r_2v_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_2v_">
                            Messages
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                              </span>
                              <span className="truncate">
                                Send Email
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                  <path d="M7 11h10"></path>
                                  <path d="M7 15h6"></path>
                                  <path d="M7 7h8"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Send SMS
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-messages-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Post to Channel
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-bell-ring" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                  <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Send Push
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
                        <div role="group" aria-labelledby="_r_30_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_30_">
                            Data
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-database-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M19 16v6"></path>
                                  <path d="M21 12.536V5"></path>
                                  <path d="M22 19h-6"></path>
                                  <path d="M3 12A9 3 0 0 0 15.1824 14.8061"></path>
                                  <path d="M3 5V19A9 3 0 0 0 13.318 21.968"></path>
                                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                </svg>
                              </span>
                              <span className="truncate">
                                Create Record
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Update Record
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-database-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M21 11.693V5"></path>
                                  <path d="m22 22-1.875-1.875"></path>
                                  <path d="M3 12a9 3 0 0 0 8.697 2.998"></path>
                                  <path d="M3 5v14a9 3 0 0 0 9.28 2.999"></path>
                                  <circle cx="18" cy="18" r="3"></circle>
                                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                </svg>
                              </span>
                              <span className="truncate">
                                Find Record
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                  <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                  <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Send Webhook
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-sheet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                  <line x1="3" x2="21" y1="9" y2="9"></line>
                                  <line x1="3" x2="21" y1="15" y2="15"></line>
                                  <line x1="9" x2="9" y1="9" y2="21"></line>
                                  <line x1="15" x2="15" y1="9" y2="21"></line>
                                </svg>
                              </span>
                              <span className="truncate">
                                Add Sheet Row
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-braces" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                                  <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Format Data
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
                        <div role="group" aria-labelledby="_r_31_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_31_">
                            Delays
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Time Delay
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M16 14v2.2l1.6 1"></path>
                                  <path d="M16 2v4"></path>
                                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                  <path d="M3 10h5"></path>
                                  <path d="M8 2v4"></path>
                                  <circle cx="16" cy="16" r="6"></circle>
                                </svg>
                              </span>
                              <span className="truncate">
                                Wait Until
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-hourglass" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M5 22h14"></path>
                                  <path d="M5 2h14"></path>
                                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Wait for Event
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
                        <div role="group" aria-labelledby="_r_32_">
                          <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_32_">
                            Flow Control
                          </p>
                          <div className="flex flex-col gap-0.5 px-2">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                                  <circle cx="18" cy="6" r="3"></circle>
                                  <circle cx="6" cy="18" r="3"></circle>
                                </svg>
                              </span>
                              <span className="truncate">
                                If/Else Branch
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Filter
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-repeat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m17 2 4 4-4 4"></path>
                                  <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                                  <path d="m7 22-4-4 4-4"></path>
                                  <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Loop Over Items
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Run Action
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-dragging:cursor-grabbing data-dragging:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground touch-none w-full" type="button" tabIndex="0" aria-describedby="_r_2t_">
                              <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                                <svg className="lucide lucide-octagon-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m15 9-6 6"></path>
                                  <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"></path>
                                  <path d="m9 9 6 6"></path>
                                </svg>
                              </span>
                              <span className="truncate">
                                Stop Workflow
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
                    <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_2u_-scrollbar" aria-hidden="true" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "16px"}}>
                      <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                    </div>
                  </ScrollArea>
                </div>
                <div className="shrink-0">
                  <div className="border-border border-t p-3">
                    <button className="**:data-[slot=progress-indicator]:bg-destructive -m-1.5 block duration-150 focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:bg-muted motion-reduce:transition-none outline-none p-1.5 rounded-md space-y-1.5 text-destructive text-start transition-colors w-[calc(100%+--spacing(3))]" type="button">
                      <div className="flex gap-1 items-center">
                        <span className="[&_svg]:size-4 shrink-0 size-4">
                          <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                            <path d="M3 3v5h5"></path>
                            <path d="M12 7v5l4 2"></path>
                          </svg>
                        </span>
                        <p className="font-medium text-foreground text-xs truncate">
                          Last Run
                        </p>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                          Failed
                        </Badge>
                      </div>
                      <p className="leading-snug line-clamp-2 text-muted-foreground text-xs">
                        Enrich company failed.
                      </p>
                      <Progress className="py-0.5" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" aria-valuetext="40%" role="progressbar" aria-label="Last Run: 40%">
                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "40%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          x
                        </span>
                      </Progress>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="-m-4 flex flex-1 flex-col min-h-0">
              <div className="bg-background flex flex-1 flex-col min-h-0 w-full">
                <h1 className="sr-only">
                  Lead Routing
                </h1>
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  <div className="@container [--xy-attribution-background-color:transparent] [--xy-background-color:transparent] [--xy-background-pattern-color:var(--border)] [--xy-connectionline-stroke-width:1] [--xy-connectionline-stroke:var(--primary)] [--xy-edge-stroke-selected:var(--primary)] [--xy-edge-stroke:color-mix(in_oklab,var(--muted-foreground)_45%,var(--background))] [--xy-handle-background-color:var(--primary)] [--xy-handle-border-color:var(--card)] [--xy-minimap-background-color:var(--card)] [--xy-minimap-mask-background-color:color-mix(in_oklab,var(--muted)_70%,transparent)] [--xy-minimap-node-background-color:color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] [--xy-selection-background-color:color-mix(in_oklab,var(--primary)_8%,transparent)] [--xy-selection-border:1px_dashed_var(--primary)] bg-muted/30 flex-1 min-h-0 min-w-0 relative">
                    <div className="data-[ready]:opacity-100 duration-200 ease-out light motion-reduce:transition-none opacity-0 react-flow transition-opacity" data-testid="rf__wrapper" role="application" data-ready="true" style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: "0"}}>
                      <div className="react-flow__renderer" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                        <div className="draggable react-flow__pane" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                          <div className="react-flow__container react-flow__viewport xyflow__viewport" style={{transform: "translate(45px, 120px) scale(0.804386)"}}>
                            <div className="react-flow__edges">
                              <svg style={{zIndex: "0"}}>
                                <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="trigger-filter" data-testid="rf__edge-trigger-filter" aria-label="Edge from trigger to filter" aria-describedby="react-flow__edge-desc-1">
                                  <path className="motion-reduce:animate-none! react-flow__edge-path" id="trigger-filter" d="M243.0425299890949 202.01744820065431L263.0425299890949 202.01744820065431L270.39258451472193 202.01744820065431L270.39258451472193 202.01744820065431L276.4994547437296 202.01744820065431L296.4994547437296 202.01744820065431" fill="none" style={{strokeWidth: "1.24318"}}></path>
                                  <path className="react-flow__edge-interaction" d="M243.0425299890949 202.01744820065431L263.0425299890949 202.01744820065431L270.39258451472193 202.01744820065431L270.39258451472193 202.01744820065431L276.4994547437296 202.01744820065431L296.4994547437296 202.01744820065431" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-source" cx="259" cy="201.5" r="16" stroke="transparent" fill="transparent"></circle>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-target" cx="281" cy="201.5" r="16" stroke="transparent" fill="transparent"></circle>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="filter-enrich" data-testid="rf__edge-filter-enrich" aria-label="Edge from filter to enrich" aria-describedby="react-flow__edge-desc-1">
                                  <path className="motion-reduce:animate-none! react-flow__edge-path" id="filter-enrich" d="M542.649945474373 202.01744820065431L562.649945474373 202.01744820065431L 566.3249727371865,202.01744820065431Q 570,202.01744820065431 570,198.3424209378408L 570,85.10359869138499Q 570,81.42857142857143 573.6750272628135,81.42857142857143L577.3500545256271 81.42857142857143L597.3500545256271 81.42857142857143" fill="none" style={{strokeWidth: "1.24318"}}></path>
                                  <path className="react-flow__edge-interaction" d="M542.649945474373 202.01744820065431L562.649945474373 202.01744820065431L 566.3249727371865,202.01744820065431Q 570,202.01744820065431 570,198.3424209378408L 570,85.10359869138499Q 570,81.42857142857143 573.6750272628135,81.42857142857143L577.3500545256271 81.42857142857143L597.3500545256271 81.42857142857143" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-source" cx="559" cy="201.5" r="16" stroke="transparent" fill="transparent"></circle>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-target" cx="581" cy="81.5" r="16" stroke="transparent" fill="transparent"></circle>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="filter-notify" data-testid="rf__edge-filter-notify" aria-label="Edge from filter to notify" aria-describedby="react-flow__edge-desc-1">
                                  <path className="motion-reduce:animate-none! react-flow__edge-path" id="filter-notify" d="M542.649945474373 202.01744820065431L562.649945474373 202.01744820065431L 566.3249727371865,202.01744820065431Q 570,202.01744820065431 570,205.69247546346782L 570,317.6881134133042Q 570,321.3631406761178 573.6750272628135,321.3631406761178L577.3500545256271 321.3631406761178L597.3500545256271 321.3631406761178" fill="none" style={{strokeWidth: "1.24318"}}></path>
                                  <path className="react-flow__edge-interaction" d="M542.649945474373 202.01744820065431L562.649945474373 202.01744820065431L 566.3249727371865,202.01744820065431Q 570,202.01744820065431 570,205.69247546346782L 570,317.6881134133042Q 570,321.3631406761178 573.6750272628135,321.3631406761178L577.3500545256271 321.3631406761178L597.3500545256271 321.3631406761178" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-source" cx="559" cy="201.5" r="16" stroke="transparent" fill="transparent"></circle>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-target" cx="581" cy="321.5" r="16" stroke="transparent" fill="transparent"></circle>
                                </g>
                              </svg>
                              <svg style={{zIndex: "0"}}>
                                <g className="animated nopan react-flow__edge react-flow__edge-labeled selectable" tabIndex="0" role="group" aria-roledescription="edge" data-id="enrich-deal" data-testid="rf__edge-enrich-deal" aria-label="Edge from enrich to deal" aria-describedby="react-flow__edge-desc-1">
                                  <path className="motion-reduce:animate-none! react-flow__edge-path" id="enrich-deal" d="M843.5005452562705 81.42857142857143L863.5005452562705 81.42857142857143L870.8505997818976 81.42857142857143L870.8505997818976 81.42857142857143L876.9574700109052 81.42857142857143L896.9574700109052 81.42857142857143" fill="none" style={{strokeWidth: "1.24318"}}></path>
                                  <path className="react-flow__edge-interaction" d="M843.5005452562705 81.42857142857143L863.5005452562705 81.42857142857143L870.8505997818976 81.42857142857143L870.8505997818976 81.42857142857143L876.9574700109052 81.42857142857143L896.9574700109052 81.42857142857143" fill="none" strokeOpacity="0" strokeWidth="20"></path>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-source" cx="859" cy="81.5" r="16" stroke="transparent" fill="transparent"></circle>
                                  <circle className="react-flow__edgeupdater react-flow__edgeupdater-target" cx="881" cy="81.5" r="16" stroke="transparent" fill="transparent"></circle>
                                </g>
                              </svg>
                            </div>
                            <div className="react-flow__edgelabel-renderer">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 nodrag nopan outline-none px-1.25 py-0.5 rounded-sm text-xs transition-shadow" style={{transform: "translate(-50%, -50%) translate(570px, 142.345px)"}}>
                                True
                              </Badge>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 nodrag nopan outline-none px-1.25 py-0.5 rounded-sm text-xs transition-shadow" style={{transform: "translate(-50%, -50%) translate(570px, 261.69px)"}}>
                                False
                              </Badge>
                            </div>
                            <div className="react-flow__nodes" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-step selectable" data-id="trigger" data-testid="rf__node-trigger" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(0px, 160px)", pointerEvents: "all", visibility: "visible"}}>
                                <ContextMenu>
                                <ContextMenuTrigger className="block pointer-events-auto">
                                  <Item className="[a]:hover:bg-muted bg-card border border-border data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 p-2 rounded-lg text-sm w-60" variant="outline" size="xs">
                                    <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="solid" size="sm">
                                      <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                                      </svg>
                                    </IconTile>
                                    <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-4 text-sm underline-offset-4 w-full">
                                        <span className="truncate">
                                          Form submitted
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-4 line-clamp-1 text-left text-muted-foreground text-sm">
                                        Webhook: demo.request
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          0.2s
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        Success
                                      </Badge>
                                    </ItemFooter>
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-right source transition-[scale]" data-nodeid="trigger" data-handlepos="right" data-id="1-trigger-null-source"></div>
                                  </Item>
                                </ContextMenuTrigger>
                                </ContextMenu>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-step selectable" data-id="filter" data-testid="rf__node-filter" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(300px, 160px)", pointerEvents: "all", visibility: "visible"}}>
                                <ContextMenu>
                                <ContextMenuTrigger className="block pointer-events-auto">
                                  <Item className="[a]:hover:bg-muted bg-card border border-border data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 p-2 rounded-lg text-sm w-60" variant="outline" size="xs">
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-left target transition-[scale]" data-nodeid="filter" data-handlepos="left" data-id="1-filter-null-target"></div>
                                    <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                      <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                                        <circle cx="18" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                      </svg>
                                    </IconTile>
                                    <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-4 text-sm underline-offset-4 w-full">
                                        <span className="truncate">
                                          Plan is Enterprise
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-4 line-clamp-1 text-left text-muted-foreground text-sm">
                                        company.size &gt; 200
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="Ines Marchetti" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          0.1s
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                        Success
                                      </Badge>
                                    </ItemFooter>
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-right source transition-[scale]" data-nodeid="filter" data-handlepos="right" data-id="1-filter-null-source"></div>
                                  </Item>
                                </ContextMenuTrigger>
                                </ContextMenu>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-step selectable" data-id="enrich" data-testid="rf__node-enrich" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(600px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                                <ContextMenu>
                                <ContextMenuTrigger className="block pointer-events-auto">
                                  <Item className="[a]:hover:bg-muted bg-card border border-border data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 p-2 rounded-lg text-sm w-60" variant="outline" size="xs">
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-left target transition-[scale]" data-nodeid="enrich" data-handlepos="left" data-id="1-enrich-null-target"></div>
                                    <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                      <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                                      </svg>
                                    </IconTile>
                                    <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-4 text-sm underline-offset-4 w-full">
                                        <span className="truncate">
                                          Enrich company
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-4 line-clamp-1 text-left text-muted-foreground text-sm">
                                        Clearbit lookup
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          8.0s
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-circle-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <path d="m15 9-6 6"></path>
                                          <path d="m9 9 6 6"></path>
                                        </svg>
                                        Failed
                                      </Badge>
                                    </ItemFooter>
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-right source transition-[scale]" data-nodeid="enrich" data-handlepos="right" data-id="1-enrich-null-source"></div>
                                  </Item>
                                </ContextMenuTrigger>
                                </ContextMenu>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-step selectable" data-id="notify" data-testid="rf__node-notify" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(600px, 280px)", pointerEvents: "all", visibility: "visible"}}>
                                <ContextMenu>
                                <ContextMenuTrigger className="block pointer-events-auto">
                                  <Item className="[a]:hover:bg-muted bg-card border border-border data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 p-2 rounded-lg text-sm w-60" variant="outline" size="xs">
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-left target transition-[scale]" data-nodeid="notify" data-handlepos="left" data-id="1-notify-null-target"></div>
                                    <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                      <svg className="lucide lucide-messages-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                        <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
                                      </svg>
                                    </IconTile>
                                    <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-4 text-sm underline-offset-4 w-full">
                                        <span className="truncate">
                                          Notify sales
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-4 line-clamp-1 text-left text-muted-foreground text-sm">
                                        Slack #inbound-leads
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="Hanna Berg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          Not run
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M5 12h14"></path>
                                        </svg>
                                        Skipped
                                      </Badge>
                                    </ItemFooter>
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-right source transition-[scale]" data-nodeid="notify" data-handlepos="right" data-id="1-notify-null-source"></div>
                                  </Item>
                                </ContextMenuTrigger>
                                </ContextMenu>
                              </div>
                              <div className="draggable group/node nopan react-flow__node react-flow__node-step selectable" data-id="deal" data-testid="rf__node-deal" tabIndex="0" role="group" aria-roledescription="node" aria-describedby="react-flow__node-desc-1" style={{zIndex: "0", transform: "translate(900px, 40px)", pointerEvents: "all", visibility: "visible"}}>
                                <ContextMenu>
                                <ContextMenuTrigger className="block pointer-events-auto">
                                  <Item className="[a]:hover:bg-muted bg-card border border-border data-selected:border-primary data-selected:ring-[3px] data-selected:ring-primary/20 gap-2 group-focus-visible/node:border-ring in-data-[slot=dropdown-menu-content]:p-0 p-2 rounded-lg text-sm w-60" variant="outline" size="xs">
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-left target transition-[scale]" data-nodeid="deal" data-handlepos="left" data-id="1-deal-null-target"></div>
                                    <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                                      <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                      </svg>
                                    </IconTile>
                                    <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                      <ItemTitle className="font-medium gap-2 leading-4 text-sm underline-offset-4 w-full">
                                        <span className="truncate">
                                          Create deal
                                        </span>
                                      </ItemTitle>
                                      <ItemDescription className="group-data-[size=xs]/item:text-xs leading-4 line-clamp-1 text-left text-muted-foreground text-sm">
                                        HubSpot pipeline: Inbound
                                      </ItemDescription>
                                    </ItemContent>
                                    <ItemFooter className="-mb-2 -mx-2 border-t gap-2 grow px-2 py-1.5">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-4" size="default">
                                          <AvatarImage className="rounded-full" alt="Tomas Lindqvist" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <span className="tabular-nums text-muted-foreground text-xs truncate">
                                          Not run
                                        </span>
                                      </div>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <circle cx="12" cy="12" r="10"></circle>
                                          <circle cx="12" cy="12" r="1"></circle>
                                        </svg>
                                        Idle
                                      </Badge>
                                    </ItemFooter>
                                    <div className="[&.connectingto]:scale-[1.75] after:-inset-2 after:absolute after:content-[''] after:rounded-full connectable connectableend connectablestart connectionindicator duration-150 ease-out hover:scale-[1.75] motion-reduce:transition-none nodrag nopan react-flow__handle react-flow__handle-right source transition-[scale]" data-nodeid="deal" data-handlepos="right" data-id="1-deal-null-source"></div>
                                  </Item>
                                </ContextMenuTrigger>
                                </ContextMenu>
                              </div>
                            </div>
                            <div className="react-flow__viewport-portal"></div>
                          </div>
                        </div>
                      </div>
                      <svg className="react-flow__background" data-testid="rf__background" style={{position: "absolute", width: "100%", height: "100%", top: "0px", left: "0px"}}>
                        <pattern id="pattern-1" x="6.389473684210529" y="4.168421052631587" width="19.305263157894736" height="19.305263157894736" patternUnits="userSpaceOnUse" patterntransform="translate(-9.652631578947368,-9.652631578947368)">
                          <circle className="dots react-flow__background-pattern" cx="0.8043859649122806" cy="0.8043859649122806" r="0.8043859649122806"></circle>
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)"></rect>
                      </svg>
                      <div className="@max-[540px]:hidden bottom max-md:hidden react-flow__minimap react-flow__panel right" data-testid="rf__minimap">
                        <svg className="react-flow__minimap-svg" width="200" height="150" viewBox="-87.24045801526718 -298.73718647764457 1314.4809160305344 1001.5092693565978" role="img" aria-labelledby="react-flow__minimap-desc-1">
                          <title id="react-flow__minimap-desc-1">
                            Mini Map
                          </title>
                          <rect className="react-flow__minimap-node" x="0" y="160" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                          <rect className="react-flow__minimap-node" x="300" y="160" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                          <rect className="react-flow__minimap-node" x="600" y="40" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                          <rect className="react-flow__minimap-node" x="600" y="280" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                          <rect className="react-flow__minimap-node" x="900" y="40" rx="5" ry="5" width="240" height="83" shape-rendering="crispEdges"></rect>
                          <path className="react-flow__minimap-mask" d={"M-118.53762268266085,-330.0343511450383h1377.0752453653217v1064.103598691385h-1377.0752453653217z\n        M-55.94329334787351,-149.18211559432933h1251.8865866957472v702.3991275899673h-1251.8865866957472z"} fillRule="evenodd" pointer-events="none"></path>
                        </svg>
                      </div>
                      <div className="bottom left m-6! react-flow__panel">
                        <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 flex-row gap-1 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 items-center overflow-hidden p-1 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="sm" role="group" aria-label="Canvas controls">
                          <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg" data-orientation="horizontal" role="group" size="sm" spacing="0.5" aria-label="Canvas tool" style={{"--gap": "0.5"}}>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 focus:z-10 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-0 rounded-[min(var(--radius-md),12px)] shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="default" size="sm" spacing="0.5" aria-label="Select" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:z-10 focus:z-10 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-0 rounded-[min(var(--radius-md),12px)] shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="sm" spacing="0.5" aria-label="Pan" id="base-ui-_r_12_" baseUiTooltipTrigger="">
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
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom out" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:not-hover:bg-transparent aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 tabular-nums text-[0.8rem] transition-all w-12 whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom level 80%" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_19_">
                              80%
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom in" id="base-ui-_r_1c_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                          <div className="flex gap-0.5 items-center" role="group" aria-label="History">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Undo" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9 14 4 9l5-5"></path>
                                <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="Redo" id="base-ui-_r_1g_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m15 14 5-5-5-5"></path>
                                <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-primary aria-pressed:text-primary-foreground bg-transparent dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-0 rounded-[min(var(--radius-md),12px)] text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex="0" aria-pressed="false" aria-label="Lock canvas" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </Card>
                      </div>
                      <div className="bottom center react-flow__attribution react-flow__panel" data-message="Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev?utm_source=attribution">
                        <a href="https://reactflow.dev?utm_source=attribution" target="_blank" rel="noopener noreferrer" aria-label="React Flow attribution">
                          React Flow
                        </a>
                      </div>
                      <div id="react-flow__node-desc-1" style={{display: "none"}}>
                        Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.
                      </div>
                      <div id="react-flow__edge-desc-1" style={{display: "none"}}>
                        Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.
                      </div>
                      <div id="react-flow__aria-live-1" aria-live="assertive" aria-atomic="true" style={{position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)"}}></div>
                    </div>
                  </div>
                  <aside className="duration-200 ease-linear motion-reduce:transition-none overflow-hidden shrink-0 transition-[width] w-0" aria-label="Step details" aria-hidden="true" inert="">
                    <div className="border-s h-full nokey w-(--inspector-width)">
                      <div className="bg-card flex flex-col h-full">
                        <header className="flex gap-3 items-start pt-3 px-4 shrink-0">
                          <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="outline" size="sm">
                            <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                          </IconTile>
                          <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                            <h2 className="font-semibold text-sm truncate"></h2>
                            <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                Action
                              </Badge>
                              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                              <span className="truncate"></span>
                            </div>
                          </div>
                          <div className="-me-2 -mt-1.5 flex items-center">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex="0" aria-label="Close step details">
                              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </Button>
                          </div>
                        </header>
                        <Tabs className="flex-1 gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
                          <div className="border-b pb-3 pt-3 px-4 shrink-0">
                            <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1k_" compositeItemActive="" aria-controls="base-ui-_r_1n_">
                                Build
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1l_">
                                Status
                              </TabsTrigger>
                              <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1m_">
                                Logs
                              </TabsTrigger>
                            </TabsList>
                          </div>
                          <TabsContent className="[&[hidden]]:hidden flex flex-col min-h-0 text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_1n_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_1k_">
                            <ScrollArea className="flex-1 min-h-0 scroll-fade-y" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                              <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1o_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                <div className="flex flex-col gap-5 p-4">
                                  <section className="flex flex-col gap-3" aria-labelledby="step-facts">
                                    <h3 className="font-semibold text-sm" id="step-facts">
                                      Details
                                    </h3>
                                    <dl className="flex flex-col gap-3">
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Type
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Name
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Description
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Owner
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right"></dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Incoming
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                                          0
                                        </dd>
                                      </div>
                                      <div className="flex gap-4 items-start justify-between text-sm">
                                        <dt className="shrink-0 text-muted-foreground">
                                          Outgoing
                                        </dt>
                                        <dd className="break-words font-medium min-w-0 tabular-nums text-right">
                                          0
                                        </dd>
                                      </div>
                                    </dl>
                                  </section>
                                </div>
                              </div>
                            </ScrollArea>
                          </TabsContent>
                        </Tabs>
                        <footer className="border-t p-4 shrink-0">
                          <div className="gap-3 grid grid-cols-2">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                              <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                <path d="m15 5 4 4"></path>
                              </svg>
                              Edit step
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                              Next step
                              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </Button>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </aside>
                  <button className="bottom-4 end-4 fixed invisible pointer-events-none size-8 z-40" type="button" tabIndex="-1" aria-hidden="true" inert=""></button>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] [--window-h:min(40rem,calc(100svh-2rem))] [--window-max-h:calc(100svh-2rem)] bg-popover bottom-4 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-(--window-h) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 max-sm:h-(--window-max-h) origin-bottom-right overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl rtl:origin-bottom-left shadow-md sm:data-[expanded=true]:h-(--window-max-h) sm:max-w-104 text-card-foreground text-sm w-[calc(100vw-2rem)] z-50" size="default" role="dialog" aria-modal="false" aria-labelledby="_r_1t_" aria-describedby="_r_1u_" data-state="closed" expanded="false" inert="">
                    <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
                      <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
                      <div className="flex gap-1 items-center min-h-12 px-3">
                        <div className="flex gap-2 items-center min-w-0 ps-1">
                          <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm normal-case text-sm tracking-normal truncate" id="_r_1t_" role="heading" aria-level="2">
                            Flowly AI
                          </CardTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                            Beta
                          </Badge>
                          <CardDescription className="sr-only text-muted-foreground text-sm" id="_r_1u_">
                            Answers from Lead Routing and what you attach.
                          </CardDescription>
                        </div>
                        <div className="flex gap-0.5 items-center ms-auto shrink-0">
                          <div className="flex gap-0.5 items-center" data-fold="controls">
                            <Tooltip>
                            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" disabled aria-label="New chat" id="base-ui-_r_20_" baseUiTooltipTrigger="">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                            <Tooltip>
                            <TooltipTrigger className="flex" id="base-ui-_r_23_" baseUiTooltipTrigger="">
                              <Popover>
                              <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat history" baseUiClickTrigger="" id="base-ui-_r_24_" aria-haspopup="dialog" aria-expanded="false">
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
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button group/expand hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_26_" baseUiTooltipTrigger="">
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
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Minimize chat" id="base-ui-_r_28_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 12h14"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_2a_" baseUiTooltipTrigger="">
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
                              Hi Nick
                            </EmptyTitle>
                            <EmptyDescription className="text-sm/relaxed">
                              I read Lead Routing, its last run and anything you attach.
                            </EmptyDescription>
                          </div>
                          <div className="flex flex-col gap-1" role="group" aria-labelledby="_r_2b_">
                            <p className="font-medium text-muted-foreground text-xs" id="_r_2b_">
                              Try Asking
                            </p>
                            <div className="flex flex-col">
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  Why did Enrich company fail?
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  Which steps were skipped?
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  How do I fix the timeout?
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  Notify sales when a deal is created
                                </span>
                              </Button>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg justify-start px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0">
                                <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <span className="min-w-0 truncate">
                                  Draft a run summary for the team
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pb-3 px-4 shrink-0">
                        <form>
                          <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical" invalid="false">
                            <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none sr-only text-sm" htmlFor="_r_2c_">
                              Ask a question
                            </FieldLabel>
                            <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                              <textarea className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 max-h-32 md:text-sm min-h-14 outline-none placeholder:text-muted-foreground px-2.5 py-2 resize-none ring-0 rounded-none shadow-none text-base transition-colors w-full" name="prompt" id="_r_2c_" placeholder="Ask about this workflow" aria-invalid="false"></textarea>
                              <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 [.border-t]:pt-2 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 group-has-[>input]/input-group:pb-2 h-auto justify-between pb-2 px-2.5 py-1.5 text-muted-foreground text-sm" role="group" data-align="block-end">
                                <Tooltip>
                                <TooltipTrigger className="flex" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-lg select-none shadow-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Attach context" aria-haspopup="menu" aria-expanded="false" id="base-ui-_r_2j_">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </TooltipTrigger>
                                </Tooltip>
                                <Tooltip>
                                <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-7 text-primary-foreground text-sm transition-all whitespace-nowrap" type="submit" tabIndex="0" aria-label="Send question" id="base-ui-_r_2m_" baseUiTooltipTrigger="">
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
                          Replies can be wrong. Check before you publish.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-popover bottom-4 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[state=closed]:[content-visibility:hidden] data-[state=closed]:invisible end-4 fixed gap-0 h-12 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-md sm:max-w-104 text-card-foreground text-sm w-[calc(100vw-2rem)] z-40" size="minimized" role="region" aria-label="Flowly AI" data-state="closed" inert="">
                    <div className="absolute after:absolute after:bg-linear-to-b after:from-popover after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-popover/70 in-data-[size=minimized]:backdrop-filter-none inset-x-0 rounded-t-xl supports-backdrop-filter:bg-popover/60 top-0 z-20">
                      <span className="absolute border-foreground/10 border-t hidden in-data-folding:block inset-0 pointer-events-none rounded-t-xl" aria-hidden="true" data-fold="edge"></span>
                      <div className="flex gap-1 items-center min-h-12 px-3">
                        <div className="flex gap-2 items-center min-w-0 ps-1">
                          <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm normal-case text-sm tracking-normal truncate">
                            Flowly AI
                          </CardTitle>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                            Beta
                          </Badge>
                          <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs" role="status" data-fold="status"></span>
                        </div>
                        <div className="flex gap-0.5 items-center ms-auto shrink-0">
                          <Tooltip>
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [@media(max-height:42rem)]:hidden active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button group/expand hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center max-sm:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Expand chat" aria-pressed="false" id="base-ui-_r_2o_" baseUiTooltipTrigger="">
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
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Restore chat" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m18 15-6-6-6 6"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="End chat" id="base-ui-_r_2s_" baseUiTooltipTrigger="">
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
                </div>
              </div>
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
