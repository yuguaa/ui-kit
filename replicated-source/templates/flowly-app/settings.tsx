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
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
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
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_fqcpflb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Settings" href="/settings" data-active="" aria-current="page">
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
                <BreadcrumbItem className="gap-1">
                  <BreadcrumbLink className="hover:text-foreground transition-colors" href="/settings">
                    Settings
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
                  <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1 min-w-0">
                  <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                    General
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <div className="flex gap-2 items-center">
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span className="sm:not-sr-only sr-only">
                  Share Workspace
                </span>
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col grow md:flex-row overflow-hidden">
          <aside className="border-border border-r hidden md:flex overflow-hidden shrink-0 w-(--sidebar-width-inner)" aria-label="Settings navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
              <div className="grow max-h-full min-h-0">
                <ScrollArea className="grow h-full scroll-fade-y" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_dq_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <nav className="flex flex-col py-1">
                      <div role="group" aria-labelledby="_r_dr_">
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_dr_">
                          Workspace
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-accent-foreground transition-all w-full whitespace-nowrap" href="/settings/general" aria-current="page">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </span>
                            <span className="truncate">
                              General
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/members">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                              </svg>
                            </span>
                            <span className="truncate">
                              Members
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/billing">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                              </svg>
                            </span>
                            <span className="truncate">
                              Billing
                            </span>
                          </a>
                        </div>
                      </div>
                      <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div role="group" aria-labelledby="_r_ds_">
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_ds_">
                          Automation
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/execution">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Execution
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/ai-models">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                              </svg>
                            </span>
                            <span className="truncate">
                              AI Models
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/integrations">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Integrations
                            </span>
                          </a>
                        </div>
                      </div>
                      <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div role="group" aria-labelledby="_r_dt_">
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_dt_">
                          Developers
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/webhooks">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-webhook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                                <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                                <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Webhooks
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/audit-log">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-scroll-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M15 12h-5"></path>
                                <path d="M15 8h-5"></path>
                                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Audit Log
                            </span>
                          </a>
                        </div>
                      </div>
                      <Separator className="my-2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div role="group" aria-labelledby="_r_du_">
                        <p className="font-medium pb-1 pt-2 px-3 text-[11px] text-muted-foreground uppercase" id="_r_du_">
                          Account
                        </p>
                        <div className="flex flex-col gap-0.5 px-2">
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/profile">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-user-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="8" r="5"></circle>
                                <path d="M20 21a8 8 0 0 0-16 0"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Profile
                            </span>
                          </a>
                          <a className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2.5 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-start outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-muted-foreground transition-all w-full whitespace-nowrap" href="/settings/security">
                            <span className="[&_svg]:size-4 opacity-70 shrink-0 size-4">
                              <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </span>
                            <span className="truncate">
                              Security
                            </span>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </ScrollArea>
              </div>
              <div className="shrink-0">
                <div className="border-border border-t grid p-3">
                  <div className="**:data-[slot=progress-indicator]:bg-primary col-start-1 row-start-1 space-y-1.5 text-primary">
                    <div className="flex gap-1 items-center">
                      <span className="[&_svg]:size-4 shrink-0 size-4">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </span>
                      <p className="font-medium text-foreground text-xs truncate">
                        Flowly Labs
                      </p>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 ml-auto outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                        Pro
                      </Badge>
                    </div>
                    <p className="leading-snug line-clamp-2 min-h-[2lh] text-muted-foreground text-xs">
                      app.flowly.dev/flowly-labs. Schedules run on UTC.
                    </p>
                    <div className="h-2" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
            <div className="flex flex-col gap-4 min-w-0 w-full">
              <h1 className="sr-only">
                General Settings
              </h1>
              <form id="settings-general-form" novalidate="">
                <div className="flex flex-col gap-4">
                  <section className="flex flex-col" aria-label="Workspace basics">
                    <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                      <CardContent className="p-0">
                        <FieldSet className="gap-0 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Workspace basics
                          </FieldLegend>
                          <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                            Workspace naming, routing, and invite domain settings.
                          </FieldDescription>
                          <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="*:data-[slot=field]:p-2.5 capitalize dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-workspace-name">
                                    Workspace name
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Used in shared pages and invites.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical" invalid="false">
                                    <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="settings-workspace-name" aria-invalid="false" value="Flowly Labs" name="workspaceName"></Input>
                                    <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                      Appears in invite flows and the workspace switcher.
                                    </FieldDescription>
                                  </Field>
                                </div>
                              </FieldContent>
                            </Field>
                            <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </FieldSeparator>
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="*:data-[slot=field]:p-2.5 capitalize dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-workspace-domain">
                                    Workspace domain
                                  </FieldLabel>
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm text-muted-foreground transition-colors" type="button" aria-label="Workspace domain info" id="base-ui-_r_e1_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 16v-4"></path>
                                      <path d="M12 8h.01"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                    Connected
                                  </Badge>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Keep the public URL short and clear.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical" invalid="false">
                                    <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                      <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                        <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                                          app.flowly.dev/
                                        </span>
                                      </InputGroupAddon>
                                      <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="settings-workspace-domain" aria-invalid="false" value="flowly-labs" name="workspaceSlug" />
                                    </InputGroup>
                                    <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                      New invite and share links will use this slug.
                                    </FieldDescription>
                                  </Field>
                                </div>
                              </FieldContent>
                            </Field>
                            <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </FieldSeparator>
                            <Field className="@md/field-group:gap-12 data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="capitalize font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                                    Invite domains
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Allow signups from trusted company domains.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Field className="data-[invalid=true]:text-destructive gap-3" role="group" data-orientation="vertical">
                                    <div className="flex flex-wrap gap-2 items-center w-full">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        flowly.dev
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:text-foreground rounded-lg size-3 text-sm" type="button" tabIndex="0" aria-label="Remove flowly.dev">
                                          <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        labs.flowly.dev
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:text-foreground rounded-lg size-3 text-sm" type="button" tabIndex="0" aria-label="Remove labs.flowly.dev">
                                          <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                      </Badge>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        partners.flowly.dev
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:text-foreground rounded-lg size-3 text-sm" type="button" tabIndex="0" aria-label="Remove partners.flowly.dev">
                                          <svg className="lucide lucide-x size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                          </svg>
                                        </Button>
                                      </Badge>
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                                        <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M5 12h14"></path>
                                          <path d="M12 5v14"></path>
                                        </svg>
                                        Add domain
                                      </Button>
                                    </div>
                                    <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                      Only trusted company domains are auto-approved for invites.
                                    </FieldDescription>
                                  </Field>
                                </div>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </CardContent>
                    </Card>
                  </section>
                  <section className="flex flex-col" aria-label="Regional preferences">
                    <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                      <CardContent className="p-0">
                        <FieldSet className="gap-0 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Regional preferences
                          </FieldLegend>
                          <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                            Localization and formatting preferences.
                          </FieldDescription>
                          <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                            <Field className="@md/field-group:gap-12 data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="capitalize font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                                    Language and timezone
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Keep the workspace readable for the whole team.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-3">
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-language">
                                        Language
                                      </FieldLabel>
                                      <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                        <Select>
                                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_small]:hidden [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="settings-language" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                          <SelectValue className="flex flex-1 text-left">
                                            <span className="flex flex-col gap-px items-start">
                                              <span className="font-medium">
                                                English
                                              </span>
                                              <small className="text-muted-foreground text-sm">
                                                Shared UI language
                                              </small>
                                            </span>
                                          </SelectValue>
                                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m6 9 6 6 6-6"></path>
                                            ▼
                                          </svg>
                                        </SelectTrigger>
                                        </Select>
                                        <input id="base-ui-_r_e3_-hidden-input" tabIndex="-1" aria-hidden="true" value="en" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                        Sets shared UI copy for this workspace.
                                      </FieldDescription>
                                    </Field>
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical" invalid="false">
                                      <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-timezone">
                                        Timezone
                                      </FieldLabel>
                                      <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="settings-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-invalid="false" placeholder="Select a timezone" value="(GMT+1) Berlin" name="timezone" />
                                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem] pr-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-end">
                                            <button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 group-has-data-[slot=combobox-clear]/input-group:hidden group/button has-[>svg]:p-0 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground items-center justify-center outline-none p-0 rounded-[calc(var(--radius)-3px)] select-none shadow-none shrink-0 size-6 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m6 9 6 6 6-6"></path>
                                              </svg>
                                            </button>
                                          </InputGroupAddon>
                                        </InputGroup>
                                        <input id="base-ui-_r_e6_-hidden-input" tabIndex="-1" aria-hidden="true" value="(GMT+1) Berlin" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                      </Field>
                                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                        Schedules and cron triggers run on this clock.
                                      </FieldDescription>
                                    </Field>
                                  </FieldGroup>
                                </div>
                              </FieldContent>
                            </Field>
                            <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </FieldSeparator>
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="capitalize font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                                    Date format
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Keep reports and summaries consistent.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                    <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                                      <Select>
                                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="settings-date-format" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                        <SelectValue className="flex flex-1 text-left">
                                          MM/DD/YYYY
                                        </SelectValue>
                                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m6 9 6 6 6-6"></path>
                                          ▼
                                        </svg>
                                      </SelectTrigger>
                                      </Select>
                                      <input id="base-ui-_r_eb_-hidden-input" tabIndex="-1" aria-hidden="true" value="mdy" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </Field>
                                    <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                                      Applies to exports, reports, and activity tables.
                                    </FieldDescription>
                                  </Field>
                                </div>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </CardContent>
                    </Card>
                  </section>
                  <section className="flex flex-col" aria-label="Editor behavior">
                    <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                      <CardContent className="p-0">
                        <FieldSet className="gap-0 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Editor behavior
                          </FieldLegend>
                          <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                            Keyboard and editor defaults.
                          </FieldDescription>
                          <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="*:data-[slot=field]:p-2.5 capitalize dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-send-enter" id="settings-send-enter-label">
                                    Snap steps to grid
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Line steps up on the canvas as you drag them.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_ee_" aria-checked="false" size="default" aria-labelledby="settings-send-enter-label">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="settings-send-enter" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </FieldContent>
                            </Field>
                            <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </FieldSeparator>
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="*:data-[slot=field]:p-2.5 capitalize dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-markdown" id="settings-markdown-label">
                                    Confirm before delete
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Ask before a step or an agent is removed.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_eh_" aria-checked="true" size="default" aria-labelledby="settings-markdown-label">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="settings-markdown" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </FieldContent>
                            </Field>
                            <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                              <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </FieldSeparator>
                            <Field className="@md/field-group:gap-12 @md/field-group:has-[>[data-slot=field-content]]:items-center data-[invalid=true]:text-destructive gap-4 px-4 py-2.5" role="group" data-orientation="responsive">
                              <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                                <div className="flex flex-wrap gap-2 items-center">
                                  <FieldLabel className="*:data-[slot=field]:p-2.5 capitalize dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/50 has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-compact-tables" id="settings-compact-tables-label">
                                    Compact tables
                                  </FieldLabel>
                                </div>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 leading-6 text-left text-muted-foreground text-sm">
                                  Fit more rows in run and agent lists.
                                </FieldDescription>
                              </div>
                              <FieldContent className="@md/field-group:basis-1/2 @md/field-group:pl-2 @md/field-group:w-1/2 gap-0.5 min-w-0 w-full">
                                <div className="flex justify-start w-full">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-[:focus-visible]/field-label:border-transparent group-has-[:focus-visible]/field-label:ring-0 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_ek_" aria-checked="true" size="default" aria-labelledby="settings-compact-tables-label">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="settings-compact-tables" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </form>
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
