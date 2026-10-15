import { IconStack } from "@/registry-neui/bases/base/neui/icon-stack"
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
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
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
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar-border:transparent] [--sidebar-width:250px] [--sidebar:color-mix(in_oklab,var(--color-sidebar)_60%,transparent)] flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-2 p-2" sidebar="header">
              <SidebarProvider>
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Switch workspace" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_6cpfdb_" aria-expanded="false">
                    <span className="duration-300 ease-in-out flex in-data-[state=collapsed]:-ml-1 items-center justify-center relative shrink-0 size-6 transition-[margin]">
                      <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-75 size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                          <svg className="size-4" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </span>
                    <div className="font-semibold truncate">
                      {"NeUI"}
                    </div>
                    <svg className="lucide lucide-ellipsis ml-auto opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={19} cy={12} r={1}></circle>
                      <circle cx={5} cy={12} r={1}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
                </SidebarProvider>
              </SidebarMenu>
              </SidebarProvider>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <SidebarProvider>
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                  {"Menu"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="text-sm" sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0 gap-1!" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39ikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3aikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals" data-active="">
                        <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        <span>
                          {"Deals"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products">
                        <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3cikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/billing">
                        <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx={8} cy={21} r={1}></circle>
                          <circle cx={19} cy={21} r={1}></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        <span>
                          {"Billing"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_ddikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-users">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx={9} cy={7} r={4}></circle>
                        </svg>
                        <span>
                          {"Users"}
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3eikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                        <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        </svg>
                        <span>
                          {"Reports"}
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
              <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="pinned-resources-list" sidebar="group-label">
                  {"Favorites"}
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="text-sm" sidebar="group-content" id="pinned-resources-list">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39kkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                        <span className="bg-emerald-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"Weekly revenue"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3akkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals">
                        <span className="bg-amber-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"Open deals"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                          {"24"}
                        </Badge>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bkkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/users">
                        <span className="bg-blue-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"New signups"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3ckkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products?stock=low">
                        <span className="bg-violet-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"Low stock"}
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
                <SidebarProvider>
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dekpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/team">
                        <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 21a8 8 0 0 0-16 0"></path>
                          <circle cx={10} cy={8} r={5}></circle>
                          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
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
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dmkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/account/profile">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx={12} cy={12} r={3}></circle>
                        </svg>
                        <span>
                          {"Settings"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dukpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/help">
                        <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx={12} cy={12} r={4}></circle>
                        </svg>
                        <span>
                          {"Help & Support"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                  </SidebarMenu>
                  </SidebarProvider>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-2 p-2 pb-3" sidebar="footer">
              <SidebarProvider>
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarProvider>
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-1.5 peer/menu-button ring-sidebar-ring rounded-md shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex={0} aria-haspopup="menu" id="base-ui-_R_6spfdb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 duration-300 ease-in-out in-data-[state=collapsed]:size-7! rounded-full size-6 transition-all" size="default">
                      <AvatarImage className="rounded-md" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left text-sm">
                      <span className="font-semibold truncate">
                        {"Nick Bold"}
                      </span>
                    </div>
                    <svg className="group-data-[collapsible=icon]:hidden lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={19} cy={12} r={1}></circle>
                      <circle cx={5} cy={12} r={1}></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
                </SidebarProvider>
              </SidebarMenu>
              </SidebarProvider>
            </SidebarFooter>
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
              <span className="flex flex-col items-center">
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
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
        <header className="ease-linear flex group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 h-16 items-center shrink-0 transition-[width,height]">
          <div className="flex gap-2 items-center justify-between max-w-(--container-app) min-w-0 mx-auto px-6 w-full">
            <div className="flex gap-2 items-center min-w-0">
              <SidebarProvider>
              <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <Breadcrumb aria-label="breadcrumb">
                <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                  <BreadcrumbItem className="gap-1 hidden md:block">
                    <BreadcrumbLink className="hover:text-foreground transition-colors" href="/">
                      {"Dashboard"}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden md:block" role="presentation" aria-hidden="true">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      {"Deals"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0" id="page-header-actions"></div>
          </div>
        </header>
        <div className="auto-rows-min flex-1 gap-4 grid grid-cols-1 max-w-(--container-app) min-w-0 mx-auto pb-6 pt-0 px-6 w-full">
          <section className="flex flex-col gap-4 min-w-0 w-full">
            <header className="py-1" aria-label="Deal board toolbar">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2 items-center min-w-0">
                    <h2 className="font-semibold text-base truncate">
                      {"Deal Risk Board"}
                    </h2>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                      {"12"}
                    </Badge>
                  </div>
                  <p className="line-clamp-1 mt-0.5 text-muted-foreground text-sm">
                    {"Review deals by risk and close window."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 items-center lg:justify-end lg:w-auto w-full">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Filters, none active" aria-haspopup="menu" id="base-ui-_r_a_" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    {"Filters"}
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground" type="button" tabIndex={0}>
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    {"New Deal"}
                  </Button>
                </div>
              </div>
            </header>
            <Kanban className="w-full" dragging="false">
              <ScrollArea className="-mx-1.5 min-w-0 overflow-hidden pb-3 w-[calc(100%+0.75rem)]" role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none overflow-x-auto overflow-y-hidden transition-[color,box-shadow] w-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex={0} data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "1168px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div className="min-w-full w-max" role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                    <KanbanBoard className="flex gap-3 items-start min-w-full px-1.5 py-1">
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="qualified" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Qualified: Inbound fit">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-sky-500 dark:bg-sky-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Qualified">
                                  {"Qualified"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"3"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add qualified deal">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Qualified stage actions" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Qualified stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 py-1">
                            <KanbanItem value="deal-101" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
                                          <defs>
                                            <lineargradient id="a">
                                              <stop offset={0} stopColor="#0fbc5c"></stop>
                                              <stop offset={1} stopColor="#0cba65"></stop>
                                            </lineargradient>
                                            <lineargradient id="g">
                                              <stop offset=".231" stopColor="#0fbc5f"></stop>
                                              <stop offset=".312" stopColor="#0fbc5f"></stop>
                                              <stop offset=".366" stopColor="#0fbc5e"></stop>
                                              <stop offset=".458" stopColor="#0fbc5d"></stop>
                                              <stop offset=".54" stopColor="#12bc58"></stop>
                                              <stop offset=".699" stopColor="#28bf3c"></stop>
                                              <stop offset=".771" stopColor="#38c02b"></stop>
                                              <stop offset=".861" stopColor="#52c218"></stop>
                                              <stop offset=".915" stopColor="#67c30f"></stop>
                                              <stop offset={1} stopColor="#86c504"></stop>
                                            </lineargradient>
                                            <lineargradient id="h">
                                              <stop offset=".142" stopColor="#1abd4d"></stop>
                                              <stop offset=".248" stopColor="#6ec30d"></stop>
                                              <stop offset=".312" stopColor="#8ac502"></stop>
                                              <stop offset=".366" stopColor="#a2c600"></stop>
                                              <stop offset=".446" stopColor="#c8c903"></stop>
                                              <stop offset=".54" stopColor="#ebcb03"></stop>
                                              <stop offset=".616" stopColor="#f7cd07"></stop>
                                              <stop offset=".699" stopColor="#fdcd04"></stop>
                                              <stop offset=".771" stopColor="#fdce05"></stop>
                                              <stop offset=".861" stopColor="#ffce0a"></stop>
                                            </lineargradient>
                                            <lineargradient id="f">
                                              <stop offset=".316" stopColor="#ff4c3c"></stop>
                                              <stop offset=".604" stopColor="#ff692c"></stop>
                                              <stop offset=".727" stopColor="#ff7825"></stop>
                                              <stop offset=".885" stopColor="#ff8d1b"></stop>
                                              <stop offset={1} stopColor="#ff9f13"></stop>
                                            </lineargradient>
                                            <lineargradient id="b">
                                              <stop offset=".231" stopColor="#ff4541"></stop>
                                              <stop offset=".312" stopColor="#ff4540"></stop>
                                              <stop offset=".458" stopColor="#ff4640"></stop>
                                              <stop offset=".54" stopColor="#ff473f"></stop>
                                              <stop offset=".699" stopColor="#ff5138"></stop>
                                              <stop offset=".771" stopColor="#ff5b33"></stop>
                                              <stop offset=".861" stopColor="#ff6c29"></stop>
                                              <stop offset={1} stopColor="#ff8c18"></stop>
                                            </lineargradient>
                                            <lineargradient id="d">
                                              <stop offset=".408" stopColor="#fb4e5a"></stop>
                                              <stop offset={1} stopColor="#ff4540"></stop>
                                            </lineargradient>
                                            <lineargradient id="c">
                                              <stop offset=".132" stopColor="#0cba65"></stop>
                                              <stop offset=".21" stopColor="#0bb86d"></stop>
                                              <stop offset=".297" stopColor="#09b479"></stop>
                                              <stop offset=".396" stopColor="#08ad93"></stop>
                                              <stop offset=".477" stopColor="#0aa6a9"></stop>
                                              <stop offset=".568" stopColor="#0d9cc6"></stop>
                                              <stop offset=".667" stopColor="#1893dd"></stop>
                                              <stop offset=".769" stopColor="#258bf1"></stop>
                                              <stop offset=".859" stopColor="#3086ff"></stop>
                                            </lineargradient>
                                            <lineargradient id="e">
                                              <stop offset=".366" stopColor="#ff4e3a"></stop>
                                              <stop offset=".458" stopColor="#ff8a1b"></stop>
                                              <stop offset=".54" stopColor="#ffa312"></stop>
                                              <stop offset=".616" stopColor="#ffb60c"></stop>
                                              <stop offset=".771" stopColor="#ffcd0a"></stop>
                                              <stop offset=".861" stopColor="#fecf0a"></stop>
                                              <stop offset=".915" stopColor="#fecf08"></stop>
                                              <stop offset={1} stopColor="#fdcd01"></stop>
                                            </lineargradient>
                                            <lineargradient xlinkHref="#a" id="s" x1={219.7} x2={254.467} y1={329.535} y2={329.535} gradientUnits="userSpaceOnUse"></lineargradient>
                                            <radialgradient xlinkHref="#b" id="m" cx={109.627} cy={135.862} r={71.46} fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#c" id="n" cx={45.259} cy={279.274} r={71.46} fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#d" id="l" cx={304.017} cy={118.009} r={47.854} fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#e" id="o" cx={181.001} cy={177.201} r={71.46} fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#f" id="p" cx={207.673} cy={108.097} r={41.102} fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#g" id="r" cx={109.627} cy={135.862} r={71.46} fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <radialgradient xlinkHref="#h" id="j" cx={154.87} cy={145.969} r={71.46} fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"></radialgradient>
                                            <filter id="q" width={1.097} height={1.116} x="-.048" y="-.058" color-interpolation-filters="sRGB">
                                              <fegaussianblur stdDeviation="1.701"></fegaussianblur>
                                            </filter>
                                            <filter id="k" width={1.033} height={1.02} x="-.017" y="-.01" color-interpolation-filters="sRGB">
                                              <fegaussianblur stdDeviation=".242"></fegaussianblur>
                                            </filter>
                                            <clippath id="i" clippathunits="userSpaceOnUse">
                                              <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"></path>
                                            </clippath>
                                          </defs>
                                          <g clipPath="url(#i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
                                            <path fill="url(#j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#k)"></path>
                                            <path fill="url(#l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#k)"></path>
                                            <path fill="url(#m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#k)"></path>
                                            <path fill="url(#n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#k)"></path>
                                            <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#k)"></path>
                                            <path fill="url(#o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#k)"></path>
                                            <path fill="url(#p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#q)"></path>
                                            <path fill="url(#r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#k)"></path>
                                            <path fill="url(#s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#k)" opacity=".5"></path>
                                          </g>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Google">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Google"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$184K">
                                            {"$184K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 15">
                                            {"Jul 15"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"66%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" aria-valuetext="66%" role="progressbar" aria-labelledby="base-ui-_r_j_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_j_" role="presentation">
                                          {"Google deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "66%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Mira Stone"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Enterprise AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"15d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-102" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                          <defs>
                                            <lineargradient id="_r_k_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                                              <stop offset=".00006%" stopColor="#0845BF"></stop>
                                              <stop offset="19.11%" stopColor="#0950DE"></stop>
                                              <stop offset="38.23%" stopColor="#0B59F6"></stop>
                                              <stop offset="50%" stopColor="#0B5CFF"></stop>
                                              <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                                              <stop offset="77.74%" stopColor="#1665FC"></stop>
                                              <stop offset="86.33%" stopColor="#246FF9"></stop>
                                              <stop offset="93.88%" stopColor="#387FF4"></stop>
                                              <stop offset="100%" stopColor="#4F90EE"></stop>
                                            </lineargradient>
                                          </defs>
                                          <path fill="url(#_r_k_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                          <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Zoom">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Zoom"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Clear"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$126K">
                                            {"$126K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 21">
                                            {"Jul 21"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"74%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="74" aria-valuetext="74%" role="progressbar" aria-labelledby="base-ui-_r_l_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_l_" role="presentation">
                                          {"Zoom deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "74%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Leo Grant"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Account Executive"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"21d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-103" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="h-5 w-6" aria-hidden="true" viewBox="0 0 64 56">
                                          <path fill="#0061FF" d="M16 0 0 10.5 16 21l16-10.5L16 0Z"></path>
                                          <path fill="#0061FF" d="m48 0-16 10.5L48 21l16-10.5L48 0Z"></path>
                                          <path fill="#0061FF" d="M16 21 0 31.5 16 42l16-10.5L16 21Z"></path>
                                          <path fill="#0061FF" d="M48 21 32 31.5 48 42l16-10.5L48 21Z"></path>
                                          <path fill="#0061FF" d="M32 35 16 45.5 32 56l16-10.5L32 35Z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Dropbox">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Dropbox"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Clear"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$158K">
                                            {"$158K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Aug 3">
                                            {"Aug 3"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"71%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="71" aria-valuetext="71%" role="progressbar" aria-labelledby="base-ui-_r_m_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_m_" role="presentation">
                                          {"Dropbox deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "71%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Sana Qureshi"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Commercial AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"34d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="discovery" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Discovery: Buyer map">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-violet-500 dark:bg-violet-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Discovery">
                                  {"Discovery"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"2"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add discovery deal">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Discovery stage actions" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Discovery stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 py-1">
                            <KanbanItem value="deal-201" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                                          <g clipRule="evenodd" fillRule="evenodd">
                                            <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                            <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                            <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                            <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                          </g>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Slack">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Slack"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Blocked"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$342K">
                                            {"$342K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 6">
                                            {"Jul 6"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"32%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="32" aria-valuetext="32%" role="progressbar" aria-labelledby="base-ui-_r_s_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_s_" role="presentation">
                                          {"Slack deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "32%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Nora Vale"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Sales Manager"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"6d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-202" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Stripe">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Stripe"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-red-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Blocked"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$278K">
                                            {"$278K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 10">
                                            {"Jul 10"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"42%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-red-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="42" aria-valuetext="42%" role="progressbar" aria-labelledby="base-ui-_r_t_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_t_" role="presentation">
                                          {"Stripe deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "42%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Mira Stone"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Enterprise AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"10d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="solutionFit" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Solution Fit: Mutual plan">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-amber-500 dark:bg-amber-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Solution Fit">
                                  {"Solution Fit"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"2"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add solution fit">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Solution Fit stage actions" aria-haspopup="menu" id="base-ui-_r_11_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Solution Fit stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 py-1">
                            <KanbanItem value="deal-301" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <span className="dark:hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                            <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                          </svg>
                                        </span>
                                        <span className="dark:block hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                            <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                          </svg>
                                        </span>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="OpenAI">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"OpenAI"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$515K">
                                            {"$515K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 13">
                                            {"Jul 13"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"59%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="59" aria-valuetext="59%" role="progressbar" aria-labelledby="base-ui-_r_13_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_13_" role="presentation">
                                          {"OpenAI deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "59%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Alex Johnson"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Solutions AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"13d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-302" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <span className="dark:hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                            <title>
                                              {"Anthropic"}
                                            </title>
                                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                          </svg>
                                        </span>
                                        <span className="dark:block hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                            <title>
                                              {"Anthropic"}
                                            </title>
                                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                                          </svg>
                                        </span>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Anthropic">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Anthropic"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$228K">
                                            {"$228K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 22">
                                            {"Jul 22"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"64%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" aria-valuetext="64%" role="progressbar" aria-labelledby="base-ui-_r_14_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_14_" role="presentation">
                                          {"Anthropic deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "64%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Sana Qureshi"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Commercial AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"22d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="security" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Security: DPA review">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-rose-500 dark:bg-rose-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Security">
                                  {"Security"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"3"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add security review">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Security stage actions" aria-haspopup="menu" id="base-ui-_r_18_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Security stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 py-1">
                            <KanbanItem value="deal-401" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <span className="dark:hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                                          </svg>
                                        </span>
                                        <span className="dark:block hidden" aria-hidden="true">
                                          <svg className="size-5" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                                          </svg>
                                        </span>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="GitHub">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"GitHub"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$397K">
                                            {"$397K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 8">
                                            {"Jul 8"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"48%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="48" aria-valuetext="48%" role="progressbar" aria-labelledby="base-ui-_r_1a_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_1a_" role="presentation">
                                          {"GitHub deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "48%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Leo Grant"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Account Executive"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"8d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-402" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" viewBox="0 0 109 113" fill="none">
                                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"></path>
                                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity={0.2}></path>
                                          <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                                          <defs>
                                            <lineargradient id="paint0_linear" x1={53.9738} y1={54.974} x2={94.1635} y2={71.8295} gradientUnits="userSpaceOnUse">
                                              <stop stopColor="#249361"></stop>
                                              <stop offset={1} stopColor="#3ECF8E"></stop>
                                            </lineargradient>
                                            <lineargradient id="paint1_linear" x1={36.1558} y1={30.578} x2={54.4844} y2={65.0806} gradientUnits="userSpaceOnUse">
                                              <stop></stop>
                                              <stop offset={1} stopOpacity={0}></stop>
                                            </lineargradient>
                                          </defs>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Supabase">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Supabase"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$448K">
                                            {"$448K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 18">
                                            {"Jul 18"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"57%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="57" aria-valuetext="57%" role="progressbar" aria-labelledby="base-ui-_r_1b_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_1b_" role="presentation">
                                          {"Supabase deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "57%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Nora Vale"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Sales Manager"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"18d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-403" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <span className="dark:hidden" aria-hidden="true">
                                          <svg className="h-4 w-6" aria-hidden="true" xmlSpace="preserve" viewBox="35.188 31.512 351.46 258.785">
                                            <path d="M384.195 282.109c0 3.771-2.769 6.302-6.047 6.302v-.023c-3.371.023-6.089-2.508-6.089-6.278 0-3.769 2.718-6.293 6.089-6.293 3.279-.001 6.047 2.523 6.047 6.292zm2.453 0c0-5.175-4.02-8.179-8.5-8.179-4.511 0-8.531 3.004-8.531 8.179 0 5.172 4.021 8.188 8.531 8.188 4.481 0 8.5-3.016 8.5-8.188m-9.91.692h.91l2.109 3.703h2.316l-2.336-3.859c1.207-.086 2.2-.661 2.2-2.286 0-2.019-1.392-2.668-3.75-2.668h-3.411v8.813h1.961v-3.703m.001-1.492v-2.122h1.364c.742 0 1.753.06 1.753.965 0 .985-.523 1.157-1.398 1.157h-1.719M329.406 237.027l10.598 28.993H318.48l10.926-28.993zm-11.35-11.289-24.423 61.88h17.246l3.863-10.934h28.903l3.656 10.934h18.722l-24.605-61.888-23.362.008zm-49.033 61.903h17.497v-61.922l-17.5-.004.003 61.926zm-121.467-61.926-14.598 49.078-13.984-49.074-18.879-.004 19.972 61.926h25.207l20.133-61.926h-17.851zm70.725 13.484h7.52c10.91 0 17.966 4.898 17.966 17.609 0 12.714-7.056 17.613-17.966 17.613h-7.52v-35.222zm-17.35-13.484v61.926h28.366c15.113 0 20.048-2.512 25.384-8.148 3.769-3.957 6.207-12.641 6.207-22.134 0-8.707-2.063-16.468-5.66-21.304-6.481-8.649-15.817-10.34-29.75-10.34h-24.547zm-165.743-.086v62.012h17.645v-47.086l13.672.004c4.527 0 7.754 1.128 9.934 3.457 2.765 2.945 3.894 7.699 3.894 16.395v27.23h17.098v-34.262c0-24.453-15.586-27.75-30.836-27.75H35.188zm137.583.086.007 61.926h17.489v-61.926h-17.496z"></path>
                                            <path fill="#77B900" d="M82.211 102.414s22.504-33.203 67.437-36.638V53.73c-49.769 3.997-92.867 46.149-92.867 46.149s24.41 70.565 92.867 77.026v-12.804c-50.237-6.32-67.437-61.687-67.437-61.687zm67.437 36.223v11.726c-37.968-6.769-48.507-46.237-48.507-46.237s18.23-20.195 48.507-23.47v12.867c-.023 0-.039-.007-.058-.007-15.891-1.907-28.305 12.938-28.305 12.938s6.958 24.991 28.363 32.183m0-107.125V53.73c1.461-.112 2.922-.207 4.391-.257 56.582-1.907 93.449 46.406 93.449 46.406s-42.343 51.488-86.457 51.488c-4.043 0-7.828-.375-11.383-1.005v13.739c3.04.386 6.192.613 9.481.613 41.051 0 70.738-20.965 99.484-45.778 4.766 3.817 24.278 13.103 28.289 17.168-27.332 22.883-91.031 41.329-127.144 41.329-3.481 0-6.824-.211-10.11-.528v19.306H305.68V31.512H149.648zm0 49.144V65.777c1.446-.101 2.903-.179 4.391-.226 40.688-1.278 67.382 34.965 67.382 34.965s-28.832 40.043-59.746 40.043c-4.449 0-8.438-.715-12.028-1.922V93.523c15.84 1.914 19.028 8.911 28.551 24.786l21.18-17.859s-15.461-20.277-41.524-20.277c-2.833-.001-5.544.198-8.206.483"></path>
                                          </svg>
                                        </span>
                                        <span className="dark:block hidden" aria-hidden="true">
                                          <svg className="h-4 w-6" aria-hidden="true" xmlSpace="preserve" viewBox="35.188 31.512 351.46 258.785">
                                            <path fill="#fff" d="M384.195 282.109c0 3.771-2.769 6.302-6.047 6.302v-.023c-3.371.023-6.089-2.508-6.089-6.278 0-3.769 2.718-6.293 6.089-6.293 3.279-.001 6.047 2.523 6.047 6.292zm2.453 0c0-5.175-4.02-8.179-8.5-8.179-4.511 0-8.531 3.004-8.531 8.179 0 5.172 4.021 8.188 8.531 8.188 4.481 0 8.5-3.016 8.5-8.188m-9.91.692h.91l2.109 3.703h2.316l-2.336-3.859c1.207-.086 2.2-.661 2.2-2.286 0-2.019-1.392-2.668-3.75-2.668h-3.411v8.813h1.961v-3.703m.001-1.492v-2.122h1.364c.742 0 1.753.06 1.753.965 0 .985-.523 1.157-1.398 1.157h-1.719M329.406 237.027l10.598 28.993H318.48l10.926-28.993zm-11.35-11.289-24.423 61.88h17.246l3.863-10.934h28.903l3.656 10.934h18.722l-24.605-61.888-23.362.008zm-49.033 61.903h17.497v-61.922l-17.5-.004.003 61.926zm-121.467-61.926-14.598 49.078-13.984-49.074-18.879-.004 19.972 61.926h25.207l20.133-61.926h-17.851zm70.725 13.484h7.52c10.91 0 17.966 4.898 17.966 17.609 0 12.714-7.056 17.613-17.966 17.613h-7.52v-35.222zm-17.35-13.484v61.926h28.366c15.113 0 20.048-2.512 25.384-8.148 3.769-3.957 6.207-12.641 6.207-22.134 0-8.707-2.063-16.468-5.66-21.304-6.481-8.649-15.817-10.34-29.75-10.34h-24.547zm-165.743-.086v62.012h17.645v-47.086l13.672.004c4.527 0 7.754 1.128 9.934 3.457 2.765 2.945 3.894 7.699 3.894 16.395v27.23h17.098v-34.262c0-24.453-15.586-27.75-30.836-27.75H35.188zm137.583.086.007 61.926h17.489v-61.926h-17.496z"></path>
                                            <path fill="#77B900" d="M82.211 102.414s22.504-33.203 67.437-36.638V53.73c-49.769 3.997-92.867 46.149-92.867 46.149s24.41 70.565 92.867 77.026v-12.804c-50.237-6.32-67.437-61.687-67.437-61.687zm67.437 36.223v11.726c-37.968-6.769-48.507-46.237-48.507-46.237s18.23-20.195 48.507-23.47v12.867c-.023 0-.039-.007-.058-.007-15.891-1.907-28.305 12.938-28.305 12.938s6.958 24.991 28.363 32.183m0-107.125V53.73c1.461-.112 2.922-.207 4.391-.257 56.582-1.907 93.449 46.406 93.449 46.406s-42.343 51.488-86.457 51.488c-4.043 0-7.828-.375-11.383-1.005v13.739c3.04.386 6.192.613 9.481.613 41.051 0 70.738-20.965 99.484-45.778 4.766 3.817 24.278 13.103 28.289 17.168-27.332 22.883-91.031 41.329-127.144 41.329-3.481 0-6.824-.211-10.11-.528v19.306H305.68V31.512H149.648zm0 49.144V65.777c1.446-.101 2.903-.179 4.391-.226 40.688-1.278 67.382 34.965 67.382 34.965s-28.832 40.043-59.746 40.043c-4.449 0-8.438-.715-12.028-1.922V93.523c15.84 1.914 19.028 8.911 28.551 24.786l21.18-17.859s-15.461-20.277-41.524-20.277c-2.833-.001-5.544.198-8.206.483"></path>
                                          </svg>
                                        </span>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="NVIDIA">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"NVIDIA"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Clear"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$302K">
                                            {"$302K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 27">
                                            {"Jul 27"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"72%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" aria-valuetext="72%" role="progressbar" aria-labelledby="base-ui-_r_1c_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_1c_" role="presentation">
                                          {"NVIDIA deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "72%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Alex Johnson"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Solutions AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"27d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="procurement" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Procurement: Terms and PO">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-cyan-500 dark:bg-cyan-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Procurement">
                                  {"Procurement"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"2"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add procurement item">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Procurement stage actions" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Procurement stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 py-1">
                            <KanbanItem value="deal-501" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" viewBox="7.056000232696533 3 37.35095977783203 45">
                                          <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                                            <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                                            <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                                            <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                                          </g>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="PayPal">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"PayPal"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Risk"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$305K">
                                            {"$305K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Jul 19">
                                            {"Jul 19"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"61%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="61" aria-valuetext="61%" role="progressbar" aria-labelledby="base-ui-_r_1i_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_1i_" role="presentation">
                                          {"PayPal deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "61%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Alex Johnson"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Solutions AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"19d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                            <KanbanItem value="deal-502" dragging="false" role="button" tabIndex={0} aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_">
                              <KanbanItemHandle className="block" dragging="false">
                                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 hover:border-foreground/20 hover:shadow-sm overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm transition-[border-color,box-shadow]" size="sm">
                                  <CardHeader className="[.border-b]:pb-(--card-spacing) gap-1 gap-x-2.5 grid-cols-[1.5rem_minmax(0,1fr)] items-center min-h-5 min-w-0 pb-0 pt-3 px-3 rounded-t-xl">
                                    <Item className="[&_svg]:max-h-5 [&_svg]:max-w-6 [a]:hover:bg-muted border-0 border-transparent gap-2.5 h-5 p-0 rounded-lg text-sm w-6" variant="default" size="default">
                                      <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                        <svg className="size-5" aria-hidden="true" viewBox="0 0 256 160">
                                          <path fill="#0364B8" d="M102.6 38.7 164 75.2l36.6-15.3C187.4 24.6 153.6 0 113.8 0 82.8 0 55.8 15.8 40.6 40l62-1.3Z"></path>
                                          <path fill="#0078D4" d="M102.6 38.7 40.6 40C17.6 44.7 0 65.2 0 89.8c0 27.9 22.6 50.6 50.5 50.6h83.8L164 75.2l-61.4-36.5Z"></path>
                                          <path fill="#1490DF" d="m164 75.2-29.7 65.2h72.2c27.3 0 49.5-22.2 49.5-49.6 0-21.8-14.1-40.2-33.6-46.8l-21.8 15.9L164 75.2Z"></path>
                                          <path fill="#28A8EA" d="m200.6 59.9-36.6 15.3 42.5 65.2h15.2c20-6.3 34.3-25 34.3-47 0-19.9-11.8-37-28.7-44.7-9.1.9-18 4.7-26.7 11.2Z"></path>
                                        </svg>
                                      </ItemMedia>
                                    </Item>
                                    <div className="flex gap-2 items-center justify-between min-w-0">
                                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-5 min-w-0 text-sm truncate" title="Microsoft OneDrive">
                                        <button className="disabled:pointer-events-none focus-visible:underline outline-none text-left truncate w-full" type="button">
                                          {"Microsoft OneDrive"}
                                        </button>
                                      </CardTitle>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Clear"}
                                      </Badge>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="flex flex-col gap-3 min-h-[10.75rem] pb-3 pt-3 px-3">
                                    <div className="gap-2 grid grid-cols-2">
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-circle-dollar-sign size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx={12} cy={12} r={10}></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Value"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="$264K">
                                            {"$264K"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                      <Item className="[a]:hover:bg-muted border border-border flex-nowrap gap-2 min-w-0 px-3 py-2.5 rounded-lg text-sm" variant="outline" size="sm">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 self-center size-auto text-muted-foreground" variant="icon">
                                          <svg className="lucide lucide-calendar-clock size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M16 14v2.2l1.6 1"></path>
                                            <path d="M16 2v4"></path>
                                            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                                            <path d="M3 10h5"></path>
                                            <path d="M8 2v4"></path>
                                            <circle cx={16} cy={16} r={6}></circle>
                                          </svg>
                                        </ItemMedia>
                                        <ItemContent className="gap-0 group-data-[size=xs]/item:gap-0 min-w-0">
                                          <ItemDescription className="group-data-[size=xs]/item:text-xs leading-3.5 text-[0.6875rem] text-left text-muted-foreground truncate">
                                            {"Close"}
                                          </ItemDescription>
                                          <ItemTitle className="font-medium gap-2 leading-5 tabular-nums text-sm truncate underline-offset-4" title="Aug 2">
                                            {"Aug 2"}
                                          </ItemTitle>
                                        </ItemContent>
                                      </Item>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                      <div className="flex gap-2 items-center justify-between text-sm">
                                        <span className="text-muted-foreground">
                                          {"Confidence"}
                                        </span>
                                        <span className="font-medium tabular-nums">
                                          {"76%"}
                                        </span>
                                      </div>
                                      <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-indicator]:rounded-full **:data-[slot=progress-track]:bg-muted **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:rounded-full gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="76" aria-valuetext="76%" role="progressbar" aria-labelledby="base-ui-_r_1j_">
                                        <ProgressLabel className="font-medium sr-only text-sm" progressing="" id="base-ui-_r_1j_" role="presentation">
                                          {"Microsoft OneDrive deal confidence"}
                                        </ProgressLabel>
                                        <ProgressTrack className="bg-muted h-1 rounded-full" progressing="">
                                          <ProgressIndicator className="bg-primary" progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "76%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                    <div className="flex gap-3 items-center justify-between min-w-0 mt-auto">
                                      <div className="flex gap-2 items-center min-w-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="sm">
                                          <AvatarImage className="rounded-full" alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                        <div className="min-w-0">
                                          <div className="font-medium text-sm truncate">
                                            {"Sana Qureshi"}
                                          </div>
                                          <div className="text-muted-foreground text-xs truncate">
                                            {"Commercial AE"}
                                          </div>
                                        </div>
                                      </div>
                                      <span className="shrink-0 tabular-nums text-muted-foreground text-sm">
                                        {"33d left"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </KanbanItemHandle>
                            </KanbanItem>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <KanbanColumn className="max-w-[18.5rem] self-start shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]" value="closedWon" dragging="false">
                        <section className="flex flex-col gap-2 group/column py-1" aria-label="Closed-Won: Closed this cycle">
                          <div className="flex gap-2 items-center min-h-9">
                            <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full shrink-0 size-2.5" aria-hidden="true"></span>
                            <div className="flex-1 min-w-0">
                              <div className="flex gap-1.5 items-center min-w-0">
                                <h3 className="font-semibold text-sm truncate" title="Closed-Won">
                                  {"Closed-Won"}
                                </h3>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                  {"0"}
                                </Badge>
                              </div>
                            </div>
                            <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg opacity-0 pointer-events-none rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm transition-opacity" type="button" tabIndex={0} aria-label="Add won deal">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                            <DropdownMenu>
                            <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center opacity-0 outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Closed-Won stage actions" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={12} cy={12} r={1}></circle>
                                <circle cx={19} cy={12} r={1}></circle>
                                <circle cx={5} cy={12} r={1}></circle>
                              </svg>
                            </DropdownMenuTrigger>
                            </DropdownMenu>
                            <KanbanColumnHandle className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-grab dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group-focus-within/column:opacity-100 group-focus-within/column:pointer-events-auto group-hover/column:opacity-100 group-hover/column:pointer-events-auto group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none pointer-events-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground text-sm whitespace-nowrap" type="button" tabIndex={0} dragging="false" role="button" aria-disabled="false" aria-roledescription="sortable" aria-describedby="_r_c_" aria-label="Move Closed-Won stage">
                              <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx={9} cy={12} r={1}></circle>
                                <circle cx={9} cy={5} r={1}></circle>
                                <circle cx={9} cy={19} r={1}></circle>
                                <circle cx={15} cy={12} r={1}></circle>
                                <circle cx={15} cy={5} r={1}></circle>
                                <circle cx={15} cy={19} r={1}></circle>
                              </svg>
                            </KanbanColumnHandle>
                          </div>
                          <KanbanColumnContent className="gap-3 min-h-40 py-1">
                            <div className="bg-background/60 border border-border/70 border-dashed flex items-center justify-center min-h-40 px-4 py-5">
                              <Empty className="border-none flex-none gap-3 max-w-56 p-0 rounded-xl">
                                <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent flex items-center justify-center mb-0 shrink-0" data-variant="default">
                                  <IconStack className="h-14 w-12" aria-hidden="true" style={{"--icon-stack-content-x": "71%", "--icon-stack-content-y": "58%"}}>
                                    <svg className="h-full overflow-visible w-full" aria-hidden="true" viewBox="0 0 72 81" fill="none">
                                      <ellipse className="blur-[4px]" cx={36} cy={76} rx={30} ry={7} fill="currentColor" fillOpacity={0.055}></ellipse>
                                      <g opacity={0.4} transform="translate(0 0)">
                                        <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                      </g>
                                      <g opacity={0.6} transform="translate(13.65 6.04)">
                                        <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity={0.2} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                      </g>
                                      <g opacity={0.8} transform="translate(27.32 12.08)">
                                        <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity={0.3} strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round"></path>
                                      </g>
                                    </svg>
                                    <div className="-skew-y-26 -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[var(--icon-stack-content-x)] pointer-events-none scale-x-90 text-muted-foreground top-[var(--icon-stack-content-y)]">
                                      <svg className="lucide lucide-kanban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 3v14"></path>
                                        <path d="M12 3v8"></path>
                                        <path d="M19 3v18"></path>
                                      </svg>
                                    </div>
                                  </IconStack>
                                </div>
                                <EmptyHeader className="gap-1">
                                  <EmptyTitle className="font-heading font-semibold text-sm tracking-tight">
                                    {"No Deals Here"}
                                  </EmptyTitle>
                                  <EmptyDescription className="text-xs/5">
                                    {"Drop deals into closed-won when this stage is ready."}
                                  </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent className="gap-2.5 max-w-none text-sm">
                                  <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-transparent border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-8 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground" type="button" tabIndex={0} aria-label="Add won deal">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                    {"Add won deal"}
                                  </Button>
                                </EmptyContent>
                              </Empty>
                            </div>
                          </KanbanColumnContent>
                        </section>
                      </KanbanColumn>
                      <div className="max-w-[18.5rem] py-1 shrink-0 sm:w-[18.5rem] w-[calc(100vw-3rem)]">
                        <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-9 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground" type="button" tabIndex={0} aria-label="Add deal stage">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {"Add Stage"}
                        </Button>
                      </div>
                    </KanbanBoard>
                  </div>
                </div>
                <div className="data-horizontal:border-t data-horizontal:border-t-transparent data-horizontal:flex-col data-horizontal:h-2.5 data-vertical:border-l data-vertical:border-l-transparent data-vertical:h-full data-vertical:w-2.5 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_d_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "451.8404452690167px"}}>
                  <div className="bg-foreground/15 flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </Kanban>
            <div id="_r_c_" style={{display: "none"}}>
              {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
            </div>
            <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
          </section>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
