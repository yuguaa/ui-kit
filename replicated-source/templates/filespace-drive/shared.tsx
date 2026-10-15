import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Tree,
  TreeItemLabel,
} from "@/registry-neui/bases/base/neui/tree"
import {
  Avatar,
  AvatarFallback,
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
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
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
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
    <div className="[--header-height:45px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "63px", "--sidebar-width-icon": "3rem", "--sidebar-width-inner": "200px"}}>
      <a className="focus:bg-background focus:fixed focus:font-medium focus:not-sr-only focus:outline-none focus:px-3 focus:py-1.5 focus:ring-[3px] focus:ring-ring/50 focus:rounded-md focus:shadow-md focus:start-4 focus:text-foreground focus:text-sm focus:top-2.5 focus:z-100 sr-only" href="#main-content">
        {"Skip to content"}
      </a>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-2 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-2 items-center justify-center p-2 py-3" sidebar="header">
              <a className="focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-md" aria-label="NeUI Drive, go to My Drive" href="/">
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
                <SidebarGroupContent className="justify-center text-sm" sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.5" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Drive" id="base-ui-_R_3pl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" href="/">
                        <svg className="lucide lucide-hard-drive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 16h.01"></path>
                          <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          <path d="M21.946 12.013H2.054"></path>
                          <path d="M6 16h.01"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Workspace" id="base-ui-_R_3ql9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings/workspace">
                        <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Pricing" id="base-ui-_R_3rl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/pricing">
                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                          <line x1={2} x2={22} y1={10} y2={10}></line>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground justify-center p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" aria-label="Settings" id="base-ui-_R_3sl9flb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings">
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
              <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center mx-auto outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Alex Rivera" aria-haspopup="menu" id="base-ui-_R_dt9flb_" aria-expanded="false">
                <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-6" size="default">
                  <AvatarImage className="rounded-full" alt="Alex Rivera" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarFooter>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <SidebarInset className="bg-background border border-border md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm overflow-hidden shadow-none">
        <header className="bg-sidebar border-b border-border dark:bg-background flex gap-2 h-(--header-height) items-center lg:ps-2 overflow-y-hidden px-4 sticky top-0 w-full z-50">
          <div className="flex flex-1 gap-2 items-center md:flex-none min-w-0">
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
            <Breadcrumb className="flex-1 min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-1 text-muted-foreground text-sm">
                <BreadcrumbItem className="gap-1 min-w-9">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
                    <span className="inline-flex items-center justify-center leading-none shrink-0 size-3">
                      <svg className="block size-full" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                        <defs>
                          <lineargradient id="ws-neui" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#4f46e5"></stop>
                            <stop offset="50%" stopColor="#6366f1"></stop>
                            <stop offset="100%" stopColor="#818cf8"></stop>
                          </lineargradient>
                        </defs>
                        <circle cx={14} cy={14} r={14} fill="url(#ws-neui)"></circle>
                      </svg>
                    </span>
                    <span className="max-w-24 sm:max-w-none truncate">
                      {"NeUI"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1 shrink-0">
                  <BreadcrumbPage className="font-normal px-2 text-foreground text-sm truncate" role="link" aria-disabled="true" aria-current="page">
                    {"Shared With Me"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex gap-1 items-center ml-auto shrink-0">
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Help" baseUiClickTrigger="" id="base-ui-_R_1tjpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx={12} cy={12} r={10}></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none relative rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_R_1ujpflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
              </svg>
              <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
            </SheetTrigger>
            </Sheet>
          </div>
        </header>
        <div className="flex flex-1 flex-col focus:outline-none min-h-0 overflow-y-auto" id="main-content" tabIndex={-1}>
          <div className="[&>[data-slot=card]]:ring-0 [&>[data-slot=card]]:rounded-none h-full min-h-0">
            <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) gap-0! h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 min-h-0 overflow-hidden p-0! py-(--card-spacing) relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
              <CardContent className="flex flex-1 flex-col min-h-0 p-0! px-(--card-spacing)">
                <div className="flex flex-1 flex-col lg:flex-row min-h-0">
                  <aside className="border-border border-e hidden lg:flex lg:flex-col shrink-0 w-64">
                    <div className="flex flex-col h-full min-h-0 min-w-0">
                      <ScrollArea className="flex-1 min-h-0" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_69_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "58px"}}>
                          <div className="p-2">
                            <Tree className="gap-0.5 w-full" role="tree" aria-label="" style={{"--tree-indent": "20px"}}>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="true" data-folder="true" data-selected="false" aria-expanded="true" role="treeitem" aria-setsize="1" aria-posinset="1" aria-selected="false" aria-label="My Drive" aria-level="1" tabIndex={0} style={{"--tree-padding": "0px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"My Drive"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="true" role="treeitem" aria-setsize="6" aria-posinset="1" aria-selected="false" aria-label="Client Deliverables" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Client Deliverables"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="2" aria-posinset="1" aria-selected="false" aria-label="Northwind Rebrand" aria-level="3" tabIndex={-1} style={{"--tree-padding": "40px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Northwind Rebrand"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="2" aria-posinset="2" aria-selected="false" aria-label="Harbor Coffee" aria-level="3" tabIndex={-1} style={{"--tree-padding": "40px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Harbor Coffee"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="false" role="treeitem" aria-setsize="6" aria-posinset="2" aria-selected="false" aria-label="Brand Library" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Brand Library"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="false" role="treeitem" aria-setsize="6" aria-posinset="3" aria-selected="false" aria-label="Spring Campaign" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Spring Campaign"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="6" aria-posinset="4" aria-selected="false" aria-label="Studio Operations" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Studio Operations"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="false" role="treeitem" aria-setsize="6" aria-posinset="5" aria-selected="false" aria-label="Product Design" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Product Design"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                              <ContextMenu>
                              <ContextMenuTrigger className="block w-full">
                                <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="6" aria-posinset="6" aria-selected="false" aria-label="Samples" aria-level="2" tabIndex={-1} style={{"--tree-padding": "20px"}}>
                                  <TreeItemLabel className="bg-transparent py-2 rounded-md w-full">
                                    <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                      <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                      </svg>
                                    </span>
                                    <span className="min-w-0 truncate">
                                      {"Samples"}
                                    </span>
                                  </TreeItemLabel>
                                </button>
                              </ContextMenuTrigger>
                              </ContextMenu>
                            </Tree>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_69_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "247.77528089887642px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="flex flex-col gap-0.5 p-2 shrink-0">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-secondary aria-expanded:text-secondary-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-secondary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] justify-start px-2 rounded-lg text-secondary-foreground text-sm w-full" href="/shared" role="button" tabIndex={0} aria-current="page">
                          <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx={9} cy={7} r={4}></circle>
                          </svg>
                          {"Shared With Me"}
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" href="/recent" role="button" tabIndex={0}>
                          <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M12 6v6l4 2"></path>
                          </svg>
                          {"Recent"}
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" href="/starred" role="button" tabIndex={0}>
                          <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          {"Favourites"}
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-2 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start px-2 rounded-lg text-sm w-full" href="/bin" role="button" tabIndex={0}>
                          <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                          {"Bin"}
                        </Button>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="flex flex-col gap-2 p-3 shrink-0">
                        <div className="flex gap-2 items-center justify-between">
                          <span className="font-medium text-foreground text-xs">
                            {"Storage"}
                          </span>
                          <span className="tabular-nums text-muted-foreground text-xs">
                            {"63% full"}
                          </span>
                        </div>
                        <Progress className="gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="63" aria-valuetext="63%" role="progressbar">
                          <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                            <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "63%"}}></ProgressIndicator>
                          </ProgressTrack>
                          <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                            {"x"}
                          </span>
                        </Progress>
                        <p className="tabular-nums text-muted-foreground text-xs">
                          {"643.6 MB of 1.00 GB used"}
                        </p>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground mt-1 px-2.5 rounded-lg text-sm w-full" type="button" tabIndex={0}>
                          {"Get More Storage"}
                        </Button>
                      </div>
                    </div>
                  </aside>
                  <div className="flex flex-1 flex-col min-h-0 min-w-0">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center min-w-0 px-4 py-2 shrink-0">
                      <div className="flex gap-2 items-center lg:basis-64 lg:flex-1 min-w-0">
                        <Sheet>
                        <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center lg:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open navigation" baseUiClickTrigger="" id="base-ui-_r_5k_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 5h16"></path>
                            <path d="M4 12h16"></path>
                            <path d="M4 19h16"></path>
                          </svg>
                        </SheetTrigger>
                        </Sheet>
                        <Breadcrumb className="min-w-0" aria-label="breadcrumb">
                          <BreadcrumbList className="flex-nowrap gap-1.5 text-muted-foreground text-sm">
                            <BreadcrumbItem className="gap-1 shrink-0">
                              <BreadcrumbLink className="hover:text-foreground transition-colors truncate" type="button">
                                {"My Drive"}
                              </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="[&>svg]:size-3.5" role="presentation" aria-hidden="true">
                              <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem className="gap-1 min-w-0">
                              <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                                {"Shared With Me"}
                              </BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center min-[1140px]:flex-nowrap min-[1140px]:shrink-0 min-w-0">
                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 flex-1 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 lg:flex-none lg:w-56 min-[1140px]:shrink-0 min-w-40 rounded-lg transition-colors" role="group">
                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                            <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m21 21-4.34-4.34"></path>
                              <circle cx={11} cy={11} r={8}></circle>
                            </svg>
                          </InputGroupAddon>
                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-sm transition-colors w-full" id="base-ui-_r_5l_" placeholder="Search Shared With Me" aria-label="Search Shared With Me" value="" />
                        </InputGroup>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground flex-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 lg:flex-none lg:w-[132px] pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[132px]" type="button" tabIndex={0} id="base-ui-_r_5m_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by type">
                          <SelectValue className="flex flex-1 text-left">
                            {"All types"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_5m_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg shrink-0" data-orientation="horizontal" role="group" variant="outline" size="default" spacing="0" aria-label="Browse view" style={{"--gap": "0"}}>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex={0} aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="List view">
                            <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 5h.01"></path>
                              <path d="M3 12h.01"></path>
                              <path d="M3 19h.01"></path>
                              <path d="M8 5h13"></path>
                              <path d="M8 12h13"></path>
                              <path d="M8 19h13"></path>
                            </svg>
                          </ToggleGroupItem>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-8 outline-none px-2.5 rounded-lg text-sm transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex={-1} aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Grid view">
                            <svg className="lucide lucide-layout-grid size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                              <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                              <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                              <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                            </svg>
                          </ToggleGroupItem>
                        </ToggleGroup>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center max-2xl:gap-0 max-2xl:p-0! max-2xl:size-8 outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_5s_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx={17} cy={17} r={3}></circle>
                            <circle cx={7} cy={7} r={3}></circle>
                          </svg>
                          <span className="max-2xl:sr-only">
                            {"View"}
                          </span>
                        </PopoverTrigger>
                        </Popover>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground max-2xl:gap-0 max-2xl:p-0! max-2xl:size-8 px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                          <svg className="lucide lucide-folder-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                            <path d="M12 10v6"></path>
                            <path d="M9 13h6"></path>
                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                          </svg>
                          <span className="max-2xl:sr-only">
                            {"New Folder"}
                          </span>
                        </Button>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 max-2xl:gap-0 max-2xl:p-0! max-2xl:size-8 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0}>
                          <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                            <path d="M12 3v12"></path>
                            <path d="m17 8-5-5-5 5"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          </svg>
                          <span className="max-2xl:sr-only">
                            {"Upload"}
                          </span>
                        </Button>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="flex flex-1 flex-col min-h-0 relative">
                      <input className="sr-only" accept="*" multiple tabIndex={-1} type="file" />
                      <ScrollArea className="flex-1 min-h-0" role="presentation" hasOverflowY="" overflowYEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5t_-viewport" tabIndex={0} data-has-overflow-y="" data-overflow-y-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "225px"}}>
                          <div className="flex flex-col gap-5 pb-4 pt-3">
                            <div className="flex flex-col gap-2">
                              <div className="relative">
                                <DataGridProvider>
                                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_6a_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                                    <div role="presentation" style={{minWidth: "fit-content"}}>
                                      <DataGridProvider>
                                      <DataGridTableViewport>
                                        <DataGridProvider>
                                        <DataGridTable>
                                          <colgroup>
                                            <col style={{width: "32px"}} />
                                            <col style={{width: "300px"}} />
                                            <col style={{width: "160px"}} />
                                            <col style={{width: "84px"}} />
                                            <col style={{width: "92px"}} />
                                            <col style={{width: "128px"}} />
                                            <col style={{width: "56px"}} />
                                          </colgroup>
                                          <thead>
                                            <tr className="[&>th]:border-b bg-transparent">
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "32px"}}>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6b_" aria-checked="false" aria-label="Select all"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" style={{width: "300px"}}>
                                                <div className="-ms-2 flex h-full items-center">
                                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                                    {"Name"}
                                                    <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="m5 12 7-7 7 7"></path>
                                                      <path d="M12 19V5"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "160px"}}>
                                                <div className="-ms-2 flex h-full items-center">
                                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                                    {"Owner"}
                                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="m7 15 5 5 5-5"></path>
                                                      <path d="m7 9 5-5 5 5"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "84px"}}>
                                                <div className="-ms-2 flex h-full items-center">
                                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                                    {"Type"}
                                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="m7 15 5 5 5-5"></path>
                                                      <path d="m7 9 5-5 5 5"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "92px"}}>
                                                <div className="-ms-2 flex h-full items-center">
                                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                                    {"Size"}
                                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="m7 15 5 5 5-5"></path>
                                                      <path d="m7 9 5-5 5 5"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "128px"}}>
                                                <div className="-ms-2 flex h-full items-center">
                                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                                    {"Modified"}
                                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="m7 15 5 5 5-5"></path>
                                                      <path d="m7 9 5-5 5 5"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </th>
                                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "56px"}}></th>
                                            </tr>
                                          </thead>
                                          <DataGridProvider>
                                          <DataGridTableBody>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-spring-brief">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_aa_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                        <path d="M10 9H8"></path>
                                                        <path d="M16 13H8"></path>
                                                        <path d="M16 17H8"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Campaign Brief.docx"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"Doc"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"37.8 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-09-30T08:00:00.000Z" title="30 September 2026 at 08:00">
                                                          {"2 weeks ago"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Campaign Brief.docx">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Priya Patel"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"Doc"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"37.8 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-09-30T08:00:00.000Z" title="30 September 2026 at 08:00">
                                                    {"2 weeks ago"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Priya Patel"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Campaign Brief.docx" aria-haspopup="menu" id="base-ui-_r_ag_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-sample-memo">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_ai_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Client Voice Memo.mp3"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"MP3"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"59.4 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-10-15T08:20:00.000Z" title="15 October 2026 at 08:20">
                                                          {"Today"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Client Voice Memo.mp3">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Priya Patel"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"MP3"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"59.4 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-10-15T08:20:00.000Z" title="15 October 2026 at 08:20">
                                                    {"Today"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Priya Patel"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Client Voice Memo.mp3" aria-haspopup="menu" id="base-ui-_r_ao_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-footage-drone">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_aq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-video" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                        <rect x={2} y={6} width={14} height={12} rx={2}></rect>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Drone Pickups.mp4"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"MP4"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"4.74 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-10-13T19:05:00.000Z" title="13 October 2026 at 19:05">
                                                          {"Yesterday"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Drone Pickups.mp4">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Kenji Tan"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"MP4"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"4.74 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-10-13T19:05:00.000Z" title="13 October 2026 at 19:05">
                                                    {"Yesterday"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Kenji Tan"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Drone Pickups.mp4" aria-haspopup="menu" id="base-ui-_r_b0_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-onboarding">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_76_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                        <path d="M10 9H8"></path>
                                                        <path d="M16 13H8"></path>
                                                        <path d="M16 17H8"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"New Hire Onboarding.pdf"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"PDF"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"69.3 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-09-25T10:30:00.000Z" title="25 September 2026 at 10:30">
                                                          {"2 weeks ago"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: New Hire Onboarding.pdf">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarFallback className="bg-muted rounded-full text-[9px] text-muted-foreground">
                                                      {"MS"}
                                                    </AvatarFallback>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Mira Stone"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"PDF"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"69.3 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-09-25T10:30:00.000Z" title="25 September 2026 at 10:30">
                                                    {"2 weeks ago"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarFallback className="bg-muted rounded-full text-[8px] text-muted-foreground">
                                                        {"MS"}
                                                      </AvatarFallback>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Mira Stone"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for New Hire Onboarding.pdf" aria-haspopup="menu" id="base-ui-_r_7c_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-partner">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_7e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <rect width={20} height={5} x={2} y={3} rx={1}></rect>
                                                        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                                        <path d="M10 12h4"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Partner Media Kit.zip"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"ZIP"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"161.1 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-10-03T17:00:00.000Z" title="3 October 2026 at 17:00">
                                                          {"Last week"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Partner Media Kit.zip">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Elijah Morgan"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"ZIP"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"161.1 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-10-03T17:00:00.000Z" title="3 October 2026 at 17:00">
                                                    {"Last week"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Elijah Morgan"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Partner Media Kit.zip" aria-haspopup="menu" id="base-ui-_r_7k_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-stills-press">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_b2_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <rect width={20} height={5} x={2} y={3} rx={1}></rect>
                                                        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                                        <path d="M10 12h4"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Press Kit Photos.zip"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"ZIP"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"225.7 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-10-07T10:50:00.000Z" title="7 October 2026 at 10:50">
                                                          {"Last week"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Press Kit Photos.zip">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarFallback className="bg-muted rounded-full text-[9px] text-muted-foreground">
                                                      {"MS"}
                                                    </AvatarFallback>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Mira Stone"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"ZIP"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"225.7 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-10-07T10:50:00.000Z" title="7 October 2026 at 10:50">
                                                    {"Last week"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarFallback className="bg-muted rounded-full text-[8px] text-muted-foreground">
                                                        {"MS"}
                                                      </AvatarFallback>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Mira Stone"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Press Kit Photos.zip" aria-haspopup="menu" id="base-ui-_r_b8_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-harbor-scope">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_ba_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                        <path d="M10 9H8"></path>
                                                        <path d="M16 13H8"></path>
                                                        <path d="M16 17H8"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Statement Of Work.pdf"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"PDF"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"95.0 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-09-28T08:45:00.000Z" title="28 September 2026 at 08:45">
                                                          {"2 weeks ago"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Statement Of Work.pdf">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Priya Patel"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"PDF"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"95.0 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-09-28T08:45:00.000Z" title="28 September 2026 at 08:45">
                                                    {"2 weeks ago"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Priya Patel"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Statement Of Work.pdf" aria-haspopup="menu" id="base-ui-_r_bg_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
                                              </td>
                                            </tr>
                                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-type-specimen">
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_bi_" aria-checked="false" aria-label="Select row"></Checkbox>
                                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <button className="flex gap-2 group/name hover:text-primary items-center min-w-0 text-foreground text-sm text-start transition-colors" type="button">
                                                    <span className="[&_svg]:size-4 flex group-hover/name:text-primary items-center justify-center shrink-0 size-4 text-muted-foreground transition-colors" aria-hidden="true">
                                                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                        <path d="M10 9H8"></path>
                                                        <path d="M16 13H8"></path>
                                                        <path d="M16 17H8"></path>
                                                      </svg>
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                      <span className="font-medium truncate">
                                                        {"Typeface Specimen.pdf"}
                                                      </span>
                                                      <span className="flex font-normal gap-1.5 items-center min-w-0 sm:hidden text-muted-foreground text-xs truncate">
                                                        <span className="shrink-0">
                                                          {"PDF"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <span className="shrink-0 tabular-nums">
                                                          {"114.4 KB"}
                                                        </span>
                                                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                                        <time className="truncate" datetime="2026-09-24T11:20:00.000Z" title="24 September 2026 at 11:20">
                                                          {"3 weeks ago"}
                                                        </time>
                                                      </span>
                                                    </span>
                                                  </button>
                                                  <Button className="-ms-1 [&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg pointer-coarse:size-11 pointer-fine:group-hover/row:opacity-100 pointer-fine:opacity-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground/60 text-sm transition-opacity" type="button" tabIndex={0} aria-pressed="false" aria-label="Favourite: Typeface Specimen.pdf">
                                                    <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                                    </svg>
                                                  </Button>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex gap-2 items-center min-w-0">
                                                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                                    <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                  </Avatar>
                                                  <span className="min-w-0 text-foreground text-sm truncate">
                                                    {"Sana Qureshi"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                                  {"PDF"}
                                                </Badge>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <span className="tabular-nums text-foreground text-sm">
                                                    {"114.4 KB"}
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle px-2 py-1.5">
                                                <div className="flex flex-col gap-0.5">
                                                  <time className="text-foreground text-sm" datetime="2026-09-24T11:20:00.000Z" title="24 September 2026 at 11:20">
                                                    {"3 weeks ago"}
                                                  </time>
                                                  <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-3.5" size="default">
                                                      <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                                    </Avatar>
                                                    <span className="truncate">
                                                      {"Sana Qureshi"}
                                                    </span>
                                                  </span>
                                                </div>
                                              </td>
                                              <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                                <DropdownMenu>
                                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-coarse:size-11 rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Typeface Specimen.pdf" aria-haspopup="menu" id="base-ui-_r_bo_" aria-expanded="false">
                                                  <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                    <circle cx={12} cy={12} r={1}></circle>
                                                    <circle cx={12} cy={5} r={1}></circle>
                                                    <circle cx={12} cy={19} r={1}></circle>
                                                  </svg>
                                                </DropdownMenuTrigger>
                                                </DropdownMenu>
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
                            </div>
                          </div>
                        </div>
                        <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-y="" data-overflow-y-end="" data-orientation="vertical" data-id="base-ui-_r_5t_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "362.46514745308315px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" data-react-aria-top-layer="true"></section>
    <next-route-announcer style={{position: "absolute"}}></next-route-announcer>
  </>
  )
}
