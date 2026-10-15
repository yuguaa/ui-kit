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
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar:var(--color-background)] flex flex-col group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "260px", "--sidebar-width-icon": "62px", "--header-height": "50px"}}>
      <header className="bg-background border-b flex items-center sticky top-0 w-full z-50">
        <div className="flex gap-2 h-(--header-height) items-center px-4 w-full">
          <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
            <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">
              Toggle Sidebar
            </span>
          </SidebarTrigger>
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
                    Help Desk
                  </span>
                  <svg className="hidden lucide lucide-chevrons-up-down opacity-60 size-3.5 sm:inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0 text-xs" role="presentation" aria-hidden="true">
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem className="gap-1 min-w-0 shrink">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center min-w-0 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink text-[0.8rem] text-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_3er5cq_" aria-expanded="false">
                  <span className="sm:hidden truncate">
                    All
                  </span>
                  <span className="hidden sm:inline truncate">
                    All products
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
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full" aria-label="Mira Stone — on shift" id="base-ui-_R_3pb35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/mira-stone.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      MS
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Leo Grant — on shift" id="base-ui-_R_3qb35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/leo-grant.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      LG
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Sarah Chen — on shift" id="base-ui-_R_3rb35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/sarah-chen.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      SC
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Nora Vale — on shift" id="base-ui-_R_3sb35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/nora-vale.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      NV
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full sm:hidden" aria-label="10 more agents on shift" id="base-ui-_R_fj35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                    +
                    10
                  </AvatarGroupCount>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="active focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="7 more agents on shift" id="base-ui-_R_fr35cq_" baseUiTooltipTrigger="" href="/team" status="active" aria-current="page">
                  <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                    +
                    7
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
                  Invite
                </span>
              </PopoverTrigger>
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 min-w-0">
        <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
          <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
          <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--header-height))]! h-svh hidden inset-y-0 md:flex top-(--header-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
              <SidebarHeader className="flex-row gap-2 in-data-[state=collapsed]:flex-col in-data-[state=collapsed]:items-start in-data-[state=collapsed]:justify-center items-center p-2 px-4" sidebar="header">
                <div className="flex-1 pt-2 w-full">
                  <form novalidate="">
                    <SidebarGroup className="p-0" sidebar="group">
                      <SidebarGroupContent className="relative text-sm" sidebar="group-content">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 duration-200 ease-linear focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-background hover:text-foreground in-data-[state=collapsed]:pl-4! in-data-[state=collapsed]:text-transparent in-data-[state=collapsed]:w-8! justify-start pl-7 px-2.5 rounded-lg text-sm transition-[width] w-full" type="button" tabIndex="0" id="search">
                          Search...
                        </Button>
                        <svg className="-translate-y-1/2 absolute left-2 lucide lucide-search opacity-50 pointer-events-none select-none size-3.5 top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <Kbd className="-translate-y-1/2 [&_svg:not([class*='size-'])]:size-3 absolute bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background in-data-[state=collapsed]:hidden min-w-5 px-1 right-2 rounded-sm text-muted-foreground text-xs top-1/2 w-fit">
                          ⌘K
                        </Kbd>
                      </SidebarGroupContent>
                    </SidebarGroup>
                    <DialogHeader className="gap-2 sr-only">
                      <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_bt6d5cq_">
                        Search
                      </DialogTitle>
                      <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_jt6d5cq_">
                        Search your workspace content.
                      </DialogDescription>
                    </DialogHeader>
                  </form>
                </div>
              </SidebarHeader>
              <SidebarContent className="gap-2 no-scrollbar px-2" sidebar="content">
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 in-data-[state=collapsed]:hidden px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                    Platform
                  </SidebarGroupLabel>
                  <SidebarGroupContent className="text-sm" sidebar="group-content">
                    <SidebarMenu className="gap-0.25" sidebar="menu">
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1spad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                          <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                          </svg>
                          <span>
                            Dashboard
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1t9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tickets">
                          <svg className="lucide lucide-ticket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                            <path d="M13 5v2"></path>
                            <path d="M13 17v2"></path>
                            <path d="M13 11v2"></path>
                          </svg>
                          <span>
                            Tickets
                          </span>
                          <SidebarMenuBadge className="absolute font-medium h-5 min-w-5 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground pointer-events-none px-1 right-1 rounded-md text-sidebar-foreground text-xs" sidebar="menu-badge">
                            24
                          </SidebarMenuBadge>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1tpad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/contacts">
                          <svg className="lucide lucide-contact" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 2v2"></path>
                            <path d="M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2"></path>
                            <path d="M8 2v2"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                          </svg>
                          <span>
                            Contacts
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1u9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/team" status="active" aria-current="page" data-active="">
                          <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                          <span>
                            Team
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1upad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/knowledge-base">
                          <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 5v16"></path>
                            <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path>
                          </svg>
                          <span>
                            Knowledge Base
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1v9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <span>
                            Reports
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem sidebar="menu-item">
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1vpad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/settings">
                          <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span>
                            Settings
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
                <div className="mt-auto">
                  <div className="group in-data-[state=collapsed]:hidden px-2" data-active="true">
                    <div className="relative size-full">
                      <div className="absolute duration-200 left-0 opacity-(--opacity) scale-(--scale) size-full top-0 transition-[opacity,transform] translate-y-(--y)" style={{"--y": "-8%", "--scale": "0.94", "--opacity": "0.8"}} aria-hidden="true" inert="">
                        <div className="bg-card border border-border cursor-grab data-[dragging=true]:cursor-grabbing data-[dragging=true]:shadow-md opacity-[calc(1-max(var(--dx),-1*var(--dx))/var(--w)/2)] p-3 relative rotate-[calc(var(--dx)*0.05deg)] rounded-lg select-none shadow-xs text-[0.8125rem] transition-shadow translate-x-[calc(var(--dx)*1px)]" style={{"--dx": "0", "--w": "1"}} data-dragging="false">
                          <div className="invisible">
                            <div className="flex flex-col gap-1">
                              <span className="font-medium line-clamp-1 text-foreground">
                                August scorecard is out
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                Resolution rate, handle time and CSAT, agent by agent.
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/august-scorecard.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/reports">
                                    Read more
                                  </a>
                                  <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                    Dismiss
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
                                Security runbooks published
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                Access reviews, two-factor and caller verification.
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/security-runbook.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/knowledge-base">
                                    Read more
                                  </a>
                                  <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                    Dismiss
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
                                SLA clock pauses on waits
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                Waiting Customer holds a ticket's clock until the reply.
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full">
                              <img className="object-center object-cover size-full" src="/news/sla-clock-pause.jpg" alt="" width="640" height="360" draggable="false" />
                            </div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <a className="duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/tickets">
                                    Read more
                                  </a>
                                  <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                    Dismiss
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
                                Title
                              </span>
                              <p className="h-10 leading-5 line-clamp-2 text-muted-foreground">
                                Description
                              </p>
                            </div>
                            <div className="aspect-video bg-muted border border-border/40 mt-3 overflow-hidden relative rounded-md shrink-0 w-full"></div>
                            <div className="duration-200 grid grid-rows-[0fr] has-focus-visible:grid-rows-[1fr] has-focus-visible:opacity-100 opacity-0 overflow-hidden sm:group-has-[*[data-dragging=true]]:grid-rows-[1fr] sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:grid-rows-[1fr] sm:group-hover:group-data-[active=true]:opacity-100 transition-[grid-template-rows,opacity]">
                              <div className="min-h-0">
                                <div className="flex items-center justify-between pt-3 text-xs">
                                  <span></span>
                                  <button className="duration-75 hover:text-foreground text-muted-foreground transition-colors" type="button">
                                    Dismiss
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
              <SidebarFooter className="gap-2 mt-2 p-2 pb-4 px-4" sidebar="footer">
                <SidebarMenu className="gap-0" sidebar="menu">
                  <SidebarMenuItem sidebar="menu-item">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-card border border-border/60 data-[state=open]:bg-accent data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:shadow-none group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-accent/50 hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-colors w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_ded5cq_" aria-expanded="false">
                      <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group-data-[collapsible=icon]:size-6 ring-1 ring-success rounded-full size-7" size="default">
                        <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/nick-bold.jpg" alt="Nick Bold"></AvatarImage>
                        <AvatarFallback className="bg-muted font-semibold rounded-full text-muted-foreground text-xs">
                          NB
                        </AvatarFallback>
                        <AvatarBadge className="bg-success ring-background text-primary-foreground" aria-label="Nick Bold is online"></AvatarBadge>
                      </Avatar>
                      <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left">
                        <span className="font-semibold text-sm truncate">
                          Nick Bold
                        </span>
                        <span className="text-muted-foreground text-xs truncate">
                          nick.bold@pulse.io
                        </span>
                      </div>
                      <svg className="group-data-[collapsible=icon]:hidden lucide lucide-chevron-down opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>
              <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-[calc(var(--header-height)+50%)] transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
                <span className="flex flex-col items-center">
                  <span className="bg-border block duration-100 ease-linear group-hover/rail:bg-foreground/50 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                  <span className="bg-border block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/50 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
                </span>
                <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                  Collapse
                </span>
              </button>
            </div>
          </div>
        </Sidebar>
        <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm min-w-0">
          <div className="flex flex-1 flex-col gap-4 min-w-0 p-4">
            <div className="@container flex flex-col gap-5 max-w-[71rem] mx-auto w-full">
              <header className="-mb-1 flex flex-col gap-3 items-start min-[450px]:flex-row min-[450px]:gap-4 min-[450px]:items-center min-[450px]:justify-between">
                <div className="min-w-0 w-full">
                  <h1 className="sr-only">
                    Team
                  </h1>
                  <Breadcrumb aria-label="breadcrumb">
                    <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                      <BreadcrumbItem className="gap-1">
                        <BreadcrumbLink className="flex gap-1.5 hover:text-foreground items-center transition-colors" href="/">
                          <svg className="lucide lucide-house shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          Home
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="[&>svg]:size-3.5 opacity-60 shrink-0" role="presentation" aria-hidden="true">
                        /
                      </BreadcrumbSeparator>
                      <BreadcrumbItem className="gap-1 min-w-0">
                        <BreadcrumbPage className="font-medium text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                          Team
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <p className="mt-1 text-muted-foreground text-pretty text-sm">
                    Agents, their teams and the seats in use.
                  </p>
                </div>
              </header>
              <section aria-label="Workspace members">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-balance text-sm" id="page-heading">
                        Members
                      </div>
                      <div className="flex gap-1.5 items-center text-muted-foreground text-pretty text-xs">
                        <span>
                          14 of 80 seats
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          2 pending invites
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
                      Invite people
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0 shadow-none">
                    <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
                      <Filters>
                        <div className="flex flex-wrap gap-2 items-center" role="toolbar" aria-label="Filters" aria-orientation="horizontal">
                          <FilterChip className="*:data-slot:rounded-r-none *:focus-visible:relative *:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:border-l-0 [&>[data-slot]~[data-slot]]:rounded-l-none [&>input]:flex-1 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg items-stretch w-fit" role="group" aria-label="Member contains no value" ruleId="members-filter-name" tabIndex="0" index="0">
                            <div className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-1.5 items-center px-2.5 rounded-lg text-sm" title="Member">
                              <svg className="lucide lucide-user size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span className="flex items-center">
                                <span>
                                  Member
                                </span>
                              </span>
                            </div>
                            <Popover>
                            <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_84_" aria-haspopup="dialog" aria-expanded="false">
                              contains
                            </PopoverTrigger>
                            </Popover>
                            <button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border cursor-default dark:bg-input/30 flex font-medium gap-2 hover:bg-accent items-center px-2.5 rounded-lg text-muted-foreground text-sm" type="button" aria-label="Select...">
                              Select...
                            </button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Member filter options" aria-haspopup="menu" id="base-ui-_r_88_" aria-expanded="false">
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
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" baseUiClickTrigger="" id="base-ui-_r_8b_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                          </svg>
                          Filters
                        </PopoverTrigger>
                        </Popover>
                        <div className="sr-only" aria-live="polite" role="status">
                          <span></span>
                        </div>
                      </Filters>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                          <svg className="lucide lucide-funnel-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"></path>
                            <path d="m16.5 3.5 5 5"></path>
                            <path d="m21.5 3.5-5 5"></path>
                          </svg>
                          Clear
                        </Button>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_8d_" aria-haspopup="dialog" aria-expanded="false">
                          <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M14 17H5"></path>
                            <path d="M19 7h-9"></path>
                            <circle cx="17" cy="17" r="3"></circle>
                            <circle cx="7" cy="7" r="3"></circle>
                          </svg>
                          Settings
                        </PopoverTrigger>
                        </Popover>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridScrollArea className="members-grid" role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_8e_-viewport" tabIndex="0" data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "134px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                          <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                            <DataGridTableViewport style={{width: "calc(1120px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                              <DataGridTable style={{"--header-select-size": "40", "--col-select-size": "40", "--header-name-size": "244", "--col-name-size": "244", "--header-title-size": "176", "--col-title-size": "176", "--header-role-size": "120", "--col-role-size": "120", "--header-scope-size": "140", "--col-scope-size": "140", "--header-teams-size": "220", "--col-teams-size": "220", "--header-status-size": "120", "--col-status-size": "120", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1120px + var(--data-grid-fill-size, 0px))"}}>
                                <colgroup>
                                  <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-title-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-role-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-scope-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-teams-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                  <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                </colgroup>
                                <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                                  <tr className="[&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8f_" aria-checked="false" aria-label="Select all"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" style={{width: "calc(var(--header-name-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8l_" aria-expanded="false">
                                          Member
                                          <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m5 12 7-7 7 7"></path>
                                            <path d="M12 19V5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-title-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8q_" aria-expanded="false">
                                          Title
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-role-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_8v_" aria-expanded="false">
                                          Role
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-scope-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_94_" aria-expanded="false">
                                          Access
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-teams-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_99_" aria-expanded="false">
                                          Teams
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9e_" aria-expanded="false">
                                          Status
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
                                <DataGridTableBody>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_f2a3b4c5">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9g_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/alex-johnson.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            AJ
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Alex Johnson
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="alex.johnson@pulse.io">
                                            alex.johnson@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Support Agent">
                                        Support Agent
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        No access
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-100 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-500/25 dark:text-blue-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-blue-700 text-xs transition-shadow">
                                          Tier 1
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-muted-foreground rounded-full! shrink-0 size-1.5"></span>
                                        Deactivated
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Alex Johnson" aria-haspopup="menu" id="base-ui-_r_9m_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_f6a7b8c9">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9p_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/david-kim.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            DK
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            David Kim
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="david.kim@pulse.io">
                                            david.kim@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Technical Support">
                                        Technical Support
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Read and write
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border border-cyan-200 dark:bg-cyan-950/50 dark:border-cyan-500/25 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-cyan-700 text-xs transition-shadow">
                                          Technical
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border border-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-500/25 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-indigo-700 text-xs transition-shadow">
                                          Tier 2
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for David Kim" aria-haspopup="menu" id="base-ui-_r_9v_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_g3b4c5d6">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_a2_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/diego-ramos.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            DR
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Diego Ramos
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="diego.ramos@pulse.io">
                                            diego.ramos@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Support Agent">
                                        Support Agent
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Read and write
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-100 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-500/25 dark:text-blue-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-blue-700 text-xs transition-shadow">
                                          Tier 1
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-emerald-700 text-xs transition-shadow">
                                          Onboarding
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Diego Ramos" aria-haspopup="menu" id="base-ui-_r_a8_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_c9d0e1f2">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_ab_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/emma-wilson.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            EW
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Emma Wilson
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="emma.wilson@pulse.io">
                                            emma.wilson@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Support Agent">
                                        Support Agent
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Read only
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-100 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-500/25 dark:text-blue-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-blue-700 text-xs transition-shadow">
                                          Tier 1
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full! shrink-0 size-1.5"></span>
                                        Invited
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Emma Wilson" aria-haspopup="menu" id="base-ui-_r_ah_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_h4c5d6e7">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_ak_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/jamal-reid.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            JR
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Jamal Reid
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="jamal.reid@pulse.io">
                                            jamal.reid@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Escalation Engineer">
                                        Escalation Engineer
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Read and write
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border border-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-500/25 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-indigo-700 text-xs transition-shadow">
                                          Tier 2
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-cyan-100 border border-cyan-200 dark:bg-cyan-950/50 dark:border-cyan-500/25 dark:text-cyan-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-cyan-700 text-xs transition-shadow">
                                          Technical
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Jamal Reid" aria-haspopup="menu" id="base-ui-_r_aq_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_e1f2a3b4">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_at_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/kenji-tan.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            KT
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Kenji Tan
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="kenji.tan@pulse.io">
                                            kenji.tan@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Contract Agent">
                                        Contract Agent
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Guest
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Read only
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-blue-100 border border-blue-200 dark:bg-blue-950/50 dark:border-blue-500/25 dark:text-blue-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-blue-700 text-xs transition-shadow">
                                          Tier 1
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-red-500 rounded-full! shrink-0 size-1.5"></span>
                                        Suspended
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Kenji Tan" aria-haspopup="menu" id="base-ui-_r_b3_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_b2c3d4e5">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_b6_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/leo-grant.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            LG
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Leo Grant
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="leo.grant@pulse.io">
                                            leo.grant@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Support Manager">
                                        Support Manager
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Admin
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        Full access
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-indigo-100 border border-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-500/25 dark:text-indigo-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-indigo-700 text-xs transition-shadow">
                                          Tier 2
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border border-rose-200 dark:bg-rose-950/50 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-rose-700 text-xs transition-shadow">
                                          Escalations
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Leo Grant" aria-haspopup="menu" id="base-ui-_r_bc_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_a7b8c9d0">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_bf_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/michael-rodriguez.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            MR
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Michael Rodriguez
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="michael.rodriguez@pulse.io">
                                            michael.rodriguez@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Onboarding Specialist">
                                        Onboarding Specialist
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Read only
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-emerald-100 border border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-500/25 dark:text-emerald-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-emerald-700 text-xs transition-shadow">
                                          Onboarding
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Michael Rodriguez" aria-haspopup="menu" id="base-ui-_r_bl_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_a1b2c3d4">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_bo_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/mira-stone.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            MS
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Mira Stone
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="mira.stone@pulse.io">
                                            mira.stone@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Head of Support">
                                        Head of Support
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        Owner
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-primary text-xs transition-shadow">
                                        Full access
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-rose-100 border border-rose-200 dark:bg-rose-950/50 dark:border-rose-500/25 dark:text-rose-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-rose-700 text-xs transition-shadow">
                                          Escalations
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border border-violet-200 dark:bg-violet-950/50 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-violet-700 text-xs transition-shadow">
                                          Quality
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Mira Stone" aria-haspopup="menu" id="base-ui-_r_bu_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-14 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="usr_d4e5f6a7">
                                    <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c1_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="" src="/avatars/nora-vale.jpg"></AvatarImage>
                                          <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                            NV
                                          </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium line-clamp-1 text-foreground">
                                            Nora Vale
                                          </div>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="nora.vale@pulse.io">
                                            nora.vale@pulse.io
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-title-size) * 1px)"}}>
                                      <div className="text-foreground text-sm truncate" title="Knowledge Base Editor">
                                        Knowledge Base Editor
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-role-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        Member
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-scope-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Read and write
                                      </Badge>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-teams-size) * 1px)"}}>
                                      <div className="flex flex-wrap gap-1 items-center">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-sky-100 border border-sky-200 dark:bg-sky-950/50 dark:border-sky-500/25 dark:text-sky-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-sky-700 text-xs transition-shadow">
                                          Knowledge Base
                                        </Badge>
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-violet-100 border border-violet-200 dark:bg-violet-950/50 dark:border-violet-500/25 dark:text-violet-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-violet-700 text-xs transition-shadow">
                                          Quality
                                        </Badge>
                                      </div>
                                    </td>
                                    <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full! shrink-0 size-1.5"></span>
                                        Active
                                      </Badge>
                                    </td>
                                    <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                      <div className="flex justify-end">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Nora Vale" aria-haspopup="menu" id="base-ui-_r_c7_" aria-expanded="false">
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
                              </DataGridTable>
                            </DataGridTableViewport>
                          </div>
                        </div>
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-overflow-x-end="" data-orientation="horizontal" data-id="base-ui-_r_8e_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "866.2714285714286px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                    </div>
                    <style>{`@layer utilities { .members-grid colgroup > col:nth-last-child(3) { width: 100% !important } .members-grid col[data-slot="data-grid-table-fill-col"] { width: 0 !important } }`}</style>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <DataGridPagination>
                        <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                          <div className="text-muted-foreground text-sm">
                            Rows per page
                          </div>
                          <Select>
                          <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_ca_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                            <SelectValue className="flex flex-1 text-left">
                              10
                            </SelectValue>
                            <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              ▼
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_ca_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                          <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                            1 - 10 of 15
                          </div>
                          <div className="flex items-center order-1 space-x-1">
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" disabled="" tabIndex="0" disabled>
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
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" tabIndex="0">
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
                    </footer>
                  </FramePanel>
                </Frame>
              </section>
            </div>
          </div>
        </SidebarInset>
      </div>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "11px", letterSpacing: "normal"}}>
      Mar 31
    </span>
  </>
  )
}
