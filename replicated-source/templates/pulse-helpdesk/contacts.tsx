import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  FilterChip,
  Filters,
} from "@/registry-neui/bases/base/neui/filters/filters"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <SidebarProvider>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar:var(--color-background)] flex flex-col group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "260px", "--sidebar-width-icon": "62px", "--header-height": "50px"}}>
      <header className="bg-background border-b flex items-center sticky top-0 w-full z-50">
        <div className="flex gap-2 h-(--header-height) items-center px-4 w-full">
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
          <div className="-mx-0.5 flex items-center">
            <Item className="[a]:hover:bg-muted bg-primary border border-primary gap-2.5 p-0 rounded-lg size-7 text-primary-foreground text-sm" variant="default" size="default" aria-hidden="true">
              <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                <svg className="size-3.5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                </svg>
              </ItemMedia>
            </Item>
          </div>
          <Breadcrumb className="flex-1 min-w-0" aria-label="breadcrumb">
            <BreadcrumbList className="flex-nowrap gap-1 text-muted-foreground text-sm">
              <BreadcrumbItem className="gap-1 min-w-0 shrink-0">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_dar5cq_" aria-expanded="false">
                  <svg className="size-3" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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
                  <span className="sm:not-sr-only sr-only truncate">
                    {"Help Desk"}
                  </span>
                  <svg className="hidden lucide lucide-chevrons-up-down opacity-60 size-3.5 sm:inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0 text-xs" role="presentation" aria-hidden="true">
                {"/"}
              </BreadcrumbSeparator>
              <BreadcrumbItem className="gap-1 min-w-0 shrink">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_3er5cq_" aria-expanded="false">
                  <span className="sm:hidden truncate">
                    {"All"}
                  </span>
                  <span className="hidden sm:inline truncate">
                    {"All products"}
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
          <div className="flex gap-1 items-center shrink-0">
            <div className="flex gap-2 items-center shrink-0">
              <AvatarGroup>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full" aria-label="Mira Stone — on shift" id="base-ui-_R_3pb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/mira-stone.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      {"MS"}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Leo Grant — on shift" id="base-ui-_R_3qb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/leo-grant.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      {"LG"}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Sarah Chen — on shift" id="base-ui-_R_3rb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/sarah-chen.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      {"SC"}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Nora Vale — on shift" id="base-ui-_R_3sb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/nora-vale.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      {"NV"}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full sm:hidden" aria-label="10 more agents on shift" id="base-ui-_R_fj35cq_" baseUiTooltipTrigger="" href="/team">
                  <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                    {"+"}
                    {"10"}
                  </AvatarGroupCount>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="7 more agents on shift" id="base-ui-_R_fr35cq_" baseUiTooltipTrigger="" href="/team">
                  <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                    {"+"}
                    {"7"}
                  </AvatarGroupCount>
                </TooltipTrigger>
                </Tooltip>
              </AvatarGroup>
              <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <Popover>
              <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:gap-2 md:px-3 md:w-auto outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invite team member" baseUiClickTrigger="" id="base-ui-_R_3v35cq_" aria-haspopup="dialog" aria-expanded="false">
                <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                <span className="hidden md:block">
                  {"Invite"}
                </span>
              </PopoverTrigger>
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 min-w-0">
        <SidebarProvider>
        <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
          <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
          <SidebarProvider>
          <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--header-height))]! h-svh hidden inset-y-0 md:flex top-(--header-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <SidebarProvider>
            <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
              <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center p-2 px-4" sidebar="header">
                <div className="flex-1 pt-2 w-full">
                  <form novalidate="">
                    <SidebarProvider>
                    <SidebarGroup className="p-0" sidebar="group">
                      <SidebarProvider>
                      <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-background hover:text-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 px-2.5 rounded-lg text-sm transition-[width] w-full" type="button" tabIndex="0" id="search">
                          {"Search..."}
                        </Button>
                        <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5 px-1 right-2 rounded-sm text-muted-foreground text-xs top-1/2 w-fit">
                          {"⌘K"}
                        </Kbd>
                      </SidebarGroupContent>
                      </SidebarProvider>
                    </SidebarGroup>
                    </SidebarProvider>
                    <DialogHeader className="gap-2 sr-only">
                      <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_bt6d5cq_">
                        {"Search"}
                      </DialogTitle>
                      <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_jt6d5cq_">
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
                    {"Platform"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1spad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                          <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1t9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tickets">
                          <svg className="lucide lucide-ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                            <path d="M13 5v2"></path>
                            <path d="M13 17v2"></path>
                            <path d="M13 11v2"></path>
                          </svg>
                          <span>
                            {"Tickets"}
                          </span>
                          <SidebarMenuBadge className="absolute font-medium h-5 min-w-5 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground pointer-events-none px-1 right-1 rounded-md text-sidebar-foreground text-xs" sidebar="menu-badge">
                            {"24"}
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1tpad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/contacts" status="active" aria-current="page" data-active="">
                          <svg className="lucide lucide-contact" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 2v2"></path>
                            <path d="M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2"></path>
                            <path d="M8 2v2"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                          </svg>
                          <span>
                            {"Contacts"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1u9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/team">
                          <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                          <span>
                            {"Team"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1upad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/knowledge-base">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 5v16"></path>
                            <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                          </svg>
                          <span>
                            {"Knowledge Base"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1v9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <span>
                            {"Reports"}
                          </span>
                        </SidebarMenuButton>
                        </SidebarProvider>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarProvider>
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1vpad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings">
                          <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>
                            {"Settings"}
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
                <div className="mt-auto">
                  <div className="group in-data-[state=collapsed]:hidden px-2" data-active="true">
                    <div className="relative size-full">
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-8%", "--scale": "0.94", "--opacity": "0.8"}} aria-hidden="true" inert="">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div className="invisible">
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"August scorecard is out"}
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                {"Resolution rate, handle time and CSAT, agent by agent."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/august-scorecard.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/reports">
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
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-4%", "--scale": "0.97", "--opacity": "0.9"}} aria-hidden="true" inert="">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"Security runbooks published"}
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                {"Access reviews, two-factor and caller verification."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/security-runbook.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/knowledge-base">
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
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-0%", "--scale": "1", "--opacity": "1"}} aria-hidden="false">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div>
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                {"SLA clock pauses on waits"}
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                {"Waiting Customer holds a ticket's clock until the reply."}
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/sla-clock-pause.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/tickets">
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
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
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
                                  <span></span>
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
              <SidebarFooter className="gap-2 mt-2 p-2 pb-4 px-4" sidebar="footer">
                <SidebarProvider>
                <SidebarMenu className="gap-0" sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-card border border-border/60 data-[state=open]:bg-accent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:shadow-none group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-accent/50 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-colors w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_ded5cq_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group-data-[collapsible=icon]:size-6 ring-1 ring-success rounded-full size-7" size="default">
                        <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/nick-bold.jpg" alt="Nick Bold"></AvatarImage>
                        <AvatarFallback className="bg-muted font-semibold rounded-full text-muted-foreground text-xs">
                          {"NB"}
                        </AvatarFallback>
                        <AvatarBadge className="bg-success ring-background text-primary-foreground" aria-label="Nick Bold is online"></AvatarBadge>
                      </Avatar>
                      <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left">
                        <span className="font-semibold text-sm truncate">
                          {"Nick Bold"}
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          {"nick.bold@pulse.io"}
                        </span>
                      </div>
                      <svg className="group-data-[collapsible=icon]:hidden lucide lucide-chevron-down opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
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
                  <span className="bg-border block duration-100 ease-linear group-hover/rail:bg-foreground/50 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                  <span className="bg-border block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/50 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
                </span>
                <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
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
          <div className="flex flex-1 flex-col gap-4 min-w-0 p-4">
            <div className="@container flex flex-col gap-5 max-w-[71rem] mx-auto w-full">
              <header className="-mb-1 flex flex-col gap-3 items-start min-[450px]:flex-row min-[450px]:gap-4 min-[450px]:items-center min-[450px]:justify-between">
                <div className="min-w-0 w-full">
                  <h1 className="sr-only">
                    {"Contacts"}
                  </h1>
                  <Breadcrumb aria-label="breadcrumb">
                    <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                      <BreadcrumbItem className="gap-1">
                        <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center transition-colors" href="/">
                          <svg className="lucide lucide-house shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          {"Home"}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0" role="presentation" aria-hidden="true">
                        {"/"}
                      </BreadcrumbSeparator>
                      <BreadcrumbItem className="gap-1 min-w-0">
                        <BreadcrumbPage className="font-medium text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                          {"Contacts"}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <p className="mt-1 text-muted-foreground text-pretty text-sm">
                    {"The people who write in, and who owns each one."}
                  </p>
                </div>
              </header>
              <section aria-label="Contact directory">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-balance text-sm">
                        {"Contacts"}
                      </div>
                      <div className="flex gap-1.5 items-center text-muted-foreground text-pretty text-xs">
                        <span>
                          {"11 contacts"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          {"11 accounts"}
                        </span>
                      </div>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" x2="19" y1="8" y2="14"></line>
                        <line x1="22" x2="16" y1="11" y2="11"></line>
                      </svg>
                      {"Add contact"}
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0 shadow-none">
                    <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <Filters>
                        <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                          <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg items-stretch w-fit" role="group" aria-label="Name contains no value" ruleId="contacts-filter-name" tabIndex="0" index="0">
                            <div className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-1.5 items-center px-2.5 rounded-lg text-sm" title="Name">
                              <svg className="lucide lucide-user size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span className="flex items-center">
                                <span>
                                  {"Name"}
                                </span>
                              </span>
                            </div>
                            <Popover>
                            <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_c_" aria-haspopup="dialog" aria-expanded="false">
                              {"contains"}
                            </PopoverTrigger>
                            </Popover>
                            <Popover>
                            <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" aria-label="Search contacts..." tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_e_" aria-haspopup="dialog" aria-expanded="false">
                              {"Search contacts..."}
                            </PopoverTrigger>
                            </Popover>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Name filter options" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
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
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_l_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                          </svg>
                          {"Filters"}
                        </PopoverTrigger>
                        </Popover>
                        <div className="sr-only" aria-live="polite" role="status">
                          <span></span>
                        </div>
                      </Filters>
                      <div className="flex gap-2 items-center shrink-0">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                          <svg className="lucide lucide-funnel-x size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                            <path d="m16.5 3.5 5 5"></path>
                            <path d="m21.5 3.5-5 5"></path>
                          </svg>
                          {"Clear"}
                        </Button>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_n_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx="17" cy="17" r="3"></circle>
                            <circle cx="7" cy="7" r="3"></circle>
                          </svg>
                          {"Settings"}
                        </PopoverTrigger>
                        </Popover>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridProvider>
                      <DataGridScrollArea className="contacts-grid" role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_o_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "134px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                            <DataGridProvider>
                            <DataGridTableViewport style={{width: "calc(1120px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                              <DataGridProvider>
                              <DataGridTable style={{"--header-select-size": "40", "--col-select-size": "40", "--header-name-size": "270", "--col-name-size": "270", "--header-company-size": "210", "--col-company-size": "210", "--header-plan-size": "120", "--col-plan-size": "120", "--header-owner-size": "180", "--col-owner-size": "180", "--header-lifecycle-size": "130", "--col-lifecycle-size": "130", "--header-openDeals-size": "110", "--col-openDeals-size": "110", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1120px + var(--data-grid-fill-size, 0px))"}}>
                                <colgroup>
                                  <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-company-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-plan-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-owner-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-lifecycle-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-openDeals-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                  <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                </colgroup>
                                <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                                  <tr className="[&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="false" aria-label="Select all"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" style={{width: "calc(var(--header-name-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                          {"Name"}
                                          <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m5 12 7-7 7 7"></path>
                                            <path d="M12 19V5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-company-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                                          {"Account"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-plan-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_19_" aria-expanded="false">
                                          {"Plan"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-owner-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1e_" aria-expanded="false">
                                          {"Owner"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-lifecycle-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1j_" aria-expanded="false">
                                          {"Lifecycle"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-openDeals-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1o_" aria-expanded="false">
                                          {"Open Deals"}
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                                    <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                  </tr>
                                </thead>
                                <DataGridProvider>
                                <DataGridTableBody>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="7">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/aisha-bello.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"AB"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Aisha Bello"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="aisha.bello@atlasfreight.com">
                                            {"aisha.bello@atlasfreight.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-truck size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                              <path d="M15 18H9"></path>
                                              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                              <circle cx="17" cy="18" r="2"></circle>
                                              <circle cx="7" cy="18" r="2"></circle>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Atlas Freight"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        {"Enterprise"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"SQ"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Sana Qureshi"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"Customer"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$38K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"1 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Aisha Bello" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="10">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_23_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/ben-travers.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"BT"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Ben Travers"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="ben.travers@ridgelineenergy.com">
                                            {"ben.travers@ridgelineenergy.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Ridgeline Energy"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Scale"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/sarah-chen.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"SC"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Sarah Chen"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"Opportunity"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$67K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"1 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ben Travers" aria-haspopup="menu" id="base-ui-_r_29_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="9">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/carla-ferreira.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"CF"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Carla Ferreira"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="carla.f@quantadevices.com">
                                            {"carla.f@quantadevices.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-cpu size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M12 20v2"></path>
                                              <path d="M12 2v2"></path>
                                              <path d="M17 20v2"></path>
                                              <path d="M17 2v2"></path>
                                              <path d="M2 12h2"></path>
                                              <path d="M2 17h2"></path>
                                              <path d="M2 7h2"></path>
                                              <path d="M20 12h2"></path>
                                              <path d="M20 17h2"></path>
                                              <path d="M20 7h2"></path>
                                              <path d="M7 20v2"></path>
                                              <path d="M7 2v2"></path>
                                              <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                              <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Quanta Devices"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        {"Enterprise"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/alex-johnson.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"AJ"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Alex Johnson"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-sky-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"MQL"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        {"No deals"}
                                      </span>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Carla Ferreira" aria-haspopup="menu" id="base-ui-_r_2i_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="4">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2l_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/david-okafor.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"DO"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"David Okafor"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="d.okafor@vertexhealth.io">
                                            {"d.okafor@vertexhealth.io"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-heart-pulse size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                                              <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Vertex Health"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        {"Growth"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/alex-johnson.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"AJ"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Alex Johnson"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-sky-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"MQL"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        {"No deals"}
                                      </span>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for David Okafor" aria-haspopup="menu" id="base-ui-_r_2r_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="3">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2u_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/elena-sokolova.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"ES"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Elena Sokolova"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="elena.s@cobaltlogistics.com">
                                            {"elena.s@cobaltlogistics.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-container size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path>
                                              <path d="M10 21.9V14L2.1 9.1"></path>
                                              <path d="m10 14 11.9-6.9"></path>
                                              <path d="M14 19.8v-8.1"></path>
                                              <path d="M18 17.5V9.4"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Cobalt Logistics"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        {"Enterprise"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"SQ"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Sana Qureshi"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-violet-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"SQL"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$28K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"1 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Elena Sokolova" aria-haspopup="menu" id="base-ui-_r_34_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="5">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_37_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/hana-kim.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"HK"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Hana Kim"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="hana.kim@meridianretail.com">
                                            {"hana.kim@meridianretail.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                                              <path d="M3.103 6.034h17.794"></path>
                                              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Meridian Retail"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Scale"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/mira-stone.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"MS"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Mira Stone"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"Opportunity"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$56K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"2 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Hana Kim" aria-haspopup="menu" id="base-ui-_r_3d_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="2">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/marcus-hale.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"MH"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Marcus Hale"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="marcus.hale@apexmfg.com">
                                            {"marcus.hale@apexmfg.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-factory size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M12 16h.01"></path>
                                              <path d="M16 16h.01"></path>
                                              <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                                              <path d="M8 16h.01"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Apex Manufacturing"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        {"Growth"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/leo-grant.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"LG"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Leo Grant"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"Customer"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$42K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"1 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Marcus Hale" aria-haspopup="menu" id="base-ui-_r_3m_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="1">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3p_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/priya-raman.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"PR"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Priya Raman"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="priya.raman@brightwave.media">
                                            {"priya.raman@brightwave.media"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-radio-tower size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                                              <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                                              <circle cx="12" cy="9" r="2"></circle>
                                              <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                                              <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                                              <path d="M9.5 18h5"></path>
                                              <path d="m8 22 4-11 4 11"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Brightwave Media"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        {"Growth"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/mira-stone.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"MS"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Mira Stone"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"Opportunity"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$84K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"2 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Priya Raman" aria-haspopup="menu" id="base-ui-_r_3v_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="8">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_42_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/ryan-mercer.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"RM"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Ryan Mercer"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="ryan.mercer@orbitsoftware.dev">
                                            {"ryan.mercer@orbitsoftware.dev"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-satellite size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path>
                                              <path d="M16.5 7.5 19 5"></path>
                                              <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path>
                                              <path d="M9 21a6 6 0 0 0-6-6"></path>
                                              <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Orbit Software"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                        {"Scale"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/leo-grant.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"LG"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Leo Grant"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-violet-500 rounded-full! shrink-0 size-1.5"></span>
                                        {"SQL"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-semibold tabular-nums text-foreground text-sm">
                                          {"$31K"}
                                        </span>
                                        <span className="tabular-nums text-muted-foreground text-xs">
                                          {"1 open"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Ryan Mercer" aria-haspopup="menu" id="base-ui-_r_48_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="11">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4b_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/sofia-marchetti.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            {"SM"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            {"Sofia Marchetti"}
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="sofia.m@summitfinancial.com">
                                            {"sofia.m@summitfinancial.com"}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-company-size) * 1px)"}}>
                                      <div className="flex gap-2.5 items-center min-w-0">
                                        <Item className="[a]:hover:bg-muted border border-border gap-2 in-data-[slot=dropdown-menu-content]:p-0 p-0 rounded-lg size-7 text-muted-foreground text-sm" variant="outline" size="xs">
                                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                            <svg className="lucide lucide-landmark size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                              <path d="M10 18v-7"></path>
                                              <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                                              <path d="M14 18v-7"></path>
                                              <path d="M18 18v-7"></path>
                                              <path d="M3 22h18"></path>
                                              <path d="M6 18v-7"></path>
                                            </svg>
                                          </ItemMedia>
                                        </Item>
                                        <span className="font-medium min-w-0 text-foreground truncate">
                                          {"Summit Financial"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-plan-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-foreground text-xs transition-shadow">
                                        {"Starter"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-owner-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/nora-vale.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-[10px] text-muted-foreground">
                                            {"NV"}
                                          </AvatarFallback>
                                        </Avatar>
                                        <span className="min-w-0 text-foreground text-sm truncate">
                                          {"Nora Vale"}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-lifecycle-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-muted-foreground rounded-full! shrink-0 size-1.5"></span>
                                        {"Lead"}
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-openDeals-size) * 1px)"}}>
                                      <span className="text-muted-foreground text-sm">
                                        {"No deals"}
                                      </span>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Sofia Marchetti" aria-haspopup="menu" id="base-ui-_r_4h_" aria-expanded="false">
                                          <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                  </tr>
                                </DataGridTableBody>
                                </DataGridProvider>
                              </DataGridTable>
                              </DataGridProvider>
                            </DataGridTableViewport>
                            </DataGridProvider>
                          </div>
                        </div>
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-overflow-x-end="" data-orientation="horizontal" data-id="base-ui-_r_o_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "866.2714285714286px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                      </DataGridProvider>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: "@layer utilities { .contacts-grid colgroup > col:nth-last-child(3) { width: 100% !important } .contacts-grid col[data-slot=\"data-grid-table-fill-col\"] { width: 0 !important } }" }} />
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <DataGridProvider>
                      <DataGridPagination>
                        <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                          <div className="text-muted-foreground text-sm">
                            {"Rows per page"}
                          </div>
                          <Select>
                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_4k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue className="flex flex-1 text-left">
                              {"10"}
                            </SelectValue>
                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_4k_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            {"1 - 10 of 11"}
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
        </SidebarInset>
      </div>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "11px", letterSpacing: "normal"}}>
      {"Mar 31"}
    </span>
  </>
  )
}
