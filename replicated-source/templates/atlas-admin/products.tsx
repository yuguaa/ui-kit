import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3aikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals">
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products" data-active="">
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
                      {"Products"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0" id="page-header-actions"></div>
          </div>
        </header>
        <div className="auto-rows-min flex-1 gap-4 grid grid-cols-1 max-w-(--container-app) min-w-0 mx-auto pb-6 pt-0 px-6 w-full">
          <div className="@container flex flex-col gap-6 min-w-0 w-full">
            <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
              <CardContent className="px-(--card-spacing)">
                <div className="flex flex-col items-stretch sm:flex-row">
                  <div className="flex flex-col justify-center shrink-0 sm:basis-1/3 sm:pe-6">
                    <span className="text-muted-foreground text-xs">
                      {"Total Asset Value"}
                    </span>
                    <span className="font-semibold mt-1 tabular-nums text-2xl text-foreground">
                      {"$106,576.00"}
                    </span>
                  </div>
                  <Separator className="hidden self-stretch sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                  <div className="flex flex-1 flex-col gap-2 justify-center sm:ps-6">
                    <div>
                      <span className="font-semibold tabular-nums text-foreground text-xl">
                        {"2,258"}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {"products"}
                      </span>
                    </div>
                    <div className="bg-muted flex gap-0.5 h-1.5 items-center overflow-hidden rounded-full w-full" role="img" aria-label="Stock health: 1892 in stock, 164 low stock, 257 out of stock">
                      <span className="bg-emerald-500 h-full" style={{width: "81.7985%"}}></span>
                      <span className="bg-amber-400 h-full" style={{width: "7.09036%"}}></span>
                      <span className="bg-destructive h-full" style={{width: "11.1111%"}}></span>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center text-xs">
                      <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                        <span className="bg-emerald-500 inline-block rounded-full size-2" aria-hidden="true"></span>
                        <span>
                          {"In stock:"}
                          <span className="font-semibold tabular-nums text-foreground">
                            {"1,892"}
                          </span>
                        </span>
                      </div>
                      <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                        <span className="bg-amber-400 inline-block rounded-full size-2" aria-hidden="true"></span>
                        <span>
                          {"Low stock:"}
                          <span className="font-semibold tabular-nums text-foreground">
                            {"164"}
                          </span>
                        </span>
                      </div>
                      <div className="gap-1.5 inline-flex items-center text-muted-foreground">
                        <span className="bg-destructive inline-block rounded-full size-2" aria-hidden="true"></span>
                        <span>
                          {"Out of stock:"}
                          <span className="font-semibold tabular-nums text-foreground">
                            {"257"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
              <div className="flex flex-wrap gap-2 items-center justify-between px-5 py-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-52 rounded-lg sm:w-[220px] transition-colors" role="group">
                    <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                      <svg className="lucide lucide-search size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx={11} cy={11} r={8}></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_1s_" placeholder="Search..." aria-label="Search products" value="" />
                  </InputGroup>
                  <Popover>
                  <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-between outline-none px-2.5 rounded-lg select-none shrink-0 tabular-nums text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1u_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-calendar size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span className="truncate">
                      {"Aug 21, 2025 - May 16, 2026"}
                    </span>
                  </PopoverTrigger>
                  </Popover>
                  <Select>
                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[140px]" type="button" tabIndex={0} id="base-ui-_r_1v_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Stock status">
                    <SelectValue className="flex flex-1 text-left">
                      {"All stock"}
                    </SelectValue>
                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_1v_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Select>
                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[140px]" type="button" tabIndex={0} id="base-ui-_r_22_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue className="flex flex-1 text-left">
                      {"Category"}
                    </SelectValue>
                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_22_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Select>
                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[140px]" type="button" tabIndex={0} id="base-ui-_r_25_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue className="flex flex-1 text-left">
                      {"Supplier"}
                    </SelectValue>
                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_25_-hidden-input" tabIndex={-1} aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex={0}>
                  <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                    <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="M12 11h4"></path>
                    <path d="M12 16h4"></path>
                    <path d="M8 11h.01"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                  {"Stock Planner"}
                </Button>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="relative">
                <DataGridProvider>
                <DataGridScrollArea role="presentation" hasOverflowX="" overflowXEnd="" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_28_-viewport" tabIndex={0} data-has-overflow-x="" data-overflow-x-end="" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "170px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" data-has-overflow-x="" data-overflow-x-end="" style={{minWidth: "fit-content"}}>
                      <DataGridProvider>
                      <DataGridTableViewport>
                        <DataGridProvider>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "36px"}} />
                            <col style={{width: "240px"}} />
                            <col style={{width: "160px"}} />
                            <col style={{width: "110px"}} />
                            <col style={{width: "100px"}} />
                            <col style={{width: "130px"}} />
                            <col style={{width: "180px"}} />
                            <col style={{width: "140px"}} />
                            <col style={{width: "50px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 ps-5 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "36px"}}>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_29_" aria-checked="false" aria-label="Select all"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "240px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Product Info"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "160px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Stock Flow"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "110px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Delta"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "100px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Price"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "130px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Category"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "180px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Supplier"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "140px"}}>
                                <div className="-ms-2 flex h-full items-center">
                                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-lg text-secondary-foreground/80 text-sm" type="button" tabIndex={0}>
                                    {"Updated"}
                                    <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m7 15 5 5 5-5"></path>
                                      <path d="m7 9 5-5 5 5"></path>
                                    </svg>
                                  </Button>
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 pr-5 px-3 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "50px"}}></th>
                            </tr>
                          </thead>
                          <DataGridProvider>
                          <DataGridTableBody>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-001">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2c_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Premium Comfort Max"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"PC-5678"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"56"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"15"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"4"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+23"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$125.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Premium"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-amber-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                      <path d="M25.7756 17.3698C25.2893 15.6249 24.5666 13.9548 23.6276 12.4058H23.6296C23.6296 12.4058 22.7026 10.8678 22.3136 10.4028H22.3106C22.2146 10.2818 22.0216 10.4158 22.0956 10.5538C22.2046 10.7828 22.3036 11.0648 22.2346 11.3398C22.1206 11.6758 21.7456 11.9088 21.4006 11.7898C21.3051 11.7512 21.2186 11.6933 21.1466 11.6198C20.7936 11.2548 20.6096 10.6508 20.3806 9.8838C20.1746 9.2008 19.9196 8.35279 19.4596 7.43479C18.7116 5.94279 17.8266 5.25279 17.7906 5.22379C17.7686 5.20662 17.7416 5.19721 17.7137 5.19703C17.6859 5.19685 17.6587 5.20591 17.6366 5.2228C17.6142 5.23992 17.5976 5.26346 17.5891 5.29028C17.5805 5.31709 17.5803 5.34588 17.5886 5.3728C17.5926 5.3848 17.9646 6.61479 17.2466 7.54579C16.9606 7.91679 16.5256 8.1408 16.0186 8.1728C15.5086 8.2058 15.0036 8.0368 14.7006 7.7328C13.9496 6.9778 13.8616 5.63979 13.8756 4.90979C13.9226 2.47579 14.6576 0.770795 15.0406 0.209795C15.0567 0.185815 15.0649 0.157376 15.064 0.12849C15.0631 0.0996036 15.0532 0.071728 15.0356 0.048795C15.018 0.0265184 14.9936 0.0106996 14.9661 0.00382184C14.9385 -0.00305591 14.9095 -0.000603202 14.8836 0.010795C11.9096 1.2998 9.75456 3.50679 8.65356 6.38379C8.03456 8.09479 7.76456 8.8748 7.54556 9.3658C7.34356 9.8148 7.15656 10.0218 6.96556 10.1358C6.86056 10.1998 6.73256 10.2358 6.60056 10.2408C6.40656 10.2208 5.44656 10.0448 6.28256 8.4388C6.35156 8.3038 6.16856 8.1698 6.06656 8.2788L5.40856 9.0058C5.37923 9.0378 5.3499 9.0698 5.32056 9.1018L5.21156 9.2228C5.1929 9.24413 5.1759 9.2648 5.16056 9.2848C3.08056 11.6618 1.62756 14.7038 0.790564 17.5138C0.0405639 20.2138 -0.00643612 22.3708 0.000563879 23.1908L0.00156388 23.3728C0.00156388 27.0068 1.38356 30.4228 3.89256 32.9928C6.40156 35.5628 9.73956 36.9778 13.2876 36.9778C16.8356 36.9778 20.1736 35.5628 22.6826 32.9928C25.1926 30.4228 26.5736 27.0058 26.5736 23.3728C26.5736 21.0578 26.2756 19.1718 25.7706 17.3698H25.7756ZM13.2896 30.4168C9.49156 30.4168 6.41056 27.2648 6.41056 23.3738C6.41056 19.4828 9.49056 16.3298 13.2896 16.3298C17.0886 16.3298 20.1686 19.4838 20.1686 23.3738C20.1686 27.2638 17.0886 30.4168 13.2896 30.4168Z" fill="#FF4000"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Hotmart"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"31 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Premium Comfort Max" aria-haspopup="menu" id="base-ui-_r_2o_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-002">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2q_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1595950653106-6c9ebd614d3a%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1595950653106-6c9ebd614d3a%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1595950653106-6c9ebd614d3a%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Sport Performance Pro"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"SP-8901"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_2u_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"78"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_30_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"20"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_32_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"6"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+38"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$155.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Sports"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-violet-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="size-4 text-white" aria-hidden="true" version="1.1" id="procure__Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 69.2 108.3" xmlSpace="preserve" fill="currentColor">
                                      <path d="M36.3,68.8v-26c0-1.2,0.6-2.4,1.7-3.1l24.5-15.4c2.4-1.5,5.5,0.2,5.5,3.1v22.4c0,1.9-1,3.6-2.6,4.6L39,70.4 C37.8,71.1,36.3,70.2,36.3,68.8z"></path>
                                      <path d="M32.7,104.8V78.1c0-1.2-0.6-2.4-1.7-3.1L4.9,58.6C3.2,57.5,1,58.8,1,60.7v25.4c0,1.2,0.6,2.4,1.7,3.1L30,106.3 C31.2,107.1,32.7,106.2,32.7,104.8z"></path>
                                      <path d="M36.3,3.2v30.2c0,1.4,1.6,2.3,2.8,1.5l20.4-13.3c1.7-1.1,1.8-3.5,0.1-4.7L39.2,1.7C38,0.8,36.3,1.7,36.3,3.2z"></path>
                                      <path d="M32.7,2.9v65.9c0,1.4-1.6,2.3-2.8,1.5L2.7,53.2c-1-0.7-1.7-1.8-1.7-3.1V21.5c0-1.2,0.6-2.4,1.7-3.1L30,1.3 C31.2,0.6,32.7,1.4,32.7,2.9z"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Procure"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"30 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Sport Performance Pro" aria-haspopup="menu" id="base-ui-_r_36_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-003">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_38_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600185365483-26d7a4cc7519%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600185365483-26d7a4cc7519%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600185365483-26d7a4cc7519%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Classic Retro Style"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"CR-1234"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3c_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"43"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3e_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"11"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3g_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"3"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+19"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$85.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Retro"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-emerald-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                      <path d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" fill="#1ED760"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Spotify"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"29 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Classic Retro Style" aria-haspopup="menu" id="base-ui-_r_3k_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-004">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3m_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Adventure Explorer"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"AE-4567"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3q_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"29"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3s_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"7"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_3u_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"2"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  {"-5"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$135.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Adventure"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-sky-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 h-3 invert w-5" aria-hidden="true" viewBox="0 0 64 40">
                                      <text x={1} y={29} fill="#0061D5" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700" letter-spacing="0">
                                        {"box"}
                                      </text>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Box"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"28 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Adventure Explorer" aria-haspopup="menu" id="base-ui-_r_42_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-005">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_44_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525966222134-fcfa99b8ae77%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525966222134-fcfa99b8ae77%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525966222134-fcfa99b8ae77%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Modern Street Elite"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"MS-7890"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_48_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"91"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_4a_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"28"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_4c_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"9"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+51"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$175.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Modern"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-teal-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                                      <g clipPath="url(#coinholder-clip)">
                                        <path opacity={0.35} d="M12.2926 13.2856C11.5667 13.2856 10.8408 13.0005 10.2901 12.4823L3.50646 5.95223C2.63035 5.09711 2.32997 3.77556 2.75551 2.60948C3.20608 1.4434 4.28245 0.666016 5.50901 0.666016H12.3177C13.9447 0.666016 15.2464 2.0394 15.2464 3.69782V10.2279C15.2464 11.4458 14.5455 12.5341 13.4942 13.0264C13.0936 13.1819 12.6931 13.2856 12.2926 13.2856Z" fill="#7960ED"></path>
                                        <path d="M8.68839 15.3321C7.9124 15.3321 7.16145 15.0211 6.61075 14.4511L1.77961 9.47579C1.05369 8.69841 0.753308 7.61007 1.02866 6.57355C1.27898 5.53704 2.05496 4.70783 3.0312 4.39687L9.88991 2.27202C10.9162 1.96107 12.0426 2.24611 12.8186 3.02349C13.5946 3.82679 13.87 4.96696 13.5446 6.0553L11.492 13.1554C11.1916 14.1919 10.3906 14.9693 9.38928 15.2284C9.16399 15.3062 8.91368 15.3321 8.68839 15.3321Z" fill="#7960ED"></path>
                                      </g>
                                      <defs>
                                        <clippath id="coinholder-clip">
                                          <rect width={14.6667} height={14.6667} fill="white" transform="translate(0.666016 0.666016)"></rect>
                                        </clippath>
                                      </defs>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Coinholder"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"27 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Modern Street Elite" aria-haspopup="menu" id="base-ui-_r_4g_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-006">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_4i_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1539185441755-769473a23570%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1539185441755-769473a23570%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1539185441755-769473a23570%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Eco Friendly Runner"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"EF-2345"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_4m_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"37"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_4o_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"10"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_4q_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"3"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+14"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$105.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Eco"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-rose-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                                      <g clipRule="evenodd" fillRule="evenodd">
                                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                                      </g>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Slack"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"26 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Eco Friendly Runner" aria-haspopup="menu" id="base-ui-_r_4u_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-007">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_50_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1606107557195-0e29a4b5b4aa%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Luxury Comfort Pro"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"LC-5678"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_54_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"15"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_56_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"3"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_58_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"1"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  {"-3"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$225.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Luxury"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-indigo-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                      <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Stripe"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"25 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Luxury Comfort Pro" aria-haspopup="menu" id="base-ui-_r_5c_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-008">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5e_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542219550-37153d387c27%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542219550-37153d387c27%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542219550-37153d387c27%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Tech Smart Runner"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"TS-8901"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_5i_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"68"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_5k_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"19"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_5m_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"5"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+32"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$185.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Tech"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-slate-800 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"OpenAI"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"24 Jul, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Tech Smart Runner" aria-haspopup="menu" id="base-ui-_r_5q_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-009">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_5s_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542291026-7eec264c27ff%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Air Max 270 React Engine"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"WM-8421"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_60_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"92"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_62_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"30"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_64_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"7"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-success-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  {"+29"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$83.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Sneakers"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-indigo-600 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                                      <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Discord"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"18 Aug, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Air Max 270 React Engine" aria-haspopup="menu" id="base-ui-_r_68_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </td>
                            </tr>
                            <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="p-010">
                              <td className="align-middle ps-5 px-3 py-2">
                                <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6a_" aria-checked="false" aria-label="Select row"></Checkbox>
                                <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center min-w-0">
                                  <div className="bg-muted overflow-hidden relative ring-1 ring-border/60 rounded-md shrink-0">
                                    <img className="h-10 object-cover w-10" alt="" aria-hidden="true" loading="lazy" width={40} height={40} decoding="async" data-nimg="1" srcSet="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551107696-a4b0c5a0d9a2%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551107696-a4b0c5a0d9a2%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1551107696-a4b0c5a0d9a2%3Fauto%3Dformat%26fit%3Dcrop%26w%3D120%26h%3D120%26q%3D80&w=96&q=75" style={{color: "transparent"}} />
                                  </div>
                                  <div className="flex flex-col gap-0.5 min-w-0">
                                    <button className="font-medium hover:text-primary hover:underline text-foreground text-left text-sm transition-colors truncate underline-offset-4" type="button">
                                      {"Trail Runner Z2"}
                                    </button>
                                    <span className="gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-xs truncate">
                                      <span>
                                        {"SKU"}
                                      </span>
                                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                      <span className="font-mono truncate">
                                        {"UC-3990"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-3 items-center">
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_6e_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-muted-foreground">
                                      <svg className="lucide lucide-layers size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"12"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_6g_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-emerald-600">
                                      <svg className="lucide lucide-arrow-down size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12 5v14"></path>
                                        <path d="m19 12-7 7-7-7"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"5"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="gap-1 inline-flex items-center tabular-nums text-foreground text-sm" id="base-ui-_r_6i_" baseUiTooltipTrigger="">
                                    <span className="flex shrink-0 text-destructive">
                                      <svg className="lucide lucide-arrow-up size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m5 12 7-7 7 7"></path>
                                        <path d="M12 19V5"></path>
                                      </svg>
                                    </span>
                                    <span className="font-medium">
                                      {"2"}
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-destructive-foreground text-xs transition-shadow">
                                  <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 17h6v-6"></path>
                                    <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                  </svg>
                                  {"-235"}
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="font-medium tabular-nums text-foreground text-sm">
                                  {"$110.00"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="text-foreground text-sm">
                                  {"Sneakers"}
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="bg-cyan-500 inline-flex items-center justify-center rounded-md shrink-0 size-7" aria-hidden="true">
                                    <svg className="brightness-0 invert size-4" aria-hidden="true" viewBox="0 0 39 39" fill="none">
                                      <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="#81ADEC"></path>
                                    </svg>
                                  </span>
                                  <span className="font-medium text-foreground text-sm truncate">
                                    {"Paper"}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="gap-1.5 inline-flex items-center text-muted-foreground text-sm">
                                  <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                                    <path d="M3 10h18"></path>
                                  </svg>
                                  {"17 Aug, 2025"}
                                </span>
                              </td>
                              <td className="align-middle pr-5 px-3 py-2">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open actions for Trail Runner Z2" aria-haspopup="menu" id="base-ui-_r_6m_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx={12} cy={12} r={1}></circle>
                                    <circle cx={19} cy={12} r={1}></circle>
                                    <circle cx={5} cy={12} r={1}></circle>
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
                  <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_r_28_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "829.5148342059337px"}}>
                    <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </DataGridScrollArea>
                </DataGridProvider>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="px-5 py-3">
                <DataGridProvider>
                <DataGridPagination>
                  <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                    <div className="text-muted-foreground text-sm">
                      {"Rows per page"}
                    </div>
                    <Select>
                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex={0} id="base-ui-_r_6o_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                      <SelectValue className="flex flex-1 text-left">
                        {"10"}
                      </SelectValue>
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_6o_-hidden-input" tabIndex={-1} aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                    <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                      {"1 - 10 of 25"}
                    </div>
                    <div className="flex items-center order-1 space-x-1">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" disabled="" tabIndex={0} disabled>
                        <span className="sr-only">
                          {"Go to previous page"}
                        </span>
                        <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-accent-foreground text-sm" type="button" tabIndex={0}>
                        {"1"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex={0}>
                        {"2"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] size-7 text-muted-foreground text-sm" type="button" tabIndex={0}>
                        {"3"}
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg p-0 rounded-[min(var(--radius-md),12px)] rtl:rotate-180 rtl:transform size-7 text-sm" type="button" tabIndex={0}>
                        <span className="sr-only">
                          {"Go to next page"}
                        </span>
                        <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </DataGridPagination>
                </DataGridProvider>
              </div>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
