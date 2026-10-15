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
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div id="initial-loader" aria-hidden="true"></div>
    <div className="fixed h-0.5 inset-x-0 overflow-hidden pointer-events-none top-0 z-100" aria-hidden="true">
      <div className="bg-primary ease-out h-full relative transition-[transform,opacity] w-full will-change-transform" style={{transform: "translateX(-100%)", opacity: "0", transitionDuration: "200ms"}}>
        <div className="-translate-y-px absolute h-full right-0 rotate-2 shadow-[0_0_8px_var(--primary),0_0_4px_var(--primary)] top-0 w-24"></div>
      </div>
    </div>
    <SidebarProvider>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar:var(--color-background)] flex flex-col group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "260px", "--sidebar-width-icon": "62px", "--header-height": "50px"}}>
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
                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
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
                  {"Analytics"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex gap-1 items-center ml-auto">
            <Popover>
            <PopoverTrigger className="border border-border focus-visible:ring-2 focus-visible:ring-ring gap-1.5 h-7 hover:bg-accent inline-flex items-center outline-none px-2 relative rounded-md transition-colors" type="button" aria-label="Store status" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
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
                      <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_r_9_">
                        {"Search"}
                      </DialogTitle>
                      <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_r_a_">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_c_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_e_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/orders">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_g_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_i_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-inventory">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_k_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-customers">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_m_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/categories">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_o_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/promotions">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_q_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reviews">
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
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_r_s_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/analytics" data-active="" status="active" aria-current="page">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_r_u_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-settings">
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
                    <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-12 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="lg" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-md size-7" size="default">
                        <AvatarImage className="rounded-full" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
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
            <div className="@container flex flex-col gap-6">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:min-h-8">
                <div className="flex-col min-w-0">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-semibold sm:text-xl text-foreground text-lg tracking-tight">
                      {"Analytics"}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-2 items-center shrink-0">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                    {"Aug 24 - Oct 15"}
                  </Badge>
                </div>
              </header>
              <div className="@container w-full">
                <section aria-label="Key metrics">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                    <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 grid">
                      <div className="@2xl:border-b @2xl:border-r @4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col min-h-[316px] overflow-hidden p-4">
                        <div className="flex flex-1 flex-col gap-4 justify-between">
                          <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                            <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect width={20} height={12} x={2} y={6} rx={2}></rect>
                              <circle cx={12} cy={12} r={2}></circle>
                              <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="leading-relaxed text-muted-foreground text-sm">
                              {"Total sales"}
                            </h3>
                            <div className="flex gap-1.5 items-center">
                              <div className="font-semibold tabular-nums text-2xl tracking-tight">
                                {"$32K"}
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                <span>
                                  {"+63.7%"}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"$723 average order value"}
                          </p>
                        </div>
                        <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                          <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 34%, 100% 2%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-br bottom-0 from-indigo-400 h-full inset-x-0 to-indigo-600 via-indigo-500" style={{clipPath: "polygon(0px 48%, 100% 16%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                        </div>
                      </div>
                      <div className="@2xl:border-b @4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col min-h-[316px] overflow-hidden p-4">
                        <div className="flex flex-1 flex-col gap-4 justify-between">
                          <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                            <svg className="lucide lucide-shopping-bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                              <path d="M3.103 6.034h17.794"></path>
                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="leading-relaxed text-muted-foreground text-sm">
                              {"Orders"}
                            </h3>
                            <div className="flex gap-1.5 items-center">
                              <div className="font-semibold tabular-nums text-2xl tracking-tight">
                                {"48"}
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                <span>
                                  {"+120.0%"}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"Orders placed in this window"}
                          </p>
                        </div>
                        <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                          <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 2%, 100% 36%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-br bottom-0 from-indigo-500 h-full inset-x-0 to-indigo-700 via-indigo-600" style={{clipPath: "polygon(0px 16%, 100% 50%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                        </div>
                      </div>
                      <div className="@2xl:border-b-0 @2xl:border-r @4xl:border-b-0 @4xl:border-r border-b border-border/60 flex flex-col min-h-[316px] overflow-hidden p-4">
                        <div className="flex flex-1 flex-col gap-4 justify-between">
                          <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx={9} cy={7} r={4}></circle>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="leading-relaxed text-muted-foreground text-sm">
                              {"Sessions"}
                            </h3>
                            <div className="flex gap-1.5 items-center">
                              <div className="font-semibold tabular-nums text-2xl tracking-tight">
                                {"1,700"}
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                <span>
                                  {"+111.9%"}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"Across 53 days of storefront traffic"}
                          </p>
                        </div>
                        <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                          <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 36%, 100% 0%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-br bottom-0 from-indigo-600 h-full inset-x-0 to-indigo-800 via-indigo-700" style={{clipPath: "polygon(0px 50%, 100% 10%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                        </div>
                      </div>
                      <div className="@2xl:border-b-0 @4xl:border-b-0 @4xl:border-r-0 border-border/60 flex flex-col min-h-[316px] overflow-hidden p-4">
                        <div className="flex flex-1 flex-col gap-4 justify-between">
                          <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                            <svg className="lucide lucide-mouse-pointer-click" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M14 4.1 12 6"></path>
                              <path d="m5.1 8-2.9-.8"></path>
                              <path d="m6 12-1.9 2"></path>
                              <path d="M7.2 2.2 8 5.1"></path>
                              <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path>
                            </svg>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="leading-relaxed text-muted-foreground text-sm">
                              {"Conversion rate"}
                            </h3>
                            <div className="flex gap-1.5 items-center">
                              <div className="font-semibold tabular-nums text-2xl tracking-tight">
                                {"2.82%"}
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                <span>
                                  {"+3.8%"}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {"48 of 1,700 sessions converted"}
                          </p>
                        </div>
                        <div className="-mb-4 -mx-4 h-36 mt-4 overflow-hidden relative" aria-hidden="true">
                          <div className="absolute bg-indigo-100/80 bottom-0 dark:bg-indigo-950/50 h-full inset-x-0" style={{clipPath: "polygon(0px 0%, 100% 22%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-br bottom-0 from-indigo-700 h-full inset-x-0 to-indigo-950 via-indigo-800" style={{clipPath: "polygon(0px 10%, 100% 32%, 100% 100%, 0px 100%)"}}></div>
                          <div className="absolute bg-gradient-to-t bottom-0 from-indigo-950/20 h-full inset-x-0 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </section>
              </div>
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-0.5">
                    <div className="font-semibold text-sm">
                      {"Sales and sessions"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Revenue and traffic"}
                    </div>
                  </div>
                  <Select>
                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-[140px] pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex={0} id="base-ui-_r_ug_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue className="flex flex-1 text-left">
                      {"Last 60 days"}
                    </SelectValue>
                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_ug_-hidden-input" tabIndex={-1} aria-hidden="true" value="60d" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] rounded-(--frame-radius) space-y-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-10 items-center px-2.5">
                      <div className="flex gap-3 items-center">
                        <div className="bg-success rounded-full size-2"></div>
                        <div>
                          <div className="text-muted-foreground text-xs tracking-wide uppercase">
                            {"Sales"}
                          </div>
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold tabular-nums text-2xl tracking-tight">
                              {"$31,829.00"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                              {"+63.7%"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="bg-warning rounded-full size-2"></div>
                        <div>
                          <div className="text-muted-foreground text-xs tracking-wide uppercase">
                            {"Sessions"}
                          </div>
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold tabular-nums text-2xl tracking-tight">
                              {"1,700"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                              {"+111.9%"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[300px] w-full">
                      <ChartContainer>
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-full justify-center text-xs w-full" data-chart="chart-_r_ul_">
                        <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_ul_] {\n  --color-sales: var(--color-success);\n  --color-views: var(--color-warning);\n}\n\n\n.dark [data-chart=chart-_r_ul_] {\n  --color-sales: var(--color-success);\n  --color-views: var(--color-warning);\n}\n" }} />
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width={938} height={300} style={{position: "relative", cursor: "default", width: "938px", height: "300px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex={0} width={938} height={300} viewBox="0 0 938 300" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                                  <g className="recharts-cartesian-grid">
                                    <g className="recharts-cartesian-grid-horizontal">
                                      <line strokeDasharray="4 12" stroke="var(--border)" fill="none" x={10} y={10} width={918} height={250} x1={10} y1={10} x2={928} y2={10}></line>
                                      <line strokeDasharray="4 12" stroke="var(--border)" fill="none" x={10} y={10} width={918} height={250} x1={10} y1={260} x2={928} y2={260}></line>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                                <defs>
                                  <clippath id="recharts52-clip">
                                    <rect x={10} y={10} height={250} width={918}></rect>
                                  </clippath>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                                <g className="recharts-zIndex-layer_400" tabIndex={-1}>
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-success)" strokeWidth={2} fill="none" id="recharts-line-_r_un_" height={250} width={918} strokeDasharray="1076.2830810546875px 1076.2830810546875px" d="M30,260L139.75,173.225L249.5,218.575L359.25,135.85L469,188.85L578.75,188.925L688.5,48.4L798.25,124.45L908,206"></path>
                                    </g>
                                  </g>
                                  <g className="recharts-layer recharts-line">
                                    <g className="recharts-layer recharts-shape">
                                      <path className="recharts-curve recharts-line-curve" stroke="var(--color-warning)" strokeWidth={2} strokeDasharray="5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 0.935791015625px, 0px, 925.935791015625px" fill="none" id="recharts-line-_r_uo_" height={250} width={918} d="M30,260L139.75,190.147L249.5,177.647L359.25,115.882L469,112.206L578.75,82.794L688.5,72.5L798.25,56.324L908,22.5"></path>
                                    </g>
                                  </g>
                                </g>
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
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={30} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={30} dy="0.71em">
                                          {"Week 1"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={139.75} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={139.75} dy="0.71em">
                                          {"Week 2"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={249.5} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={249.5} dy="0.71em">
                                          {"Week 3"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={359.25} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={359.25} dy="0.71em">
                                          {"Week 4"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={469} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={469} dy="0.71em">
                                          {"Week 5"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={578.75} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={578.75} dy="0.71em">
                                          {"Week 6"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={688.5} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={688.5} dy="0.71em">
                                          {"Week 7"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={798.25} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={798.25} dy="0.71em">
                                          {"Week 8"}
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={918} stroke="none" fontSize="12" x={908} y={276} textAnchor="middle" fill="#666">
                                        <tspan x={908} dy="0.71em">
                                          {"Week 9"}
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
                    </div>
                  </div>
                </FramePanel>
              </Frame>
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-0.5">
                    <div className="font-semibold text-sm">
                      {"Conversion funnel"}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {"Sessions to purchase"}
                    </div>
                  </div>
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col gap-6 rounded-(--frame-radius)">
                  <div className="gap-6 grid grid-cols-2 md:grid-cols-4 p-2">
                    <div className="space-y-1">
                      <div className="flex gap-2.5 items-center">
                        <div className="bg-border h-12 rounded-full w-0.5"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Sessions"}
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <span className="font-semibold leading-none text-base">
                              {"1,700"}
                            </span>
                            <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-success text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"26.7%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-2.5 items-center">
                        <div className="bg-border h-12 rounded-full w-0.5"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Added to cart"}
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <span className="font-semibold leading-none text-base">
                              {"406"}
                            </span>
                            <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-success text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"21.9%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-2.5 items-center">
                        <div className="bg-border h-12 rounded-full w-0.5"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Reached checkout"}
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <span className="font-semibold leading-none text-base">
                              {"157"}
                            </span>
                            <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-success text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"37.9%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-2.5 items-center">
                        <div className="bg-border h-12 rounded-full w-0.5"></div>
                        <div className="flex flex-col gap-2">
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Converted"}
                          </div>
                          <div className="flex gap-2.5 items-center">
                            <span className="font-semibold leading-none text-base">
                              {"48"}
                            </span>
                            <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-success text-xs">
                              <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                              </svg>
                              {"28.6%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChartContainer>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-[250px] justify-center mt-auto text-xs w-full" data-chart="chart-_r_uq_">
                    <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_uq_] {\n  --color-sessions: var(--color-indigo-400);\n  --color-addedToCart: var(--color-indigo-500);\n  --color-reachedCheckout: var(--color-indigo-600);\n  --color-converted: var(--color-indigo-700);\n}\n\n\n.dark [data-chart=chart-_r_uq_] {\n  --color-sessions: var(--color-indigo-400);\n  --color-addedToCart: var(--color-indigo-500);\n  --color-reachedCheckout: var(--color-indigo-600);\n  --color-converted: var(--color-indigo-700);\n}\n" }} />
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                      <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                        <div className="recharts-wrapper" width={938} height={250} style={{position: "relative", cursor: "default", width: "938px", height: "250px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex={0} width={938} height={250} viewBox="0 0 938 250" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex={-1}>
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-horizontal">
                                  <line strokeDasharray="4 12" stroke="#ccc" fill="none" x={5} y={10} width={928} height={200} x1={5} y1={210} x2={933} y2={210}></line>
                                  <line strokeDasharray="4 12" stroke="#ccc" fill="none" x={5} y={10} width={928} height={200} x1={5} y1={160} x2={933} y2={160}></line>
                                  <line strokeDasharray="4 12" stroke="#ccc" fill="none" x={5} y={10} width={928} height={200} x1={5} y1={110} x2={933} y2={110}></line>
                                  <line strokeDasharray="4 12" stroke="#ccc" fill="none" x={5} y={10} width={928} height={200} x1={5} y1={60} x2={933} y2={60}></line>
                                  <line strokeDasharray="4 12" stroke="#ccc" fill="none" x={5} y={10} width={928} height={200} x1={5} y1={10} x2={933} y2={10}></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                            <defs>
                              <clippath id="recharts66-clip">
                                <rect x={5} y={10} height={200} width={928}></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <lineargradient id="fill-sessions" x1={0} y1={0} x2={0} y2={1}>
                                <stop offset="5%" stopColor="var(--color-indigo-400)" stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="var(--color-indigo-400)" stopOpacity={0.1}></stop>
                              </lineargradient>
                              <lineargradient id="fill-addedToCart" x1={0} y1={0} x2={0} y2={1}>
                                <stop offset="5%" stopColor="var(--color-indigo-500)" stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="var(--color-indigo-500)" stopOpacity={0.1}></stop>
                              </lineargradient>
                              <lineargradient id="fill-reachedCheckout" x1={0} y1={0} x2={0} y2={1}>
                                <stop offset="5%" stopColor="var(--color-indigo-600)" stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="var(--color-indigo-600)" stopOpacity={0.1}></stop>
                              </lineargradient>
                              <lineargradient id="fill-converted" x1={0} y1={0} x2={0} y2={1}>
                                <stop offset="5%" stopColor="var(--color-indigo-700)" stopOpacity={0.8}></stop>
                                <stop offset="95%" stopColor="var(--color-indigo-700)" stopOpacity={0.1}></stop>
                              </lineargradient>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={2} fill="url(#fill-sessions)" fillOpacity={0.6} height={200} stroke="none" width={928} id="recharts-area-_r_ur_" d="M5,115.882C49.19,124.118,93.381,132.353,137.571,132.353C181.762,132.353,225.952,89.02,270.143,81.176C314.333,73.333,358.524,69.412,402.714,69.412C446.905,69.412,491.095,73.529,535.286,73.529C579.476,73.529,623.667,65.686,667.857,56.471C712.048,47.255,756.238,18.235,800.429,18.235C844.619,18.235,888.81,75.588,933,132.941L933,210C888.81,210,844.619,210,800.429,210C756.238,210,712.048,210,667.857,210C623.667,210,579.476,210,535.286,210C491.095,210,446.905,210,402.714,210C358.524,210,314.333,210,270.143,210C225.952,210,181.762,210,137.571,210C93.381,210,49.19,210,5,210Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={2} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-400)" width={928} d="M5,115.882C49.19,124.118,93.381,132.353,137.571,132.353C181.762,132.353,225.952,89.02,270.143,81.176C314.333,73.333,358.524,69.412,402.714,69.412C446.905,69.412,491.095,73.529,535.286,73.529C579.476,73.529,623.667,65.686,667.857,56.471C712.048,47.255,756.238,18.235,800.429,18.235C844.619,18.235,888.81,75.588,933,132.941"></path>
                                </g>
                              </g>
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={2} fill="url(#fill-addedToCart)" fillOpacity={0.6} height={200} stroke="none" width={928} id="recharts-area-_r_us_" d="M5,187.059C49.19,191.471,93.381,195.882,137.571,195.882C181.762,195.882,225.952,180.196,270.143,177.059C314.333,173.922,358.524,173.431,402.714,172.353C446.905,171.275,491.095,170.588,535.286,170.588C579.476,170.588,623.667,174.314,667.857,174.706C712.048,175.098,756.238,174.902,800.429,175.294C844.619,175.686,888.81,181.961,933,188.235L933,210C888.81,210,844.619,210,800.429,210C756.238,210,712.048,210,667.857,210C623.667,210,579.476,210,535.286,210C491.095,210,446.905,210,402.714,210C358.524,210,314.333,210,270.143,210C225.952,210,181.762,210,137.571,210C93.381,210,49.19,210,5,210Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={2} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-500)" width={928} d="M5,187.059C49.19,191.471,93.381,195.882,137.571,195.882C181.762,195.882,225.952,180.196,270.143,177.059C314.333,173.922,358.524,173.431,402.714,172.353C446.905,171.275,491.095,170.588,535.286,170.588C579.476,170.588,623.667,174.314,667.857,174.706C712.048,175.098,756.238,174.902,800.429,175.294C844.619,175.686,888.81,181.961,933,188.235"></path>
                                </g>
                              </g>
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={2} fill="url(#fill-reachedCheckout)" fillOpacity={0.6} height={200} stroke="none" width={928} id="recharts-area-_r_ut_" d="M5,201.765C49.19,202.059,93.381,202.353,137.571,202.353C181.762,202.353,225.952,195.882,270.143,195.882C314.333,195.882,358.524,201.176,402.714,201.176C446.905,201.176,491.095,194.118,535.286,194.118C579.476,194.118,623.667,198.235,667.857,198.235C712.048,198.235,756.238,192.353,800.429,192.353C844.619,192.353,888.81,197.059,933,201.765L933,210C888.81,210,844.619,210,800.429,210C756.238,210,712.048,210,667.857,210C623.667,210,579.476,210,535.286,210C491.095,210,446.905,210,402.714,210C358.524,210,314.333,210,270.143,210C225.952,210,181.762,210,137.571,210C93.381,210,49.19,210,5,210Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={2} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-600)" width={928} d="M5,201.765C49.19,202.059,93.381,202.353,137.571,202.353C181.762,202.353,225.952,195.882,270.143,195.882C314.333,195.882,358.524,201.176,402.714,201.176C446.905,201.176,491.095,194.118,535.286,194.118C579.476,194.118,623.667,198.235,667.857,198.235C712.048,198.235,756.238,192.353,800.429,192.353C844.619,192.353,888.81,197.059,933,201.765"></path>
                                </g>
                              </g>
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <path className="recharts-area-area recharts-curve" strokeWidth={2} fill="url(#fill-converted)" fillOpacity={0.6} height={200} stroke="none" width={928} id="recharts-area-_r_uu_" d="M5,207.647C49.19,207.647,93.381,207.647,137.571,207.647C181.762,207.647,225.952,205.882,270.143,205.882C314.333,205.882,358.524,206.471,402.714,206.471C446.905,206.471,491.095,205.882,535.286,205.882C579.476,205.882,623.667,205.882,667.857,205.882C712.048,205.882,756.238,204.118,800.429,204.118C844.619,204.118,888.81,206.176,933,208.235L933,210C888.81,210,844.619,210,800.429,210C756.238,210,712.048,210,667.857,210C623.667,210,579.476,210,535.286,210C491.095,210,446.905,210,402.714,210C358.524,210,314.333,210,270.143,210C225.952,210,181.762,210,137.571,210C93.381,210,49.19,210,5,210Z"></path>
                                  <path className="recharts-area-curve recharts-curve" strokeWidth={2} fill="none" fillOpacity={0.6} height={200} stroke="var(--color-indigo-700)" width={928} d="M5,207.647C49.19,207.647,93.381,207.647,137.571,207.647C181.762,207.647,225.952,205.882,270.143,205.882C314.333,205.882,358.524,206.471,402.714,206.471C446.905,206.471,491.095,205.882,535.286,205.882C579.476,205.882,623.667,205.882,667.857,205.882C712.048,205.882,756.238,204.118,800.429,204.118C844.619,204.118,888.81,206.176,933,208.235"></path>
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
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={137.57142857142853} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={137.57142857142853} dy="0.71em">
                                      {"Week 2"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={270.1428571428571} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={270.1428571428571} dy="0.71em">
                                      {"Week 3"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={402.7142857142857} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={402.7142857142857} dy="0.71em">
                                      {"Week 4"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={535.2857142857142} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={535.2857142857142} dy="0.71em">
                                      {"Week 5"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={667.8571428571429} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={667.8571428571429} dy="0.71em">
                                      {"Week 6"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={800.4285714285716} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={800.4285714285716} dy="0.71em">
                                      {"Week 7"}
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={928} stroke="none" fontSize="12" x={916.703125} y={224} textAnchor="middle" fill="#666">
                                    <tspan x={916.703125} dy="0.71em">
                                      {"Week 8"}
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
                </FramePanel>
              </Frame>
              <div className="@4xl:grid-cols-3 gap-6 grid">
                <div className="@4xl:col-span-2">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                    <style dangerouslySetInnerHTML={{ __html: "\n@keyframes analytics-bar-grow-up {\n  from { transform: scaleY(0); opacity: 0.65; }\n  to { transform: scaleY(1); opacity: 1; }\n}\n\n.analytics-bar-grow-up {\n  animation: analytics-bar-grow-up 720ms cubic-bezier(0.22, 1, 0.36, 1) both;\n  transform-box: fill-box;\n  transform-origin: bottom;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .analytics-bar-grow-up { animation: none; opacity: 1; }\n}\n" }} />
                    <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-semibold text-sm">
                          {"Units by category"}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {"Units sold per category"}
                        </div>
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>
                          {"59.0%"}
                        </span>
                      </Badge>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] flex flex-1 flex-col rounded-(--frame-radius)">
                      <div className="flex flex-1 flex-col justify-center min-h-[300px] w-full">
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-auto flex justify-center max-w-3xl mx-auto text-xs w-full" data-chart="chart-_r_uj_" style={{height: "340px"}}>
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                            <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                              <div className="recharts-wrapper" width={606} height={340} style={{position: "relative", cursor: "default", width: "606px", height: "340px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" role="application" tabIndex={0} width={606} height={340} viewBox="0 0 606 340" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                                  <defs>
                                    <clippath id="recharts45-clip">
                                      <rect x={8} y={16} height={294} width={590}></rect>
                                    </clippath>
                                  </defs>
                                  <rect x={0} y={0} width="100%" height={310} fill="url(#analytics-pattern-dots)"></rect>
                                  <defs>
                                    <pattern id="analytics-pattern-dots" x={0} y={0} width={10} height={10} patternUnits="userSpaceOnUse">
                                      <circle className="dark:text-muted/40 text-muted" cx={2} cy={2} r={1} fill="currentColor"></circle>
                                    </pattern>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex={-1}>
                                    <g className="recharts-bar recharts-layer" id="recharts-bar-_r_uk_">
                                      <g className="recharts-bar-rectangles recharts-layer">
                                        <g className="recharts-layer">
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={16.42857142857143} y={60.54545454545454} width={67} height={249.45454545454547} stroke="none" fill="url(#analytics-hatch-accessories)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-accessories" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-rose-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-rose-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={100.71428571428572} y={24.9090909090909} width={67} height={285.0909090909091} stroke="none" fill="url(#analytics-hatch-activewear)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-activewear" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-violet-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-violet-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={185} y={24.9090909090909} width={67} height={285.0909090909091} stroke="none" fill="url(#analytics-hatch-apparel)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-apparel" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-indigo-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-indigo-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={269.28571428571433} y={24.9090909090909} width={67} height={285.0909090909091} stroke="none" fill="url(#analytics-hatch-bags)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-bags" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-amber-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-amber-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={353.5714285714286} y={16} width={67} height={294} stroke="none" fill="url(#analytics-hatch-denim)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-denim" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-teal-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-teal-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={437.8571428571429} y={24.9090909090909} width={67} height={285.0909090909091} stroke="none" fill="url(#analytics-hatch-footwear)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-footwear" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-sky-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-sky-500)"></rect>
                                                </pattern>
                                              </defs>
                                            </g>
                                          </g>
                                          <g className="recharts-bar-rectangle recharts-layer">
                                            <g className="recharts-inactive-bar recharts-layer">
                                              <rect className="analytics-bar-grow-up" rx={4} x={522.1428571428572} y={78.36363636363637} width={67} height={231.63636363636363} stroke="none" fill="url(#analytics-hatch-outerwear)"></rect>
                                              <defs>
                                                <pattern id="analytics-hatch-outerwear" x={0} y={0} width={5} height={5} patternUnits="userSpaceOnUse" patterntransform="rotate(-45)">
                                                  <rect width={10} height={10} opacity={0.5} fill="var(--color-emerald-500)"></rect>
                                                  <rect width={1} height={10} fill="var(--color-emerald-500)"></rect>
                                                </pattern>
                                              </defs>
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
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={50.142857142857146} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={50.142857142857146} dy="0.71em">
                                            {"Accessories"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={134.42857142857144} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={134.42857142857144} dy="0.71em">
                                            {"Activewear"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={218.71428571428572} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={218.71428571428572} dy="0.71em">
                                            {"Apparel"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={303.00000000000006} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={303.00000000000006} dy="0.71em">
                                            {"Bags"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={387.28571428571433} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={387.28571428571433} dy="0.71em">
                                            {"Denim"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={471.5714285714286} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={471.5714285714286} dy="0.71em">
                                            {"Footwear"}
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height={30} orientation="bottom" width={590} stroke="none" x={555.8571428571429} y={326} textAnchor="middle" fill="#666">
                                          <tspan x={555.8571428571429} dy="0.71em">
                                            {"Outerwear"}
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
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-sm">
                        {"Sessions by channel"}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {"First-touch attribution"}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                        <span>
                          {"111.9%"}
                        </span>
                      </Badge>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex={0}>
                        {"Export"}
                      </Button>
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-radius)-1px)] rounded-(--frame-radius) space-y-6">
                    <div className="space-y-6">
                      <div className="flex gap-3 items-center px-2">
                        <div className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_oklch(0.2_0.01_260/0.16)] shrink-0 size-8">
                          <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Total sessions"}
                          </div>
                          <div className="font-semibold tabular-nums text-2xl tracking-tight">
                            {"1,700"}
                          </div>
                        </div>
                      </div>
                      <div className="aspect-square max-h-[200px] mx-auto w-full">
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-full justify-center overflow-visible text-xs w-full" data-chart="chart-_r_um_">
                          <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_r_um_] {\n  --color-organic: var(--color-blue-500);\n  --color-direct: var(--color-sky-500);\n  --color-paid: var(--color-orange-500);\n  --color-social: var(--color-indigo-500);\n  --color-email: var(--color-emerald-500);\n  --color-referral: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_r_um_] {\n  --color-organic: var(--color-blue-500);\n  --color-direct: var(--color-sky-500);\n  --color-paid: var(--color-orange-500);\n  --color-social: var(--color-indigo-500);\n  --color-email: var(--color-emerald-500);\n  --color-referral: var(--color-slate-500);\n}\n" }} />
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                            <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                              <div className="overflow-visible recharts-wrapper" width={274} height={200} style={{position: "relative", cursor: "default", width: "274px", height: "200px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex={-1} style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex={0} width={274} height={200} viewBox="0 0 274 200" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex={-1}></g>
                                  <defs>
                                    <clippath id="recharts55-clip">
                                      <rect x={5} y={5} height={190} width={264}></rect>
                                    </clippath>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex={-1}>
                                    <g className="recharts-layer recharts-pie" tabIndex={0}>
                                      <g className="recharts-layer">
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-organic)" name="organic" tabIndex={-1} data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_up_" d={"M 228.6515,100\n    A8,8,0,0,0,236.6212,91.3043\n    A100,100,0,0,0,107.4454,4.4671\n    A8,8,0,0,0,102.4017,15.1298\n  L121.051,60.8767\n      A8,8,0,0,0,130.0481,65.6974\n      A35,35,0,0,1,171.3889,93.4884\n      A8,8,0,0,0,179.2493,100Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-direct)" name="direct" tabIndex={-1} data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_up_" d={"M 99.4609,16.3889\n    A8,8,0,0,0,88.2638,12.68\n    A100,100,0,0,0,40.2083,125.127\n    A8,8,0,0,0,50.6275,130.656\n  L97.1842,114.1317\n      A8,8,0,0,0,102.4138,105.366\n      A35,35,0,0,1,116.9744,71.295\n      A8,8,0,0,0,119.6953,61.4572Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-paid)" name="paid" tabIndex={-1} data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_up_" d={"M 51.75,133.6517\n    A8,8,0,0,0,47.5297,144.6662\n    A100,100,0,0,0,122.4766,198.9397\n    A8,8,0,0,0,131.6247,191.4937\n  L134.5221,142.1765\n      A8,8,0,0,0,128.4827,133.9478\n      A35,35,0,0,1,107.4039,118.6834\n      A8,8,0,0,0,97.7017,115.5127Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-social)" name="social" tabIndex={-1} data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_up_" d={"M 134.821,191.6256\n    A8,8,0,0,0,143.3248,199.7998\n    A100,100,0,0,0,188.3626,185.8014\n    A8,8,0,0,0,190.7344,174.247\n  L161.7703,134.2262\n      A8,8,0,0,0,151.8868,131.6762\n      A35,35,0,0,1,142.6922,134.534\n      A8,8,0,0,0,135.9956,142.2373Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-email)" name="email" tabIndex={-1} data-recharts-item-index="4" data-recharts-item-id="recharts-pie-_r_up_" d={"M 193.2928,172.3264\n    A8,8,0,0,0,205.05,173.2748\n    A100,100,0,0,0,227.3598,142.8382\n    A8,8,0,0,0,222.9165,131.9118\n  L176.6055,114.7106\n      A8,8,0,0,0,166.9698,118.0779\n      A35,35,0,0,1,163.2605,123.1384\n      A8,8,0,0,0,162.9497,133.3408Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth={4} stroke="var(--background)" cx={137} cy={100} fill="var(--color-referral)" name="referral" tabIndex={-1} data-recharts-item-index="5" data-recharts-item-id="recharts-pie-_r_up_" d={"M 223.9778,128.8939\n    A8,8,0,0,0,234.2825,123.1542\n    A100,100,0,0,0,236.2571,112.1669\n    A8,8,0,0,0,228.5957,103.1984\n  L179.2235,101.4744\n      A8,8,0,0,0,171.1407,107.7078\n      A35,35,0,0,1,171.6881,104.6618\n      A8,8,0,0,0,177.0948,113.3194Z"}></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_500" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_600" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_1000" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_1100" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_1200" tabIndex={-1}></g>
                                  <g className="recharts-zIndex-layer_2000" tabIndex={-1}>
                                    <g className="recharts-label-list recharts-layer">
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={174.65814776225068} y={43.981129008909015} textAnchor="middle" fill="white">
                                        <tspan x={174.65814776225068} dy="0.355em">
                                          {"548"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={74.93055251078621} y={73.47390551958823} textAnchor="middle" fill="white">
                                        <tspan x={74.93055251078621} dy="0.355em">
                                          {"417"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={97.40976216044558} y={154.67049540481148} textAnchor="middle" fill="white">
                                        <tspan x={97.40976216044558} dy="0.355em">
                                          {"318"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={157.03442487798574} y={164.45829519781256} textAnchor="middle" fill="white">
                                        <tspan x={157.03442487798574} dy="0.355em">
                                          {"182"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={191.4411567919646} y={139.90501781922575} textAnchor="middle" fill="white">
                                        <tspan x={191.4411567919646} dy="0.355em">
                                          {"155"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="12" fontWeight="600" offset={5} x={203.43565652620356} y={111.93957880045636} textAnchor="middle" fill="white">
                                        <tspan x={203.43565652620356} dy="0.355em">
                                          {"80"}
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        </ChartContainer>
                      </div>
                      <div className="flex gap-2 items-center px-2 text-muted-foreground text-sm">
                        <svg className="lucide lucide-info shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                        <span>
                          {"Sessions attributed on first touch, from the storefront event stream."}
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"Week 1"}
    </span>
  </>
  )
}
