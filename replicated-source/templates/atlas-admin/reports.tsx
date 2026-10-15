import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarGroup,
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
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_39ikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3eikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/reports" data-active="">
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
                  <BreadcrumbItem className="gap-1 hidden md:block">
                    <BreadcrumbLink className="hover:text-foreground transition-colors" href="/">
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 hidden md:block" role="presentation" aria-hidden="true">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      Reports
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0" id="page-header-actions"></div>
          </div>
        </header>
        <div className="auto-rows-min flex-1 gap-4 grid grid-cols-1 max-w-(--container-app) min-w-0 mx-auto pb-6 pt-0 px-6 w-full">
          <div className="flex flex-col gap-4 min-w-0 w-full">
            <div className="flex flex-col gap-4 min-w-0 w-full">
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex gap-2 items-center justify-between">
                      <IconTile className="[--icon-tile-radius:var(--radius-md)] after:rounded-[calc(var(--icon-tile-radius)-var(--icon-tile-inset))] rounded-(--icon-tile-radius)" variant="soft" size="default">
                        <svg className="lucide lucide-circle-dollar-sign size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                          <path d="M12 18V6"></path>
                        </svg>
                      </IconTile>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                        8.2%
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Total revenue
                      </div>
                      <div className="font-bold tabular-nums text-2xl text-foreground">
                        $1.24M
                      </div>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-10 justify-center text-xs w-full" data-chart="chart-_r_a5_">
                      <style>{`
 [data-chart=chart-_r_a5_] {
  --color-v: var(--color-primary);
}


.dark [data-chart=chart-_r_a5_] {
  --color-v: var(--color-primary);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="192" height="40" style={{position: "relative", cursor: "default", width: "192px", height: "40px"}}>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="192" height="40" viewBox="0 0 192 40" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts85-clip">
                                  <rect x="0" y="2" height="36" width="192"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="spark-revenue" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--color-success)" stopOpacity="0.25"></stop>
                                  <stop offset="100%" stopColor="var(--color-success)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#spark-revenue)" fillOpacity="0.6" height="36" stroke="none" width="192" id="recharts-area-_r_ad_" d="M0,23.6C8,22.25,16,20.9,24,20.9C32,20.9,40,22.25,48,22.25C56,22.25,64,18.2,72,18.2C80,18.2,88,19.55,96,19.55C104,19.55,112,14.6,120,14.6C128,14.6,136,15.95,144,15.95C152,15.95,160,12.8,168,11.9C176,11,184,10.775,192,10.55L192,38C184,38,176,38,168,38C160,38,152,38,144,38C136,38,128,38,120,38C112,38,104,38,96,38C88,38,80,38,72,38C64,38,56,38,48,38C40,38,32,38,24,38C16,38,8,38,0,38Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="36" stroke="var(--color-success)" width="192" d="M0,23.6C8,22.25,16,20.9,24,20.9C32,20.9,40,22.25,48,22.25C56,22.25,64,18.2,72,18.2C80,18.2,88,19.55,96,19.55C104,19.55,112,14.6,120,14.6C128,14.6,136,15.95,144,15.95C152,15.95,160,12.8,168,11.9C176,11,184,10.775,192,10.55"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex gap-2 items-center justify-between">
                      <IconTile className="[--icon-tile-radius:var(--radius-md)] after:rounded-[calc(var(--icon-tile-radius)-var(--icon-tile-inset))] dark:text-teal-400 rounded-(--icon-tile-radius) text-teal-600" variant="soft" size="default">
                        <svg className="lucide lucide-handshake size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                          <path d="m21 3 1 11h-2"></path>
                          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                          <path d="M3 4h8"></path>
                        </svg>
                      </IconTile>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                        5.4%
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Deals won
                      </div>
                      <div className="font-bold tabular-nums text-2xl text-foreground">
                        142
                      </div>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-10 justify-center text-xs w-full" data-chart="chart-_r_a6_">
                      <style>{`
 [data-chart=chart-_r_a6_] {
  --color-v: var(--color-primary);
}


.dark [data-chart=chart-_r_a6_] {
  --color-v: var(--color-primary);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="192" height="40" style={{position: "relative", cursor: "default", width: "192px", height: "40px"}}>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="192" height="40" viewBox="0 0 192 40" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts86-clip">
                                  <rect x="0" y="2" height="36" width="192"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="spark-won" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--color-success)" stopOpacity="0.25"></stop>
                                  <stop offset="100%" stopColor="var(--color-success)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#spark-won)" fillOpacity="0.6" height="36" stroke="none" width="192" id="recharts-area-_r_ae_" d="M0,20C8,18,16,16,24,16C32,16,40,18,48,18C56,18,64,12,72,12C80,12,88,14,96,14C104,14,112,8,120,8C128,8,136,10,144,10C152,10,160,6.167,168,5C176,3.833,184,3.417,192,3L192,38C184,38,176,38,168,38C160,38,152,38,144,38C136,38,128,38,120,38C112,38,104,38,96,38C88,38,80,38,72,38C64,38,56,38,48,38C40,38,32,38,24,38C16,38,8,38,0,38Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="36" stroke="var(--color-success)" width="192" d="M0,20C8,18,16,16,24,16C32,16,40,18,48,18C56,18,64,12,72,12C80,12,88,14,96,14C104,14,112,8,120,8C128,8,136,10,144,10C152,10,160,6.167,168,5C176,3.833,184,3.417,192,3"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex gap-2 items-center justify-between">
                      <IconTile className="[--icon-tile-radius:var(--radius-md)] after:rounded-[calc(var(--icon-tile-radius)-var(--icon-tile-inset))] dark:text-violet-400 rounded-(--icon-tile-radius) text-violet-600" variant="soft" size="default">
                        <svg className="lucide lucide-target size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="12" r="6"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                      </IconTile>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-up-right size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                        12.3%
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Pipeline value
                      </div>
                      <div className="font-bold tabular-nums text-2xl text-foreground">
                        $4.8M
                      </div>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-10 justify-center text-xs w-full" data-chart="chart-_r_a7_">
                      <style>{`
 [data-chart=chart-_r_a7_] {
  --color-v: var(--color-primary);
}


.dark [data-chart=chart-_r_a7_] {
  --color-v: var(--color-primary);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="192" height="40" style={{position: "relative", cursor: "default", width: "192px", height: "40px"}}>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="192" height="40" viewBox="0 0 192 40" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts87-clip">
                                  <rect x="0" y="2" height="36" width="192"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="spark-pipeline" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--color-success)" stopOpacity="0.25"></stop>
                                  <stop offset="100%" stopColor="var(--color-success)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#spark-pipeline)" fillOpacity="0.6" height="36" stroke="none" width="192" id="recharts-area-_r_af_" d="M0,20C8,19.85,16,19.7,24,19.1C32,18.5,40,16.4,48,16.4C56,16.4,64,17.3,72,17.3C80,17.3,88,14.15,96,13.25C104,12.35,112,12.425,120,11.9C128,11.375,136,10.85,144,10.1C152,9.35,160,8.3,168,7.4C176,6.5,184,5.6,192,4.7L192,38C184,38,176,38,168,38C160,38,152,38,144,38C136,38,128,38,120,38C112,38,104,38,96,38C88,38,80,38,72,38C64,38,56,38,48,38C40,38,32,38,24,38C16,38,8,38,0,38Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="36" stroke="var(--color-success)" width="192" d="M0,20C8,19.85,16,19.7,24,19.1C32,18.5,40,16.4,48,16.4C56,16.4,64,17.3,72,17.3C80,17.3,88,14.15,96,13.25C104,12.35,112,12.425,120,11.9C128,11.375,136,10.85,144,10.1C152,9.35,160,8.3,168,7.4C176,6.5,184,5.6,192,4.7"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                  <CardContent className="flex flex-col gap-3 p-5">
                    <div className="flex gap-2 items-center justify-between">
                      <IconTile className="[--icon-tile-radius:var(--radius-md)] after:rounded-[calc(var(--icon-tile-radius)-var(--icon-tile-inset))] dark:text-amber-400 rounded-(--icon-tile-radius) text-amber-600" variant="soft" size="default">
                        <svg className="lucide lucide-trophy size-4.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                          <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                          <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                          <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                        </svg>
                      </IconTile>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-arrow-down-right size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m7 7 10 10"></path>
                          <path d="M17 7v10H7"></path>
                        </svg>
                        1.2%
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Win rate
                      </div>
                      <div className="font-bold tabular-nums text-2xl text-foreground">
                        34%
                      </div>
                    </div>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-10 justify-center text-xs w-full" data-chart="chart-_r_a8_">
                      <style>{`
 [data-chart=chart-_r_a8_] {
  --color-v: var(--color-primary);
}


.dark [data-chart=chart-_r_a8_] {
  --color-v: var(--color-primary);
}
`}</style>
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                        <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="192" height="40" style={{position: "relative", cursor: "default", width: "192px", height: "40px"}}>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="192" height="40" viewBox="0 0 192 40" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts88-clip">
                                  <rect x="0" y="2" height="36" width="192"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="spark-winrate" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--color-destructive)" stopOpacity="0.25"></stop>
                                  <stop offset="100%" stopColor="var(--color-destructive)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#spark-winrate)" fillOpacity="0.6" height="36" stroke="none" width="192" id="recharts-area-_r_ag_" d="M0,3.8C8,4.25,16,4.7,24,4.7C32,4.7,40,2.9,48,2.9C56,2.9,64,5,72,5.6C80,6.2,88,6.2,96,6.5C104,6.8,112,7.4,120,7.4C128,7.4,136,5.6,144,5.6C152,5.6,160,6.2,168,6.5C176,6.8,184,7.1,192,7.4L192,38C184,38,176,38,168,38C160,38,152,38,144,38C136,38,128,38,120,38C112,38,104,38,96,38C88,38,80,38,72,38C64,38,56,38,48,38C40,38,32,38,24,38C16,38,8,38,0,38Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="36" stroke="var(--color-destructive)" width="192" d="M0,3.8C8,4.25,16,4.7,24,4.7C32,4.7,40,2.9,48,2.9C56,2.9,64,5,72,5.6C80,6.2,88,6.2,96,6.5C104,6.8,112,7.4,120,7.4C128,7.4,136,5.6,144,5.6C152,5.6,160,6.2,168,6.5C176,6.8,184,7.1,192,7.4"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-2 min-w-0">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                    <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-1 px-5 py-4 rounded-t-xl">
                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                        Revenue trend
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        <span className="font-semibold tabular-nums text-base text-foreground">
                          $1.82M
                        </span>
                        across the period
                      </CardDescription>
                      <CardAction className="self-center">
                        <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                          <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                            <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_a9_">
                              3M
                            </TabsTrigger>
                            <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_aa_" compositeItemActive="">
                              6M
                            </TabsTrigger>
                            <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_ab_">
                              12M
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </CardAction>
                    </CardHeader>
                    <CardContent className="p-5">
                      <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-56 justify-center text-xs w-full" data-chart="chart-_r_ac_">
                        <style>{`
 [data-chart=chart-_r_ac_] {
  --color-revenue: var(--color-violet-500);
}


.dark [data-chart=chart-_r_ac_] {
  --color-revenue: var(--color-violet-500);
}
`}</style>
                        <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                          <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                            <div className="recharts-wrapper" width="605" height="224" style={{position: "relative", cursor: "default", width: "605px", height: "224px"}}>
                              <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                              <svg className="recharts-surface" role="application" tabIndex="0" width="605" height="224" viewBox="0 0 605 224" style={{width: "100%", height: "100%", display: "block"}}>
                                <title></title>
                                <desc></desc>
                                <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                  <g className="recharts-cartesian-grid">
                                    <g className="recharts-cartesian-grid-horizontal">
                                      <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="0" y="10" width="595" height="184" x1="0" y1="194" x2="595" y2="194"></line>
                                      <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="0" y="10" width="595" height="184" x1="0" y1="148" x2="595" y2="148"></line>
                                      <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="0" y="10" width="595" height="184" x1="0" y1="102" x2="595" y2="102"></line>
                                      <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="0" y="10" width="595" height="184" x1="0" y1="56" x2="595" y2="56"></line>
                                      <line strokeDasharray="4 8" stroke="var(--border)" fill="none" x="0" y="10" width="595" height="184" x1="0" y1="10" x2="595" y2="10"></line>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                <defs>
                                  <clippath id="recharts89-clip">
                                    <rect x="0" y="10" height="184" width="595"></rect>
                                  </clippath>
                                </defs>
                                <defs>
                                  <lineargradient id="revenue-fill" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="var(--color-violet-500)" stopOpacity="0.28"></stop>
                                    <stop offset="100%" stopColor="var(--color-violet-500)" stopOpacity="0"></stop>
                                  </lineargradient>
                                </defs>
                                <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                  <g className="recharts-area recharts-layer">
                                    <g className="recharts-layer">
                                      <g className="recharts-layer" clipPath="url(#animationClipPath-recharts-area-_r_ah_)">
                                        <g className="recharts-layer">
                                          <path className="recharts-area-area recharts-curve" strokeWidth="2" fill="url(#revenue-fill)" fillOpacity="0.6" height="184" stroke="none" width="595" id="recharts-area-_r_ah_" d="M0,80.84C39.667,75.09,79.333,69.34,119,69.34C158.667,69.34,198.333,75.32,238,75.32C277.667,75.32,317.333,54.16,357,47.72C396.667,41.28,436.333,42.123,476,36.68C515.667,31.237,555.333,23.148,595,15.06L595,194C555.333,194,515.667,194,476,194C436.333,194,396.667,194,357,194C317.333,194,277.667,194,238,194C198.333,194,158.667,194,119,194C79.333,194,39.667,194,0,194Z"></path>
                                          <path className="recharts-area-curve recharts-curve" strokeWidth="2" fill="none" fillOpacity="0.6" height="184" stroke="var(--color-violet-500)" width="595" d="M0,80.84C39.667,75.09,79.333,69.34,119,69.34C158.667,69.34,198.333,75.32,238,75.32C277.667,75.32,317.333,54.16,357,47.72C396.667,41.28,436.333,42.123,476,36.68C515.667,31.237,555.333,23.148,595,15.06"></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                                <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                <g className="recharts-zIndex-layer_500" tabIndex="-1">
                                  <g className="recharts-cartesian-axis recharts-layer recharts-xAxis text-xs xAxis">
                                    <g className="recharts-cartesian-axis-ticks recharts-xAxis-ticks">
                                      <g className="recharts-cartesian-axis-tick-lines recharts-xAxis-tick-lines">
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
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="595" stroke="none" x="119" y="210" textAnchor="middle" fill="#666">
                                        <tspan x="119" dy="0.71em">
                                          Feb
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="595" stroke="none" x="238" y="210" textAnchor="middle" fill="#666">
                                        <tspan x="238" dy="0.71em">
                                          Mar
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="595" stroke="none" x="357" y="210" textAnchor="middle" fill="#666">
                                        <tspan x="357" dy="0.71em">
                                          Apr
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="595" stroke="none" x="476" y="210" textAnchor="middle" fill="#666">
                                        <tspan x="476" dy="0.71em">
                                          May
                                        </tspan>
                                      </text>
                                    </g>
                                    <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                      <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="595" stroke="none" x="594.4765625" y="210" textAnchor="middle" fill="#666">
                                        <tspan x="594.4765625" dy="0.71em">
                                          Jun
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
                </div>
                <div className="min-w-0">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                    <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-1 px-5 py-4 rounded-t-xl">
                      <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                        Revenue by channel
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm">
                        This quarter, in thousands
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-5 justify-between p-5">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center justify-between text-sm">
                          <span className="font-medium text-foreground">
                            Outbound
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            $486k
                            <span className="ml-1.5 text-muted-foreground/70 text-xs">
                              39%
                            </span>
                          </span>
                        </div>
                        <div className="bg-muted/70 h-1.5 overflow-hidden rounded-full w-full">
                          <div className="bg-violet-500 h-full rounded-full" style={{width: "39%"}}></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center justify-between text-sm">
                          <span className="font-medium text-foreground">
                            Inbound
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            $372k
                            <span className="ml-1.5 text-muted-foreground/70 text-xs">
                              30%
                            </span>
                          </span>
                        </div>
                        <div className="bg-muted/70 h-1.5 overflow-hidden rounded-full w-full">
                          <div className="bg-teal-500 h-full rounded-full" style={{width: "30%"}}></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center justify-between text-sm">
                          <span className="font-medium text-foreground">
                            Partner
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            $214k
                            <span className="ml-1.5 text-muted-foreground/70 text-xs">
                              17%
                            </span>
                          </span>
                        </div>
                        <div className="bg-muted/70 h-1.5 overflow-hidden rounded-full w-full">
                          <div className="bg-amber-500 h-full rounded-full" style={{width: "17%"}}></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center justify-between text-sm">
                          <span className="font-medium text-foreground">
                            Referral
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            $168k
                            <span className="ml-1.5 text-muted-foreground/70 text-xs">
                              14%
                            </span>
                          </span>
                        </div>
                        <div className="bg-muted/70 h-1.5 overflow-hidden rounded-full w-full">
                          <div className="bg-sky-500 h-full rounded-full" style={{width: "14%"}}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <section className="@container w-full" aria-label="Reporting health">
                <div className="gap-4 grid items-stretch lg:grid-cols-3">
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl @container [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm w-full" size="default">
                    <CardHeader className="[.border-b]:pb-(--card-spacing) gap-3 pb-0 pt-4 px-5 rounded-t-xl">
                      <CardTitle className="flex font-heading font-medium gap-1.5 group-data-[size=sm]/card:text-sm items-center min-w-0 text-sm">
                        <span>
                          Report Coverage
                        </span>
                        <svg className="lucide lucide-info shrink-0 size-3.5 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-4 pb-4 pt-4 px-5">
                      <div className="flex flex-wrap gap-x-2 items-baseline">
                        <span className="font-medium text-[26px]">
                          60%
                        </span>
                        <span className="font-medium text-success text-xs">
                          6/10
                        </span>
                        <span className="text-muted-foreground/70 text-xs">
                          of the catalog is live
                        </span>
                      </div>
                      <div className="gap-1 grid h-7 w-full" aria-label="Live report coverage is 60%" role="img" style={{gridTemplateColumns: "repeat(56, minmax(0px, 1fr))"}}>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-success min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                        <span className="bg-muted min-w-0 rounded-md" aria-hidden="true"></span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-auto">
                        <p>
                          <span className="text-muted-foreground/70 text-xs">
                            Delivery:
                          </span>
                          <span className="font-medium text-sm">
                            26 subscribers
                          </span>
                        </p>
                        <div className="flex gap-2 items-center">
                          <AvatarGroup>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                              <AvatarImage className="rounded-full" alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                              <AvatarImage className="rounded-full" alt="Leo Grant" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                              <AvatarImage className="rounded-full" alt="Sana Qureshi" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                              <AvatarImage className="rounded-full" alt="Kenji Tan" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="text-muted-foreground text-xs whitespace-nowrap">
                            6 Owners
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl @container [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm w-full" size="default">
                    <CardContent className="flex flex-col h-full pb-3.5! pe-5! ps-3.5! pt-4! px-(--card-spacing)">
                      <div className="flex flex-col gap-6 h-full">
                        <div className="flex flex-wrap gap-4 items-center justify-between">
                          <div className="flex gap-1.5 items-center min-w-0 ps-1.5">
                            <h2 className="font-medium text-sm">
                              Dataset Mix
                            </h2>
                            <svg className="lucide lucide-info shrink-0 size-3.5 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </div>
                          <span className="text-muted-foreground/70 text-xs">
                            Last refresh
                          </span>
                        </div>
                        <div className="@min-[356px]:grid-cols-[8.25rem_minmax(0,1fr)] @min-[356px]:items-center content-center flex-1 gap-5 grid">
                          <div className="relative shrink-0 size-[8.25rem]">
                            <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square flex justify-center size-[8.25rem] text-xs" data-chart="chart-_r_ai_" aria-label="Rows scanned by dataset: 854k total">
                              <style>{`
 [data-chart=chart-_r_ai_] {
  --color-deals: oklch(0.6 0.145 181.2);
  --color-contacts: oklch(0.76 0.161 80.1);
  --color-billing: oklch(0.66 0.19 42.8);
}


.dark [data-chart=chart-_r_ai_] {
  --color-deals: oklch(0.6 0.145 181.2);
  --color-contacts: oklch(0.76 0.161 80.1);
  --color-billing: oklch(0.66 0.19 42.8);
}
`}</style>
                              <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0px"}}>
                                <div style={{width: "0px", height: "0px", overflow: "visible"}}>
                                  <div className="recharts-wrapper" width="132" height="132" style={{position: "relative", cursor: "default", width: "132px", height: "132px"}}>
                                    <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="132" height="132" viewBox="0 0 132 132" style={{width: "100%", height: "100%", display: "block"}}>
                                      <title></title>
                                      <desc></desc>
                                      <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                      <defs>
                                        <clippath id="recharts114-clip">
                                          <rect x="2" y="2" height="128" width="128"></rect>
                                        </clippath>
                                      </defs>
                                      <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                        <g className="recharts-layer recharts-pie" tabIndex="0">
                                          <g className="recharts-layer">
                                            <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                              <g className="recharts-layer recharts-shape">
                                                <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-deals)" name="Deals" color="oklch(0.6 0.145 181.2)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_dr_" d={"M 28.1246,20.8618\n    A3,3,0,0,1,28.6137,16.5403\n    A62,62,0,0,1,127.8177,61.2492\n    A3,3,0,0,1,124.904,64.4781\n  L115.8933,64.7109\n      A3,3,0,0,1,112.8268,61.9692\n      A47,47,0,0,0,38.0037,28.2481\n      A3,3,0,0,1,33.9185,27.7668Z"}></path>
                                              </g>
                                            </g>
                                            <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                              <g className="recharts-layer recharts-shape">
                                                <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-contacts)" name="Contacts & activity" color="oklch(0.76 0.161 80.1)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_dr_" d={"M 124.9216,65.5064\n    A3,3,0,0,1,127.944,68.6337\n    A62,62,0,1,1,7.7744,44.6978\n    A3,3,0,0,1,11.7645,42.9672\n  L20.0611,46.4906\n      A3,3,0,0,1,21.7151,50.2568\n      A47,47,0,1,0,112.9373,68.4269\n      A3,3,0,0,1,115.9082,65.5819Z"}></path>
                                              </g>
                                            </g>
                                            <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                              <g className="recharts-layer recharts-shape">
                                                <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-billing)" name="Billing" color="oklch(0.66 0.19 42.8)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_dr_" d={"M 12.1747,42.0242\n    A3,3,0,0,1,10.7206,37.9253\n    A62,62,0,0,1,22.9977,21.3368\n    A3,3,0,0,1,27.3426,21.5297\n  L33.2561,28.3325\n      A3,3,0,0,1,33.0925,32.4426\n      A47,47,0,0,0,24.2915,44.3343\n      A3,3,0,0,1,20.4086,45.6918Z"}></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                      <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_400" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_500" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_600" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                                      <g className="recharts-zIndex-layer_2000" tabIndex="-1"></g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex inset-0 items-center justify-center pointer-reports-none" aria-hidden="true">
                              <div className="bg-background/90 border border-border/70 border-dashed flex flex-col items-center justify-center rounded-full size-[5.25rem]">
                                <span className="text-muted-foreground/70 text-xs">
                                  Rows
                                </span>
                                <span className="font-semibold mt-0.5 text-sm">
                                  854k
                                </span>
                              </div>
                            </div>
                          </div>
                          <ul className="flex flex-1 flex-col min-w-0">
                            <li>
                              <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.6 0.145 181.2)"}}></span>
                                  <span className="font-medium text-sm">
                                    Deals
                                  </span>
                                </div>
                                <span className="font-medium text-sm">
                                  307k
                                </span>
                                <span className="text-muted-foreground/70 text-right text-xs w-8">
                                  36%
                                </span>
                              </div>
                              <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </li>
                            <li>
                              <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.76 0.161 80.1)"}}></span>
                                  <span className="font-medium text-sm">
                                    Contacts & activity
                                  </span>
                                </div>
                                <span className="font-medium text-sm">
                                  487k
                                </span>
                                <span className="text-muted-foreground/70 text-right text-xs w-8">
                                  57%
                                </span>
                              </div>
                              <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                            </li>
                            <li>
                              <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                                <div className="flex gap-2.5 items-center min-w-0">
                                  <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.66 0.19 42.8)"}}></span>
                                  <span className="font-medium text-sm">
                                    Billing
                                  </span>
                                </div>
                                <span className="font-medium text-sm">
                                  60k
                                </span>
                                <span className="text-muted-foreground/70 text-right text-xs w-8">
                                  7%
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl @container [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 h-full has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl shadow-xs text-card-foreground text-sm w-full" size="default">
                    <CardContent className="flex flex-col h-full px-(--card-spacing) px-5! py-4!">
                      <div className="flex gap-4 items-start justify-between">
                        <div className="flex gap-2.5 items-center min-w-0">
                          <div className="[&_svg]:size-5 [&_svg]:text-white bg-neutral-950 border-2 border-white dark:border-border dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.35)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] shrink-0 size-10">
                            <span className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0.6px,transparent_0.65px)] [background-size:3px_3px] absolute dark:opacity-[0.38] inset-0 opacity-[0.42] pointer-reports-none z-0" aria-hidden="true"></span>
                            <span className="[background-image:radial-gradient(48.05%_48.05%_at_50%_5.95%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] absolute inset-0 pointer-reports-none z-[1]" aria-hidden="true"></span>
                            <span className="relative z-10">
                              <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                              </svg>
                            </span>
                          </div>
                          <div className="flex flex-col gap-1 min-w-0">
                            <div className="flex gap-1.5 items-baseline">
                              <span className="font-medium leading-none text-lg">
                                55
                              </span>
                              <span className="font-medium leading-none text-lg text-muted-foreground/45">
                                min
                              </span>
                            </div>
                            <div className="flex gap-1 items-center leading-none">
                              <svg className="lucide lucide-trending-down shrink-0 size-3.5 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 17h6v-6"></path>
                                <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                              </svg>
                              <span className="font-medium text-success text-xs">
                                60%
                              </span>
                              <span className="text-muted-foreground/70 text-xs">
                                under 15m
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          slowest
                        </span>
                      </div>
                      <div className="mt-auto space-y-3">
                        <h3 className="font-medium text-sm">
                          Refresh Lag Zone
                        </h3>
                        <div aria-label="Refresh lag zone: 55 minutes" role="img">
                          <div className="gap-1 grid grid-cols-4">
                            <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                            <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                            <div className="bg-warning h-1.5 rounded-full"></div>
                            <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                          </div>
                          <div className="gap-1 grid grid-cols-4 leading-none mt-2 tabular-nums text-[10px] text-muted-foreground">
                            <span>
                              0m
                            </span>
                            <span>
                              15m
                            </span>
                            <span>
                              30m
                            </span>
                            <span>
                              60m
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
              <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default">
                <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-1 px-5 py-4 rounded-t-xl">
                  <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                    Report Catalog
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    <span className="flex-wrap gap-1.5 inline-flex items-center">
                      <span>
                        10 visible
                      </span>
                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        0 unowned
                      </span>
                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        4 need attention
                      </span>
                    </span>
                  </CardDescription>
                  <CardAction className="self-center">
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg className="lucide lucide-file-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M12 18v-6"></path>
                        <path d="m9 15 3 3 3-3"></path>
                      </svg>
                      Export CSV
                    </Button>
                  </CardAction>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-3 items-center justify-between px-5 py-3">
                    <div className="flex flex-wrap gap-2 items-center">
                      <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 min-w-56 rounded-lg sm:w-64 transition-colors" role="group">
                        <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                          <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx="11" cy="11" r="8"></circle>
                          </svg>
                        </InputGroupAddon>
                        <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_r_aj_" placeholder="Search reports..." aria-label="Search reports" value="" />
                      </InputGroup>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[172px]" type="button" tabIndex="0" id="base-ui-_r_ak_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          All datasets
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_ak_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Popover>
                      <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filter by status" baseUiClickTrigger="" id="base-ui-_r_ao_" aria-haspopup="dialog" aria-expanded="false">
                        <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                        </svg>
                        Status
                      </PopoverTrigger>
                      </Popover>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="bg-muted/25 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between px-5 py-3">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-medium text-sm">
                        2 reports selected
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Assign ownership or move selected reports in one step.
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[176px]" type="button" tabIndex="0" id="base-ui-_r_ap_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                        <SelectValue className="flex flex-1 text-left">
                          Mira Stone
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_ap_-hidden-input" tabIndex="-1" aria-hidden="true" value="mira-stone" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                        <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="19" x2="19" y1="8" y2="14"></line>
                          <line x1="22" x2="16" y1="11" y2="11"></line>
                        </svg>
                        Assign owner
                      </Button>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-[188px]" type="button" tabIndex="0" id="base-ui-_r_as_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                        <SelectValue className="flex flex-1 text-left">
                          Live
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_as_-hidden-input" tabIndex="-1" aria-hidden="true" value="Live" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-primary/80 in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-primary-foreground" type="button" tabIndex="0">
                        <svg className="lucide lucide-check-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" aria-hidden="true">
                          <path d="M18 6 7 17l-5-5"></path>
                          <path d="m22 10-7.5 7.5L13 16"></path>
                        </svg>
                        Update status
                      </Button>
                      <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative">
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_av_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                        <div role="presentation" style={{minWidth: "fit-content"}}>
                          <DataGridTableViewport>
                            <DataGridTable>
                              <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                                <col />
                              </colgroup>
                              <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "36px"}}>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" indeterminate="" role="checkbox" tabIndex="0" id="base-ui-_r_b0_" aria-checked="mixed" aria-label="Select all">
                                      <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-indeterminate="">
                                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                      </span>
                                    </Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "280px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_b6_" aria-expanded="false">
                                        Report
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "190px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_bb_" aria-expanded="false">
                                        Owner
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "140px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_bg_" aria-expanded="false">
                                        Source
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "120px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_bl_" aria-expanded="false">
                                        Risk
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "150px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_bq_" aria-expanded="false">
                                        Volume
                                        <svg className="lucide lucide-arrow-down size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M12 5v14"></path>
                                          <path d="m19 12-7 7-7-7"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "170px"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-lg select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_bv_" aria-expanded="false">
                                        Status
                                        <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="m7 15 5 5 5-5"></path>
                                          <path d="m7 9 5-5 5 5"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=start]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "50px"}}></th>
                                </tr>
                              </thead>
                              <DataGridTableBody>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REP-1847">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c1_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        activity_coverage_daily
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1847
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 09:10
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Kenji Tan
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Finance reporting analyst">
                                          Finance reporting analyst
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-activity size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                      </svg>
                                      Activities
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-foreground">
                                        203.7k rows
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        6m refresh lag
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5"></span>
                                      Live
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_c7_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-state="selected" data-row-id="REP-1842">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary block bottom-0 inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_ca_" aria-checked="true" aria-label="Select row">
                                      <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                      </span>
                                    </Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        pipeline_velocity_weekly
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1842
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 09:20
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Mira Stone
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Revenue operations lead">
                                          Revenue operations lead
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-handshake size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                                        <path d="m21 3 1 11h-2"></path>
                                        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                                        <path d="M3 4h8"></path>
                                      </svg>
                                      Deals
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-foreground">
                                        184.2k rows
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        9m refresh lag
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5"></span>
                                      Live
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_cg_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-state="selected" data-row-id="REP-1845">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary block bottom-0 inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_cj_" aria-checked="true" aria-label="Select row">
                                      <span className="[&>svg]:size-3.5 grid place-content-center text-current transition-none" data-checked="">
                                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                      </span>
                                    </Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        lead_source_attribution
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1845
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 06:35
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Sana Qureshi
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Data quality engineer">
                                          Data quality engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-users size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                      </svg>
                                      Contacts
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Critical
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-warning">
                                        128.3k rows
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        42m lag warning
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                      Reviewing
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_cp_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REP-1853">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_cs_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        contact_hygiene_audit
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1853
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 04:00
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Sana Qureshi
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Data quality engineer">
                                          Data quality engineer
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-users size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                      </svg>
                                      Contacts
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-secondary-foreground text-xs transition-shadow">
                                      Low
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-muted-foreground">
                                        Paused
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        No live volume
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      <span className="bg-rose-500 dark:bg-rose-400 rounded-full! shrink-0 size-1.5"></span>
                                      Deprecated
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_d2_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REP-1843">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_d5_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        win_rate_by_owner
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1843
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 08:45
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Leo Grant
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Sales analytics manager">
                                          Sales analytics manager
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-handshake size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                                        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                                        <path d="m21 3 1 11h-2"></path>
                                        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                                        <path d="M3 4h8"></path>
                                      </svg>
                                      Deals
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Warning
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-warning">
                                        76.8k rows
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        18m lag warning
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <span className="bg-amber-500 dark:bg-amber-400 rounded-full! shrink-0 size-1.5"></span>
                                      Reviewing
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_db_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="REP-1857">
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate ps-4! px-2 py-1.5" style={{width: "36px"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_de_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "280px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="font-medium text-foreground truncate">
                                        meeting_to_deal_conversion
                                      </span>
                                      <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                        <span className="shrink-0 tabular-nums">
                                          REP-1857
                                        </span>
                                        <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                        <span className="truncate">
                                          Refreshed 09:05
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "190px"}}>
                                    <div className="flex gap-2 items-center min-w-0">
                                      <div className="shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                        </Avatar>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium text-foreground truncate">
                                          Kenji Tan
                                        </div>
                                        <div className="text-muted-foreground text-xs truncate" title="Finance reporting analyst">
                                          Finance reporting analyst
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "140px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      <svg className="lucide lucide-activity size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                      </svg>
                                      Activities
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "120px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Healthy
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "150px"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <span className="text-foreground">
                                        58.3k rows
                                      </span>
                                      <span className="text-muted-foreground text-xs truncate">
                                        11m refresh lag
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "170px"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      <span className="bg-emerald-500 dark:bg-emerald-400 rounded-full! shrink-0 size-1.5"></span>
                                      Live
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=end][data-last-col=end]]:shadow-[inset_1px_0_0_0_var(--border)] [&[data-pinned=start][data-last-col=start]]:shadow-[inset_-1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "50px"}}>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Row actions" aria-haspopup="menu" id="base-ui-_r_dk_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </td>
                                </tr>
                              </DataGridTableBody>
                            </DataGridTable>
                          </DataGridTableViewport>
                        </div>
                      </div>
                    </DataGridScrollArea>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t p-(--card-spacing) px-5 py-3 rounded-b-xl">
                  <div className="flex justify-end w-full">
                    <DataGridPagination>
                      <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                        <div className="text-muted-foreground text-sm">
                          Rows per page
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_r_dn_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm">
                          <SelectValue className="flex flex-1 text-left">
                            6
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_dn_-hidden-input" tabIndex="-1" aria-hidden="true" value="6" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          1 - 6 of 10
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
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
