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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
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
                      {"NeUI"}
                    </div>
                    <svg className="lucide lucide-ellipsis ml-auto opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_3aikpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/deals">
                        <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
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
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span>
                          {"Users"}
                        </span>
                        <svg className="duration-200 group-data-[collapsible=icon]:hidden lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <svg className="lucide lucide-chart-pie" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                        <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 21a8 8 0 0 0-16 0"></path>
                          <circle cx="10" cy="8" r="5"></circle>
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
                      <SidebarMenuButton className="[&_svg]:size-3.5 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_dmkpfdb_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/account/profile" data-active="">
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
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
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
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-1.5 peer/menu-button ring-sidebar-ring rounded-md shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="lg" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6spfdb_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 duration-300 ease-in-out in-data-[state=collapsed]:size-7! rounded-full size-6 transition-all" size="default">
                      <AvatarImage className="rounded-md" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left text-sm">
                      <span className="font-semibold truncate">
                        {"Nick Bold"}
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
              <SidebarTrigger className="-ml-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center md:hidden outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
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
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1">
                    <BreadcrumbPage className="font-normal text-foreground" role="link" aria-disabled="true" aria-current="page">
                      {"Settings"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0" id="page-header-actions"></div>
          </div>
        </header>
        <div className="auto-rows-min flex-1 gap-4 grid grid-cols-1 max-w-(--container-app) min-w-0 mx-auto pb-6 pt-0 px-6 w-full">
          <div className="flex flex-col gap-5 min-w-0 w-full">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-foreground text-xl">
                {"Account"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {"Manage your profile, sign-in security, and app preferences."}
              </p>
            </div>
            <nav className="border-b border-border flex gap-1" aria-label="Account sections">
              <a className="-mb-px border-b-2 border-primary focus-visible:ring-2 focus-visible:ring-ring/50 font-medium inline-flex items-center outline-none px-3 py-2 text-foreground text-sm transition-colors" aria-current="page" href="/account/profile">
                {"Profile"}
              </a>
              <a className="-mb-px border-b-2 border-transparent focus-visible:ring-2 focus-visible:ring-ring/50 font-medium hover:text-foreground inline-flex items-center outline-none px-3 py-2 text-muted-foreground text-sm transition-colors" href="/account/security">
                {"Security"}
              </a>
              <a className="-mb-px border-b-2 border-transparent focus-visible:ring-2 focus-visible:ring-ring/50 font-medium hover:text-foreground inline-flex items-center outline-none px-3 py-2 text-muted-foreground text-sm transition-colors" href="/account/preferences">
                {"Preferences"}
              </a>
            </nav>
            <Card className="*:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl [--card-spacing:--spacing(4)] bg-card data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 gap-0 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 overflow-hidden p-0 ring-1 ring-foreground/10 rounded-xl text-card-foreground text-sm w-full" size="default" aria-label="Profile details" role="region">
              <CardHeader className="[.border-b]:pb-(--card-spacing) border-b gap-1 px-5 py-4 rounded-t-xl">
                <CardTitle className="font-heading font-medium group-data-[size=sm]/card:text-sm leading-snug text-base">
                  {"Profile"}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {"Manage your personal information and how you appear across the app."}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-photo">
                          {"Profile photo"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"Shown on comments, mentions, and the sign-in menu."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <div className="flex gap-4 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-lg size-14" size="default">
                            <AvatarImage className="rounded-lg" alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <div className="flex gap-2 items-center">
                            <input className="sr-only" id="profile-photo" accept="image/*" type="file" />
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem]" type="button" tabIndex="0">
                              <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 3v12"></path>
                                <path d="m17 8-5-5-5 5"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              </svg>
                              {"Upload"}
                            </Button>
                            <Button className="[&_svg:not([class*='size-'])]:size-3.5 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] text-muted-foreground" type="button" tabIndex="0">
                              {"Remove"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-name">
                          {"Full name"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"Used across the app."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="profile-name" value="Nick Bold"></Input>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-email">
                          {"Email address"}
                        </FieldLabel>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Verified"}
                        </Badge>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"Primary sign-in email."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="profile-email" type="email" value="nick@neui.io"></Input>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-phone">
                          {"Phone number"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"For recovery and urgent alerts."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="profile-phone" placeholder="+1 415 555 0188" type="tel" value="+14155550188"></Input>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-username">
                          {"Username"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"Used in mentions and links."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[34rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                            <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                              {"@"}
                            </span>
                          </InputGroupAddon>
                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="profile-username" value="nickbold" />
                        </InputGroup>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                          {"Public details"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"Role, time zone, and website."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-[32rem] gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-3">
                          <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-role">
                              {"Role"}
                            </FieldLabel>
                            <Select>
                            <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="profile-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue className="flex flex-1 text-left">
                                {"Operations manager"}
                              </SelectValue>
                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_ec_-hidden-input" tabIndex="-1" aria-hidden="true" value="operations-manager" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-timezone">
                              {"Time zone"}
                            </FieldLabel>
                            <Select>
                            <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="profile-timezone" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue className="flex flex-1 text-left">
                                {"(GMT-8) Los Angeles"}
                              </SelectValue>
                              <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_ef_-hidden-input" tabIndex="-1" aria-hidden="true" value="(GMT-8) Los Angeles" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </Field>
                          <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                            <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-website">
                              {"Website"}
                            </FieldLabel>
                            <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                              <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                                <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                                  {"https://"}
                                </span>
                              </InputGroupAddon>
                              <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="profile-website" value="nickbold.neui.io" />
                            </InputGroup>
                          </Field>
                        </FieldGroup>
                      </div>
                    </FieldContent>
                  </Field>
                  <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                    <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  </FieldSeparator>
                  <Field className="data-[invalid=true]:text-destructive gap-4 px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="profile-bio">
                          {"Bio"}
                        </FieldLabel>
                      </div>
                      <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-sm">
                        {"A short profile summary."}
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:flex-1 @md/field-group:max-w-full gap-0.5 min-w-0 w-full">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Textarea className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm min-h-24 px-2.5 py-2 resize-none rounded-lg text-base transition-colors" id="profile-bio">
                          {"Runs day-to-day revenue operations, pipeline, and reporting across the workspace."}
                        </Textarea>
                      </div>
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </CardContent>
              <CardFooter className="bg-muted/50 border-t flex-row gap-2 justify-end p-(--card-spacing) px-5 py-4 rounded-b-xl">
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" disabled="" tabIndex="0" disabled>
                  {"Cancel"}
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" disabled="" tabIndex="0" disabled>
                  {"Save changes"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
