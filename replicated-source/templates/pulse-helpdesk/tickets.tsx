import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnContent,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
} from "@/registry-neui/bases/radix/neui/kanban"
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
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
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
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
                        <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1t9ad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/tickets" status="active" aria-current="page" data-active="">
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
                        <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_1tpad5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/contacts">
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
                                  <a className="active duration-75 font-medium hover:text-foreground text-muted-foreground transition-colors" href="/tickets" data-status="active" aria-current="page">
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
            <section className="flex flex-col gap-4 min-w-0 w-full">
              <header className="-mb-1 flex flex-col gap-3 items-start min-[450px]:flex-row min-[450px]:gap-4 min-[450px]:items-center min-[450px]:justify-between">
                <div className="min-w-0 w-full">
                  <h1 className="sr-only">
                    {"Tickets"}
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
                          {"Tickets"}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <p className="mt-1 text-muted-foreground text-pretty text-sm">
                    {"Every open ticket, by stage."}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="flex gap-2 items-center">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                      <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                        <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                      </svg>
                      {"Filters"}
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      {"New ticket"}
                    </Button>
                  </div>
                </div>
              </header>
              <Kanban className="max-w-full w-full" dragging="false">
                <ScrollArea className="pb-3 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                  <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-lg transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "648px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                    <div className="min-w-max" role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                      <KanbanBoard className="flex gap-5 items-start py-1 w-max">
                        <KanbanColumn className="self-start shrink-0 w-64" value="new" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="New: New intake">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-sky-300 flex items-center justify-center leading-none shrink-0 size-4 text-sky-600" aria-hidden="true">
                                <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <circle cx="12" cy="12" r="1"></circle>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="New">
                                  {"New"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"3"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add a new ticket">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move New column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-5012" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5012"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Checkout fails with a card error the bank cannot see">
                                            {"Checkout fails with a card error the bank cannot see"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Aisha Bello at Atlas Freight">
                                              {"Aisha Bello at Atlas Freight"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Priya Patel" src="/avatars/priya-patel.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"PP"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Priya Patel">
                                            {"Priya Patel"}
                                          </div>
                                        </div>
                                        <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 3h 40m" title="Response due in 3h 40m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"3h 40m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-5019" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5019"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Normal"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Push notifications stopped after the 4.2 release">
                                            {"Push notifications stopped after the 4.2 release"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Ryan Mercer at Orbit Software">
                                              {"Ryan Mercer at Orbit Software"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Diego Ramos" src="/avatars/diego-ramos.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"DR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Diego Ramos">
                                            {"Diego Ramos"}
                                          </div>
                                        </div>
                                        <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 5h 10m" title="Response due in 5h 10m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"5h 10m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-5024" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5024"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="App signs staff out mid-shift on iOS 19">
                                            {"App signs staff out mid-shift on iOS 19"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Hana Kim at Meridian Retail">
                                              {"Hana Kim at Meridian Retail"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Sana Qureshi" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"SQ"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Sana Qureshi">
                                            {"Sana Qureshi"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 2h 15m" title="Response due in 2h 15m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"2h 15m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a new ticket">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                        <KanbanColumn className="self-start shrink-0 w-64" value="needsReply" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="Needs Reply: Reply due">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-indigo-300 flex items-center justify-center leading-none shrink-0 size-4 text-indigo-600" aria-hidden="true">
                                <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="Needs Reply">
                                  {"Needs Reply"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"4"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add a ticket awaiting reply">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Needs Reply column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-5031" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5031"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Offline orders never sync once the phone reconnects">
                                            {"Offline orders never sync once the phone reconnects"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Marcus Hale at Apex Manufacturing">
                                              {"Marcus Hale at Apex Manufacturing"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Diego Ramos" src="/avatars/diego-ramos.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"DR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Diego Ramos">
                                            {"Diego Ramos"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 1h 40m" title="Response due in 1h 40m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"1h 40m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-5003" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5003"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Low"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Weekly digest email arrives with an empty ticket list">
                                            {"Weekly digest email arrives with an empty ticket list"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Priya Raman at Brightwave Media">
                                              {"Priya Raman at Brightwave Media"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Sana Qureshi" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"SQ"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Sana Qureshi">
                                            {"Sana Qureshi"}
                                          </div>
                                        </div>
                                        <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 6h 05m" title="Response due in 6h 05m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"6h 05m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4988" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4988"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Normal"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Bulk import maps the wrong column to customer email">
                                            {"Bulk import maps the wrong column to customer email"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Tom Whitfield at Cedar & Co">
                                              {"Tom Whitfield at Cedar & Co"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Diego Ramos" src="/avatars/diego-ramos.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"DR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Diego Ramos">
                                            {"Diego Ramos"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 1h 25m" title="Response due in 1h 25m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"1h 25m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4995" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4995"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Invoice total still wrong after the plan downgrade">
                                            {"Invoice total still wrong after the plan downgrade"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="David Okafor at Vertex Health">
                                              {"David Okafor at Vertex Health"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Priya Patel" src="/avatars/priya-patel.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"PP"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Priya Patel">
                                            {"Priya Patel"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 48m" title="Response due in 48m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"48m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a ticket awaiting reply">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                        <KanbanColumn className="self-start shrink-0 w-64" value="engineeringEscalation" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="Escalated: Handed to Tier 2">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-violet-300 flex items-center justify-center leading-none shrink-0 size-4 text-violet-600" aria-hidden="true">
                                <svg className="lucide lucide-wrench" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="Escalated">
                                  {"Escalated"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"3"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add an escalated ticket">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Escalated column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-4966" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4966"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Webhook retries stop after the first 5xx from our endpoint">
                                            {"Webhook retries stop after the first 5xx from our endpoint"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Carla Ferreira at Quanta Devices">
                                              {"Carla Ferreira at Quanta Devices"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Jamal Reid" src="/avatars/jamal-reid.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"JR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Jamal Reid">
                                            {"Jamal Reid"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 1h 05m" title="Response due in 1h 05m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"1h 05m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4960" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-red-50/20 border border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4960"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Urgent"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Data export has failed on three consecutive nightly runs">
                                            {"Data export has failed on three consecutive nightly runs"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Elena Sokolova at Cobalt Logistics">
                                              {"Elena Sokolova at Cobalt Logistics"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Jamal Reid" src="/avatars/jamal-reid.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"JR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Jamal Reid">
                                            {"Jamal Reid"}
                                          </div>
                                        </div>
                                        <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 36m" title="Breach risk in 36m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"36m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4971" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-amber-300/70 dark:border-amber-400/35 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4971"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Search omits projects migrated in the last 24 hours">
                                            {"Search omits projects migrated in the last 24 hours"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Ben Travers at Ridgeline Energy">
                                              {"Ben Travers at Ridgeline Energy"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Sana Qureshi" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"SQ"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Sana Qureshi">
                                            {"Sana Qureshi"}
                                          </div>
                                        </div>
                                        <span className="bg-amber-50 border border-amber-300 dark:bg-amber-400/10 dark:border-amber-400/35 dark:text-amber-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-amber-800" aria-label="Response due in 2h 15m" title="Response due in 2h 15m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"2h 15m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add an escalated ticket">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                        <KanbanColumn className="self-start shrink-0 w-64" value="waitingCustomer" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="Waiting Customer: Customer wait">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-cyan-300 flex items-center justify-center leading-none shrink-0 size-4 text-cyan-600" aria-hidden="true">
                                <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="M12 6v6l4 2"></path>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="Waiting Customer">
                                  {"Waiting Customer"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"3"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add a ticket waiting on the customer">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Waiting Customer column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-5038" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-5038"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Normal"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Barcode scanner opens the camera but never reads a code">
                                            {"Barcode scanner opens the camera but never reads a code"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Hana Kim at Meridian Retail">
                                              {"Hana Kim at Meridian Retail"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Jamal Reid" src="/avatars/jamal-reid.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"JR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Jamal Reid">
                                            {"Jamal Reid"}
                                          </div>
                                        </div>
                                        <span className="bg-sky-50 border border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/30 dark:text-sky-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-sky-700" aria-label="Response due in 6h 05m" title="Response due in 6h 05m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"6h 05m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4937" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4937"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Normal"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Confirm the maintenance window before we rotate the API key">
                                            {"Confirm the maintenance window before we rotate the API key"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Elena Sokolova at Cobalt Logistics">
                                              {"Elena Sokolova at Cobalt Logistics"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Sana Qureshi" src="/avatars/sana-qureshi.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"SQ"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Sana Qureshi">
                                            {"Sana Qureshi"}
                                          </div>
                                        </div>
                                        <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="Paused in Paused" title="Paused in Paused">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"Paused"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4944" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4944"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Low"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Approve the temporary allowlist for the partner sandbox">
                                            {"Approve the temporary allowlist for the partner sandbox"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Carla Ferreira at Quanta Devices">
                                              {"Carla Ferreira at Quanta Devices"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Omar Haddad" src="/avatars/omar-haddad.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"OH"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Omar Haddad">
                                            {"Omar Haddad"}
                                          </div>
                                        </div>
                                        <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="Paused in Paused" title="Paused in Paused">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"Paused"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a ticket waiting on the customer">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                        <KanbanColumn className="self-start shrink-0 w-64" value="slaRisk" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="SLA Risk: Breach risk">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-red-300 flex items-center justify-center leading-none shrink-0 size-4 text-red-600" aria-hidden="true">
                                <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                                  <path d="M12 9v4"></path>
                                  <path d="M12 17h.01"></path>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="SLA Risk">
                                  {"SLA Risk"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"3"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add a ticket at SLA risk">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move SLA Risk column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-4979" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-red-50/20 border border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4979"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Urgent"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Refund still not visible three days after approval">
                                            {"Refund still not visible three days after approval"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="David Okafor at Vertex Health">
                                              {"David Okafor at Vertex Health"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Priya Patel" src="/avatars/priya-patel.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"PP"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Priya Patel">
                                            {"Priya Patel"}
                                          </div>
                                        </div>
                                        <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 12m" title="Breach risk in 12m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"12m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4972" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-red-50/20 border border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4972"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Urgent"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Admins locked out after the enforced SSO change">
                                            {"Admins locked out after the enforced SSO change"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Aisha Bello at Atlas Freight">
                                              {"Aisha Bello at Atlas Freight"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Jamal Reid" src="/avatars/jamal-reid.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"JR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Jamal Reid">
                                            {"Jamal Reid"}
                                          </div>
                                        </div>
                                        <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 18m" title="Breach risk in 18m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"18m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4976" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-red-50/20 border border-red-300/90 dark:bg-red-950/10 dark:border-red-400/40 gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4976"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"High"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="First response missed on a Business Critical account">
                                            {"First response missed on a Business Critical account"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Sofia Marchetti at Summit Financial">
                                              {"Sofia Marchetti at Summit Financial"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Omar Haddad" src="/avatars/omar-haddad.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"OH"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Omar Haddad">
                                            {"Omar Haddad"}
                                          </div>
                                        </div>
                                        <span className="bg-red-50 border border-red-300 dark:bg-red-400/10 dark:border-red-400/35 dark:text-red-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-red-700" aria-label="Breach risk in 41m" title="Breach risk in 41m">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"41m"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a ticket at SLA risk">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                        <KanbanColumn className="self-start shrink-0 w-64" value="resolved" dragging="false">
                          <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-muted/40 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 group/column has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="sm" aria-label="Resolved: Closed today">
                            <CardHeader className="[.border-b]:pb-(--card-spacing) flex flex-row gap-2 items-center min-h-9 px-2 py-2 rounded-t-xl">
                              <span className="[&>svg]:block [&>svg]:size-4 dark:text-emerald-300 flex items-center justify-center leading-none shrink-0 size-4 text-emerald-600" aria-hidden="true">
                                <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                              </span>
                              <div className="flex flex-1 gap-2 items-center min-w-0">
                                <span className="font-semibold leading-5 text-sm truncate" title="Resolved">
                                  {"Resolved"}
                                </span>
                                <span className="font-medium inline-flex items-center leading-none self-center shrink-0 tabular-nums text-muted-foreground text-xs">
                                  {"2"}
                                </span>
                              </div>
                              <div className="flex gap-1 group-focus-within/column:opacity-100 group-hover/column:opacity-100 items-center opacity-0 transition-opacity">
                                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Add a resolved ticket">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/kanban-column:opacity-100 group/button hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex="0" dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0" aria-label="Move Resolved column">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </KanbanColumnHandle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3 pb-2 pt-0 px-2">
                              <KanbanColumnContent className="gap-3">
                                <KanbanItem value="ticket-4870" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4870"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Normal"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Seat count was wrong after the workspace merge">
                                            {"Seat count was wrong after the workspace merge"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Ben Travers at Ridgeline Energy">
                                              {"Ben Travers at Ridgeline Energy"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Priya Patel" src="/avatars/priya-patel.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"PP"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Priya Patel">
                                            {"Priya Patel"}
                                          </div>
                                        </div>
                                        <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="SLA met in Met" title="SLA met in Met">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"Met"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                                <KanbanItem value="ticket-4881" dragging="false" role="button" tabIndex="0" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                  <KanbanItemHandle className="block cursor-pointer text-left" dragging="false">
                                    <Item className="[a]:hover:bg-muted bg-card border border-border gap-3 hover:border-foreground/20 hover:shadow-sm items-stretch px-3 py-2.5 rounded-lg text-sm transition-[border-color,box-shadow]" variant="outline" size="sm">
                                      <ItemHeader className="flex-col gap-1.5 items-stretch min-w-0">
                                        <div className="flex gap-2 items-center justify-between min-w-0">
                                          <ItemDescription className="font-medium group-data-[size=xs]/item:text-xs leading-none tabular-nums text-[0.6875rem] text-left text-muted-foreground">
                                            {"TCK-4881"}
                                          </ItemDescription>
                                          <ItemActions className="gap-2 shrink-0">
                                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                              <span className="bg-muted-foreground rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                              {"Low"}
                                            </Badge>
                                          </ItemActions>
                                        </div>
                                        <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemTitle className="font-medium gap-2 leading-5 line-clamp-2 text-sm underline-offset-4 w-auto" title="Password reset email landed in the spam folder">
                                            {"Password reset email landed in the spam folder"}
                                          </ItemTitle>
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs line-clamp-1 text-left text-muted-foreground text-xs">
                                            <span className="min-w-0 truncate" title="Tom Whitfield at Cedar & Co">
                                              {"Tom Whitfield at Cedar & Co"}
                                            </span>
                                          </ItemDescription>
                                        </ItemContent>
                                      </ItemHeader>
                                      <ItemFooter className="gap-3 min-w-0">
                                        <div className="flex gap-1.5 items-center min-w-0">
                                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-5" size="default">
                                            <AvatarImage className="[&~[data-slot=avatar-fallback]]:invisible absolute inset-0 rounded-full" alt="Diego Ramos" src="/avatars/diego-ramos.jpg"></AvatarImage>
                                            <AvatarFallback className="bg-muted font-semibold rounded-full text-[0.5625rem] text-muted-foreground">
                                              {"DR"}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div className="font-medium min-w-0 text-xs truncate" title="Diego Ramos">
                                            {"Diego Ramos"}
                                          </div>
                                        </div>
                                        <span className="bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/10 dark:border-emerald-400/35 dark:text-emerald-300 flex font-medium gap-1.5 items-center leading-none ml-auto px-2 py-1 rounded-md shrink-0 text-[0.6875rem] text-emerald-700" aria-label="SLA met in Met" title="SLA met in Met">
                                          <svg className="lucide lucide-clock shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 6v6l4 2"></path>
                                          </svg>
                                          <span className="font-semibold shrink-0 tabular-nums">
                                            {"Met"}
                                          </span>
                                        </span>
                                      </ItemFooter>
                                    </Item>
                                  </KanbanItemHandle>
                                </KanbanItem>
                              </KanbanColumnContent>
                              <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-background! hover:bg-muted hover:border-border! hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground w-full" type="button" tabIndex="0" aria-label="Add a resolved ticket">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                                {"Add ticket"}
                              </Button>
                            </CardContent>
                          </Card>
                        </KanbanColumn>
                      </KanbanBoard>
                    </div>
                  </div>
                  <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 flex p-px select-none touch-none transition-colors" data-has-overflow-x="" data-overflow-x-end="" data-orientation="horizontal" data-id="base-ui-_r_7_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "595.4572127139364px"}}>
                    <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </ScrollArea>
              </Kanban>
              <div id="DndDescribedBy-0" style={{display: "none"}}>
                {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
              </div>
              <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
            </section>
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
