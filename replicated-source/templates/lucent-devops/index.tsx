import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
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
  SidebarMenuItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-9 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-2 peer/menu-button ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="default" aria-label="Switch workspace" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_pl5cq_" aria-expanded="false">
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
                      {"DevOps"}
                    </div>
                    <svg className="ml-auto opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
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
                  {"Workspace"}
                </SidebarGroupLabel>
                </SidebarProvider>
                <SidebarProvider>
                <SidebarGroupContent className="text-sm" sidebar="group-content">
                  <SidebarProvider>
                  <SidebarMenu className="gap-0 gap-1!" sidebar="menu">
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_d6al5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" href="/" status="active" aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        <span>
                          {"Overview"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1laal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-pipelines">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                        </svg>
                        <span>
                          {"Delivery"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1leal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-infrastructure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path>
                        </svg>
                        <span>
                          {"Infrastructure"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lial5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-observability">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
                        </svg>
                        <span>
                          {"Observability"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lmal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-security">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"></path>
                        </svg>
                        <span>
                          {"Reliability"}
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
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
              <SidebarProvider>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                <SidebarProvider>
                <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="pinned-resources-list" sidebar="group-label">
                  {"Services"}
                  <svg className="duration-200 ml-auto opacity-60 rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="api-gateway, Degraded. Open service details">
                        <span className="bg-warning ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"api-gateway"}
                        </span>
                        <span className="sr-only">
                          {"Degraded"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for api-gateway" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1omil5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="recommender, Healthy. Open service details">
                        <span className="bg-success ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"recommender"}
                        </span>
                        <span className="sr-only">
                          {"Healthy"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for recommender" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1p6il5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="orders-db, Down. Open service details">
                        <span className="bg-destructive ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"orders-db"}
                        </span>
                        <span className="sr-only">
                          {"Down"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for orders-db" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1pmil5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="edge-cache, Healthy. Open service details">
                        <span className="bg-success ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          {"edge-cache"}
                        </span>
                        <span className="sr-only">
                          {"Healthy"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for edge-cache" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1q6il5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1lql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/integrations">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"></path>
                        </svg>
                        <span>
                          {"Integrations"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1mql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/security">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                        </svg>
                        <span>
                          {"Security"}
                        </span>
                      </SidebarMenuButton>
                      </SidebarProvider>
                    </SidebarMenuItem>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarProvider>
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1nql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
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
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-1.5 peer/menu-button ring-sidebar-ring rounded-lg shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="sm" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_3bl5cq_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 duration-300 ease-in-out in-data-[state=collapsed]:size-7! rounded-full size-6 transition-all" size="default">
                      <AvatarImage className="rounded-full" alt="Tomas Okonkwo" src="/avatars/tomas-okonkwo.jpg"></AvatarImage>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left text-sm">
                      <span className="font-semibold truncate">
                        {"Tomas Okonkwo"}
                      </span>
                    </div>
                    <svg className="group-data-[collapsible=icon]:hidden ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
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
      <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm">
        <header className="bg-background border-b border-border flex h-12 items-center px-4 shrink-0 sticky top-0 w-full z-20">
          <div className="flex gap-2 items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex gap-2 items-center min-w-0">
              <SidebarProvider>
              <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <span className="flex items-center justify-center md:hidden relative shrink-0 size-6">
                <Item className="-translate-x-1/2 -translate-y-1/2 [a]:hover:bg-muted absolute bg-primary border border-transparent gap-2.5 left-1/2 origin-center p-0 rounded-lg scale-75 size-8 text-primary-foreground text-sm top-1/2" variant="default" size="default" aria-hidden="true">
                  <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                    <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </span>
              <Breadcrumb className="min-w-0" aria-label="breadcrumb">
                <BreadcrumbList className="flex-nowrap gap-1.5 min-w-0 text-muted-foreground text-sm">
                  <BreadcrumbItem className="gap-1 min-w-0">
                    <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                      {"Overview"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground justify-start lg:w-80 max-md:justify-center max-md:p-0 max-md:size-8 md:w-64 px-2.5 rounded-lg text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Search">
                <svg className="opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                </svg>
                <span className="hidden md:inline">
                  {"Search or jump to..."}
                </span>
                <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background max-md:hidden min-w-5 ml-auto px-1 rounded-sm text-muted-foreground text-xs w-fit">
                  {"⌘K"}
                </Kbd>
              </Button>
              <DialogHeader className="gap-2 sr-only">
                <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_5m6f5cq_">
                  {"Search"}
                </DialogTitle>
                <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_9m6f5cq_">
                  {"Search or jump to anything in your workspace."}
                </DialogDescription>
              </DialogHeader>
              <Separator className="h-4 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-2 items-center shrink-0">
                <Popover>
                <PopoverTrigger className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-ring/50 items-center outline-none rounded-full shrink-0" type="button" aria-label="Workspace members, 8 people" tabIndex="0" baseUiClickTrigger="" id="base-ui-_R_1lef5cq_" aria-haspopup="dialog" aria-expanded="false">
                  <AvatarGroup>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Amelia Hart" src="/avatars/amelia-hart.jpg"></AvatarImage>
                    </Avatar>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 max-md:hidden rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Marcus Webb" src="/avatars/marcus-webb.jpg"></AvatarImage>
                    </Avatar>
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 max-md:hidden rounded-full size-8" size="sm">
                      <AvatarImage className="rounded-full" alt="Nia Achebe" src="/avatars/nia-achebe.jpg"></AvatarImage>
                    </Avatar>
                    <AvatarGroupCount className="[&>svg]:size-4 bg-muted group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=sm]/avatar-group:size-6 rounded-full size-8 text-muted-foreground text-sm">
                      <span className="md:hidden">
                        {"+"}
                        {"7"}
                      </span>
                      <span className="max-md:hidden">
                        {"+"}
                        {"5"}
                      </span>
                    </AvatarGroupCount>
                  </AvatarGroup>
                </PopoverTrigger>
                </Popover>
                <Separator className="h-4 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center max-md:p-0 max-md:size-8 outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Invite team member" baseUiClickTrigger="" id="base-ui-_R_1nef5cq_" aria-haspopup="dialog" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path>
                  </svg>
                  <span className="hidden md:block">
                    {"Invite"}
                  </span>
                </PopoverTrigger>
                </Popover>
              </div>
              <Separator className="h-4 max-md:hidden my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <div className="flex gap-2 items-center shrink-0">
                <Popover>
                <PopoverTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none relative rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications, 6 unread" baseUiClickTrigger="" id="base-ui-_R_dmf5cq_" aria-haspopup="dialog" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                  </svg>
                  <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
                </PopoverTrigger>
                </Popover>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="@container flex flex-col gap-5 max-w-7xl mx-auto text-foreground w-full">
            <h1 className="sr-only">
              {"Delivery overview"}
            </h1>
            <section className="@5xl:grid-cols-3 gap-5 grid items-stretch min-w-0" aria-label="Runbook coverage, traffic mix and queue lag">
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col h-full p-0!">
                    <div className="flex flex-col gap-3 pb-0 pt-4 px-5">
                      <div className="flex gap-2 items-center justify-between pb-2">
                        <div className="flex gap-2.5 items-center space-y-0">
                          <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"></path>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-base">
                              {"Runbook Coverage"}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {"Verified services"}
                            </p>
                          </div>
                        </div>
                        <Tooltip>
                        <TooltipTrigger className="-mr-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground/70 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Runbook Coverage" id="base-ui-_R_r59n5cq_" baseUiTooltipTrigger="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-icon="inline-start">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 pb-4 pt-1 px-5">
                      <div className="flex flex-wrap gap-x-2 items-baseline">
                        <span className="font-medium text-[26px]">
                          {"70%"}
                        </span>
                        <span className="font-medium text-success text-xs">
                          {"+4.8%"}
                        </span>
                        <span className="text-muted-foreground/70 text-xs">
                          {"services with a verified runbook"}
                        </span>
                      </div>
                      <div className="gap-1 grid h-7 w-full" aria-label="Runbook coverage is 70%" role="img" style={{gridTemplateColumns: "repeat(56, minmax(0, 1fr))"}}>
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
                      </div>
                      <div className="flex flex-wrap gap-3 items-center justify-between mt-auto">
                        <p>
                          <span className="text-muted-foreground/70 text-xs">
                            {"Services in scope:"}
                          </span>
                          <span className="font-medium text-sm">
                            {"10"}
                          </span>
                        </p>
                        <div className="flex gap-2 items-center">
                          <AvatarGroup>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Marcus Webb" src="/avatars/marcus-webb.jpg"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Klara Nowak" src="/avatars/klara-nowak.jpg"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Rafael Duarte" src="/avatars/rafael-duarte.jpg"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Leila Haddad" src="/avatars/leila-haddad.jpg"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Theo Morales" src="/avatars/theo-morales.jpg"></AvatarImage>
                            </Avatar>
                            <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                              <AvatarImage className="rounded-full" alt="Mei Watanabe" src="/avatars/mei-watanabe.jpg"></AvatarImage>
                            </Avatar>
                          </AvatarGroup>
                          <span className="text-muted-foreground text-xs whitespace-nowrap">
                            {"6 Owners"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col h-full pb-3.5! pe-5! ps-3.5! pt-4!">
                    <div className="flex flex-col gap-3 h-full">
                      <div className="flex gap-2 items-center justify-between pb-2">
                        <div className="flex gap-2.5 items-center space-y-0">
                          <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                            <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                              <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"></path>
                              </svg>
                            </ItemMedia>
                          </Item>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-semibold text-base">
                              {"Traffic Mix"}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {"Week"}
                            </p>
                          </div>
                        </div>
                        <Tooltip>
                        <TooltipTrigger className="-mr-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground/70 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Traffic Mix" id="base-ui-_R_r69n5cq_" baseUiTooltipTrigger="">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-icon="inline-start">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                          </svg>
                        </TooltipTrigger>
                        </Tooltip>
                      </div>
                      <div className="content-center flex-1 gap-5 grid md:grid-cols-[8.25rem_minmax(0,1fr)] md:items-center">
                        <div className="relative shrink-0 size-[8.25rem]">
                          <ChartContainer>
                          <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-square flex justify-center size-[8.25rem] text-xs" data-chart="chart-_R_2q9n5cq_" aria-label="Traffic Mix: 185M total for Week">
                            <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_2q9n5cq_] {\n  --color-gateway: oklch(0.6 0.145 181.2);\n  --color-edge: oklch(0.76 0.161 80.1);\n  --color-identity: oklch(0.66 0.19 42.8);\n}\n\n\n.dark [data-chart=chart-_R_2q9n5cq_] {\n  --color-gateway: oklch(0.6 0.145 181.2);\n  --color-edge: oklch(0.76 0.161 80.1);\n  --color-identity: oklch(0.66 0.19 42.8);\n}\n" }} />
                            <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                              <div style={{width: "0", height: "0", overflow: "visible"}}>
                                <div className="recharts-wrapper" width="132" height="132" style={{position: "relative", cursor: "default", width: "132px", height: "132px"}}>
                                  <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="132" height="132" viewBox="0 0 132 132" style={{width: "100%", height: "100%", display: "block"}}>
                                    <title></title>
                                    <desc></desc>
                                    <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                    <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                    <defs>
                                      <clippath id="recharts1-clip">
                                        <rect x="2" y="2" height="128" width="128"></rect>
                                      </clippath>
                                    </defs>
                                    <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                      <g className="recharts-layer recharts-pie" tabIndex="0">
                                        <g className="recharts-layer">
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-gateway)" name="api-gateway" color="oklch(0.6 0.145 181.2)" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_0_" d={"M 28.1246,20.8618\n    A3,3,0,0,1,28.6137,16.5403\n    A62,62,0,0,1,109.3904,110.2862\n    A3,3,0,0,1,105.044,110.1312\n  L99.0713,103.3803\n      A3,3,0,0,1,99.1991,99.2689\n      A47,47,0,0,0,38.0037,28.2481\n      A3,3,0,0,1,33.9185,27.7668Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-edge)" name="edge-cache" color="oklch(0.76 0.161 80.1)" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_0_" d={"M 104.2679,110.8059\n    A3,3,0,0,1,103.8165,115.1316\n    A62,62,0,0,1,16.5006,103.3338\n    A3,3,0,0,1,17.2134,99.0434\n  L24.6765,93.9887\n      A3,3,0,0,1,28.7373,94.6442\n      A47,47,0,0,0,94.3247,103.5061\n      A3,3,0,0,1,98.4139,103.9518Z"}></path>
                                            </g>
                                          </g>
                                          <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                            <g className="recharts-layer recharts-shape">
                                              <path className="recharts-sector" stroke="var(--background)" strokeWidth="2" cx="66" cy="66" fill="var(--color-identity)" name="identity" color="oklch(0.66 0.19 42.8)" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_0_" d={"M 16.6441,98.187\n    A3,3,0,0,1,12.4125,97.1829\n    A62,62,0,0,1,22.9977,21.3368\n    A3,3,0,0,1,27.3426,21.5297\n  L33.2561,28.3325\n      A3,3,0,0,1,33.0925,32.4426\n      A47,47,0,0,0,25.1622,89.2653\n      A3,3,0,0,1,24.1943,93.2632Z"}></path>
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
                          </ChartContainer>
                          <div className="absolute flex inset-0 items-center justify-center pointer-events-none" aria-hidden="true">
                            <div className="bg-background/90 border border-border/70 border-dashed flex flex-col items-center justify-center rounded-full size-[5.25rem]">
                              <span className="text-muted-foreground/70 text-xs">
                                {"Requests"}
                              </span>
                              <span className="font-semibold mt-0.5 text-sm">
                                {"185M"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="flex flex-1 flex-col min-w-0">
                          <li>
                            <div className="gap-2 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.6 0.145 181.2)"}}></span>
                                <span className="font-medium text-xs truncate">
                                  {"api-gateway"}
                                </span>
                              </div>
                              <span className="font-medium text-xs">
                                {"92.5M"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs">
                                {"50"}
                                {"%"}
                              </span>
                            </div>
                            <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="gap-2 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.76 0.161 80.1)"}}></span>
                                <span className="font-medium text-xs truncate">
                                  {"edge-cache"}
                                </span>
                              </div>
                              <span className="font-medium text-xs">
                                {"50M"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs">
                                {"27"}
                                {"%"}
                              </span>
                            </div>
                            <Separator className="w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="gap-2 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center py-2.5">
                              <div className="flex gap-2.5 items-center min-w-0">
                                <span className="border-2 border-background rounded-full shadow-sm shrink-0 size-3" aria-hidden="true" style={{backgroundColor: "oklch(0.66 0.19 42.8)"}}></span>
                                <span className="font-medium text-xs truncate">
                                  {"identity"}
                                </span>
                              </div>
                              <span className="font-medium text-xs">
                                {"42.5M"}
                              </span>
                              <span className="text-muted-foreground/70 text-right text-xs">
                                {"23"}
                                {"%"}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col h-full px-5! py-4!">
                    <div className="flex gap-2 items-center justify-between pb-2">
                      <div className="flex gap-2.5 items-center space-y-0">
                        <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground [a]:hover:bg-muted bg-muted border-2 border-background dark:border gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10 text-sm" variant="default" size="default">
                          <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-semibold text-base">
                            {"Queue wait"}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {"42 queued"}
                          </p>
                        </div>
                      </div>
                      <Tooltip>
                      <TooltipTrigger className="-mr-1 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none rounded-[min(var(--radius-md),12px)] select-none shrink-0 size-7 text-muted-foreground/70 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Queue Lag Zone" id="base-ui-_R_r79n5cq_" baseUiTooltipTrigger="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-icon="inline-start">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <div className="mt-auto space-y-3">
                      <h3 className="font-medium text-sm">
                        {"Queue Lag Zone"}
                      </h3>
                      <div aria-label="Queue Lag Zone: 18 minutes at p95, 42 jobs queued" role="img">
                        <div className="gap-1 grid grid-cols-4">
                          <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                          <div className="bg-warning h-1.5 rounded-full"></div>
                          <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                          <div className="bg-muted-foreground/18 dark:bg-muted-foreground/24 h-1.5 rounded-full"></div>
                        </div>
                        <div className="gap-1 grid grid-cols-4 leading-none mt-2 tabular-nums text-[10px] text-muted-foreground">
                          <span>
                            {"0m"}
                          </span>
                          <span>
                            {"15m"}
                          </span>
                          <span>
                            {"30m"}
                          </span>
                          <span>
                            {"60m"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </section>
            <section className="@5xl:grid-cols-3 gap-5 grid items-stretch min-w-0" aria-label="Deploy frequency and deploys by service">
              <div className="@5xl:col-span-2 flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                  <header className="flex flex-row gap-2 items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1.5!">
                    <div className="font-semibold text-sm">
                      {"Deploy Frequency"}
                    </div>
                    <Select>
                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 min-w-[140px] pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_15dn5cq_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue className="flex flex-1 text-left">
                        {"12 months"}
                      </SelectValue>
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_R_15dn5cq_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="12m" />
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] space-y-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2.5 items-center">
                        <span className="font-semibold leading-none text-2xl">
                          {"796"}
                        </span>
                        <span className="[&_svg]:size-4 font-medium gap-1 inline-flex items-center text-emerald-500 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
                          </svg>
                          {"13.4"}
                          {"%"}
                        </span>
                      </div>
                    </div>
                    <ChartContainer>
                    <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-[300px] justify-center text-xs w-full" data-chart="chart-_R_19dn5cq_">
                      <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_19dn5cq_] {\n  --color-value: var(--color-blue-500);\n}\n\n\n.dark [data-chart=chart-_R_19dn5cq_] {\n  --color-value: var(--color-blue-500);\n}\n" }} />
                      <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                        <div style={{width: "0", height: "0", overflow: "visible"}}>
                          <div className="recharts-wrapper" width="958" height="300" style={{position: "relative", cursor: "default", width: "958px", height: "300px"}}>
                            <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                            <svg className="recharts-surface" role="application" tabIndex="0" width="958" height="300" viewBox="0 0 958 300" style={{width: "100%", height: "100%", display: "block"}}>
                              <title></title>
                              <desc></desc>
                              <g className="recharts-zIndex-layer_-100" tabIndex="-1">
                                <g className="recharts-cartesian-grid">
                                  <g className="recharts-cartesian-grid-horizontal">
                                    <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="938" height="250" x1="10" y1="260" x2="948" y2="260"></line>
                                    <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="938" height="250" x1="10" y1="197.5" x2="948" y2="197.5"></line>
                                    <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="938" height="250" x1="10" y1="135" x2="948" y2="135"></line>
                                    <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="938" height="250" x1="10" y1="72.5" x2="948" y2="72.5"></line>
                                    <line strokeDasharray="3 3" stroke="var(--border)" fill="none" x="10" y="10" width="938" height="250" x1="10" y1="10" x2="948" y2="10"></line>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                              <defs>
                                <clippath id="recharts2-clip">
                                  <rect x="10" y="10" height="250" width="938"></rect>
                                </clippath>
                              </defs>
                              <defs>
                                <lineargradient id="cashflowGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="var(--color-blue-500)" stopOpacity="0.15"></stop>
                                  <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0"></stop>
                                </lineargradient>
                              </defs>
                              <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                <g className="recharts-area recharts-layer">
                                  <g className="recharts-layer">
                                    <path className="recharts-area-area recharts-curve" strokeWidth="1" fill="url(#cashflowGradient)" fillOpacity="0.6" height="250" stroke="none" width="938" id="recharts-area-_r_1_" d="M10,107L95.273,84L180.545,70.5L265.818,77.25L351.091,138.5L436.364,96.25L521.636,82L606.909,59.25L692.182,87.5L777.455,73.75L862.727,84.5L948,61L948,260L862.727,260L777.455,260L692.182,260L606.909,260L521.636,260L436.364,260L351.091,260L265.818,260L180.545,260L95.273,260L10,260Z"></path>
                                    <path className="recharts-area-curve recharts-curve" strokeWidth="1" fill="none" fillOpacity="0.6" height="250" stroke="transparent" width="938" d="M10,107L95.273,84L180.545,70.5L265.818,77.25L351.091,138.5L436.364,96.25L521.636,82L606.909,59.25L692.182,87.5L777.455,73.75L862.727,84.5L948,61"></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_300" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_400" tabIndex="-1">
                                <g className="recharts-layer recharts-line">
                                  <g className="recharts-layer recharts-shape">
                                    <path className="recharts-curve recharts-line-curve" stroke="var(--color-blue-500)" strokeWidth="3" fill="none" id="recharts-line-_r_2_" height="250" width="938" strokeDasharray="985.6647px 985.6647338867188px" d="M10,107L95.273,84L180.545,70.5L265.818,77.25L351.091,138.5L436.364,96.25L521.636,82L606.909,59.25L692.182,87.5L777.455,73.75L862.727,84.5L948,61"></path>
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
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="10.000000000000057" cy="107.00000000000001"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="95.27272727272732" cy="84"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="180.5454545454546" cy="70.5"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="265.81818181818187" cy="77.25"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="351.0909090909091" cy="138.5"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="436.3636363636364" cy="96.24999999999999"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="521.6363636363637" cy="82.00000000000001"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="606.909090909091" cy="59.249999999999986"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="692.1818181818182" cy="87.50000000000001"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="777.4545454545455" cy="73.75"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="862.7272727272727" cy="84.50000000000001"></circle>
                                  <circle className="recharts-dot recharts-line-dot" r="4" stroke="var(--color-blue-500)" strokeWidth="2" fill="var(--background)" height="250" width="938" cx="948" cy="60.99999999999999"></circle>
                                </g>
                              </g>
                              <g className="recharts-zIndex-layer_1000" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1100" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_1200" tabIndex="-1"></g>
                              <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                <g className="recharts-cartesian-axis-tick-labels recharts-xAxis-tick-labels">
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="95.27272727272732" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="95.27272727272732" dy="0.71em">
                                        {"SEP"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="180.5454545454546" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="180.5454545454546" dy="0.71em">
                                        {"OCT"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="265.81818181818187" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="265.81818181818187" dy="0.71em">
                                        {"NOV"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="351.0909090909091" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="351.0909090909091" dy="0.71em">
                                        {"DEC"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="436.3636363636364" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="436.3636363636364" dy="0.71em">
                                        {"JAN"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="521.6363636363637" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="521.6363636363637" dy="0.71em">
                                        {"FEB"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="606.909090909091" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="606.909090909091" dy="0.71em">
                                        {"MAR"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="692.1818181818182" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="692.1818181818182" dy="0.71em">
                                        {"APR"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="777.4545454545455" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="777.4545454545455" dy="0.71em">
                                        {"MAY"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="862.7272727272727" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="862.7272727272727" dy="0.71em">
                                        {"JUN"}
                                      </tspan>
                                    </text>
                                  </g>
                                  <g className="recharts-cartesian-axis-tick-label recharts-layer">
                                    <text className="recharts-cartesian-axis-tick-value recharts-text" height="30" orientation="bottom" width="938" stroke="none" fontSize="12" x="946.7109375" y="276" textAnchor="middle" fill="#666">
                                      <tspan x="946.7109375" dy="0.71em">
                                        {"JUL"}
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
              </div>
              <div className="flex min-w-0">
                <Tabs className="gap-2 h-full w-full" data-orientation="horizontal" activationDirection="none">
                  <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                    <header className="flex flex-row gap-3 grow-0 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-1.5! shrink-0">
                      <div className="font-semibold text-sm">
                        {"Deploys by Service"}
                      </div>
                      <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_36dn5cq_" compositeItemActive="" aria-controls="base-ui-_R_qdn5cq_">
                          {"30 days"}
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_56dn5cq_">
                          {"90 days"}
                        </TabsTrigger>
                      </TabsList>
                    </header>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col justify-start pb-4! pt-5! px-5!">
                      <TabsContent className="flex-none text-sm" data-orientation="horizontal" activationDirection="none" id="base-ui-_R_qdn5cq_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_R_36dn5cq_">
                        <ul className="flex flex-col">
                          <li>
                            <div className="flex gap-2 items-center">
                              <svg className="size-9" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">
                                <defs>
                                  <lineargradient id="btc-c" x1="50%" x2="50%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                                    <stop offset="100%" stopOpacity=".5"></stop>
                                  </lineargradient>
                                  <circle id="btc-b" cx="16" cy="15" r="15"></circle>
                                  <filter id="btc-a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterunits="objectBoundingBox">
                                    <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                                    <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                                    <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                                    <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                                  </filter>
                                  <path id="btc-e" d="M23.1889526,13.0201846 C23.5025526,10.9239385 21.9064911,9.79704615 19.7240911,9.04529231 L20.4320295,6.20566154 L18.7035372,5.77489231 L18.0143065,8.53969231 C17.5599065,8.42646154 17.0931988,8.31963077 16.6294449,8.21378462 L17.3235988,5.43076923 L15.5960911,5 L14.8876603,7.83864615 C14.5115372,7.75298462 14.1423065,7.66830769 13.7839065,7.5792 L13.7858757,7.57033846 L11.4021218,6.97513846 L10.9423065,8.82129231 C10.9423065,8.82129231 12.224768,9.1152 12.1976911,9.13341538 C12.8977526,9.30818462 13.0242757,9.77144615 13.0031065,10.1387077 L12.1967065,13.3736615 C12.2449526,13.3859692 12.3074757,13.4036923 12.3763988,13.4312615 C12.3187988,13.4169846 12.2572603,13.4012308 12.1937526,13.3859692 L11.0634142,17.9176615 C10.9777526,18.1303385 10.7606449,18.4493538 10.2712911,18.3282462 C10.2885218,18.3533538 9.01492185,18.0146462 9.01492185,18.0146462 L8.15682954,19.9932308 L10.4061834,20.5539692 C10.8246449,20.6588308 11.2347372,20.7686154 11.6384295,20.872 L10.9231065,23.7441231 L12.6496295,24.1748923 L13.3580603,21.3332923 C13.8296911,21.4612923 14.2875372,21.5794462 14.7355372,21.6907077 L14.029568,24.5190154 L15.7580603,24.9497846 L16.4733834,22.0830769 C19.4208295,22.6408615 21.6371988,22.4158769 22.5701218,19.7500308 C23.3218757,17.6035692 22.5327065,16.3654154 20.9819372,15.5580308 C22.1112911,15.2976 22.9619988,14.5547077 23.1889526,13.0201846 L23.1889526,13.0201846 Z M19.2396603,18.5581538 C18.7055065,20.7046154 15.0914757,19.5442462 13.9197834,19.2532923 L14.8689526,15.4482462 C16.0406449,15.7406769 19.7979372,16.3196308 19.2396603,18.5581538 Z M19.7743065,12.9891692 C19.2869218,14.9416615 16.2789218,13.9496615 15.303168,13.7064615 L16.1637218,10.2553846 C17.1394757,10.4985846 20.2818757,10.9524923 19.7743065,12.9891692 Z"></path>
                                  <filter id="btc-d" width="123.2%" height="117.5%" x="-11.6%" y="-6.3%" filterunits="objectBoundingBox">
                                    <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                                    <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                                    <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"></fecolormatrix>
                                  </filter>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <use fill="#000" filter="url(#btc-a)" xlinkHref="#btc-b"></use>
                                  <use fill="#F7931A" xlinkHref="#btc-b"></use>
                                  <use fill="url(#btc-c)" style={{mixBlendMode: "soft-light"}} xlinkHref="#btc-b"></use>
                                  <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097"></circle>
                                  <g fillRule="nonzero">
                                    <use fill="#000" filter="url(#btc-d)" xlinkHref="#btc-e"></use>
                                    <use fill="#FFF" fillRule="evenodd" xlinkHref="#btc-e"></use>
                                  </g>
                                </g>
                              </svg>
                              <div className="flex flex-1 flex-col gap-0 min-w-0">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"api-gateway"}
                                </p>
                                <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                  <span className="leading-4 text-muted-foreground text-sm">
                                    {"Edge & routing"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
                                    </svg>
                                    {"8.6%"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col gap-0 shrink-0 text-right">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"279"}
                                </p>
                                <p className="leading-4 text-muted-foreground text-sm">
                                  {"9/day"}
                                </p>
                              </div>
                            </div>
                            <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="flex gap-2 items-center">
                              <svg className="size-9" aria-hidden="true" viewBox="0 0 339.43 295.27">
                                <path d="m62.15 1.45-61.89 130a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z" style={{fill: "#50af95", fillRule: "evenodd"}}></path>
                                <path d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12Zm0-39.25V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Zm0 0Z" style={{fill: "#fff", fillRule: "evenodd"}}></path>
                              </svg>
                              <div className="flex flex-1 flex-col gap-0 min-w-0">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"orders-db"}
                                </p>
                                <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                  <span className="leading-4 text-muted-foreground text-sm">
                                    {"Data platform"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
                                    </svg>
                                    {"0.5%"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col gap-0 shrink-0 text-right">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"197"}
                                </p>
                                <p className="leading-4 text-muted-foreground text-sm">
                                  {"7/day"}
                                </p>
                              </div>
                            </div>
                            <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="flex gap-2 items-center">
                              <svg className="size-9" aria-hidden="true" viewBox="0 0 32 32" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                  <lineargradient id="c" x1="16" x2="16" y1="0" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#FFF" stopOpacity=".5"></stop>
                                    <stop offset="100%" stopOpacity=".5"></stop>
                                  </lineargradient>
                                  <filter id="a" width="1.08" height="1.0966667" x="-.04" y="-.04" filterunits="objectBoundingBox">
                                    <feoffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1"></feoffset>
                                    <fegaussianblur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></fegaussianblur>
                                    <fecomposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></fecomposite>
                                    <fecolormatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"></fecolormatrix>
                                  </filter>
                                  <circle id="b" cx="16" cy="15" r="15"></circle>
                                </defs>
                                <use xlinkHref="#b" filter="url(#a)" style={{display: "inline", fillRule: "evenodd"}}></use>
                                <use xlinkHref="#b" fill="#627eea" style={{display: "inline", fill: "#e5e5e5", fillOpacity: "1", fillRule: "evenodd"}}></use>
                                <use xlinkHref="#b" fill="url(#c)" style={{display: "inline", mixBlendMode: "soft-light", fill: "url(#c)", fillRule: "evenodd"}}></use>
                                <circle cx="16" cy="15" r="14.5" stroke="#000" strokeOpacity=".097" style={{display: "inline", fill: "none", fillRule: "evenodd"}}></circle>
                                <path d="m10.331859 23 7.221238-12.601771.99115 3.256638L13.022125 23h2.83186l3.539822-6.088495L20.951328 23H23.5l-2.40708-9.061945 1.699118-2.973453h-2.548674L19.252216 7h-2.407083L7.5 23Z" style={{fill: "#000", fillOpacity: "1", stroke: "none", strokeWidth: ".141594", strokeOpacity: "1"}}></path>
                              </svg>
                              <div className="flex flex-1 flex-col gap-0 min-w-0">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"edge-cache"}
                                </p>
                                <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                  <span className="leading-4 text-muted-foreground text-sm">
                                    {"Edge & routing"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
                                    </svg>
                                    {"10.0%"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col gap-0 shrink-0 text-right">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"96"}
                                </p>
                                <p className="leading-4 text-muted-foreground text-sm">
                                  {"3/day"}
                                </p>
                              </div>
                            </div>
                            <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                          </li>
                          <li>
                            <div className="flex gap-2 items-center">
                              <svg className="size-9" aria-hidden="true" viewBox="0 0 201 201" fill="none">
                                <path d="M100.517 200.483C155.745 200.483 200.517 155.712 200.517 100.483C200.517 45.2549 155.745 0.483337 100.517 0.483337C45.2882 0.483337 0.516663 45.2549 0.516663 100.483C0.516663 155.712 45.2882 200.483 100.517 200.483Z" fill="black"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M126.452 111.118L141.537 126.159L100.531 167.121L59.5688 126.159L74.6533 111.118L100.531 136.995L126.452 111.118ZM100.531 85.1965L115.832 100.498L100.531 115.799L85.2732 100.541V100.498L87.9607 97.8103L89.2611 96.5099L100.531 85.1965ZM48.949 85.4133L64.0335 100.498L48.949 115.539L33.8644 100.454L48.949 85.4133ZM152.113 85.4133L167.198 100.498L152.113 115.539L137.029 100.454L152.113 85.4133ZM100.531 33.8311L141.493 74.7934L126.409 89.8779L100.531 63.9568L74.6533 89.8346L59.5688 74.7934L100.531 33.8311Z" fill="#F3BA2F"></path>
                              </svg>
                              <div className="flex flex-1 flex-col gap-0 min-w-0">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"recommender"}
                                </p>
                                <div className="flex flex-wrap gap-1.5 items-center min-w-0">
                                  <span className="leading-4 text-muted-foreground text-sm">
                                    {"Model serving"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"></path>
                                    </svg>
                                    {"2.3%"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex flex-col gap-0 shrink-0 text-right">
                                <p className="font-medium leading-5 text-base text-foreground">
                                  {"56"}
                                </p>
                                <p className="leading-4 text-muted-foreground text-sm">
                                  {"2/day"}
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabsContent>
                    </FramePanel>
                    <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] grow-0 p-3.5! shrink-0">
                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-foreground text-sm w-full" type="button" tabIndex="0">
                        <svg className="opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                        </svg>
                        {"View all deployments"}
                      </Button>
                    </FramePanel>
                  </Frame>
                </Tabs>
              </div>
            </section>
            <section className="@5xl:grid-cols-3 gap-5 grid items-stretch min-w-0" aria-label="Deployments awaiting approval, pipeline runs and certificate alerts">
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] @container [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                  <header className="flex flex-col gap-(--frame-panel-header-gap) grow-0 px-(--frame-panel-header-px) py-(--frame-panel-header-py) py-3.5! shrink-0">
                    <div className="font-semibold text-sm">
                      {"Deployments Awaiting Approval"}
                    </div>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-5!">
                    <ul className="flex flex-col">
                      <li>
                        <div className="flex gap-2 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                            <AvatarImage className="rounded-full" alt="Marcus Webb" src="/avatars/marcus-webb.jpg"></AvatarImage>
                          </Avatar>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <p className="font-medium text-foreground text-sm">
                              {"Marcus Webb"}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {"api-gateway v2.14.0 -> prod"}
                            </p>
                          </div>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" aria-label="Review Marcus Webb's deployment: api-gateway v2.14.0 -> prod" href="/deliver/deployments?deployment=api-gateway+v2.14.0+-%3E+prod">
                            {"Review"}
                          </a>
                        </div>
                        <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <div className="flex gap-2 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                            <AvatarImage className="rounded-full" alt="Klara Nowak" src="/avatars/klara-nowak.jpg"></AvatarImage>
                          </Avatar>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <p className="font-medium text-foreground text-sm">
                              {"Klara Nowak"}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {"identity v1.9.3 -> prod"}
                            </p>
                          </div>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" aria-label="Review Klara Nowak's deployment: identity v1.9.3 -> prod" href="/deliver/deployments?deployment=identity+v1.9.3+-%3E+prod">
                            {"Review"}
                          </a>
                        </div>
                        <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <div className="flex gap-2 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                            <AvatarImage className="rounded-full" alt="Rafael Duarte" src="/avatars/rafael-duarte.jpg"></AvatarImage>
                          </Avatar>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <p className="font-medium text-foreground text-sm">
                              {"Rafael Duarte"}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {"orders-db migration 0142"}
                            </p>
                          </div>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" aria-label="Review Rafael Duarte's deployment: orders-db migration 0142" href="/deliver/deployments?deployment=orders-db+migration+0142">
                            {"Review"}
                          </a>
                        </div>
                        <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <div className="flex gap-2 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                            <AvatarImage className="rounded-full" alt="Amelia Hart" src="/avatars/amelia-hart.jpg"></AvatarImage>
                          </Avatar>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <p className="font-medium text-foreground text-sm">
                              {"Amelia Hart"}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {"edge-cache v3.2.1 -> staging"}
                            </p>
                          </div>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" aria-label="Review Amelia Hart's deployment: edge-cache v3.2.1 -> staging" href="/deliver/deployments?deployment=edge-cache+v3.2.1+-%3E+staging">
                            {"Review"}
                          </a>
                        </div>
                        <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </li>
                      <li>
                        <div className="flex gap-2 items-center">
                          <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-7" size="default">
                            <AvatarImage className="rounded-full" alt="Adam Reyes" src="/avatars/adam-reyes.jpg"></AvatarImage>
                          </Avatar>
                          <div className="flex-1 min-w-0 space-y-0.5">
                            <p className="font-medium text-foreground text-sm">
                              {"Adam Reyes"}
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {"recommender v0.8.0 -> canary"}
                            </p>
                          </div>
                          <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all whitespace-nowrap" aria-label="Review Adam Reyes's deployment: recommender v0.8.0 -> canary" href="/deliver/deployments?deployment=recommender+v0.8.0+-%3E+canary">
                            {"Review"}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </FramePanel>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] grow-0 p-3.5! shrink-0">
                    <a className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1 group/button h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground in-data-[slot=button-group]:rounded-lg inline-flex items-center justify-center outline-none px-2.5 rounded-[min(var(--radius-md),12px)] select-none shrink-0 text-[0.8rem] transition-all w-full whitespace-nowrap" href="/deliver/deployments">
                      <svg className="opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                      </svg>
                      {"View all deployments"}
                    </a>
                  </FramePanel>
                </Frame>
              </div>
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <header className="flex flex-row gap-3 grow-0 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) shrink-0">
                    <div className="flex gap-2 items-center">
                      <div className="font-semibold text-sm">
                        {"Pipeline Runs"}
                      </div>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border border-none dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success text-xs transition-shadow">
                        <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"></path>
                        </svg>
                        <span>
                          {"5.2%"}
                        </span>
                      </Badge>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                      {"Export"}
                    </Button>
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] flex flex-col p-5!">
                    <div className="flex flex-1 flex-col gap-4 justify-between">
                      <div className="flex gap-3 items-center px-2">
                        <IconTile className="rounded-(--icon-tile-radius)" variant="solid" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"></path>
                          </svg>
                        </IconTile>
                        <div>
                          <div className="font-medium text-muted-foreground text-sm">
                            {"Total Runs"}
                          </div>
                          <div className="font-bold text-2xl">
                            {"925"}
                          </div>
                        </div>
                      </div>
                      <Tabs className="gap-2 w-full" data-orientation="horizontal" activationDirection="none">
                        <TabsList className="data-[variant=line]:rounded-none group-data-horizontal/tabs:h-8 p-[3px] rounded-lg w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_5ahn5cq_" compositeItemActive="">
                            {"5D"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_9ahn5cq_">
                            {"2W"}
                          </TabsTrigger>
                          <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 border border-transparent font-medium gap-1.5 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-1.5 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_dahn5cq_">
                            {"1M"}
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <div className="aspect-square max-h-[200px] mx-auto w-full">
                        <ChartContainer>
                        <div className="[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden aspect-video flex h-full justify-center overflow-visible text-xs w-full" data-chart="chart-_R_1qhn5cq_">
                          <style dangerouslySetInnerHTML={{ __html: "\n [data-chart=chart-_R_1qhn5cq_] {\n  --color-push: var(--color-blue-500);\n  --color-pullRequest: var(--color-sky-500);\n  --color-schedule: var(--color-orange-500);\n  --color-manual: var(--color-indigo-500);\n  --color-api: var(--color-slate-500);\n}\n\n\n.dark [data-chart=chart-_R_1qhn5cq_] {\n  --color-push: var(--color-blue-500);\n  --color-pullRequest: var(--color-sky-500);\n  --color-schedule: var(--color-orange-500);\n  --color-manual: var(--color-indigo-500);\n  --color-api: var(--color-slate-500);\n}\n" }} />
                          <div className="recharts-responsive-container" style={{width: "100%", height: "100%", minWidth: "0"}}>
                            <div style={{width: "0", height: "0", overflow: "visible"}}>
                              <div className="overflow-visible recharts-wrapper" width="950" height="200" style={{position: "relative", cursor: "default", width: "950px", height: "200px"}}>
                                <div className="recharts-tooltip-wrapper" xmlns="http://www.w3.org/1999/xhtml" tabIndex="-1" style={{visibility: "hidden", pointerEvents: "none", position: "absolute", top: "0px", left: "0px"}}></div>
                                <svg className="recharts-surface" cx="50%" cy="50%" role="application" tabIndex="0" width="950" height="200" viewBox="0 0 950 200" style={{width: "100%", height: "100%", display: "block"}}>
                                  <title></title>
                                  <desc></desc>
                                  <g className="recharts-zIndex-layer_-100" tabIndex="-1"></g>
                                  <g className="recharts-zIndex-layer_-50" tabIndex="-1"></g>
                                  <defs>
                                    <clippath id="recharts3-clip">
                                      <rect x="5" y="5" height="190" width="940"></rect>
                                    </clippath>
                                  </defs>
                                  <g className="recharts-zIndex-layer_100" tabIndex="-1">
                                    <g className="recharts-layer recharts-pie" tabIndex="0">
                                      <g className="recharts-layer">
                                        <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="475" cy="100" fill="var(--color-blue-500)" name="Push" tabIndex="-1" data-recharts-item-index="0" data-recharts-item-id="recharts-pie-_r_3_" d={"M 566.6515,100\n    A8,8,0,0,0,574.6212,91.3043\n    A100,100,0,0,0,459.2436,1.2491\n    A8,8,0,0,0,452.7435,11.0919\n  L464.7403,59.0154\n      A8,8,0,0,0,472.9658,65.0592\n      A35,35,0,0,1,509.3889,93.4884\n      A8,8,0,0,0,517.2493,100Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="475" cy="100" fill="var(--color-sky-500)" name="Pull request" tabIndex="-1" data-recharts-item-index="1" data-recharts-item-id="recharts-pie-_r_3_" d={"M 449.6542,11.9228\n    A8,8,0,0,0,439.0937,6.6687\n    A100,100,0,0,0,375.1617,94.3155\n    A8,8,0,0,0,383.3903,102.7666\n  L432.77,101.2753\n      A8,8,0,0,0,440.4302,94.5294\n      A35,35,0,0,1,459.2322,68.753\n      A8,8,0,0,0,463.3162,59.3984Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="475" cy="100" fill="var(--color-orange-500)" name="Schedule" tabIndex="-1" data-recharts-item-index="2" data-recharts-item-id="recharts-pie-_r_3_" d={"M 383.5426,105.9621\n    A8,8,0,0,0,376.1555,115.1577\n    A100,100,0,0,0,439.9761,193.666\n    A8,8,0,0,0,450.4865,188.3125\n  L463.6999,140.71\n      A8,8,0,0,0,459.5278,131.3944\n      A35,35,0,0,1,441.1075,108.7349\n      A8,8,0,0,0,432.8402,102.7484Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="475" cy="100" fill="var(--color-indigo-500)" name="Manual" tabIndex="-1" data-recharts-item-index="3" data-recharts-item-id="recharts-pie-_r_3_" d={"M 453.5835,189.1142\n    A8,8,0,0,0,460.1762,198.8952\n    A100,100,0,0,0,548.0848,168.254\n    A8,8,0,0,0,547.1693,156.4942\n  L508.2684,126.0426\n      A8,8,0,0,0,498.0651,126.3249\n      A35,35,0,0,1,473.2956,134.9585\n      A8,8,0,0,0,465.1275,141.0796Z"}></path>
                                          </g>
                                        </g>
                                        <g className="recharts-layer recharts-pie-sector" tabIndex="-1">
                                          <g className="recharts-layer recharts-shape">
                                            <path className="recharts-sector" strokeWidth="4" stroke="var(--background)" cx="475" cy="100" fill="var(--color-slate-500)" name="API" tabIndex="-1" data-recharts-item-index="4" data-recharts-item-id="recharts-pie-_r_3_" d={"M 549.0969,153.9411\n    A8,8,0,0,0,560.6579,151.6016\n    A100,100,0,0,0,574.2571,112.1667\n    A8,8,0,0,0,566.5957,103.1983\n  L517.2235,101.4743\n      A8,8,0,0,0,509.1408,107.7077\n      A35,35,0,0,1,506.6346,114.9751\n      A8,8,0,0,0,509.157,124.8656Z"}></path>
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
                                  <g className="recharts-zIndex-layer_2000" tabIndex="-1">
                                    <g className="recharts-label-list recharts-layer">
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="516.5320543322794" y="46.7896771017071" textAnchor="middle" fill="white">
                                        <tspan x="516.5320543322794" dy="0.355em">
                                          {"275"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="420.46631146895567" y="60.2215282445511" textAnchor="middle" fill="white">
                                        <tspan x="420.46631146895567" dy="0.355em">
                                          {"200"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="422.6228923509967" y="142.57802947911898" textAnchor="middle" fill="white">
                                        <tspan x="422.6228923509967" dy="0.355em">
                                          {"187"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="497.2165393957922" y="163.7391196775984" textAnchor="middle" fill="white">
                                        <tspan x="497.2165393957922" dy="0.355em">
                                          {"173"}
                                        </tspan>
                                      </text>
                                      <text className="recharts-label recharts-text" stroke="none" fontSize="10" fontWeight="600" offset="5" x="538.8121305109572" y="122.00595373194636" textAnchor="middle" fill="white">
                                        <tspan x="538.8121305109572" dy="0.355em">
                                          {"90"}
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
                      <div className="flex gap-2 items-center px-2 text-muted-foreground text-xs">
                        <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                        </svg>
                        <span>
                          {"Includes runs that never ship."}
                        </span>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
              <div className="flex min-w-0">
                <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] h-full w-full">
                  <header className="flex flex-row gap-3 grow-0 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py) shrink-0">
                    <div className="font-semibold text-sm">
                      {"Certificate Alerts"}
                    </div>
                    <Select>
                    <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors" type="button" tabIndex="0" id="base-ui-_R_17hn5cq_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Expiry window">
                      <SelectValue className="flex flex-1 text-left">
                        {"Next 30 days"}
                      </SelectValue>
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_R_17hn5cq_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="30" />
                  </header>
                  <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-5!">
                    <div className="flex gap-2.5 items-center mb-4">
                      <div className="flex flex-1 flex-col gap-1.5">
                        <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          {"Managed certs"}
                        </div>
                        <div className="font-bold text-2xl text-foreground">
                          {"312"}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-1.5">
                        <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                          {"Expiring"}
                        </div>
                        <div className="font-bold text-2xl text-foreground">
                          {"4"}
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted flex gap-0.5 h-2.5 items-center mb-3.5 overflow-hidden rounded-full w-full">
                      <div className="bg-teal-400 h-full" style={{width: "60%"}}></div>
                      <div className="bg-destructive h-full" style={{width: "30%"}}></div>
                      <div className="bg-amber-400 h-full" style={{width: "10%"}}></div>
                    </div>
                    <div className="flex gap-5 items-center mb-6">
                      <div className="flex gap-1 items-center text-teal-600 text-xs">
                        <span className="bg-teal-400 inline-block rounded-full size-2"></span>
                        {"Internal"}
                      </div>
                      <div className="flex gap-1 items-center text-destructive text-xs">
                        <span className="bg-destructive inline-block rounded-full size-2"></span>
                        {"Public"}
                      </div>
                      <div className="flex gap-1 items-center text-amber-600 text-xs">
                        <span className="bg-amber-400 inline-block rounded-full size-2"></span>
                        {"mTLS"}
                        <span className="flex items-center ms-1">
                          <Tooltip>
                          <TooltipTrigger className="cursor-help focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:text-foreground inline-flex items-center outline-none rounded-full text-muted-foreground" type="button" aria-label="About mTLS certificates" id="base-ui-_R_1mdrhn5cq_" baseUiTooltipTrigger="">
                            <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="text-muted-foreground text-sm tracking-wide">
                        {"Expiring Soon"}
                      </div>
                    </div>
                    <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="font-medium text-foreground text-sm truncate">
                          {"api-gateway"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Public"}
                        </Badge>
                      </div>
                      <div className="flex gap-2.5 items-center shrink-0">
                        <span className="text-muted-foreground text-xs">
                          {"in"}
                          <span className="font-semibold text-foreground">
                            {"3"}
                            {"d"}
                          </span>
                        </span>
                        <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                        <a className="font-medium hover:underline text-primary text-xs" href="/deliver/deployments">
                          {"Renew"}
                        </a>
                      </div>
                    </div>
                    <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="font-medium text-foreground text-sm truncate">
                          {"payments-api"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                          {"mTLS"}
                        </Badge>
                      </div>
                      <div className="flex gap-2.5 items-center shrink-0">
                        <span className="text-muted-foreground text-xs">
                          {"in"}
                          <span className="font-semibold text-foreground">
                            {"5"}
                            {"d"}
                          </span>
                        </span>
                        <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                        <a className="font-medium hover:underline text-primary text-xs" href="/deliver/deployments">
                          {"Renew"}
                        </a>
                      </div>
                    </div>
                    <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="font-medium text-foreground text-sm truncate">
                          {"edge-cache"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Public"}
                        </Badge>
                      </div>
                      <div className="flex gap-2.5 items-center shrink-0">
                        <span className="text-muted-foreground text-xs">
                          {"in"}
                          <span className="font-semibold text-foreground">
                            {"7"}
                            {"d"}
                          </span>
                        </span>
                        <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                        <a className="font-medium hover:underline text-primary text-xs" href="/deliver/deployments">
                          {"Renew"}
                        </a>
                      </div>
                    </div>
                    <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
                      <div className="flex gap-2.5 items-center min-w-0">
                        <span className="font-medium text-foreground text-sm truncate">
                          {"identity"}
                        </span>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Internal"}
                        </Badge>
                      </div>
                      <div className="flex gap-2.5 items-center shrink-0">
                        <span className="text-muted-foreground text-xs">
                          {"in"}
                          <span className="font-semibold text-foreground">
                            {"21"}
                            {"d"}
                          </span>
                        </span>
                        <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                        <a className="font-medium hover:underline text-primary text-xs" href="/deliver/deployments">
                          {"Renew"}
                        </a>
                      </div>
                    </div>
                  </FramePanel>
                </Frame>
              </div>
            </section>
            <section aria-label="Delivery feature flags">
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-px">
                    <div className="font-semibold text-balance text-sm">
                      {"Delivery feature flags"}
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-pretty text-xs">
                      <span>
                        {"13"}
                        {"flag"}
                        {"s"}
                      </span>
                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"5"}
                        {"live"}
                      </span>
                      <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span>
                        {"4"}
                        {"staged"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center shrink-0">
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                      </svg>
                      {"Reset view"}
                    </Button>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                      </svg>
                      {"New flag"}
                    </Button>
                  </div>
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0! shadow-none!">
                  <div className="px-(--frame-panel-header-px)">
                    <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                      <TabsList className="data-[variant=line]:rounded-none gap-5 group-data-horizontal/tabs:h-8 h-10! p-0! p-[3px] rounded-lg" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:-bottom-[2px]! border border-transparent flex-none font-medium gap-2 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 h-full! has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-0 py-0.5 rounded-md text-sm" type="button" data-active="" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_R_9hln5cq_" compositeItemActive="">
                          <span>
                            {"All"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                            {"13"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:-bottom-[2px]! border border-transparent flex-none font-medium gap-2 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 h-full! has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_hhln5cq_">
                          <span>
                            {"Live"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                            {"5"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:-bottom-[2px]! border border-transparent flex-none font-medium gap-2 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 h-full! has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_phln5cq_">
                          <span>
                            {"Staged"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                            {"4"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:-bottom-[2px]! border border-transparent flex-none font-medium gap-2 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 h-full! has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_11hln5cq_">
                          <span>
                            {"Review"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                            {"2"}
                          </Badge>
                        </TabsTrigger>
                        <TabsTrigger className="[&_svg:not([class*='size-'])]:size-4 after:-bottom-[2px]! border border-transparent flex-none font-medium gap-2 group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-horizontal/tabs:after:bottom-0 h-full! has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 px-0 py-0.5 rounded-md text-sm" type="button" data-orientation="horizontal" activationDirection="none" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_R_19hln5cq_">
                          <span>
                            {"Paused"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm tabular-nums text-xs transition-shadow">
                            {"2"}
                          </Badge>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative" style={{"--data-grid-scrollbar-header-height": "32px", "--data-grid-scrollbar-thumb-height": "247px", "--data-grid-scrollbar-thumb-top": "0px", "--data-grid-scrollbar-track-height": "247px"}}>
                    <DataGridProvider>
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowX="" overflowXEnd="">
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_bhln5cq_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "141px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}} data-has-overflow-x="" data-overflow-x-end="">
                        <div role="presentation" style={{minWidth: "fit-content"}} data-has-overflow-x="" data-overflow-x-end="">
                          <DataGridProvider>
                          <DataGridTableViewport>
                            <DataGridProvider>
                            <DataGridTable>
                              <colgroup>
                                <col style={{width: "30px"}} />
                                <col style={{width: "360px"}} />
                                <col style={{width: "175px"}} />
                                <col style={{width: "150px"}} />
                                <col style={{width: "130px"}} />
                                <col style={{width: "105px"}} />
                                <col style={{width: "125px"}} />
                                <col style={{width: "56px"}} />
                              </colgroup>
                              <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-15">
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "30px"}}>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_12cpdbhln5cq_" aria-checked="false" aria-label="Select all"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "360px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Flag"}
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "175px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Owner"}
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "150px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Readiness"}
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "130px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Stage"}
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "105px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Enabled"}
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "125px"}}>
                                    <div className="-ms-2 flex h-full items-center">
                                      <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground px-2 rounded-md text-secondary-foreground/80 text-sm" type="button" tabIndex="0">
                                        {"Last updated"}
                                        <svg className="size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                                        </svg>
                                      </Button>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "56px"}}></th>
                                </tr>
                              </thead>
                              <DataGridProvider>
                              <DataGridTableBody>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-checkout-canary-routing">
                                  <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5">
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_1155pdbhln5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-3 items-center min-w-0">
                                      <Item className="[&_svg]:size-4 [a]:hover:bg-muted bg-muted border-2 border-background dark:border dark:text-sky-300 gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sky-600 text-sm" variant="default" size="default" aria-hidden="true">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="flex flex-col gap-px min-w-0">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-pointer dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:underline justify-start min-w-0 p-0 rounded-lg text-foreground text-left text-sm underline-offset-4" type="button" tabIndex="0">
                                          <span className="truncate">
                                            {"Checkout canary routing"}
                                          </span>
                                        </Button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="truncate">
                                            {"api-gateway"}
                                          </span>
                                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            {"Canary 10%"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Marcus Webb" loading="lazy" decoding="async" src="/avatars/marcus-webb.jpg"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium line-clamp-1 text-foreground">
                                          {"Marcus Webb"}
                                        </div>
                                        <div className="line-clamp-1 text-muted-foreground text-xs" title="Platform">
                                          {"Platform"}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Rating>
                                      <div className="flex items-center">
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "79.99999999999999%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="text-muted-foreground text-xs w-5">
                                        {"4.8"}
                                      </span>
                                    </Rating>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Staged"}
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_R_655pdbhln5cq_" aria-checked="true" size="sm" aria-label="Toggle Checkout canary routing">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_R_655pdbhln5cqH1_" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" checked />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="text-foreground text-sm">
                                      {"Jul 31, 2026"}
                                    </span>
                                  </td>
                                  <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5">
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Checkout canary routing" aria-haspopup="menu" id="base-ui-_R_1o55pdbhln5cq_" aria-expanded="false">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-edge-failover-router">
                                  <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5">
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_1159pdbhln5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-3 items-center min-w-0">
                                      <Item className="[&_svg]:size-4 [a]:hover:bg-muted bg-muted border-2 border-background dark:border dark:text-violet-300 gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-sm text-violet-600" variant="default" size="default" aria-hidden="true">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="flex flex-col gap-px min-w-0">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-pointer dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:underline justify-start min-w-0 p-0 rounded-lg text-foreground text-left text-sm underline-offset-4" type="button" tabIndex="0">
                                          <span className="truncate">
                                            {"Edge failover router"}
                                          </span>
                                        </Button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="truncate">
                                            {"edge-cache"}
                                          </span>
                                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            {"All tenants"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Amelia Hart" loading="lazy" decoding="async" src="/avatars/amelia-hart.jpg"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-yellow-400 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium line-clamp-1 text-foreground">
                                          {"Amelia Hart"}
                                        </div>
                                        <div className="line-clamp-1 text-muted-foreground text-xs" title="Edge">
                                          {"Edge"}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Rating>
                                      <div className="flex items-center">
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "70.00000000000001%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="text-muted-foreground text-xs w-5">
                                        {"4.7"}
                                      </span>
                                    </Rating>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Live"}
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_R_659pdbhln5cq_" aria-checked="true" size="sm" aria-label="Toggle Edge failover router">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_R_659pdbhln5cqH1_" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" checked />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="text-foreground text-sm">
                                      {"Jul 31, 2026"}
                                    </span>
                                  </td>
                                  <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5">
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Edge failover router" aria-haspopup="menu" id="base-ui-_R_1o59pdbhln5cq_" aria-expanded="false">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-payment-write-guardrail">
                                  <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5">
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115dpdbhln5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-3 items-center min-w-0">
                                      <Item className="[&_svg]:size-4 [a]:hover:bg-muted bg-muted border-2 border-background dark:border dark:text-emerald-300 gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-emerald-600 text-sm" variant="default" size="default" aria-hidden="true">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="flex flex-col gap-px min-w-0">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-pointer dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:underline justify-start min-w-0 p-0 rounded-lg text-foreground text-left text-sm underline-offset-4" type="button" tabIndex="0">
                                          <span className="truncate">
                                            {"Payment write guardrail"}
                                          </span>
                                        </Button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="truncate">
                                            {"payments-api"}
                                          </span>
                                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            {"Safety holdout"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Klara Nowak" loading="lazy" decoding="async" src="/avatars/klara-nowak.jpg"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-red-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium line-clamp-1 text-foreground">
                                          {"Klara Nowak"}
                                        </div>
                                        <div className="line-clamp-1 text-muted-foreground text-xs" title="Identity">
                                          {"Identity"}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Rating>
                                      <div className="flex items-center">
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "29.999999999999982%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="text-muted-foreground text-xs w-5">
                                        {"4.3"}
                                      </span>
                                    </Rating>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Review"}
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_R_65dpdbhln5cq_" aria-checked="false" size="sm" aria-label="Toggle Payment write guardrail">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                                      </Switch>
                                      <input id="base-ui-_R_65dpdbhln5cqH1_" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="text-foreground text-sm">
                                      {"Jul 30, 2026"}
                                    </span>
                                  </td>
                                  <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5">
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Payment write guardrail" aria-haspopup="menu" id="base-ui-_R_1o5dpdbhln5cq_" aria-expanded="false">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-cold-storage-read-path">
                                  <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5">
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115hpdbhln5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-3 items-center min-w-0">
                                      <Item className="[&_svg]:size-4 [a]:hover:bg-muted bg-muted border-2 border-background dark:border dark:text-rose-300 gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-rose-600 text-sm" variant="default" size="default" aria-hidden="true">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="flex flex-col gap-px min-w-0">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-pointer dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:underline justify-start min-w-0 p-0 rounded-lg text-foreground text-left text-sm underline-offset-4" type="button" tabIndex="0">
                                          <span className="truncate">
                                            {"Cold storage read path"}
                                          </span>
                                        </Button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="truncate">
                                            {"orders-db"}
                                          </span>
                                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            {"Cost-capped tenants"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Rafael Duarte" loading="lazy" decoding="async" src="/avatars/rafael-duarte.jpg"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium line-clamp-1 text-foreground">
                                          {"Rafael Duarte"}
                                        </div>
                                        <div className="line-clamp-1 text-muted-foreground text-xs" title="Data">
                                          {"Data"}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Rating>
                                      <div className="flex items-center">
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "89.99999999999999%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="text-muted-foreground text-xs w-5">
                                        {"3.9"}
                                      </span>
                                    </Rating>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-zinc-400 dark:bg-zinc-300 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Paused"}
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_R_65hpdbhln5cq_" aria-checked="false" size="sm" aria-label="Toggle Cold storage read path">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                                      </Switch>
                                      <input id="base-ui-_R_65hpdbhln5cqH1_" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="text-foreground text-sm">
                                      {"Jul 29, 2026"}
                                    </span>
                                  </td>
                                  <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5">
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Cold storage read path" aria-haspopup="menu" id="base-ui-_R_1o5hpdbhln5cq_" aria-expanded="false">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="flag-async-migration-runner">
                                  <td className="align-middle ps-(--frame-panel-px) px-2 py-1.5">
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_115lpdbhln5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-3 items-center min-w-0">
                                      <Item className="[&_svg]:size-4 [a]:hover:bg-muted bg-muted border-2 border-background dark:border dark:text-amber-300 gap-2.5 p-0 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9 text-amber-600 text-sm" variant="default" size="default" aria-hidden="true">
                                        <ItemMedia className="[&_svg:not([class*='size-'])]:size-4 gap-2 group-has-data-[slot=item-description]/item:self-start group-has-data-[slot=item-description]/item:translate-y-0.5 size-auto" variant="icon">
                                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path>
                                          </svg>
                                        </ItemMedia>
                                      </Item>
                                      <div className="flex flex-col gap-px min-w-0">
                                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent cursor-pointer dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-auto has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:underline justify-start min-w-0 p-0 rounded-lg text-foreground text-left text-sm underline-offset-4" type="button" tabIndex="0">
                                          <span className="truncate">
                                            {"Async migration runner"}
                                          </span>
                                        </Button>
                                        <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="truncate">
                                            {"orders-db"}
                                          </span>
                                          <span className="bg-input rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            {"Internal beta"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex gap-2 items-center">
                                      <div className="relative shrink-0">
                                        <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-8" size="default">
                                          <AvatarImage className="rounded-full" alt="Adam Reyes" loading="lazy" decoding="async" src="/avatars/adam-reyes.jpg"></AvatarImage>
                                        </Avatar>
                                        <span className="absolute bg-green-500 bottom-0.5 right-0 ring-2 ring-background rounded-full size-2" aria-hidden="true"></span>
                                      </div>
                                      <div className="min-w-0">
                                        <div className="font-medium line-clamp-1 text-foreground">
                                          {"Adam Reyes"}
                                        </div>
                                        <div className="line-clamp-1 text-muted-foreground text-xs" title="ML Systems">
                                          {"ML Systems"}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <Rating>
                                      <div className="flex items-center">
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="relative">
                                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                          </svg>
                                          <div className="absolute inset-0 overflow-hidden" style={{width: "50%"}}>
                                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                      <span className="text-muted-foreground text-xs w-5">
                                        {"4.5"}
                                      </span>
                                    </Rating>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center min-w-0">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-xs transition-shadow">
                                        <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                        {"Staged"}
                                      </Badge>
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <div className="flex items-center">
                                      <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_R_65lpdbhln5cq_" aria-checked="true" size="sm" aria-label="Toggle Async migration runner">
                                        <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                      </Switch>
                                      <input id="base-ui-_R_65lpdbhln5cqH1_" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" checked />
                                    </div>
                                  </td>
                                  <td className="align-middle px-2 py-1.5">
                                    <span className="text-foreground text-sm">
                                      {"Jul 29, 2026"}
                                    </span>
                                  </td>
                                  <td className="align-middle pe-(--frame-panel-px) px-2 py-1.5">
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Async migration runner" aria-haspopup="menu" id="base-ui-_R_1o5lpdbhln5cq_" aria-expanded="false">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
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
                      <div className="data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:border-s data-[orientation=vertical]:border-s-transparent data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2 flex p-px select-none touch-none transition-colors" data-orientation="horizontal" data-has-overflow-x="" data-overflow-x-end="" data-id="base-ui-_R_bhln5cq_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", insetInlineStart: "0px", insetInlineEnd: "var(--scroll-area-corner-width)", bottom: "0px", "--scroll-area-thumb-width": "864.8275862068965px"}}>
                        <div className="bg-border flex-1 relative rounded-full" data-orientation="horizontal" style={{width: "var(--scroll-area-thumb-width)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                      </div>
                    </DataGridScrollArea>
                    </DataGridProvider>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                    <DataGridProvider>
                    <DataGridPagination>
                      <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                        <div className="text-muted-foreground text-sm">
                          {"Rows per page"}
                        </div>
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_R_2dhln5cq_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            {"5"}
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            {"▼"}
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_R_2dhln5cq_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="5" />
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                        <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                          {"1 - 5 of 13"}
                        </div>
                        <div className="flex items-center order-1 space-x-1">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground p-0 rounded-lg rtl:rotate-180 rtl:transform size-8 text-sm" type="button" disabled="" tabIndex="0" disabled>
                            <span className="sr-only">
                              {"Go to previous page"}
                            </span>
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                            </svg>
                          </Button>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-accent bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground p-0 rounded-lg size-8 text-accent-foreground text-sm" type="button" tabIndex="0">
                            {"1"}
                          </Button>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground p-0 rounded-lg size-8 text-muted-foreground text-sm" type="button" tabIndex="0">
                            {"2"}
                          </Button>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground p-0 rounded-lg size-8 text-muted-foreground text-sm" type="button" tabIndex="0">
                            {"3"}
                          </Button>
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground p-0 rounded-lg rtl:rotate-180 rtl:transform size-8 text-sm" type="button" tabIndex="0">
                            <span className="sr-only">
                              {"Go to next page"}
                            </span>
                            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
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
    </SidebarProvider>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      {"AUG"}
    </span>
  </>
  )
}
