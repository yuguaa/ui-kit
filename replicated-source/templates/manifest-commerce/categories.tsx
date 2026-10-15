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
  AvatarFallback,
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
import { InputGroup } from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div id="app">
      <SidebarProvider>
      <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar:var(--color-background)] flex flex-col group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "260px", "--sidebar-width-icon": "62px", "--header-height": "50px"}}>
        <div className="fixed h-0.5 inset-x-0 overflow-hidden pointer-events-none top-0 z-100" aria-hidden="true">
          <div className="bg-primary ease-out h-full relative transition-[transform,opacity] w-full will-change-transform" style={{transform: "translateX(-100%)", opacity: "0", transitionDuration: "200ms"}}>
            <div className="-translate-y-px absolute h-full right-0 rotate-2 shadow-[0_0_8px_var(--primary),0_0_4px_var(--primary)] top-0 w-24"></div>
          </div>
        </div>
        <header className="bg-background border-b flex items-center sticky top-0 w-full z-50">
          <div className="flex gap-2 h-(--header-height) items-center px-4 w-full">
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
            <div className="hidden items-center md:flex pl-0.5">
              <Item className="[a]:hover:bg-muted bg-primary border border-transparent gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                  <svg className="size-3.5" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
            </div>
            <Breadcrumb className="min-w-0" aria-label="breadcrumb">
              <BreadcrumbList className="flex-nowrap gap-2 text-muted-foreground text-sm">
                <BreadcrumbItem className="-me-2 gap-1">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                    <svg className="size-3" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <defs>
                        <lineargradient id="ws-acme" x1={0} y1={0} x2={28} y2={28} gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#4f46e5"></stop>
                          <stop offset="35%" stopColor="#7c3aed"></stop>
                          <stop offset="70%" stopColor="#a21caf"></stop>
                          <stop offset="100%" stopColor="#db2777"></stop>
                        </lineargradient>
                      </defs>
                      <circle cx={14} cy={14} r={14} fill="url(#ws-acme)"></circle>
                    </svg>
                    <span className="sm:not-sr-only sr-only">
                      {"Manifest Store"}
                    </span>
                    <svg className="lucide lucide-chevrons-up-down opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="[&>svg]:size-3.5 text-muted-foreground text-xs" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem className="gap-1 min-w-0">
                  <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                    {"Categories"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex gap-1 items-center ml-auto">
              <Popover>
              <PopoverTrigger className="border border-border focus-visible:ring-2 focus-visible:ring-ring gap-1.5 h-7 hover:bg-accent inline-flex items-center outline-none px-2 relative rounded-md transition-colors" type="button" aria-label="Store status" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-gauge size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
                <span className="font-medium text-foreground text-xs">
                  {"Store"}
                </span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                  {"Attention"}
                </Badge>
              </PopoverTrigger>
              </Popover>
            </div>
          </div>
        </header>
        <div className="flex flex-1">
          <SidebarProvider>
          <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
            <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
            <SidebarProvider>
            <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--header-height))]! h-svh hidden inset-y-0 md:flex top-(--header-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
              <SidebarProvider>
              <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
                <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center p-2 px-4" sidebar="header">
                  <div className="flex-1 pt-2 w-full">
                    <form>
                      <SidebarProvider>
                      <SidebarGroup className="p-0" sidebar="group">
                        <SidebarProvider>
                        <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-background hover:text-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 px-2.5 rounded-lg text-sm transition-[width] w-full" type="button" tabIndex={0} id="search">
                            {"Search..."}
                          </Button>
                          <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx={11} cy={11} r={8}></circle>
                          </svg>
                          <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5 px-1 right-2 rounded-sm text-muted-foreground text-xs top-1/2 w-fit">
                            {"⌘K"}
                          </Kbd>
                        </SidebarGroupContent>
                        </SidebarProvider>
                      </SidebarGroup>
                      </SidebarProvider>
                      <DialogHeader className="gap-2 sr-only">
                        <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_e_">
                          {"Search"}
                        </DialogTitle>
                        <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_f_">
                          {"Search your workspace content."}
                        </DialogDescription>
                      </DialogHeader>
                    </form>
                  </div>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent className="gap-2 no-scrollbar px-2" sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup className="p-2" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                      {"Store"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent className="text-sm" sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                            <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                              <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                              <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                              <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                            </svg>
                            <span>
                              {"Dashboard"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/orders">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                            <span>
                              {"Orders"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products">
                            <svg className="lucide lucide-tag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                            </svg>
                            <span>
                              {"Products"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-inventory">
                            <svg className="lucide lucide-boxes" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                              <path d="m7 16.5-4.74-2.85"></path>
                              <path d="m7 16.5 5-3"></path>
                              <path d="M7 16.5v5.17"></path>
                              <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                              <path d="m17 16.5-5-3"></path>
                              <path d="m17 16.5 4.74-2.85"></path>
                              <path d="M17 16.5v5.17"></path>
                              <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                              <path d="M12 8 7.26 5.15"></path>
                              <path d="m12 8 4.74-2.85"></path>
                              <path d="M12 13.5V8"></path>
                            </svg>
                            <span>
                              {"Inventory"}
                            </span>
                            <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_p_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-customers">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx={9} cy={7} r={4}></circle>
                            </svg>
                            <span>
                              {"Customers"}
                            </span>
                            <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_r_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/categories" data-active="">
                            <svg className="lucide lucide-folder-tree" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
                              <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"></path>
                              <path d="M3 5a2 2 0 0 0 2 2h3"></path>
                              <path d="M3 3v13a2 2 0 0 0 2 2h3"></path>
                            </svg>
                            <span>
                              {"Categories"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_t_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/promotions">
                            <svg className="lucide lucide-ticket-percent" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                              <path d="M9 9h.01"></path>
                              <path d="m15 9-6 6"></path>
                              <path d="M15 15h.01"></path>
                            </svg>
                            <span>
                              {"Promotions"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_v_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reviews">
                            <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                            <span>
                              {"Reviews"}
                            </span>
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
                  <SidebarGroup className="p-2" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                      {"System"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent className="text-sm" sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/analytics">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                            <span>
                              {"Analytics"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_13_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-settings">
                            <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                              <circle cx={12} cy={12} r={3}></circle>
                            </svg>
                            <span>
                              {"Settings"}
                            </span>
                            <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
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
                  <div className="mt-auto">
                    <div className="group in-data-[state=collapsed]:hidden px-3" data-active="true">
                      <div className="relative size-full">
                        <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" aria-hidden="true" inert="" style={{"--y": "-8%", "--scale": "0.94", "--opacity": "0.8"}}>
                          <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" data-dragging="false" style={{"--dx": "0", "--w": "1"}}>
                            <div className="invisible">
                              <div className="flex flex-col gap-1">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Sidebar layout patterns guide"}
                                </span>
                                <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                  {"Learn best practices for building responsive sidebar layouts with collapsible navigation."}
                                </p>
                              </div>
                              <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                                <img className="object-center object-cover size-full" alt="" draggable="false" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=225&fit=crop&q=80" />
                              </div>
                              <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                                <div className="min-h-0">
                                  <div className="flex items-center justify-between pt-3 text-xs">
                                    <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="https://pro.neui.io/changelog?v=2.0.1" target="_blank" rel="noopener noreferrer">
                                      {"Read more"}
                                    </a>
                                    <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                      {"Dismiss"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" aria-hidden="true" inert="" style={{"--y": "-4%", "--scale": "0.97", "--opacity": "0.9"}}>
                          <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" data-dragging="false" style={{"--dx": "0", "--w": "1"}}>
                            <div>
                              <div className="flex flex-col gap-1">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Icon library v2 released"}
                                </span>
                                <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                  {"Five icon libraries unified under a single API with automatic mapping."}
                                </p>
                              </div>
                              <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                                <img className="object-center object-cover size-full" alt="" draggable="false" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=225&fit=crop&q=80" />
                              </div>
                              <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                                <div className="min-h-0">
                                  <div className="flex items-center justify-between pt-3 text-xs">
                                    <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="https://pro.neui.io/changelog?v=2.0.2" target="_blank" rel="noopener noreferrer">
                                      {"Read more"}
                                    </a>
                                    <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                      {"Dismiss"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" aria-hidden="false" style={{"--y": "-0%", "--scale": "1", "--opacity": "1"}}>
                          <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" data-dragging="false" style={{"--dx": "0", "--w": "1"}}>
                            <div>
                              <div className="flex flex-col gap-1">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Multi-theme support is here"}
                                </span>
                                <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                  {"Switch between Vega, Nova, Maia, Lyra, and Mira themes across all components."}
                                </p>
                              </div>
                              <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                                <img className="object-center object-cover size-full" alt="" draggable="false" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop&q=80" />
                              </div>
                              <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                                <div className="min-h-0">
                                  <div className="flex items-center justify-between pt-3 text-xs">
                                    <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="https://pro.neui.io/changelog?v=2.0.3" target="_blank" rel="noopener noreferrer">
                                      {"Read more"}
                                    </a>
                                    <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                      {"Dismiss"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="invisible pointer-events-none" aria-hidden="true">
                          <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" data-dragging="false" style={{"--dx": "0", "--w": "1"}}>
                            <div>
                              <div className="flex flex-col gap-1">
                                <span className="font-medium line-clamp-1 text-foreground">
                                  {"Title"}
                                </span>
                                <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                  {"Description"}
                                </p>
                              </div>
                              <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full"></div>
                              <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                                <div className="min-h-0">
                                  <div className="flex items-center justify-between pt-3 text-xs">
                                    <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="#" target="_blank" rel="noopener noreferrer">
                                      {"Read more"}
                                    </a>
                                    <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
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
                </SidebarContent>
                </SidebarProvider>
                <SidebarFooter className="gap-2 mt-2 p-2 px-4" sidebar="footer">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-12 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="lg" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-7" size="default">
                          <AvatarFallback className="bg-primary font-semibold rounded-md text-primary-foreground text-xs">
                            {"NB"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight text-left text-sm">
                          <span className="font-medium truncate">
                            {"Nick Bold"}
                          </span>
                          <span className="text-muted-foreground text-xs truncate">
                            {"nick@neui.io"}
                          </span>
                        </div>
                        <svg className="group-data-[collapsible=icon]:hidden lucide lucide-chevrons-up-down ml-auto opacity-50 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarFooter>
                <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-[calc(var(--header-height)+50%)] transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
                  <span className="flex flex-col items-center">
                    <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                    <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
                  </span>
                  <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-background text-xs transition-all whitespace-nowrap">
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
            <div className="max-w-7xl md:p-6 mx-auto p-4 w-full">
              <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:min-h-8">
                  <div className="flex-col min-w-0">
                    <div className="flex gap-2 items-center">
                      <h1 className="font-semibold sm:text-xl text-foreground text-lg tracking-tight">
                        {"Categories"}
                      </h1>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-secondary-foreground text-xs transition-shadow">
                        {"22 categories"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center shrink-0">
                    <Sheet>
                    <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-primary-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_gc_" aria-haspopup="dialog" aria-expanded="false">
                      <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      {"New category"}
                    </SheetTrigger>
                    </Sheet>
                  </div>
                </header>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="font-semibold text-sm">
                      {"Catalog tree"}
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                        <svg className="lucide lucide-chevrons-up-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m7 15 5 5 5-5"></path>
                          <path d="m7 9 5-5 5 5"></path>
                        </svg>
                        {"Expand all"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                        <svg className="lucide lucide-chevrons-down-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m7 20 5-5 5 5"></path>
                          <path d="m7 4 5 5 5-5"></path>
                        </svg>
                        {"Collapse all"}
                      </Button>
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] p-0! rounded-(--frame-radius) shadow-none!">
                    <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filters" aria-haspopup="menu" id="base-ui-_r_gh_" aria-expanded="false">
                          <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                          </svg>
                          {"Filters"}
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
                          <div className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border dark:bg-input/30 flex font-medium gap-2 items-center px-2.5 rounded-lg text-sm">
                            <svg className="lucide lucide-tag size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                              <circle cx={7.5} cy={7.5} r=".5" fill="currentColor"></circle>
                            </svg>
                            {"Search"}
                          </div>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_gm_" aria-expanded="false">
                            {"contains"}
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                          <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 h-8! has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors w-56" role="group">
                            <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 h-8! md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_go_" aria-invalid="false" placeholder="Name, description..." type="text" value="" />
                          </InputGroup>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex={0}>
                            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </Button>
                        </ButtonGroup>
                      </div>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex={0}>
                        <svg className="lucide lucide-funnel-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                          <path d="m16.5 3.5 5 5"></path>
                          <path d="m21.5 3.5-5 5"></path>
                        </svg>
                        {"Clear"}
                      </Button>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="w-full">
                      <div className="relative">
                        <DataGridProvider>
                        <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                          <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_gp_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                            <div role="presentation" style={{minWidth: "fit-content"}}>
                              <DataGridProvider>
                              <DataGridTableViewport>
                                <DataGridProvider>
                                <DataGridTable>
                                  <colgroup>
                                    <col style={{width: "36px"}} />
                                    <col style={{width: "584px"}} />
                                    <col style={{width: "140px"}} />
                                    <col style={{width: "160px"}} />
                                    <col style={{width: "50px"}} />
                                  </colgroup>
                                  <thead>
                                    <tr className="[&>th]:border-b bg-transparent">
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-2! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "36px"}}></th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-0! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "584px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          {"Category"}
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "140px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          {"Products"}
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "160px"}}>
                                        <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                          {"Status"}
                                        </div>
                                      </th>
                                      <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "50px"}}></th>
                                    </tr>
                                  </thead>
                                  <DataGridProvider>
                                  <DataGridTableBody>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="apparel" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Collapse Apparel">
                                            <svg className="duration-150 lucide lucide-chevron-right rotate-90 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/apparel">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_gs_" baseUiTooltipTrigger="">
                                                {"Apparel"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Tees, shirts, knits, and everyday layers."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"6"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Apparel" aria-haspopup="menu" id="base-ui-_r_h0_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="shirts" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "20px"}}>
                                          <span className="shrink-0 size-6" aria-hidden="true"></span>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1713881604560-085594ed2c3d?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/shirts">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_h6_" baseUiTooltipTrigger="">
                                                {"Shirts"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Button-ups, overshirts, and camp collars."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"0"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Shirts" aria-haspopup="menu" id="base-ui-_r_ha_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="knitwear" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "20px"}}>
                                          <span className="shrink-0 size-6" aria-hidden="true"></span>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1740442535162-fc915d5403f2?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/knitwear">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_hg_" baseUiTooltipTrigger="">
                                                {"Knitwear"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Sweaters and knit layers."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"0"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                            {"Internal"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Knitwear" aria-haspopup="menu" id="base-ui-_r_hk_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="tees" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "20px"}}>
                                          <span className="shrink-0 size-6" aria-hidden="true"></span>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/tees">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_hq_" baseUiTooltipTrigger="">
                                                {"Tees"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Short and long sleeve tees."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"0"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Tees" aria-haspopup="menu" id="base-ui-_r_hu_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="footwear" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Footwear">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/footwear">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_i4_" baseUiTooltipTrigger="">
                                                {"Footwear"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Shoes, boots, trainers, and sandals."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"5"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Footwear" aria-haspopup="menu" id="base-ui-_r_i8_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="outerwear" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Outerwear">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/outerwear">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_ie_" baseUiTooltipTrigger="">
                                                {"Outerwear"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Jackets, shells, vests, and seasonal layers."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"4"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Outerwear" aria-haspopup="menu" id="base-ui-_r_ii_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="bags" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Bags">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/bags">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_io_" baseUiTooltipTrigger="">
                                                {"Bags"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Totes, backpacks, weekenders, and carry."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"4"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Bags" aria-haspopup="menu" id="base-ui-_r_is_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="accessories" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Accessories">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/accessories">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_j2_" baseUiTooltipTrigger="">
                                                {"Accessories"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Caps, socks, wallets, and add-ons."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"3"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Accessories" aria-haspopup="menu" id="base-ui-_r_j6_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="activewear" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Activewear">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/activewear">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_jc_" baseUiTooltipTrigger="">
                                                {"Activewear"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Performance tops, shorts, and training kit."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"3"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Activewear" aria-haspopup="menu" id="base-ui-_r_jg_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="[&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b cursor-pointer data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="denim" style={{zIndex: "0", position: "relative"}}>
                                      <td className="align-middle pe-0! ps-2! px-2 py-1.5">
                                        <div>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-transparent hover:opacity-100 hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-70 rounded-[min(var(--radius-md),12px)] size-7 text-sm" type="button" tabIndex={0} aria-label="Drag to reorder row" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_gq_">
                                            <svg className="lucide lucide-grip-horizontal" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={9} r={1}></circle>
                                              <circle cx={19} cy={9} r={1}></circle>
                                              <circle cx={5} cy={9} r={1}></circle>
                                              <circle cx={12} cy={15} r={1}></circle>
                                              <circle cx={19} cy={15} r={1}></circle>
                                              <circle cx={5} cy={15} r={1}></circle>
                                            </svg>
                                          </Button>
                                        </div>
                                      </td>
                                      <td className="align-middle ps-0! px-2 py-1.5">
                                        <div className="flex gap-2 items-center min-w-0" style={{paddingInlineStart: "0px"}}>
                                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-6 text-muted-foreground text-sm" type="button" tabIndex={0} aria-label="Expand Denim">
                                            <svg className="duration-150 lucide lucide-chevron-right shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                          </Button>
                                          <img className="border object-cover rounded-md shrink-0 size-9" alt="" loading="lazy" src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=200&h=200&q=80" />
                                          <div className="flex flex-col gap-0.5 min-w-0">
                                            <a className="font-medium gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 text-foreground text-sm transition-colors" href="/categories/denim">
                                              <Tooltip>
                                              <TooltipTrigger className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors truncate" id="base-ui-_r_jm_" baseUiTooltipTrigger="">
                                                {"Denim"}
                                              </TooltipTrigger>
                                              </Tooltip>
                                              <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 lucide lucide-arrow-right opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M5 12h14"></path>
                                                <path d="m12 5 7 7-7 7"></path>
                                              </svg>
                                            </a>
                                            <span className="text-muted-foreground text-xs truncate">
                                              {"Jeans, jackets, and washed indigo staples."}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="tabular-nums text-foreground text-sm">
                                          {"3"}
                                          <span className="text-muted-foreground">
                                            {"products"}
                                          </span>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <span className="flex flex-wrap gap-1.5 items-center">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                            {"Active"}
                                          </Badge>
                                        </span>
                                      </td>
                                      <td className="align-middle px-2 py-1.5">
                                        <div>
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Actions for Denim" aria-haspopup="menu" id="base-ui-_r_jq_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx={12} cy={12} r={1}></circle>
                                              <circle cx={19} cy={12} r={1}></circle>
                                              <circle cx={5} cy={12} r={1}></circle>
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
                              <div id="_r_gq_" style={{display: "none"}}>
                                {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
                              </div>
                              <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                            </div>
                          </div>
                        </DataGridScrollArea>
                        </DataGridProvider>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
      </SidebarProvider>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    </div>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"Accessories"}
    </span>
  </>
  )
}
