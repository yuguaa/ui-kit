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
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
  <>
    <div hidden></div>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar-border:transparent] [--sidebar-width:250px] [--sidebar:color-mix(in_oklab,var(--color-sidebar)_60%,transparent)] flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative transition-[width] w-(--sidebar-width)"></div>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="bg-sidebar flex flex-col group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm size-full" data-sidebar="sidebar">
            <SidebarHeader className="gap-2 p-2" sidebar="header">
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Switch workspace" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6cpfdb_" aria-expanded="false">
                    <span className="duration-300 ease-in-out flex in-data-[state=collapsed]:-ml-1 items-center justify-center relative shrink-0 size-6 transition-[margin]">
                      <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-75 size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                          <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </span>
                    <div className="font-semibold truncate">
                      NeUI
                    </div>
                    <svg className="lucide lucide-ellipsis ml-auto opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                  Menu
                </SidebarGroupLabel>
                <SidebarGroupContent className="text-sm" sidebar="group-content">
                  <SidebarMenu className="gap-0 gap-1!" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39ikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" href="/">
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3aikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals">
                        <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        <span>
                          Deals
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products">
                        <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                        <span>
                          Products
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3cikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/billing">
                        <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        <span>
                          Billing
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_ddikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-users">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span>
                          Users
                        </span>
                        <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3eikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                        <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                        </svg>
                        <span>
                          Reports
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="pinned-resources-list" sidebar="group-label">
                  Favorites
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                <SidebarGroupContent className="text-sm" sidebar="group-content" id="pinned-resources-list">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39kkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports">
                        <span className="bg-emerald-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          Weekly revenue
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3akkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals">
                        <span className="bg-amber-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          Open deals
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] transition-shadow">
                          24
                        </Badge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3bkkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/users">
                        <span className="bg-blue-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          New signups
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3ckkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/products?stock=low">
                        <span className="bg-violet-500 ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          Low stock
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <div className="mt-auto">
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarMenu className="gap-0" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dekpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/team">
                        <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 21a8 8 0 0 0-16 0"></path>
                          <circle cx="10" cy="8" r="5"></circle>
                          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                        </svg>
                        <span>
                          Team
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dmkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/account/profile">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>
                          Settings
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dukpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/help">
                        <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <span>
                          Help & Support
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              </div>
            </SidebarContent>
            <SidebarFooter className="gap-2 p-2 pb-3" sidebar="footer">
              <SidebarMenu className="gap-0" sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-1.5 peer/menu-button ring-sidebar-ring rounded-md shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6spfdb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 duration-300 ease-in-out in-data-[state=collapsed]:size-7! rounded-full size-6 transition-all" size="default">
                      <AvatarImage className="rounded-md" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left text-sm">
                      <span className="font-semibold truncate">
                        Nick Bold
                      </span>
                    </div>
                    <svg className="group-data-[collapsible=icon]:hidden lucide lucide-ellipsis ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
              <span className="flex flex-col items-center">
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
                <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
              </span>
              <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
                Collapse
              </span>
            </button>
          </div>
        </div>
      </Sidebar>
      <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm min-w-0">
        <header className="ease-linear flex group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 h-16 items-center shrink-0 transition-[width,height]">
          <div className="flex gap-2 items-center justify-between max-w-(--container-app) min-w-0 mx-auto px-6 w-full">
            <div className="flex gap-2 items-center min-w-0">
              <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  Toggle Sidebar
                </span>
              </SidebarTrigger>
              <Breadcrumb aria-label="breadcrumb">
                <BreadcrumbList className="gap-1.5 text-muted-foreground text-sm">
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      Dashboard
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0" id="page-header-actions">
              <div className="flex gap-2 items-center min-w-0">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button group/pick-date h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-between leading-none outline-none px-2.5 rounded-lg select-none shrink-0 sm:w-[250px] tabular-nums text-sm transition-all w-full whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
                  <span className="truncate">
                    May 12, 2026 - Jun 10, 2026
                  </span>
                  <svg className="group-hover/pick-date:text-foreground lucide lucide-calendar shrink-0 text-muted-foreground/80 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0" aria-label="Export">
                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 15V3"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="m7 10 5 5 5-5"></path>
                  </svg>
                  <span className="hidden sm:block">
                    Export
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="auto-rows-min flex-1 gap-4 grid grid-cols-1 max-w-(--container-app) min-w-0 mx-auto pb-6 pt-0 px-6 w-full">
          <div className="@container flex flex-col gap-4 min-w-0 text-foreground w-full">
            <h1 className="sr-only" id="page-heading">
              Edge Security Telemetry
            </h1>
            <section className="@3xl:grid-cols-2 @6xl:grid-cols-4 gap-4 grid grid-cols-1" aria-label="Security Summary">
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="480" height="155"></canvas>
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-3.5 p-4 relative z-10">
                  <div className="flex gap-3 items-start justify-between min-w-0">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-semibold leading-4 text-[0.8125rem] text-foreground truncate">
                        Signal Risk
                      </span>
                      <span className="leading-4 text-[0.6875rem] text-muted-foreground tracking-wide truncate uppercase">
                        Threat Index
                      </span>
                    </div>
                    <span className="bg-red-500 mt-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  </div>
                  <div className="flex gap-3 items-end justify-between">
                    <span className="font-semibold leading-6 min-w-0 tabular-nums text-foreground text-xl tracking-tight truncate" title="Elevated">
                      Elevated
                    </span>
                    <svg className="h-8 shrink-0 w-[4.5rem]" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                      <polyline points="0.0,24.7 9.0,21.4 18.0,28.0 27.0,8.2 36.0,12.6 45.0,6.0 54.0,13.7 63.0,10.4 72.0,23.6" fill="none" stroke="var(--color-red-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    </svg>
                  </div>
                  <div className="border-border/60 border-t flex gap-2 items-center min-w-0 pt-2.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-destructive-foreground transition-shadow">
                      +12.5%
                    </Badge>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      5 cases
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="480" height="155"></canvas>
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-3.5 p-4 relative z-10">
                  <div className="flex gap-3 items-start justify-between min-w-0">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-semibold leading-4 text-[0.8125rem] text-foreground truncate">
                        Mesh Uptime
                      </span>
                      <span className="leading-4 text-[0.6875rem] text-muted-foreground tracking-wide truncate uppercase">
                        Service Health
                      </span>
                    </div>
                    <span className="bg-emerald-500 mt-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  </div>
                  <div className="flex gap-3 items-end justify-between">
                    <span className="font-semibold leading-6 min-w-0 tabular-nums text-foreground text-xl tracking-tight truncate" title="99.98%">
                      99.98%
                    </span>
                    <svg className="h-8 shrink-0 w-[4.5rem]" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                      <polyline points="0.0,17.0 9.0,22.5 18.0,17.0 27.0,28.0 36.0,25.3 45.0,19.8 54.0,22.5 63.0,14.3 72.0,6.0" fill="none" stroke="var(--color-emerald-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    </svg>
                  </div>
                  <div className="border-border/60 border-t flex gap-2 items-center min-w-0 pt-2.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-success-foreground transition-shadow">
                      +0.2%
                    </Badge>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      58 zones
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="480" height="155"></canvas>
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-3.5 p-4 relative z-10">
                  <div className="flex gap-3 items-start justify-between min-w-0">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-semibold leading-4 text-[0.8125rem] text-foreground truncate">
                        Edge Traffic
                      </span>
                      <span className="leading-4 text-[0.6875rem] text-muted-foreground tracking-wide truncate uppercase">
                        Scrubbed Load
                      </span>
                    </div>
                    <span className="bg-amber-500 mt-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  </div>
                  <div className="flex gap-3 items-end justify-between">
                    <span className="font-semibold leading-6 min-w-0 tabular-nums text-foreground text-xl tracking-tight truncate" title="4.8 GB/s">
                      4.8 GB/s
                    </span>
                    <svg className="h-8 shrink-0 w-[4.5rem]" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                      <polyline points="0.0,28.0 9.0,18.6 18.0,17.0 27.0,7.6 36.0,10.7 45.0,6.0 54.0,9.1 63.0,12.3 72.0,7.6" fill="none" stroke="var(--color-amber-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    </svg>
                  </div>
                  <div className="border-border/60 border-t flex gap-2 items-center min-w-0 pt-2.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-warning-foreground transition-shadow">
                      -3.1%
                    </Badge>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      clean flow
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <canvas className="[mask-image:radial-gradient(72%_64%_at_50%_44%,black,transparent)] absolute h-full inset-0 opacity-70 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width="480" height="155"></canvas>
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-3.5 p-4 relative z-10">
                  <div className="flex gap-3 items-start justify-between min-w-0">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-semibold leading-4 text-[0.8125rem] text-foreground truncate">
                        Sensor Reach
                      </span>
                      <span className="leading-4 text-[0.6875rem] text-muted-foreground tracking-wide truncate uppercase">
                        Global Nodes
                      </span>
                    </div>
                    <span className="bg-emerald-500 mt-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  </div>
                  <div className="flex gap-3 items-end justify-between">
                    <span className="font-semibold leading-6 min-w-0 tabular-nums text-foreground text-xl tracking-tight truncate" title="18,420">
                      18,420
                    </span>
                    <svg className="h-8 shrink-0 w-[4.5rem]" viewBox="0 0 72 32" role="img" aria-label="Metric trend">
                      <polyline points="0.0,22.5 9.0,28.0 18.0,11.5 27.0,14.3 36.0,19.8 45.0,6.0 54.0,17.0 63.0,8.8 72.0,11.5" fill="none" stroke="var(--color-emerald-500)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></polyline>
                    </svg>
                  </div>
                  <div className="border-border/60 border-t flex gap-2 items-center min-w-0 pt-2.5">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-success-foreground transition-shadow">
                      +6.8%
                    </Badge>
                    <span className="leading-4 text-muted-foreground text-xs truncate">
                      93 regions
                    </span>
                  </div>
                </CardContent>
              </Card>
            </section>
            <section className="@5xl:grid-cols-2 gap-4 grid grid-cols-1" aria-label="Security Flow">
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-5 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-0.5">
                      <h2 className="font-semibold leading-4 text-sm">
                        Threat Vectors
                      </h2>
                      <p className="leading-4 text-muted-foreground text-xs">
                        Blocked Signals
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center shrink-0 sm:justify-end text-muted-foreground text-xs">
                      <span className="flex gap-1.5 items-center">
                        <span className="bg-blue-600 rounded-full size-2" aria-hidden="true"></span>
                        Blocked
                      </span>
                      <span className="flex gap-1.5 items-center">
                        <span className="bg-sky-300 rounded-full size-2" aria-hidden="true"></span>
                        Watched
                      </span>
                    </div>
                  </div>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_R_55pbt9fdb_">
                    <style>{`
 [data-chart=chart-_R_55pbt9fdb_] {
  --color-blocked: var(--color-blue-600);
  --color-watched: var(--color-sky-300);
}


.dark [data-chart=chart-_R_55pbt9fdb_] {
  --color-blocked: var(--color-blue-600);
  --color-watched: var(--color-sky-300);
}
`}</style>
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                      <div style={{width: "0", height: "0", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="944" height="224" style={{position: "relative", cursor: "default", width: "944px", height: "224px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="944" height="224" viewBox="0 0 944 224" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-horizontal">
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="4" y="8" width="936" height="186" x1="4" y1="194" x2="940" y2="194"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="4" y="8" width="936" height="186" x1="4" y1="146.3076923076923" x2="940" y2="146.3076923076923"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="4" y="8" width="936" height="186" x1="4" y1="98.61538461538463" x2="940" y2="98.61538461538463"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="4" y="8" width="936" height="186" x1="4" y1="50.92307692307691" x2="940" y2="50.92307692307691"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="4" y="8" width="936" height="186" x1="4" y1="8" x2="940" y2="8"></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts1-clip">
                                <rect x="4" y="8" height="186" width="936"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <pattern id="dashboard5-threat-blocked" patternUnits="userSpaceOnUse" width="8" height="8">
                                <rect width="8" height="8" fill="var(--color-blocked)" opacity="0.1"></rect>
                                <path d="M0,8 L8,0 M4,12 L12,4 M-4,4 L4,-4" stroke="var(--color-blocked)" strokeWidth="1.5" opacity="0.55"></path>
                                <path d="M2,10 L10,2 M6,14 L14,6 M-2,6 L6,-2" stroke="var(--color-blocked)" strokeWidth="1" opacity="0.25"></path>
                              </pattern>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_2_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Bot" x="12" y="112.9231" width="42" height="81.0769" d={"M12,117.9231A 5,5,0,0,1,17,112.9231L 49,112.9231A 5,5,0,0,1,\n        54,117.9231L 54,189A 5,5,0,0,1,\n        49,194L 17,194A 5,5,0,0,1,\n        12,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Phish" x="116" y="122.4615" width="42" height="71.5385" d={"M116,127.4615A 5,5,0,0,1,121,122.4615L 153,122.4615A 5,5,0,0,1,\n        158,127.4615L 158,189A 5,5,0,0,1,\n        153,194L 121,194A 5,5,0,0,1,\n        116,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="DDoS" x="220" y="70" width="42" height="124" d={"M220,75A 5,5,0,0,1,225,70L 257,70A 5,5,0,0,1,\n        262,75L 262,189A 5,5,0,0,1,\n        257,194L 225,194A 5,5,0,0,1,\n        220,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Inject" x="324" y="141.5385" width="42" height="52.4615" d={"M324,146.5385A 5,5,0,0,1,329,141.5385L 361,141.5385A 5,5,0,0,1,\n        366,146.5385L 366,189A 5,5,0,0,1,\n        361,194L 329,194A 5,5,0,0,1,\n        324,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Auth" x="428" y="91.4615" width="42" height="102.5385" d={"M428,96.4615A 5,5,0,0,1,433,91.4615L 465,91.4615A 5,5,0,0,1,\n        470,96.4615L 470,189A 5,5,0,0,1,\n        465,194L 433,194A 5,5,0,0,1,\n        428,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Probe" x="532" y="151.0769" width="42" height="42.9231" d={"M532,156.0769A 5,5,0,0,1,537,151.0769L 569,151.0769A 5,5,0,0,1,\n        574,156.0769L 574,189A 5,5,0,0,1,\n        569,194L 537,194A 5,5,0,0,1,\n        532,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Exfil" x="636" y="60.4615" width="42" height="133.5385" d={"M636,65.4615A 5,5,0,0,1,641,60.4615L 673,60.4615A 5,5,0,0,1,\n        678,65.4615L 678,189A 5,5,0,0,1,\n        673,194L 641,194A 5,5,0,0,1,\n        636,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Beacon" x="740" y="103.3846" width="42" height="90.6154" d={"M740,108.3846A 5,5,0,0,1,745,103.3846L 777,103.3846A 5,5,0,0,1,\n        782,108.3846L 782,189A 5,5,0,0,1,\n        777,194L 745,194A 5,5,0,0,1,\n        740,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="url(#dashboard5-threat-blocked)" stroke="var(--color-blocked)" strokeWidth="1" name="Day0" x="844" y="160.6154" width="42" height="33.3846" d={"M844,165.6154A 5,5,0,0,1,849,160.6154L 881,160.6154A 5,5,0,0,1,\n        886,165.6154L 886,189A 5,5,0,0,1,\n        881,194L 849,194A 5,5,0,0,1,\n        844,189Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_3_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Bot" x="57" y="46.1538" width="42" height="147.8462" d={"M57,51.1538A 5,5,0,0,1,62,46.1538L 94,46.1538A 5,5,0,0,1,\n        99,51.1538L 99,189A 5,5,0,0,1,\n        94,194L 62,194A 5,5,0,0,1,\n        57,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Phish" x="161" y="17.5385" width="42" height="176.4615" d={"M161,22.5385A 5,5,0,0,1,166,17.5385L 198,17.5385A 5,5,0,0,1,\n        203,22.5385L 203,189A 5,5,0,0,1,\n        198,194L 166,194A 5,5,0,0,1,\n        161,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="DDoS" x="265" y="115.3077" width="42" height="78.6923" d={"M265,120.3077A 5,5,0,0,1,270,115.3077L 302,115.3077A 5,5,0,0,1,\n        307,120.3077L 307,189A 5,5,0,0,1,\n        302,194L 270,194A 5,5,0,0,1,\n        265,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Inject" x="369" y="79.5385" width="42" height="114.4615" d={"M369,84.5385A 5,5,0,0,1,374,79.5385L 406,79.5385A 5,5,0,0,1,\n        411,84.5385L 411,189A 5,5,0,0,1,\n        406,194L 374,194A 5,5,0,0,1,\n        369,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Auth" x="473" y="31.8462" width="42" height="162.1538" d={"M473,36.8462A 5,5,0,0,1,478,31.8462L 510,31.8462A 5,5,0,0,1,\n        515,36.8462L 515,189A 5,5,0,0,1,\n        510,194L 478,194A 5,5,0,0,1,\n        473,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Probe" x="577" y="55.6923" width="42" height="138.3077" d={"M577,60.6923A 5,5,0,0,1,582,55.6923L 614,55.6923A 5,5,0,0,1,\n        619,60.6923L 619,189A 5,5,0,0,1,\n        614,194L 582,194A 5,5,0,0,1,\n        577,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Exfil" x="681" y="110.5385" width="42" height="83.4615" d={"M681,115.5385A 5,5,0,0,1,686,110.5385L 718,110.5385A 5,5,0,0,1,\n        723,115.5385L 723,189A 5,5,0,0,1,\n        718,194L 686,194A 5,5,0,0,1,\n        681,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Beacon" x="785" y="41.3846" width="42" height="152.6154" d={"M785,46.3846A 5,5,0,0,1,790,41.3846L 822,41.3846A 5,5,0,0,1,\n        827,46.3846L 827,189A 5,5,0,0,1,\n        822,194L 790,194A 5,5,0,0,1,\n        785,189Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" fill="var(--color-watched)" fillOpacity="0.86" stroke="var(--color-watched)" strokeWidth="1" name="Day0" x="889" y="127.2308" width="42" height="66.7692" d={"M889,132.2308A 5,5,0,0,1,894,127.2308L 926,127.2308A 5,5,0,0,1,\n        931,132.2308L 931,189A 5,5,0,0,1,\n        926,194L 894,194A 5,5,0,0,1,\n        889,189Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
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
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="56" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="56" dy="0.71em">
                                      Bot
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="160" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="160" dy="0.71em">
                                      Phish
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="264" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="264" dy="0.71em">
                                      DDoS
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="368" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="368" dy="0.71em">
                                      Inject
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="472" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="472" dy="0.71em">
                                      Auth
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="576" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="576" dy="0.71em">
                                      Probe
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="680" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="680" dy="0.71em">
                                      Exfil
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="784" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="784" dy="0.71em">
                                      Beacon
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="936" stroke="none" fontSize="10" x="888" y="210" textAnchor="middle" fill="#666">
                                    <tspan x="888" dy="0.71em">
                                      Day0
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
                </CardContent>
              </Card>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col gap-5 p-4">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="space-y-0.5">
                      <h2 className="font-semibold leading-4 text-sm">
                        Network Flow
                      </h2>
                      <p className="leading-4 text-muted-foreground text-xs">
                        API and webhooks
                      </p>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                      +12.8%
                    </Badge>
                  </div>
                  <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-56 justify-center min-w-0 text-xs w-full" data-chart="chart-_R_59pbt9fdb_">
                    <style>{`
 [data-chart=chart-_R_59pbt9fdb_] {
  --color-api: var(--color-yellow-500);
  --color-webhook: var(--color-emerald-500);
}


.dark [data-chart=chart-_R_59pbt9fdb_] {
  --color-api: var(--color-yellow-500);
  --color-webhook: var(--color-emerald-500);
}
`}</style>
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                      <div style={{width: "0", height: "0", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="944" height="224" style={{position: "relative", cursor: "default", width: "944px", height: "224px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="944" height="224" viewBox="0 0 944 224" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-horizontal">
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="20" width="944" height="174" x1="0" y1="194" x2="944" y2="194"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="20" width="944" height="174" x1="0" y1="150.5" x2="944" y2="150.5"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="20" width="944" height="174" x1="0" y1="107" x2="944" y2="107"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="20" width="944" height="174" x1="0" y1="63.5" x2="944" y2="63.5"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="20" width="944" height="174" x1="0" y1="20" x2="944" y2="20"></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts2-clip">
                                <rect x="0" y="20" height="174" width="944"></rect>
                              </clippath>
                            </defs>
                            <defs>
                              <pattern id="dashboard5-flow-crosshatch-api" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <path d="M0,8 L8,0" stroke="var(--color-yellow-500)" strokeWidth="0.8" opacity="0.4"></path>
                                <path d="M0,0 L8,8" stroke="var(--color-yellow-500)" strokeWidth="0.8" opacity="0.2"></path>
                              </pattern>
                              <pattern id="dashboard5-flow-crosshatch-webhook" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <path d="M0,8 L8,0" stroke="var(--color-emerald-500)" strokeWidth="0.8" opacity="0.4"></path>
                                <path d="M0,0 L8,8" stroke="var(--color-emerald-500)" strokeWidth="0.8" opacity="0.2"></path>
                              </pattern>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1">
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_4_)">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth="1.25" fill="url(#dashboard5-flow-crosshatch-webhook)" fillOpacity="0.5" height="174" stroke="none" width="944" id="recharts-area-_r_4_" d="M0,158.33C28.606,152.259,57.212,146.188,85.818,147.02C114.424,147.852,143.03,155.586,171.636,153.11C200.242,150.634,228.848,137.946,257.455,138.755C286.061,139.564,314.667,153.869,343.273,152.24C371.879,150.611,400.485,133.047,429.091,131.36C457.697,129.673,486.303,143.862,514.909,143.54C543.515,143.218,572.121,128.385,600.727,125.27C629.333,122.155,657.939,130.758,686.545,137.885C715.152,145.012,743.758,150.662,772.364,147.455C800.97,144.248,829.576,132.184,858.182,129.62C886.788,127.056,915.394,133.993,944,140.93L944,194C915.394,194,886.788,194,858.182,194C829.576,194,800.97,194,772.364,194C743.758,194,715.152,194,686.545,194C657.939,194,629.333,194,600.727,194C572.121,194,543.515,194,514.909,194C486.303,194,457.697,194,429.091,194C400.485,194,371.879,194,343.273,194C314.667,194,286.061,194,257.455,194C228.848,194,200.242,194,171.636,194C143.03,194,114.424,194,85.818,194C57.212,194,28.606,194,0,194Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth="1.25" fill="none" fillOpacity="0.5" height="174" stroke="var(--color-webhook)" width="944" d="M0,158.33C28.606,152.259,57.212,146.188,85.818,147.02C114.424,147.852,143.03,155.586,171.636,153.11C200.242,150.634,228.848,137.946,257.455,138.755C286.061,139.564,314.667,153.869,343.273,152.24C371.879,150.611,400.485,133.047,429.091,131.36C457.697,129.673,486.303,143.862,514.909,143.54C543.515,143.218,572.121,128.385,600.727,125.27C629.333,122.155,657.939,130.758,686.545,137.885C715.152,145.012,743.758,150.662,772.364,147.455C800.97,144.248,829.576,132.184,858.182,129.62C886.788,127.056,915.394,133.993,944,140.93"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-area recharts-layer">
                                <g className="recharts-layer">
                                  <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_5_)">
                                    <g className="recharts-layer">
                                      <path className="recharts-area-area recharts-curve" strokeWidth="1.25" fill="url(#dashboard5-flow-crosshatch-api)" fillOpacity="0.5" height="174" stroke="none" width="944" id="recharts-area-_r_5_" d="M0,118.745C28.606,106.237,57.212,93.729,85.818,96.125C114.424,98.521,143.03,115.82,171.636,110.48C200.242,105.14,228.848,77.161,257.455,78.29C286.061,79.419,314.667,109.655,343.273,106.565C371.879,103.475,400.485,67.057,429.091,63.5C457.697,59.943,486.303,89.245,514.909,88.295C543.515,87.345,572.121,56.142,600.727,49.58C629.333,43.018,657.939,61.095,686.545,75.68C715.152,90.265,743.758,101.357,772.364,94.82C800.97,88.283,829.576,64.118,858.182,59.15C886.788,54.182,915.394,68.411,944,82.64L944,140.93C915.394,133.993,886.788,127.056,858.182,129.62C829.576,132.184,800.97,144.248,772.364,147.455C743.758,150.662,715.152,145.012,686.545,137.885C657.939,130.758,629.333,122.155,600.727,125.27C572.121,128.385,543.515,143.218,514.909,143.54C486.303,143.862,457.697,129.673,429.091,131.36C400.485,133.047,371.879,150.611,343.273,152.24C314.667,153.869,286.061,139.564,257.455,138.755C228.848,137.946,200.242,150.634,171.636,153.11C143.03,155.586,114.424,147.852,85.818,147.02C57.212,146.188,28.606,152.259,0,158.33Z"></path>
                                      <path className="recharts-area-curve recharts-curve" strokeWidth="1.25" fill="none" fillOpacity="0.5" height="174" stroke="var(--color-api)" width="944" d="M0,118.745C28.606,106.237,57.212,93.729,85.818,96.125C114.424,98.521,143.03,115.82,171.636,110.48C200.242,105.14,228.848,77.161,257.455,78.29C286.061,79.419,314.667,109.655,343.273,106.565C371.879,103.475,400.485,67.057,429.091,63.5C457.697,59.943,486.303,89.245,514.909,88.295C543.515,87.345,572.121,56.142,600.727,49.58C629.333,43.018,657.939,61.095,686.545,75.68C715.152,90.265,743.758,101.357,772.364,94.82C800.97,88.283,829.576,64.118,858.182,59.15C886.788,54.182,915.394,68.411,944,82.64"></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
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
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="85.81818181818181" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="85.81818181818181" dy="0.71em">
                                      Feb
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="171.63636363636363" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="171.63636363636363" dy="0.71em">
                                      Mar
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="257.45454545454544" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="257.45454545454544" dy="0.71em">
                                      Apr
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="343.27272727272725" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="343.27272727272725" dy="0.71em">
                                      May
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="429.09090909090907" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="429.09090909090907" dy="0.71em">
                                      Jun
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="514.9090909090909" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="514.9090909090909" dy="0.71em">
                                      Jul
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="600.7272727272727" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="600.7272727272727" dy="0.71em">
                                      Aug
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="686.5454545454545" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="686.5454545454545" dy="0.71em">
                                      Sep
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="772.3636363636363" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="772.3636363636363" dy="0.71em">
                                      Oct
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="858.1818181818181" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="858.1818181818181" dy="0.71em">
                                      Nov
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" x="932.7421875" y="208" textAnchor="middle" fill="#666">
                                    <tspan x="932.7421875" dy="0.71em">
                                      Dec
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
                </CardContent>
              </Card>
            </section>
            <section className="@5xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] gap-4 grid grid-cols-1" aria-label="Security Load">
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="flex flex-col h-full p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-0.5">
                      <h2 className="font-semibold leading-4 text-sm">
                        Cluster Load
                      </h2>
                      <div className="flex flex-wrap gap-3 items-center leading-4 text-muted-foreground text-xs">
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-zinc-300 rounded-full size-2" aria-hidden="true"></span>
                          Normal
                        </span>
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-amber-500 rounded-full size-2" aria-hidden="true"></span>
                          Warm
                        </span>
                        <span className="flex gap-1.5 items-center">
                          <span className="bg-red-500 rounded-full size-2" aria-hidden="true"></span>
                          Critical
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center sm:justify-end">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                        <span className="font-semibold tabular-nums">
                          52
                        </span>
                        <span>
                          Nodes
                        </span>
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                        <span className="font-semibold tabular-nums">
                          2
                        </span>
                        <span>
                          Warm
                        </span>
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-destructive-foreground text-xs transition-shadow">
                        <span className="font-semibold tabular-nums">
                          2
                        </span>
                        <span>
                          Critical
                        </span>
                      </Badge>
                    </div>
                  </div>
                  <div className="h-60 mt-auto pt-5">
                    <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                      <div style={{width: "0", height: "0", overflow: "visible"}}>
                        <div className="recharts-wrapper" width="944" height="220" style={{position: "relative", cursor: "default", width: "944px", height: "220px"}}>
                          <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                          <svg className="recharts-surface" role="application" tabIndex="0" width="944" height="220" viewBox="0 0 944 220" style={{width: "100%", height: "100%", display: "block"}}>
                            <title></title>
                            <desc></desc>
                            <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                              <g className="recharts-cartesian-grid">
                                <g className="recharts-cartesian-grid-horizontal">
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="10" width="944" height="180" x1="0" y1="190" x2="944" y2="190"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="10" width="944" height="180" x1="0" y1="145" x2="944" y2="145"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="10" width="944" height="180" x1="0" y1="100" x2="944" y2="100"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="10" width="944" height="180" x1="0" y1="55" x2="944" y2="55"></line>
                                  <line stroke="var(--border)" strokeDasharray="3 3" strokeOpacity="0.75" fill="none" x="0" y="10" width="944" height="180" x1="0" y1="10" x2="944" y2="10"></line>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                            <defs>
                              <clippath id="recharts27-clip">
                                <rect x="0" y="10" height="180" width="944"></rect>
                              </clippath>
                            </defs>
                            <g className="recharts-zIndex-layer_100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_300" tabIndex="-1">
                              <g className="recharts-bar recharts-layer" id="recharts-bar-_r_6_">
                                <g className="recharts-bar-rectangles recharts-layer">
                                  <g className="recharts-layer">
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="2" y="60.4" width="14" height="129.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M2,65.4A 5,5,0,0,1,7,60.4L 11,60.4A 5,5,0,0,1,\n        16,65.4L 16,185A 5,5,0,0,1,\n        11,190L 7,190A 5,5,0,0,1,\n        2,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="20.1538" y="67.6" width="14" height="122.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M20.1538,72.6A 5,5,0,0,1,25.1538,67.6L 29.1538,67.6A 5,5,0,0,1,\n        34.1538,72.6L 34.1538,185A 5,5,0,0,1,\n        29.1538,190L 25.1538,190A 5,5,0,0,1,\n        20.1538,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="38.3077" y="150.4" width="14" height="39.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M38.3077,155.4A 5,5,0,0,1,43.3077,150.4L 47.3077,150.4A 5,5,0,0,1,\n        52.3077,155.4L 52.3077,185A 5,5,0,0,1,\n        47.3077,190L 43.3077,190A 5,5,0,0,1,\n        38.3077,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="56.4615" y="157.6" width="14" height="32.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M56.4615,162.6A 5,5,0,0,1,61.4615,157.6L 65.4615,157.6A 5,5,0,0,1,\n        70.4615,162.6L 70.4615,185A 5,5,0,0,1,\n        65.4615,190L 61.4615,190A 5,5,0,0,1,\n        56.4615,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="74.6154" y="80.2" width="14" height="109.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M74.6154,85.2A 5,5,0,0,1,79.6154,80.2L 83.6154,80.2A 5,5,0,0,1,\n        88.6154,85.2L 88.6154,185A 5,5,0,0,1,\n        83.6154,190L 79.6154,190A 5,5,0,0,1,\n        74.6154,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="92.7692" y="62.2" width="14" height="127.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M92.7692,67.2A 5,5,0,0,1,97.7692,62.2L 101.7692,62.2A 5,5,0,0,1,\n        106.7692,67.2L 106.7692,185A 5,5,0,0,1,\n        101.7692,190L 97.7692,190A 5,5,0,0,1,\n        92.7692,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="110.9231" y="154" width="14" height="36" fill="var(--color-zinc-300)" opacity="0.62" d={"M110.9231,159A 5,5,0,0,1,115.9231,154L 119.9231,154A 5,5,0,0,1,\n        124.9231,159L 124.9231,185A 5,5,0,0,1,\n        119.9231,190L 115.9231,190A 5,5,0,0,1,\n        110.9231,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="129.0769" y="143.2" width="14" height="46.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M129.0769,148.2A 5,5,0,0,1,134.0769,143.2L 138.0769,143.2A 5,5,0,0,1,\n        143.0769,148.2L 143.0769,185A 5,5,0,0,1,\n        138.0769,190L 134.0769,190A 5,5,0,0,1,\n        129.0769,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="147.2308" y="134.2" width="14" height="55.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M147.2308,139.2A 5,5,0,0,1,152.2308,134.2L 156.2308,134.2A 5,5,0,0,1,\n        161.2308,139.2L 161.2308,185A 5,5,0,0,1,\n        156.2308,190L 152.2308,190A 5,5,0,0,1,\n        147.2308,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="165.3846" y="64" width="14" height="126" fill="var(--color-zinc-300)" opacity="0.62" d={"M165.3846,69A 5,5,0,0,1,170.3846,64L 174.3846,64A 5,5,0,0,1,\n        179.3846,69L 179.3846,185A 5,5,0,0,1,\n        174.3846,190L 170.3846,190A 5,5,0,0,1,\n        165.3846,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="183.5385" y="107.2" width="14" height="82.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M183.5385,112.2A 5,5,0,0,1,188.5385,107.2L 192.5385,107.2A 5,5,0,0,1,\n        197.5385,112.2L 197.5385,185A 5,5,0,0,1,\n        192.5385,190L 188.5385,190A 5,5,0,0,1,\n        183.5385,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="201.6923" y="31.6" width="14" height="158.4" fill="var(--color-red-500)" opacity="1" d={"M201.6923,36.6A 5,5,0,0,1,206.6923,31.6L 210.6923,31.6A 5,5,0,0,1,\n        215.6923,36.6L 215.6923,185A 5,5,0,0,1,\n        210.6923,190L 206.6923,190A 5,5,0,0,1,\n        201.6923,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="219.8462" y="119.8" width="14" height="70.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M219.8462,124.8A 5,5,0,0,1,224.8462,119.8L 228.8462,119.8A 5,5,0,0,1,\n        233.8462,124.8L 233.8462,185A 5,5,0,0,1,\n        228.8462,190L 224.8462,190A 5,5,0,0,1,\n        219.8462,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="238" y="145" width="14" height="45" fill="var(--color-zinc-300)" opacity="0.62" d={"M238,150A 5,5,0,0,1,243,145L 247,145A 5,5,0,0,1,\n        252,150L 252,185A 5,5,0,0,1,\n        247,190L 243,190A 5,5,0,0,1,\n        238,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="256.1538" y="168.4" width="14" height="21.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M256.1538,173.4A 5,5,0,0,1,261.1538,168.4L 265.1538,168.4A 5,5,0,0,1,\n        270.1538,173.4L 270.1538,185A 5,5,0,0,1,\n        265.1538,190L 261.1538,190A 5,5,0,0,1,\n        256.1538,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="274.3077" y="130.6" width="14" height="59.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M274.3077,135.6A 5,5,0,0,1,279.3077,130.6L 283.3077,130.6A 5,5,0,0,1,\n        288.3077,135.6L 288.3077,185A 5,5,0,0,1,\n        283.3077,190L 279.3077,190A 5,5,0,0,1,\n        274.3077,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="292.4615" y="157.6" width="14" height="32.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M292.4615,162.6A 5,5,0,0,1,297.4615,157.6L 301.4615,157.6A 5,5,0,0,1,\n        306.4615,162.6L 306.4615,185A 5,5,0,0,1,\n        301.4615,190L 297.4615,190A 5,5,0,0,1,\n        292.4615,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="310.6154" y="139.6" width="14" height="50.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M310.6154,144.6A 5,5,0,0,1,315.6154,139.6L 319.6154,139.6A 5,5,0,0,1,\n        324.6154,144.6L 324.6154,185A 5,5,0,0,1,\n        319.6154,190L 315.6154,190A 5,5,0,0,1,\n        310.6154,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="328.7692" y="114.4" width="14" height="75.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M328.7692,119.4A 5,5,0,0,1,333.7692,114.4L 337.7692,114.4A 5,5,0,0,1,\n        342.7692,119.4L 342.7692,185A 5,5,0,0,1,\n        337.7692,190L 333.7692,190A 5,5,0,0,1,\n        328.7692,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="346.9231" y="125.2" width="14" height="64.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M346.9231,130.2A 5,5,0,0,1,351.9231,125.2L 355.9231,125.2A 5,5,0,0,1,\n        360.9231,130.2L 360.9231,185A 5,5,0,0,1,\n        355.9231,190L 351.9231,190A 5,5,0,0,1,\n        346.9231,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="365.0769" y="80.2" width="14" height="109.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M365.0769,85.2A 5,5,0,0,1,370.0769,80.2L 374.0769,80.2A 5,5,0,0,1,\n        379.0769,85.2L 379.0769,185A 5,5,0,0,1,\n        374.0769,190L 370.0769,190A 5,5,0,0,1,\n        365.0769,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="383.2308" y="67.6" width="14" height="122.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M383.2308,72.6A 5,5,0,0,1,388.2308,67.6L 392.2308,67.6A 5,5,0,0,1,\n        397.2308,72.6L 397.2308,185A 5,5,0,0,1,\n        392.2308,190L 388.2308,190A 5,5,0,0,1,\n        383.2308,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="401.3846" y="56.8" width="14" height="133.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M401.3846,61.8A 5,5,0,0,1,406.3846,56.8L 410.3846,56.8A 5,5,0,0,1,\n        415.3846,61.8L 415.3846,185A 5,5,0,0,1,\n        410.3846,190L 406.3846,190A 5,5,0,0,1,\n        401.3846,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="419.5385" y="64" width="14" height="126" fill="var(--color-zinc-300)" opacity="0.62" d={"M419.5385,69A 5,5,0,0,1,424.5385,64L 428.5385,64A 5,5,0,0,1,\n        433.5385,69L 433.5385,185A 5,5,0,0,1,\n        428.5385,190L 424.5385,190A 5,5,0,0,1,\n        419.5385,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="437.6923" y="26.2" width="14" height="163.8" fill="var(--color-red-500)" opacity="1" d={"M437.6923,31.2A 5,5,0,0,1,442.6923,26.2L 446.6923,26.2A 5,5,0,0,1,\n        451.6923,31.2L 451.6923,185A 5,5,0,0,1,\n        446.6923,190L 442.6923,190A 5,5,0,0,1,\n        437.6923,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="455.8462" y="132.4" width="14" height="57.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M455.8462,137.4A 5,5,0,0,1,460.8462,132.4L 464.8462,132.4A 5,5,0,0,1,\n        469.8462,137.4L 469.8462,185A 5,5,0,0,1,\n        464.8462,190L 460.8462,190A 5,5,0,0,1,\n        455.8462,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="474" y="42.4" width="14" height="147.6" fill="var(--color-amber-500)" opacity="1" d={"M474,47.4A 5,5,0,0,1,479,42.4L 483,42.4A 5,5,0,0,1,\n        488,47.4L 488,185A 5,5,0,0,1,\n        483,190L 479,190A 5,5,0,0,1,\n        474,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="492.1538" y="71.2" width="14" height="118.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M492.1538,76.2A 5,5,0,0,1,497.1538,71.2L 501.1538,71.2A 5,5,0,0,1,\n        506.1538,76.2L 506.1538,185A 5,5,0,0,1,\n        501.1538,190L 497.1538,190A 5,5,0,0,1,\n        492.1538,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="510.3077" y="96.4" width="14" height="93.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M510.3077,101.4A 5,5,0,0,1,515.3077,96.4L 519.3077,96.4A 5,5,0,0,1,\n        524.3077,101.4L 524.3077,185A 5,5,0,0,1,\n        519.3077,190L 515.3077,190A 5,5,0,0,1,\n        510.3077,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="528.4615" y="53.2" width="14" height="136.8" fill="var(--color-amber-500)" opacity="1" d={"M528.4615,58.2A 5,5,0,0,1,533.4615,53.2L 537.4615,53.2A 5,5,0,0,1,\n        542.4615,58.2L 542.4615,185A 5,5,0,0,1,\n        537.4615,190L 533.4615,190A 5,5,0,0,1,\n        528.4615,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="546.6154" y="103.6" width="14" height="86.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M546.6154,108.6A 5,5,0,0,1,551.6154,103.6L 555.6154,103.6A 5,5,0,0,1,\n        560.6154,108.6L 560.6154,185A 5,5,0,0,1,\n        555.6154,190L 551.6154,190A 5,5,0,0,1,\n        546.6154,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="564.7692" y="127" width="14" height="63" fill="var(--color-zinc-300)" opacity="0.62" d={"M564.7692,132A 5,5,0,0,1,569.7692,127L 573.7692,127A 5,5,0,0,1,\n        578.7692,132L 578.7692,185A 5,5,0,0,1,\n        573.7692,190L 569.7692,190A 5,5,0,0,1,\n        564.7692,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="582.9231" y="64" width="14" height="126" fill="var(--color-zinc-300)" opacity="0.62" d={"M582.9231,69A 5,5,0,0,1,587.9231,64L 591.9231,64A 5,5,0,0,1,\n        596.9231,69L 596.9231,185A 5,5,0,0,1,\n        591.9231,190L 587.9231,190A 5,5,0,0,1,\n        582.9231,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="601.0769" y="78.4" width="14" height="111.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M601.0769,83.4A 5,5,0,0,1,606.0769,78.4L 610.0769,78.4A 5,5,0,0,1,\n        615.0769,83.4L 615.0769,185A 5,5,0,0,1,\n        610.0769,190L 606.0769,190A 5,5,0,0,1,\n        601.0769,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="619.2308" y="87.4" width="14" height="102.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M619.2308,92.4A 5,5,0,0,1,624.2308,87.4L 628.2308,87.4A 5,5,0,0,1,\n        633.2308,92.4L 633.2308,185A 5,5,0,0,1,\n        628.2308,190L 624.2308,190A 5,5,0,0,1,\n        619.2308,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="637.3846" y="101.8" width="14" height="88.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M637.3846,106.8A 5,5,0,0,1,642.3846,101.8L 646.3846,101.8A 5,5,0,0,1,\n        651.3846,106.8L 651.3846,185A 5,5,0,0,1,\n        646.3846,190L 642.3846,190A 5,5,0,0,1,\n        637.3846,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="655.5385" y="123.4" width="14" height="66.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M655.5385,128.4A 5,5,0,0,1,660.5385,123.4L 664.5385,123.4A 5,5,0,0,1,\n        669.5385,128.4L 669.5385,185A 5,5,0,0,1,\n        664.5385,190L 660.5385,190A 5,5,0,0,1,\n        655.5385,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="673.6923" y="85.6" width="14" height="104.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M673.6923,90.6A 5,5,0,0,1,678.6923,85.6L 682.6923,85.6A 5,5,0,0,1,\n        687.6923,90.6L 687.6923,185A 5,5,0,0,1,\n        682.6923,190L 678.6923,190A 5,5,0,0,1,\n        673.6923,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="691.8462" y="62.2" width="14" height="127.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M691.8462,67.2A 5,5,0,0,1,696.8462,62.2L 700.8462,62.2A 5,5,0,0,1,\n        705.8462,67.2L 705.8462,185A 5,5,0,0,1,\n        700.8462,190L 696.8462,190A 5,5,0,0,1,\n        691.8462,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="710" y="177.4" width="14" height="12.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M710,182.4A 5,5,0,0,1,715,177.4L 719,177.4A 5,5,0,0,1,\n        724,182.4L 724,185A 5,5,0,0,1,\n        719,190L 715,190A 5,5,0,0,1,\n        710,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="728.1538" y="170.2" width="14" height="19.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M728.1538,175.2A 5,5,0,0,1,733.1538,170.2L 737.1538,170.2A 5,5,0,0,1,\n        742.1538,175.2L 742.1538,185A 5,5,0,0,1,\n        737.1538,190L 733.1538,190A 5,5,0,0,1,\n        728.1538,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="746.3077" y="65.8" width="14" height="124.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M746.3077,70.8A 5,5,0,0,1,751.3077,65.8L 755.3077,65.8A 5,5,0,0,1,\n        760.3077,70.8L 760.3077,185A 5,5,0,0,1,\n        755.3077,190L 751.3077,190A 5,5,0,0,1,\n        746.3077,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="764.4615" y="128.8" width="14" height="61.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M764.4615,133.8A 5,5,0,0,1,769.4615,128.8L 773.4615,128.8A 5,5,0,0,1,\n        778.4615,133.8L 778.4615,185A 5,5,0,0,1,\n        773.4615,190L 769.4615,190A 5,5,0,0,1,\n        764.4615,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="782.6154" y="139.6" width="14" height="50.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M782.6154,144.6A 5,5,0,0,1,787.6154,139.6L 791.6154,139.6A 5,5,0,0,1,\n        796.6154,144.6L 796.6154,185A 5,5,0,0,1,\n        791.6154,190L 787.6154,190A 5,5,0,0,1,\n        782.6154,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="800.7692" y="118" width="14" height="72" fill="var(--color-zinc-300)" opacity="0.62" d={"M800.7692,123A 5,5,0,0,1,805.7692,118L 809.7692,118A 5,5,0,0,1,\n        814.7692,123L 814.7692,185A 5,5,0,0,1,\n        809.7692,190L 805.7692,190A 5,5,0,0,1,\n        800.7692,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="818.9231" y="80.2" width="14" height="109.8" fill="var(--color-zinc-300)" opacity="0.62" d={"M818.9231,85.2A 5,5,0,0,1,823.9231,80.2L 827.9231,80.2A 5,5,0,0,1,\n        832.9231,85.2L 832.9231,185A 5,5,0,0,1,\n        827.9231,190L 823.9231,190A 5,5,0,0,1,\n        818.9231,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="837.0769" y="159.4" width="14" height="30.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M837.0769,164.4A 5,5,0,0,1,842.0769,159.4L 846.0769,159.4A 5,5,0,0,1,\n        851.0769,164.4L 851.0769,185A 5,5,0,0,1,\n        846.0769,190L 842.0769,190A 5,5,0,0,1,\n        837.0769,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="855.2308" y="91" width="14" height="99" fill="var(--color-zinc-300)" opacity="0.62" d={"M855.2308,96A 5,5,0,0,1,860.2308,91L 864.2308,91A 5,5,0,0,1,\n        869.2308,96L 869.2308,185A 5,5,0,0,1,\n        864.2308,190L 860.2308,190A 5,5,0,0,1,\n        855.2308,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="873.3846" y="74.8" width="14" height="115.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M873.3846,79.8A 5,5,0,0,1,878.3846,74.8L 882.3846,74.8A 5,5,0,0,1,\n        887.3846,79.8L 887.3846,185A 5,5,0,0,1,\n        882.3846,190L 878.3846,190A 5,5,0,0,1,\n        873.3846,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="891.5385" y="155.8" width="14" height="34.2" fill="var(--color-zinc-300)" opacity="0.62" d={"M891.5385,160.8A 5,5,0,0,1,896.5385,155.8L 900.5385,155.8A 5,5,0,0,1,\n        905.5385,160.8L 905.5385,185A 5,5,0,0,1,\n        900.5385,190L 896.5385,190A 5,5,0,0,1,\n        891.5385,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="909.6923" y="76.6" width="14" height="113.4" fill="var(--color-zinc-300)" opacity="0.62" d={"M909.6923,81.6A 5,5,0,0,1,914.6923,76.6L 918.6923,76.6A 5,5,0,0,1,\n        923.6923,81.6L 923.6923,185A 5,5,0,0,1,\n        918.6923,190L 914.6923,190A 5,5,0,0,1,\n        909.6923,185Z"}></path>
                                      </g>
                                    </g>
                                    <g className="recharts-bar-rectangle recharts-layer">
                                      <g className="recharts-inactive-bar recharts-layer">
                                        <path className="recharts-rectangle" name="Load" x="927.8462" y="69.4" width="14" height="120.6" fill="var(--color-zinc-300)" opacity="0.62" d={"M927.8462,74.4A 5,5,0,0,1,932.8462,69.4L 936.8462,69.4A 5,5,0,0,1,\n        941.8462,74.4L 941.8462,185A 5,5,0,0,1,\n        936.8462,190L 932.8462,190A 5,5,0,0,1,\n        927.8462,185Z"}></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_500" tabIndex="-1">
                              <g className="recharts-cartesian-axis recharts-layer recharts-xAxis xAxis">
                                <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                  <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                    <g className="recharts-cartesian-axis-tick recharts-layer"></g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                            <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                              <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" fontSize="10" x="9.076923076923077" y="206" textAnchor="middle" fill="#666">
                                    <tspan x="9.076923076923077" dy="0.71em">
                                      N00
                                    </tspan>
                                  </text>
                                </g>
                                <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                  <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="944" stroke="none" fontSize="10" x="481.0769230769231" y="206" textAnchor="middle" fill="#666">
                                    <tspan x="481.0769230769231" dy="0.71em">
                                      N26
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
                </CardContent>
              </Card>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-(--card-spacing) has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 relative ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm" size="default">
                <span className="absolute border-foreground/65 border-l border-t left-0 size-2 top-0" aria-hidden="true"></span>
                <span className="absolute border-b border-foreground/65 border-r bottom-0 right-0 size-2" aria-hidden="true"></span>
                <CardContent className="p-4 space-y-5">
                  <div className="space-y-0.5">
                    <h2 className="font-semibold leading-4 text-sm">
                      Active Lanes
                    </h2>
                    <p className="leading-4 text-muted-foreground text-xs">
                      Threat Queue
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0 space-y-1">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-red-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <span className="font-medium text-sm truncate">
                              [
                              00
                              ]
                              API Flood
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                            <span>
                              Edge WAF
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Mitigating
                            </span>
                          </div>
                        </div>
                        <div className="font-semibold tabular-nums text-right text-sm">
                          4,521
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                          <div className="bg-red-500 h-full rounded-full" style={{width: "92%"}}></div>
                        </div>
                        <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                          92
                          %
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0 space-y-1">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-amber-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <span className="font-medium text-sm truncate">
                              [
                              01
                              ]
                              Mail Spoof
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                            <span>
                              Mail Relay
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Reviewing
                            </span>
                          </div>
                        </div>
                        <div className="font-semibold tabular-nums text-right text-sm">
                          3,102
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                          <div className="bg-amber-500 h-full rounded-full" style={{width: "64%"}}></div>
                        </div>
                        <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                          64
                          %
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0 space-y-1">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-blue-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <span className="font-medium text-sm truncate">
                              [
                              02
                              ]
                              Cloud Probe
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                            <span>
                              Cloud API
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Queued
                            </span>
                          </div>
                        </div>
                        <div className="font-semibold tabular-nums text-right text-sm">
                          1,250
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                          <div className="bg-blue-500 h-full rounded-full" style={{width: "26%"}}></div>
                        </div>
                        <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                          26
                          %
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex gap-3 items-start justify-between">
                        <div className="min-w-0 space-y-1">
                          <div className="flex gap-2 items-center min-w-0">
                            <span className="bg-emerald-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                            <span className="font-medium text-sm truncate">
                              [
                              03
                              ]
                              Mesh Beacon
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-xs">
                            <span>
                              Int Node
                            </span>
                            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                            <span>
                              Watching
                            </span>
                          </div>
                        </div>
                        <div className="font-semibold tabular-nums text-right text-sm">
                          420
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="bg-muted flex-1 h-1.5 min-w-0 overflow-hidden rounded-full">
                          <div className="bg-emerald-500 h-full rounded-full" style={{width: "9%"}}></div>
                        </div>
                        <span className="leading-none tabular-nums text-[10px] text-muted-foreground text-right w-8">
                          9
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
            <section className="gap-4 grid grid-cols-1" aria-label="Team Timesheets">
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden pb-0 py-(--card-spacing) ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-1 items-center px-(--card-spacing) rounded-t-xl">
                  <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-balance text-base">
                    Timesheets
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-pretty text-xs">
                    Weekly team timesheets
                  </CardDescription>
                  <CardAction className="self-center">
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg sm:w-auto text-primary-foreground text-sm w-full" type="button" tabIndex="0">
                      New entry
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-3 items-center justify-between px-4 py-3">
                    <div className="flex flex-wrap gap-2 items-center">
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_R_kqpbt9fdb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          People
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_R_kqpbt9fdb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="everyone" />
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_R_14qpbt9fdb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          Tracked time
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_R_14qpbt9fdb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="any" />
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[180px]" type="button" tabIndex="0" id="base-ui-_R_1kqpbt9fdb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          Billable status
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_R_1kqpbt9fdb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="any" />
                    </div>
                    <div className="flex flex-wrap gap-2 items-center justify-end">
                      <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex="0" aria-label="Previous week">
                          <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </Button>
                        <Popover>
                        <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-between outline-none px-2.5 rounded-lg select-none shrink-0 tabular-nums text-sm transition-all w-[168px] whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_R_r8qpbt9fdb_" aria-haspopup="dialog" aria-expanded="false">
                          <span className="truncate">
                            Mar 23 - 29
                          </span>
                          <svg className="lucide lucide-calendar text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                        </PopoverTrigger>
                        </Popover>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex="0" aria-label="Next week">
                          <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative">
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_5qpbt9fdb_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "168px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                        <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                          <DataGridTableViewport>
                            <DataGridTable>
                              <colgroup>
                                <col style={{width: "240px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "112px"}} />
                                <col style={{width: "120px"}} />
                              </colgroup>
                              <thead>
                                <tr className="*:last:border-e-0 [&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 [--data-grid-header-cell-ps:--spacing(4)] align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "240px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                      People
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Mon, Mar 23
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Tue, Mar 24
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Wed, Mar 25
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Thu, Mar 26
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Fri, Mar 27
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Sat, Mar 28
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-center! text-foreground text-left" scope="col" style={{width: "112px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center text-center text-secondary-foreground/80 text-xs w-full">
                                      Sun, Mar 29
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [--data-grid-header-cell-pe:--spacing(4)] align-middle border-e font-medium h-8 px-2 relative rtl:text-right text-foreground text-right" scope="col" style={{width: "120px"}}>
                                    <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                      Total
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <DataGridTableBody>
                                <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="amara-ortiz">
                                  <td className="[--data-grid-body-cell-ps:--spacing(4)] align-middle border-e px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Amara Ortiz" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="flex flex-col leading-tight min-w-0">
                                        <div className="font-medium text-foreground text-sm truncate">
                                          Amara Ortiz
                                        </div>
                                        <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Client delivery lead">
                                          Client delivery lead
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h 30m logged as client. Migration kickoff with Atlas Health" id="base-ui-_R_392ismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 5h 30m logged as internal. Weekly staffing and margin review" id="base-ui-_R_39iismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          5h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-sky-500 block h-full rounded-full" style={{width: "68.75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Internal
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h logged as client. Pilot implementation sync" id="base-ui-_R_3a2ismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          7h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h logged as client. Partner escalation planning" id="base-ui-_R_3aiismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h 30m logged as client. Renewal prep" id="base-ui-_R_3b2ismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          4h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_R_3biismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_R_3c2ismlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="[--data-grid-body-cell-pe:--spacing(4)] align-middle border-e px-2 py-1.5 text-right">
                                    <div className="flex flex-col gap-1 items-end text-right">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        29h 30m
                                      </span>
                                      <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                        <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 7h6v6"></path>
                                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                        92
                                        %
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="theo-mercer">
                                  <td className="[--data-grid-body-cell-ps:--spacing(4)] align-middle border-e px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Theo Mercer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="flex flex-col leading-tight min-w-0">
                                        <div className="font-medium text-foreground text-sm truncate">
                                          Theo Mercer
                                        </div>
                                        <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Platform engineer">
                                          Platform engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 8h logged as client. Gateway failover validation" id="base-ui-_R_392ksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          8h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 8h logged as client. Webhook retries" id="base-ui-_R_39iksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          8h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 7h 30m logged as client. Tenant sync fixes" id="base-ui-_R_3a2ksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          7h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. SSO edge cases" id="base-ui-_R_3aiksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          8h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 8h logged as client. Metrics rollout" id="base-ui-_R_3b2ksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          8h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_R_3biksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_R_3c2ksmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="[--data-grid-body-cell-pe:--spacing(4)] align-middle border-e px-2 py-1.5 text-right">
                                    <div className="flex flex-col gap-1 items-end text-right">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        39h 30m
                                      </span>
                                      <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                        <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 7h6v6"></path>
                                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                        99
                                        %
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="lena-hoffman">
                                  <td className="[--data-grid-body-cell-ps:--spacing(4)] align-middle border-e px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Lena Hoffman" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="flex flex-col leading-tight min-w-0">
                                        <div className="font-medium text-foreground text-sm truncate">
                                          Lena Hoffman
                                        </div>
                                        <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Content systems editor">
                                          Content systems editor
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 5h logged as internal. Publishing QA" id="base-ui-_R_392msmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          5h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Internal
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 4h 30m logged as client. Implementation guide updates" id="base-ui-_R_39imsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          4h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "56.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 5h logged as internal. Docs audit" id="base-ui-_R_3a2msmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          5h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-sky-500 block h-full rounded-full" style={{width: "62.5%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Internal
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 3h 30m logged as client. Admin walkthrough copy" id="base-ui-_R_3aimsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          3h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "43.75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Email setup checklist" id="base-ui-_R_3b2msmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          4h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_R_3bimsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_R_3c2msmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="[--data-grid-body-cell-pe:--spacing(4)] align-middle border-e px-2 py-1.5 text-right">
                                    <div className="flex flex-col gap-1 items-end text-right">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        22h
                                      </span>
                                      <span className="gap-1 inline-flex items-center tabular-nums text-amber-600 text-xs">
                                        <svg className="lucide lucide-trending-down size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 17h6v-6"></path>
                                          <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                        </svg>
                                        73
                                        %
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="iris-calder">
                                  <td className="[--data-grid-body-cell-ps:--spacing(4)] align-middle border-e px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Iris Calder" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="flex flex-col leading-tight min-w-0">
                                        <div className="font-medium text-foreground text-sm truncate">
                                          Iris Calder
                                        </div>
                                        <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Design systems lead">
                                          Design systems lead
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 6h logged as client. Timesheet explorations" id="base-ui-_R_392osmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 6h 30m logged as client. Usage analytics QA" id="base-ui-_R_39iosmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h logged as internal. Pattern inventory" id="base-ui-_R_3a2osmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-sky-500 block h-full rounded-full" style={{width: "75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Internal
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 6h 30m logged as client. Workspace theming" id="base-ui-_R_3aiosmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 4h logged as client. Review fixes" id="base-ui-_R_3b2osmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          4h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "50%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_R_3biosmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_R_3c2osmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="[--data-grid-body-cell-pe:--spacing(4)] align-middle border-e px-2 py-1.5 text-right">
                                    <div className="flex flex-col gap-1 items-end text-right">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        29h
                                      </span>
                                      <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                        <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 7h6v6"></path>
                                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                        91
                                        %
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:last:border-e-0 [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="samir-vale">
                                  <td className="[--data-grid-body-cell-ps:--spacing(4)] align-middle border-e px-2 py-1.5">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Samir Vale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="flex flex-col leading-tight min-w-0">
                                        <div className="font-medium text-foreground text-sm truncate">
                                          Samir Vale
                                        </div>
                                        <div className="pt-0.5 text-muted-foreground text-xs truncate" title="Partner success manager">
                                          Partner success manager
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Monday, Mar 23: 7h logged as support. Go-live triage" id="base-ui-_R_392qsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          7h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Support
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Tuesday, Mar 24: 7h 30m logged as support. Partner QBR prep" id="base-ui-_R_39iqsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          7h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-amber-500 block h-full rounded-full" style={{width: "93.75%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Support
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Wednesday, Mar 25: 6h 30m logged as client. Migration playbook review" id="base-ui-_R_3a2qsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          6h 30m
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "81.25%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Thursday, Mar 26: 8h logged as client. Expansion scoping" id="base-ui-_R_3aiqsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          8h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-emerald-500 block h-full rounded-full" style={{width: "100%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Client
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Friday, Mar 27: 7h logged as support. Weekly care plan" id="base-ui-_R_3b2qsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="font-medium leading-none tabular-nums text-foreground text-sm">
                                          7h
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-amber-500 block h-full rounded-full" style={{width: "87.5%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Support
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Saturday, Mar 28: No weekend hours were logged for this day." id="base-ui-_R_3biqsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="align-middle border-e px-2 py-1.5">
                                    <Tooltip>
                                    <TooltipTrigger className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:bg-muted/60 inline-flex justify-center px-1.5 py-1.5 rounded-md text-left transition-colors w-full" type="button" aria-label="Sunday, Mar 29: No weekend hours were logged for this day." id="base-ui-_R_3c2qsmlqpbt9fdb_" baseUiTooltipTrigger="">
                                      <div className="flex flex-col gap-1.5 items-center min-w-[76px] text-center w-full">
                                        <span className="leading-none opacity-80 tabular-nums text-muted-foreground text-sm">
                                          -
                                        </span>
                                        <span className="bg-border block h-1 max-w-[56px] overflow-hidden rounded-full w-full">
                                          <span className="bg-transparent block h-full rounded-full" style={{width: "0%"}}></span>
                                        </span>
                                        <span className="leading-none text-[11px] text-muted-foreground">
                                          Off
                                        </span>
                                      </div>
                                    </TooltipTrigger>
                                    </Tooltip>
                                  </td>
                                  <td className="[--data-grid-body-cell-pe:--spacing(4)] align-middle border-e px-2 py-1.5 text-right">
                                    <div className="flex flex-col gap-1 items-end text-right">
                                      <span className="font-semibold tabular-nums text-foreground text-sm">
                                        36h
                                      </span>
                                      <span className="gap-1 inline-flex items-center tabular-nums text-emerald-600 text-xs">
                                        <svg className="lucide lucide-trending-up size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M16 7h6v6"></path>
                                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                        </svg>
                                        103
                                        %
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </DataGridTableBody>
                            </DataGridTable>
                          </DataGridTableViewport>
                        </div>
                      </div>
                      <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_R_5qpbt9fdb_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "830.965034965035px"}}>
                        <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </DataGridScrollArea>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="px-4 py-3">
                    <DataGridPagination>
                      <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                        <div className="text-muted-foreground text-sm">
                          Rows per page
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_R_16qpbt9fdb_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                          <SelectValue className="flex flex-1 text-left">
                            5
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_R_16qpbt9fdb_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="5" />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          1 - 5 of 9
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
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
