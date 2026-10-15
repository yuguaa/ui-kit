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
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full" aria-label="Mira Stone — on shift" id="base-ui-_R_3pb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/mira-stone.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      MS
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Leo Grant — on shift" id="base-ui-_R_3qb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/leo-grant.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      LG
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Sarah Chen — on shift" id="base-ui-_R_3rb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/sarah-chen.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      SC
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="Nora Vale — on shift" id="base-ui-_R_3sb35cq_" baseUiTooltipTrigger="" href="/team">
                  <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                    <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/nora-vale.jpg" alt=""></AvatarImage>
                    <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                      NV
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring outline-none rounded-full sm:hidden" aria-label="10 more agents on shift" id="base-ui-_R_fj35cq_" baseUiTooltipTrigger="" href="/team">
                  <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                    +
                    10
                  </AvatarGroupCount>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring hidden outline-none rounded-full sm:block" aria-label="7 more agents on shift" id="base-ui-_R_fr35cq_" baseUiTooltipTrigger="" href="/team">
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
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1spad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" href="/" status="active" aria-current="page">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1u9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/team">
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
                    Home
                  </h1>
                  <Breadcrumb aria-label="breadcrumb">
                    <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                      <BreadcrumbItem className="gap-1">
                        <BreadcrumbPage className="flex font-medium gap-1.5 items-center text-foreground" role="link" aria-disabled="true" aria-current="page">
                          <svg className="lucide lucide-house shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          </svg>
                          Home
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <p className="mt-1 text-muted-foreground text-pretty text-sm">
                    Queue health, SLA risk and today's escalations.
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="flex gap-2 items-center text-muted-foreground text-sm" title="The desk refreshes every 60 seconds">
                    <span className="flex relative shrink-0 size-2" aria-hidden="true">
                      <span className="absolute animate-ping bg-success inline-flex opacity-60 rounded-full size-full"></span>
                      <span className="bg-success inline-flex relative rounded-full size-2"></span>
                    </span>
                    <span className="whitespace-nowrap">
                      Updated
                      <span className="font-medium tabular-nums text-foreground">
                        25s ago
                      </span>
                    </span>
                  </div>
                </div>
              </header>
              <section aria-label="Key figures">
                <div className="@4xl:grid-cols-4 auto-rows-fr gap-6 grid items-stretch">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-medium text-foreground/70 text-sm">
                        Unresolved
                      </div>
                      <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                        <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                        </svg>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-2.5">
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <span className="font-medium text-2xl text-foreground tracking-tight">
                          24
                          <span className="font-medium text-muted-foreground/40"></span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 17h6v-6"></path>
                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                          </svg>
                          <span>
                            -8.3%
                          </span>
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="space-y-1">
                        <div className="text-muted-foreground text-xs">
                          New, Open, Pending and On hold.
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Unassigned
                          :
                          <span className="font-medium text-foreground">
                            6
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-medium text-foreground/70 text-sm">
                        Overdue
                      </div>
                      <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                        <svg className="lucide lucide-clock-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 6v6l4 2"></path>
                          <path d="M20 12v5"></path>
                          <path d="M20 21h.01"></path>
                          <path d="M21.25 8.2A10 10 0 1 0 16 21.16"></path>
                        </svg>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-2.5">
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <span className="font-medium text-2xl text-foreground tracking-tight">
                          6
                          <span className="font-medium text-muted-foreground/40"></span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-down size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 17h6v-6"></path>
                            <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                          </svg>
                          <span>
                            -12.5%
                          </span>
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="space-y-1">
                        <div className="text-muted-foreground text-xs">
                          Past their first response target.
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Breaching within 1h
                          :
                          <span className="font-medium text-foreground">
                            2
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-medium text-foreground/70 text-sm">
                        Solved today
                      </div>
                      <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                        <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-2.5">
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <span className="font-medium text-2xl text-foreground tracking-tight">
                          38
                          <span className="font-medium text-muted-foreground/40"></span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          <span>
                            +14.2%
                          </span>
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="space-y-1">
                        <div className="text-muted-foreground text-xs">
                          18 resolved on first contact.
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Median handle time
                          :
                          <span className="font-medium text-foreground">
                            1h 12m
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full min-w-0">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="font-medium text-foreground/70 text-sm">
                        CSAT
                      </div>
                      <div className="[&_svg]:size-4 [&_svg]:text-muted-foreground">
                        <svg className="lucide lucide-face-slightly-smiling" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M15 10V9"></path>
                          <path d="M16.472 15a6 6 0 01-8.943 0"></path>
                          <path d="M9 10V9"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-2.5">
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <span className="font-medium text-2xl text-foreground tracking-tight">
                          94.2
                          <span className="font-medium text-muted-foreground/40">
                            %
                          </span>
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          <svg className="lucide lucide-trending-up size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                          </svg>
                          <span>
                            +2.4%
                          </span>
                        </Badge>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <div className="space-y-1">
                        <div className="text-muted-foreground text-xs">
                          From 118 of 402 surveys sent.
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Response rate
                          :
                          <span className="font-medium text-foreground">
                            29%
                          </span>
                        </div>
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
              </section>
              <section className="@4xl:grid-cols-2 auto-rows-fr gap-5 grid items-stretch" aria-label="Queue load and first contact resolution">
                <div className="min-w-0">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-semibold text-balance text-sm">
                          Queue Load
                        </div>
                        <div className="text-muted-foreground text-pretty text-xs">
                          Open tickets by queue
                        </div>
                      </div>
                      <div className="flex gap-3 items-center pt-0.5 shrink-0">
                        <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" role="button" tabIndex="0" href="/tickets">
                          View All
                        </Button>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-1 flex-col gap-5">
                      <div className="flex gap-4 items-end justify-between">
                        <div>
                          <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                            Open tickets
                          </div>
                          <div className="font-bold text-2xl">
                            24
                          </div>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                          4 Queues
                        </Badge>
                      </div>
                      <div className="bg-muted flex gap-0.5 h-2.5 items-center overflow-hidden rounded-full w-full">
                        <div className="bg-violet-500 h-full" style={{width: "38%"}}></div>
                        <div className="bg-sky-500 h-full" style={{width: "29%"}}></div>
                        <div className="bg-amber-500 h-full" style={{width: "21%"}}></div>
                        <div className="bg-emerald-500 h-full" style={{width: "13%"}}></div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">
                                Technical
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                Product faults and outages
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center shrink-0">
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              9
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                              Over SLA
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <span className="bg-sky-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">
                                Billing
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                Invoices, refunds and plans
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center shrink-0">
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              7
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                              Nearing SLA
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">
                                Onboarding
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                Setup and migration help
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center shrink-0">
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              5
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                              Nearing SLA
                            </Badge>
                          </div>
                        </div>
                        <div className="bg-muted/40 border border-border/40 flex gap-3 items-center justify-between px-3 py-2.5 rounded-md">
                          <div className="flex gap-2.5 items-center min-w-0">
                            <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <div className="font-medium text-foreground text-sm truncate">
                                Account
                              </div>
                              <div className="text-muted-foreground text-xs truncate">
                                Access, seats and security
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 items-center shrink-0">
                            <span className="font-medium tabular-nums text-foreground text-sm">
                              3
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                              Within SLA
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center mt-auto text-muted-foreground text-xs">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                        Technical is past SLA; Account has spare capacity.
                      </div>
                    </FramePanel>
                  </Frame>
                </div>
                <div className="min-w-0">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full">
                    <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                      <div className="flex flex-col gap-0.5">
                        <div className="font-semibold text-balance text-sm">
                          First Contact Resolution
                        </div>
                        <div className="text-muted-foreground text-pretty text-xs">
                          Weekly rate tracked against target
                        </div>
                      </div>
                      <div className="flex gap-3 items-center shrink-0">
                        <span className="flex gap-1.5 items-center">
                          <span className="rounded-full size-2" style={{backgroundColor: "var(--color-teal-500)"}} aria-hidden="true"></span>
                          <span className="text-muted-foreground text-xs">
                            First contact resolution
                          </span>
                        </span>
                      </div>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col">
                      <div className="mt-auto">
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-[300px] justify-center text-xs w-full" data-chart="chart-_R_adl5cq_">
                          <style>{`
 [data-chart=chart-_R_adl5cq_] {
  --color-rate: var(--color-teal-500);
}


.dark [data-chart=chart-_R_adl5cq_] {
  --color-rate: var(--color-teal-500);
}
`}</style>
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                            <div style={{width: "0", height: "0", overflow: "visible"}}>
                              <div className="recharts-wrapper" width="450" height="300" style={{position: "relative", cursor: "default", width: "450px", height: "300px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" role="application" tabIndex="0" width="450" height="300" viewBox="0 0 450 300" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                    <g className="recharts-cartesian-grid">
                                      <g className="recharts-cartesian-grid-horizontal">
                                        <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="39" y="10" width="399" height="255" x1="39" y1="265" x2="438" y2="265"></line>
                                        <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="39" y="10" width="399" height="255" x1="39" y1="201.25" x2="438" y2="201.25"></line>
                                        <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="39" y="10" width="399" height="255" x1="39" y1="137.5" x2="438" y2="137.5"></line>
                                        <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="39" y="10" width="399" height="255" x1="39" y1="73.75" x2="438" y2="73.75"></line>
                                        <line strokeDasharray="4 4" stroke="var(--border)" fill="none" x="39" y="10" width="399" height="255" x1="39" y1="10" x2="438" y2="10"></line>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts1-clip">
                                      <rect x="39" y="10" height="255" width="399"></rect>
                                    </clippath>
                                  </defs>
                                  <defs>
                                    <lineargradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="var(--color-teal-500)" stopOpacity="0.18"></stop>
                                      <stop offset="100%" stopColor="var(--color-teal-500)" stopOpacity="0"></stop>
                                    </lineargradient>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-area recharts-layer">
                                      <g className="recharts-layer">
                                        <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#rateGradient)" fillOpacity="0.6" height="255" stroke="none" width="399" id="recharts-area-_r_0_" d="M39,148.975C51.091,151.525,63.182,154.075,75.273,154.075C87.364,154.075,99.455,142.706,111.545,138.775C123.636,134.844,135.727,130.487,147.818,130.487C159.909,130.487,172,135.588,184.091,135.588C196.182,135.588,208.273,124.431,220.364,120.287C232.455,116.144,244.545,110.725,256.636,110.725C268.727,110.725,280.818,115.188,292.909,115.188C305,115.188,317.091,104.456,329.182,99.887C341.273,95.319,353.364,90.325,365.455,87.775C377.545,85.225,389.636,86.287,401.727,83.95C413.818,81.612,425.909,77.681,438,73.75L438,265C425.909,265,413.818,265,401.727,265C389.636,265,377.545,265,365.455,265C353.364,265,341.273,265,329.182,265C317.091,265,305,265,292.909,265C280.818,265,268.727,265,256.636,265C244.545,265,232.455,265,220.364,265C208.273,265,196.182,265,184.091,265C172,265,159.909,265,147.818,265C135.727,265,123.636,265,111.545,265C99.455,265,87.364,265,75.273,265C63.182,265,51.091,265,39,265Z"></path>
                                        <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="255" stroke="transparent" width="399" d="M39,148.975C51.091,151.525,63.182,154.075,75.273,154.075C87.364,154.075,99.455,142.706,111.545,138.775C123.636,134.844,135.727,130.487,147.818,130.487C159.909,130.487,172,135.588,184.091,135.588C196.182,135.588,208.273,124.431,220.364,120.287C232.455,116.144,244.545,110.725,256.636,110.725C268.727,110.725,280.818,115.188,292.909,115.188C305,115.188,317.091,104.456,329.182,99.887C341.273,95.319,353.364,90.325,365.455,87.775C377.545,85.225,389.636,86.287,401.727,83.95C413.818,81.612,425.909,77.681,438,73.75"></path>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                    <g className="recharts-layer recharts-line">
                                      <g className="recharts-layer recharts-shape">
                                        <path className="recharts-curve recharts-line-curve" stroke="var(--color-teal-500)" strokeWidth="2" fill="none" id="recharts-line-_r_1_" height="255" width="399" strokeDasharray="416.6804504394531px 416.6804504394531px" d="M39,148.975C51.091,151.525,63.182,154.075,75.273,154.075C87.364,154.075,99.455,142.706,111.545,138.775C123.636,134.844,135.727,130.487,147.818,130.487C159.909,130.487,172,135.588,184.091,135.588C196.182,135.588,208.273,124.431,220.364,120.287C232.455,116.144,244.545,110.725,256.636,110.725C268.727,110.725,280.818,115.188,292.909,115.188C305,115.188,317.091,104.456,329.182,99.887C341.273,95.319,353.364,90.325,365.455,87.775C377.545,85.225,389.636,86.287,401.727,83.95C413.818,81.612,425.909,77.681,438,73.75"></path>
                                      </g>
                                    </g>
                                  </g>
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
                                          <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_600" tabIndex="-1">
                                    <g className="recharts-layer recharts-line-dots">
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="39" cy="148.975"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="75.27272727272728" cy="154.07500000000002"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="111.54545454545455" cy="138.775"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="147.8181818181818" cy="130.48749999999998"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="184.0909090909091" cy="135.5875"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="220.36363636363637" cy="120.28749999999997"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="256.6363636363636" cy="110.72499999999997"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="292.9090909090909" cy="115.1875"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="329.1818181818182" cy="99.88749999999996"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="365.45454545454544" cy="87.77500000000002"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="401.72727272727275" cy="83.94999999999996"></circle>
                                      <circle className="recharts-dot recharts-line-dot" r="3" stroke="var(--color-teal-500)" strokeWidth="2" fill="var(--background)" height="255" width="399" cx="438" cy="73.75"></circle>
                                    </g>
                                  </g>
                                  <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                    <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="75.27272727272728" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="75.27272727272728" dy="0.71em">
                                            Mar 31
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="111.54545454545455" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="111.54545454545455" dy="0.71em">
                                            Apr 7
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="147.8181818181818" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="147.8181818181818" dy="0.71em">
                                            Apr 14
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="220.36363636363637" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="220.36363636363637" dy="0.71em">
                                            Apr 28
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="292.9090909090909" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="292.9090909090909" dy="0.71em">
                                            May 12
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="365.45454545454544" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="365.45454545454544" dy="0.71em">
                                            May 26
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="399" stroke="none" fontSize="11" x="435.3984375" y="283" textAnchor="middle" fill="#666">
                                          <tspan x="435.3984375" dy="0.71em">
                                            Jun 9
                                          </tspan>
                                        </text>
                                      </g>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" width="39" orientation="left" height="255" stroke="none" fontSize="11" x="25" y="265" textAnchor="end" fill="#666">
                                          <tspan x="25" dy="0.355em">
                                            40%
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" width="39" orientation="left" height="255" stroke="none" fontSize="11" x="25" y="201.25" textAnchor="end" fill="#666">
                                          <tspan x="25" dy="0.355em">
                                            50%
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" width="39" orientation="left" height="255" stroke="none" fontSize="11" x="25" y="137.5" textAnchor="end" fill="#666">
                                          <tspan x="25" dy="0.355em">
                                            60%
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" width="39" orientation="left" height="255" stroke="none" fontSize="11" x="25" y="73.75" textAnchor="end" fill="#666">
                                          <tspan x="25" dy="0.355em">
                                            70%
                                          </tspan>
                                        </text>
                                      </g>
                                      <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                        <text className="recharts-cartesian-axis-tick-value recharts-text" width="39" orientation="left" height="255" stroke="none" fontSize="11" x="25" y="10" textAnchor="end" fill="#666">
                                          <tspan x="25" dy="0.355em">
                                            80%
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
                      </div>
                    </FramePanel>
                    <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-2.5 gap-y-1.5 items-center px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                      <span className="[&_svg]:size-4 grid place-items-center shrink-0 size-4 text-warning">
                        <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                        </svg>
                      </span>
                      <span className="font-medium text-foreground text-sm">
                        First contact resolution drop
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        Armed
                      </Badge>
                      <span className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                        <span>
                          Fires below 55%
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          2 day window
                        </span>
                      </span>
                    </footer>
                  </Frame>
                </div>
              </section>
              <section aria-label="Exception queue">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                  <header className="flex flex-row flex-wrap gap-3 items-center justify-between pb-[calc(var(--frame-panel-header-py)+2px)] px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-balance text-sm">
                        Escalation Queue
                      </div>
                      <div className="text-muted-foreground text-pretty text-xs">
                        10
                        of
                        10
                        open escalations
                      </div>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      New escalation
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] bg-card p-0! shadow-none!">
                    <div className="px-4 py-3">
                      <div className="flex flex-wrap gap-3 items-center justify-between">
                        <div className="flex flex-wrap gap-2 items-center">
                          <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-52 rounded-lg sm:w-60 transition-colors" role="group">
                            <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                              </svg>
                            </InputGroupAddon>
                            <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_99hhl5cq_" placeholder="Search tickets..." aria-label="Search tickets" value="" />
                          </InputGroup>
                          <Popover>
                          <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by SLA state" baseUiClickTrigger="" id="base-ui-_R_1u9hhl5cq_" aria-haspopup="dialog" aria-expanded="false">
                            <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                            </svg>
                            Status
                          </PopoverTrigger>
                          </Popover>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Popover>
                          <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_R_1thhhl5cq_" aria-haspopup="dialog" aria-expanded="false">
                            <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M14 17H5"></path>
                              <path d="M19 7h-9"></path>
                              <circle cx="17" cy="17" r="3"></circle>
                              <circle cx="7" cy="7" r="3"></circle>
                            </svg>
                            Settings
                          </PopoverTrigger>
                          </Popover>
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Escalation queue actions" aria-haspopup="menu" id="base-ui-_R_1mhhhl5cq_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            Actions
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    <div className="relative">
                      <DataGridScrollArea className="escalation-queue-grid" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                        <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_bhhl5cq_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "134px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                          <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                            <DataGridTableViewport style={{width: "calc(1120px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                              <DataGridTable style={{"--header-id-size": "35", "--col-id-size": "35", "--header-reference-size": "140", "--col-reference-size": "140", "--header-customer-size": "230", "--col-customer-size": "230", "--header-stage-size": "180", "--col-stage-size": "180", "--header-dueBy-size": "110", "--col-dueBy-size": "110", "--header-queue-size": "115", "--col-queue-size": "115", "--header-value-size": "148", "--col-value-size": "148", "--header-status-size": "122", "--col-status-size": "122", "--header-actions-size": "40", "--col-actions-size": "40", width: "calc(1120px + var(--data-grid-fill-size, 0px))"}}>
                                <colgroup>
                                  <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-reference-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-customer-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-stage-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-dueBy-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-queue-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-value-size) * 1px)"}} />
                                  <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                                  <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                                  <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                </colgroup>
                                <thead>
                                  <tr className="[&>th]:border-b bg-transparent">
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_12cpdbhhl5cq_" aria-checked="false" aria-label="Select all"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-reference-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6l4cpdbhhl5cq_" aria-expanded="false">
                                          Ticket
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-customer-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6l6cpdbhhl5cq_" aria-expanded="false">
                                          Customer
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-stage-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6l8cpdbhhl5cq_" aria-expanded="false">
                                          Stage
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-dueBy-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lacpdbhhl5cq_" aria-expanded="false">
                                          Due
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-queue-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lccpdbhhl5cq_" aria-expanded="false">
                                          Queue
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "calc(var(--header-value-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lecpdbhhl5cq_" aria-expanded="false">
                                          Account value
                                          <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M12 5v14"></path>
                                            <path d="m19 12-7 7-7-7"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                      <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                    </th>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                      <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lgcpdbhhl5cq_" aria-expanded="false">
                                          SLA
                                          <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="m7 15 5 5 5-5"></path>
                                            <path d="m7 9 5-5 5 5"></path>
                                          </svg>
                                        </DropdownMenuTrigger>
                                        </DropdownMenu>
                                      </div>
                                    </th>
                                    <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                    <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--header-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-outer-pinned-col="end" data-last-col="end"></th>
                                  </tr>
                                </thead>
                                <DataGridTableBody>
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-4863">
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_1155pdbhhl5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <button className="font-medium hover:underline text-primary text-sm text-start transition-colors truncate underline-offset-2" type="button" aria-label="View ticket TCK-4863">
                                          TCK-4863
                                        </button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0">
                                            Phone
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Jamal Reid
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/carla-ferreira.jpg" alt="Quanta Devices"></AvatarImage>
                                            <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                              QD
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="absolute bg-destructive bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                        </div>
                                        <div className="min-w-0">
                                          <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" aria-label="View customer Quanta Devices" href="/contacts">
                                            Quanta Devices
                                          </a>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="it@quantadevices.com">
                                            it@quantadevices.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Item className="[a]:hover:bg-muted border-0 border-transparent gap-2.5 p-0 rounded-lg text-sm w-auto" variant="default" size="default">
                                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto text-muted-foreground" variant="icon">
                                              <svg className="lucide lucide-circle-arrow-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="m16 12-4-4-4 4"></path>
                                                <path d="M12 16V8"></path>
                                              </svg>
                                            </ItemMedia>
                                          </Item>
                                          <span className="font-medium min-w-0 text-foreground truncate">
                                            Escalated
                                          </span>
                                        </div>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                            <span className="bg-destructive block h-full rounded-full" style={{width: "50%"}}></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            50
                                            %
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-dueBy-size) * 1px)"}}>
                                      <span className="block text-destructive text-sm truncate">
                                        Today 14:00
                                      </span>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-queue-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Technical
                                      </Badge>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium tabular-nums text-foreground">
                                          $91,200
                                        </span>
                                        <Tooltip>
                                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Account value hint for TCK-4863: Priority queue" id="base-ui-_R_v755pdbhhl5cq_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 items-start min-w-0">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
                                          Blocked
                                        </Badge>
                                        <span className="max-w-full text-muted-foreground text-xs truncate">
                                          25 min overdue
                                        </span>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--col-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-last-col="end">
                                      <div className="flex justify-center">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for TCK-4863" aria-haspopup="menu" id="base-ui-_R_rd5pdbhhl5cq_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-4927">
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_1159pdbhhl5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <button className="font-medium hover:underline text-primary text-sm text-start transition-colors truncate underline-offset-2" type="button" aria-label="View ticket TCK-4927">
                                          TCK-4927
                                        </button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0">
                                            Portal
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Priya Patel
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/marcus-hale.jpg" alt="Apex Manufacturing"></AvatarImage>
                                            <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                              AM
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="absolute bg-destructive bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                        </div>
                                        <div className="min-w-0">
                                          <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" aria-label="View customer Apex Manufacturing" href="/contacts">
                                            Apex Manufacturing
                                          </a>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="billing@apexmfg.com">
                                            billing@apexmfg.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Item className="[a]:hover:bg-muted border-0 border-transparent gap-2.5 p-0 rounded-lg text-sm w-auto" variant="default" size="default">
                                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto text-muted-foreground" variant="icon">
                                              <svg className="lucide lucide-circle-arrow-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="m16 12-4-4-4 4"></path>
                                                <path d="M12 16V8"></path>
                                              </svg>
                                            </ItemMedia>
                                          </Item>
                                          <span className="font-medium min-w-0 text-foreground truncate">
                                            Escalated
                                          </span>
                                        </div>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                            <span className="bg-destructive block h-full rounded-full" style={{width: "50%"}}></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            50
                                            %
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-dueBy-size) * 1px)"}}>
                                      <span className="block text-destructive text-sm truncate">
                                        Today 13:00
                                      </span>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-queue-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Billing
                                      </Badge>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium tabular-nums text-foreground">
                                          $68,400
                                        </span>
                                        <Tooltip>
                                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Account value hint for TCK-4927: Priority queue" id="base-ui-_R_v759pdbhhl5cq_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 items-start min-w-0">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                          <span className="bg-destructive rounded-full size-1.5" aria-hidden="true"></span>
                                          Blocked
                                        </Badge>
                                        <span className="max-w-full text-muted-foreground text-xs truncate">
                                          70 min overdue
                                        </span>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--col-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-last-col="end">
                                      <div className="flex justify-center">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for TCK-4927" aria-haspopup="menu" id="base-ui-_R_rd9pdbhhl5cq_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-4821">
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115dpdbhhl5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <button className="font-medium hover:underline text-primary text-sm text-start transition-colors truncate underline-offset-2" type="button" aria-label="View ticket TCK-4821">
                                          TCK-4821
                                        </button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0">
                                            Email
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Priya Patel
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/priya-raman.jpg" alt="Brightwave Media"></AvatarImage>
                                            <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                              BM
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="absolute bg-warning bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                        </div>
                                        <div className="min-w-0">
                                          <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" aria-label="View customer Brightwave Media" href="/contacts">
                                            Brightwave Media
                                          </a>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="ops@brightwave.media">
                                            ops@brightwave.media
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Item className="[a]:hover:bg-muted border-0 border-transparent gap-2.5 p-0 rounded-lg text-sm w-auto" variant="default" size="default">
                                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto text-muted-foreground" variant="icon">
                                              <svg className="lucide lucide-user-round-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="10" cy="8" r="5"></circle>
                                                <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                                <circle cx="18" cy="18" r="3"></circle>
                                                <path d="m22 22-1.9-1.9"></path>
                                              </svg>
                                            </ItemMedia>
                                          </Item>
                                          <span className="font-medium min-w-0 text-foreground truncate">
                                            Awaiting agent
                                          </span>
                                        </div>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                            <span className="bg-warning block h-full rounded-full" style={{width: "35%"}}></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            35
                                            %
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-dueBy-size) * 1px)"}}>
                                      <span className="block text-destructive text-sm truncate">
                                        Today 18:00
                                      </span>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-queue-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Billing
                                      </Badge>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium tabular-nums text-foreground">
                                          $38,240
                                        </span>
                                        <Tooltip>
                                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Account value hint for TCK-4821: Priority queue" id="base-ui-_R_v75dpdbhhl5cq_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 items-start min-w-0">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                          <span className="bg-warning rounded-full size-1.5" aria-hidden="true"></span>
                                          At Risk
                                        </Badge>
                                        <span className="max-w-full text-muted-foreground text-xs truncate">
                                          42 min buffer
                                        </span>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--col-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-last-col="end">
                                      <div className="flex justify-center">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for TCK-4821" aria-haspopup="menu" id="base-ui-_R_rddpdbhhl5cq_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-4914">
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115hpdbhhl5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <button className="font-medium hover:underline text-primary text-sm text-start transition-colors truncate underline-offset-2" type="button" aria-label="View ticket TCK-4914">
                                          TCK-4914
                                        </button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0">
                                            Email
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Diego Ramos
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/hana-kim.jpg" alt="Meridian Retail"></AvatarImage>
                                            <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                              MR
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="absolute bg-info bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                        </div>
                                        <div className="min-w-0">
                                          <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" aria-label="View customer Meridian Retail" href="/contacts">
                                            Meridian Retail
                                          </a>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="help@meridianretail.com">
                                            help@meridianretail.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Item className="[a]:hover:bg-muted border-0 border-transparent gap-2.5 p-0 rounded-lg text-sm w-auto" variant="default" size="default">
                                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto text-muted-foreground" variant="icon">
                                              <svg className="lucide lucide-message-circle-more size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                                                <path d="M8 12h.01"></path>
                                                <path d="M12 12h.01"></path>
                                                <path d="M16 12h.01"></path>
                                              </svg>
                                            </ItemMedia>
                                          </Item>
                                          <span className="font-medium min-w-0 text-foreground truncate">
                                            Pending customer
                                          </span>
                                        </div>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                            <span className="bg-info block h-full rounded-full" style={{width: "85%"}}></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            85
                                            %
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-dueBy-size) * 1px)"}}>
                                      <span className="block text-foreground text-sm truncate">
                                        Today 20:30
                                      </span>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-queue-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                        Technical
                                      </Badge>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium tabular-nums text-foreground">
                                          $33,100
                                        </span>
                                        <Tooltip>
                                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Account value hint for TCK-4914: Priority queue" id="base-ui-_R_v75hpdbhhl5cq_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 items-start min-w-0">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                          <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                                          Delayed
                                        </Badge>
                                        <span className="max-w-full text-muted-foreground text-xs truncate">
                                          Due Today 20:30
                                        </span>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--col-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-last-col="end">
                                      <div className="flex justify-center">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for TCK-4914" aria-haspopup="menu" id="base-ui-_R_rdhpdbhhl5cq_" aria-expanded="false">
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
                                  <tr className="*:first:relative [&:not(:last-child)>td]:border-b [&>td]:h-16 [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="row-4872">
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                      <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                      <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115lpdbhhl5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                      <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-reference-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 min-w-0">
                                        <button className="font-medium hover:underline text-primary text-sm text-start transition-colors truncate underline-offset-2" type="button" aria-label="View ticket TCK-4872">
                                          TCK-4872
                                        </button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0">
                                            Email
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Priya Patel
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-customer-size) * 1px)"}}>
                                      <div className="flex gap-2 items-center min-w-0">
                                        <div className="relative shrink-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" src="/avatars/aisha-bello.jpg" alt="Atlas Freight"></AvatarImage>
                                            <AvatarFallback className="bg-muted rounded-full text-muted-foreground">
                                              AF
                                            </AvatarFallback>
                                          </Avatar>
                                          <span className="absolute bg-success bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                        </div>
                                        <div className="min-w-0">
                                          <a className="font-medium hover:text-primary hover:underline line-clamp-1 text-foreground transition-colors underline-offset-2" aria-label="View customer Atlas Freight" href="/contacts">
                                            Atlas Freight
                                          </a>
                                          <div className="line-clamp-1 text-muted-foreground text-xs" title="accounts@atlasfreight.com">
                                            accounts@atlasfreight.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-stage-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1.5 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Item className="[a]:hover:bg-muted border-0 border-transparent gap-2.5 p-0 rounded-lg text-sm w-auto" variant="default" size="default">
                                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto text-muted-foreground" variant="icon">
                                              <svg className="lucide lucide-list-filter size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2 5h20"></path>
                                                <path d="M6 12h12"></path>
                                                <path d="M9 19h6"></path>
                                              </svg>
                                            </ItemMedia>
                                          </Item>
                                          <span className="font-medium min-w-0 text-foreground truncate">
                                            Triage
                                          </span>
                                        </div>
                                        <div className="flex gap-2 items-center min-w-0">
                                          <span className="bg-muted block flex-1 h-1.5 min-w-16 overflow-hidden rounded-full">
                                            <span className="bg-success block h-full rounded-full" style={{width: "15%"}}></span>
                                          </span>
                                          <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                                            15
                                            %
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-dueBy-size) * 1px)"}}>
                                      <span className="block text-foreground text-sm truncate">
                                        Today 19:45
                                      </span>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-queue-size) * 1px)"}}>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                        Billing
                                      </Badge>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-value-size) * 1px)"}}>
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <span className="font-medium tabular-nums text-foreground">
                                          $22,750
                                        </span>
                                        <Tooltip>
                                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center rounded-full size-5 text-muted-foreground transition-colors" type="button" aria-label="Account value hint for TCK-4872: Standard queue" id="base-ui-_R_v75lpdbhhl5cq_" baseUiTooltipTrigger="">
                                          <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 16v-4"></path>
                                            <path d="M12 8h.01"></path>
                                          </svg>
                                        </TooltipTrigger>
                                        </Tooltip>
                                      </div>
                                    </td>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                      <div className="flex flex-col gap-1 items-start min-w-0">
                                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                          <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                                          On Time
                                        </Badge>
                                        <span className="max-w-full text-muted-foreground text-xs truncate">
                                          Due Today 19:45
                                        </span>
                                      </div>
                                    </td>
                                    <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                    <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{insetInlineEnd: "0px", position: "sticky", transform: "translateZ(0)", contain: "paint", width: "calc(var(--col-actions-size) * 1px)", zIndex: "30", backgroundClip: "padding-box"}} data-pinned="end" data-last-col="end">
                                      <div className="flex justify-center">
                                        <DropdownMenu>
                                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for TCK-4872" aria-haspopup="menu" id="base-ui-_R_rdlpdbhhl5cq_" aria-expanded="false">
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
                        <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-overflow-x-end="" data-orientation="horizontal" data-id="base-ui-_R_bhhl5cq_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "832.8178571428572px", marginInlineEnd: "40px"}}>
                          <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                        </div>
                      </DataGridScrollArea>
                    </div>
                    <style>{`@layer utilities { .escalation-queue-grid colgroup > col:nth-last-child(3) { width: 100% !important } .escalation-queue-grid col[data-slot="data-grid-table-fill-col"] { width: 0 !important } }`}</style>
                  </FramePanel>
                  <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <DataGridPagination>
                      <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                        <div className="text-muted-foreground text-sm">
                          Rows per page
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_R_9phl5cq_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                          <SelectValue className="flex flex-1 text-left">
                            5
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_R_9phl5cq_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="5" />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          1 - 5 of 10
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
