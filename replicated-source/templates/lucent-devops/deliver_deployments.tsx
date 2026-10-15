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
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
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
import { InputGroup } from "@/registry/bases/base/ui/input-group"
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
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
                      DevOps
                    </div>
                    <svg className="ml-auto opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0 no-scrollbar" sidebar="content">
              <SidebarGroup className="p-2" sidebar="group">
                <SidebarGroupLabel className="[&>svg]:size-4 duration-200 ease-linear focus-visible:ring-2 font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity]" sidebar="group-label">
                  Workspace
                </SidebarGroupLabel>
                <SidebarGroupContent className="text-sm" sidebar="group-content">
                  <SidebarMenu className="gap-0 gap-1!" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" id="base-ui-_R_d6al5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                        </svg>
                        <span>
                          Overview
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1laal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" aria-expanded="true" aria-controls="subnav-pipelines">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                        </svg>
                        <span>
                          Delivery
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                      <SidebarMenuSub className="border-l border-sidebar-border gap-1 group-data-[collapsible=icon]:hidden mx-3.5 px-2.5 py-0.5 translate-x-px" sidebar="menu-sub" id="subnav-pipelines">
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" data-active="" href="/deliver/deployments" status="active" aria-current="page">
                            <span>
                              Deployments
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/deliver/pipelines">
                            <span>
                              Pipelines
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton className="[&>svg]:size-4 [&>svg]:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 ring-sidebar-ring rounded-md text-sidebar-foreground" sidebar="menu-sub-button" size="md" href="/deliver/on-call">
                            <span>
                              On-call
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1leal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-infrastructure">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"></path>
                        </svg>
                        <span>
                          Infrastructure
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lial5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-observability">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
                        </svg>
                        <span>
                          Observability
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1lmal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-security">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"></path>
                        </svg>
                        <span>
                          Reliability
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden p-2" sidebar="group">
                <SidebarGroupLabel className="[&>svg]:size-4 cursor-pointer duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring font-medium group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 h-8 px-2 ring-sidebar-ring rounded-md text-sidebar-foreground/70 text-xs transition-[margin,opacity] w-full" aria-expanded="true" aria-controls="pinned-resources-list" sidebar="group-label">
                  Services
                  <svg className="duration-200 ml-auto opacity-60 rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                </SidebarGroupLabel>
                <SidebarGroupContent className="text-sm" sidebar="group-content" id="pinned-resources-list">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="api-gateway, Degraded. Open service details">
                        <span className="bg-warning ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          api-gateway
                        </span>
                        <span className="sr-only">
                          Degraded
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for api-gateway" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1omil5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="recommender, Healthy. Open service details">
                        <span className="bg-success ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          recommender
                        </span>
                        <span className="sr-only">
                          Healthy
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for recommender" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1p6il5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="orders-db, Down. Open service details">
                        <span className="bg-destructive ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          orders-db
                        </span>
                        <span className="sr-only">
                          Down
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for orders-db" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1pmil5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" sidebar="menu-button" size="default" aria-label="edge-cache, Healthy. Open service details">
                        <span className="bg-success ml-1.5 mr-1 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        <span className="min-w-0 truncate">
                          edge-cache
                        </span>
                        <span className="sr-only">
                          Healthy
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 [&>svg]:size-4 absolute after:-inset-2 after:absolute aria-expanded:opacity-100 aspect-square flex focus-visible:ring-2 group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center justify-center md:after:hidden md:opacity-0 outline-hidden p-0 peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground right-1 ring-sidebar-ring rounded-md text-sidebar-foreground top-1.5 transition-transform w-5" type="button" sidebar="menu-action" aria-label="Actions for edge-cache" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1q6il5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <div className="mt-auto">
                <SidebarGroup className="p-2" sidebar="group">
                  <SidebarMenu className="gap-0" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1lql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/integrations">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"></path>
                        </svg>
                        <span>
                          Integrations
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1mql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/security">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"></path>
                        </svg>
                        <span>
                          Security
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1nql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                        </svg>
                        <span>
                          Settings
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
                  <DropdownMenuTrigger className="[&>span:last-child]:truncate [&_svg]:shrink-0 [&_svg]:size-4 active:bg-sidebar-accent active:text-sidebar-accent-foreground aria-disabled:opacity-50 aria-disabled:pointer-events-none bg-background border border-border data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground disabled:opacity-50 disabled:pointer-events-none flex focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 group/menu-button h-auto hover:bg-sidebar-accent hover:text-sidebar-accent-foreground items-center outline-hidden overflow-hidden p-1.5 peer/menu-button ring-sidebar-ring rounded-lg shadow-black/5 shadow-sm shrink-0 text-left text-sm transition-[width,height,padding] w-full" type="button" sidebar="menu-button" size="sm" aria-label="Open user menu" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_3bl5cq_" aria-expanded="false">
                    <Avatar className="after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 duration-300 ease-in-out in-data-[state=collapsed]:size-7! rounded-full size-6 transition-all" size="default">
                      <AvatarImage className="rounded-full" alt="Tomas Okonkwo" src="/avatars/tomas-okonkwo.jpg"></AvatarImage>
                    </Avatar>
                    <div className="flex-1 grid group-data-[collapsible=icon]:hidden leading-tight min-w-0 text-left text-sm">
                      <span className="font-semibold truncate">
                        Tomas Okonkwo
                      </span>
                    </div>
                    <svg className="group-data-[collapsible=icon]:hidden ml-auto mr-1 opacity-50 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
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
      <SidebarInset className="bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm">
        <header className="bg-background border-b border-border flex h-12 items-center px-4 shrink-0 sticky top-0 w-full z-20">
          <div className="flex gap-2 items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex gap-2 items-center min-w-0">
              <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center md:hidden outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  Toggle Sidebar
                </span>
              </SidebarTrigger>
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
                  <BreadcrumbItem className="gap-1 max-md:hidden min-w-0">
                    <BreadcrumbLink className="flex hover:text-foreground items-center md:gap-1.5 transition-colors" href="/">
                      <svg className="size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                      </svg>
                      <span className="hidden md:block">
                        Home
                      </span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 max-md:hidden" role="presentation" aria-hidden="true">
                    /
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1 max-md:hidden min-w-0">
                    <BreadcrumbPage className="font-normal text-muted-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                      Delivery
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:size-3.5 max-md:hidden" role="presentation" aria-hidden="true">
                    /
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="gap-1 min-w-0">
                    <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                      Deployments
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
                  Search or jump to...
                </span>
                <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-5 in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background max-md:hidden min-w-5 ml-auto px-1 rounded-sm text-muted-foreground text-xs w-fit">
                  ⌘K
                </Kbd>
              </Button>
              <DialogHeader className="gap-2 sr-only">
                <DialogTitle className="font-heading font-medium leading-none text-base" id="base-ui-_R_5m6f5cq_">
                  Search
                </DialogTitle>
                <DialogDescription className="*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3 text-muted-foreground text-sm" id="base-ui-_R_9m6f5cq_">
                  Search or jump to anything in your workspace.
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
                        +
                        7
                      </span>
                      <span className="max-md:hidden">
                        +
                        5
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
                    Invite
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
              Deployments
            </h1>
            <section aria-label="Deployments ledger">
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full" spacing="sm">
                <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <div className="flex flex-col gap-0.5">
                    <div className="font-semibold text-balance text-sm">
                      Deployments
                    </div>
                    <div className="text-muted-foreground text-pretty text-xs">
                      Delivery ledger (releases / rollbacks)
                    </div>
                  </div>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                    </svg>
                    New deployment
                  </Button>
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0! shadow-none!">
                  <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-2.5">
                    <div className="flex flex-wrap gap-2.5 items-center">
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Filters" aria-haspopup="menu" id="base-ui-_R_3dcpn5cq_" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"></path>
                        </svg>
                        Filters
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                      <ButtonGroup className="[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg" role="group">
                        <div className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none bg-background border dark:bg-input/30 flex font-medium gap-2 items-center px-2.5 rounded-lg text-sm">
                          <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"></path>
                          </svg>
                          Deployment
                        </div>
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 group/button h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none px-2.5 rounded-lg select-none shrink-0 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_1llcpn5cq_" aria-expanded="false">
                          contains
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors w-44" role="group">
                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="base-ui-_R_17lcpn5cq_" type="text" aria-invalid="false" placeholder="Search..." value="" />
                        </InputGroup>
                        <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium hover:bg-muted hover:text-foreground rounded-lg size-8 text-sm" type="button" tabIndex="0">
                          <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                      </svg>
                      Clear
                    </Button>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="relative">
                    <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                      <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_R_1spn5cq_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                        <div role="presentation" style={{minWidth: "fit-content"}}>
                          <DataGridTableViewport style={{width: "calc(990px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "0px"}}>
                            <DataGridTable style={{"--header-id-size": "35", "--col-id-size": "35", "--header-deployment-size": "225", "--col-deployment-size": "225", "--header-service-size": "200", "--col-service-size": "200", "--header-triggeredBy-size": "170", "--col-triggeredBy-size": "170", "--header-environment-size": "120", "--col-environment-size": "120", "--header-duration-size": "100", "--col-duration-size": "100", "--header-status-size": "90", "--col-status-size": "90", "--header-actions-size": "50", "--col-actions-size": "50", width: "calc(990px + var(--data-grid-fill-size, 0px))"}}>
                              <colgroup>
                                <col style={{width: "calc(var(--col-id-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-deployment-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-service-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-environment-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-duration-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-status-size) * 1px)"}} />
                                <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                                <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                              </colgroup>
                              <thead>
                                <tr className="[&>th]:border-b bg-transparent">
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-id-size) * 1px)"}}>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_49j5lspn5cq_" aria-checked="false" aria-label="Select all"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="descending" style={{width: "calc(var(--header-deployment-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6khj5lspn5cq_" aria-expanded="false">
                                        Deployment
                                        <svg className="size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-service-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6kpj5lspn5cq_" aria-expanded="false">
                                        Service
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-triggeredBy-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6l1j5lspn5cq_" aria-expanded="false">
                                        Triggered by
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-environment-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6l9j5lspn5cq_" aria-expanded="false">
                                        Environment
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-duration-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lhj5lspn5cq_" aria-expanded="false">
                                        Duration
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                    <div className="-end-2 absolute before:-translate-x-px before:absolute before:bg-border before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center top-0 touch-none user-select-none w-5 z-10"></div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-status-size) * 1px)"}}>
                                    <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-normal gap-1.5 group/button h-6 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 rounded-md select-none shrink-0 text-secondary-foreground/80 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_R_6lpj5lspn5cq_" aria-expanded="false">
                                        Status
                                        <svg className="mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </th>
                                  <th className="[&:has([role=checkbox])]:pe-0 [&:not([data-pinned]):has(+[data-pinned])_div.cursor-col-resize:last-child]:opacity-0 [&[data-last-col=left]_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right]:last-child_div.cursor-col-resize:last-child]:opacity-0 [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-outer-pinned-col:bg-clip-padding data-pinned:bg-muted data-pinned:isolate first:ps-(--frame-panel-header-px) font-medium h-8 last:pe-(--frame-panel-header-px) px-2 relative rtl:text-right text-foreground text-left" scope="col" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                                  <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                                </tr>
                              </thead>
                              <DataGridTableBody>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_001">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_898n5lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0148 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0148
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 31, 09:14 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          api-gateway
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v2.14.0
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Edge & routing
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/marcus-webb.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Marcus Webb
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Platform
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Production
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      4m 12s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m18n5lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_002">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89975lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0147 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0147
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 31, 08:02 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          orders-db
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            migration 0142
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Data platform
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/rafael-duarte.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Rafael Duarte
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Data
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Production
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      10m 11s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Running
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1975lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_003">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_899n5lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0146 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0146
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 30, 17:41 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          recommender
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v0.8.0
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Model serving
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/adam-reyes.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Adam Reyes
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        ML Systems
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Canary
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      7m 08s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m19n5lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_004">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89a75lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0145 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0145
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 30, 14:26 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          edge-cache
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v3.2.1
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Edge & routing
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/amelia-hart.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Amelia Hart
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Edge
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      Staging
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums text-success">
                                      1m 36s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1a75lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_005">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89an5lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0144 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0144
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 30, 11:08 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          identity
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v1.9.3
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Access control
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/klara-nowak.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Klara Nowak
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Identity
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Production
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      2m 53s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Failed
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1an5lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_006">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89b75lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0143 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0143
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 29, 19:35 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          payments-api
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v2.6.4
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Billing core
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/mei-watanabe.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Mei Watanabe
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Payments
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Production
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      5m 34s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1b75lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_007">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89bn5lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0142 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0142
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 29, 15:12 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          notify-worker
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v1.3.9
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Messaging
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/leila-haddad.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Leila Haddad
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Messaging
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      Staging
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      3m 34s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-info-foreground text-xs transition-shadow">
                                      Rolled back
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1bn5lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_008">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89c75lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0141 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0141
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 29, 10:47 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          search-index
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v5.1.0
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Search platform
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/sofia-brandt.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Sofia Brandt
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Search
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-foreground text-xs transition-shadow">
                                      Preview
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums text-success">
                                      2m 38s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1c75lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_009">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89cn5lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0140 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0140
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 28, 16:20 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          media-proxy
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v0.14.2
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Media pipeline
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/theo-morales.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Theo Morales
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Media
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Canary
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums">
                                      8m 07s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-warning-foreground text-xs transition-shadow">
                                      Running
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1cn5lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                        </svg>
                                      </DropdownMenuTrigger>
                                      </DropdownMenu>
                                    </div>
                                  </td>
                                  <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                                </tr>
                                <tr className="*:first:relative [&:not(:last-child)>td]:border-b [*:has(>[data-slot=data-grid]+[data-slot=data-grid-pagination])_[data-slot=data-grid]_&:last-child>td]:border-b [tbody:has(+tfoot)_&:last-child>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="dep_010">
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-id-size) * 1px)"}}>
                                    <div className="absolute bg-primary bottom-0 hidden inset-s-0 top-0 w-[2px]"></div>
                                    <Checkbox className="align-[inherit] aria-invalid:aria-checked:border-primary aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:data-checked:bg-primary data-checked:bg-primary data-checked:border-primary data-checked:text-primary-foreground flex focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 group-has-disabled/field:opacity-50 items-center justify-center rounded-[4px] size-4 transition-colors" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_R_89d75lspn5cq_" aria-checked="false" aria-label="Select row"></Checkbox>
                                    <input style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" type="checkbox" aria-hidden="true" />
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-deployment-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <button className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring font-medium font-mono gap-1 group/ref hover:text-primary inline-flex items-center min-w-0 rounded-sm text-foreground text-xs transition-colors truncate" type="button" aria-label="Open DEP-2026-0139 details">
                                        <span className="border-b border-transparent group-hover/ref:border-primary py-0.25 transition-colors">
                                          DEP-2026-0139
                                        </span>
                                        <svg className="-translate-x-1 group-hover/ref:opacity-100 group-hover/ref:translate-x-0 opacity-0 shrink-0 size-3 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                        </svg>
                                      </button>
                                      <span className="text-muted-foreground text-xs">
                                        Jul 28, 09:03 UTC
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-service-size) * 1px)"}}>
                                    <div className="flex gap-2.5 items-center">
                                      <IconTile className="[--icon-tile-radius:min(var(--radius-md),calc(var(--icon-tile-size)/3))] rounded-(--icon-tile-radius)" variant="elevated" size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                                        </svg>
                                      </IconTile>
                                      <div className="flex flex-col gap-0.5 min-w-0">
                                        <span className="font-medium text-foreground text-sm truncate">
                                          audit-log
                                        </span>
                                        <span className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-xs">
                                          <span className="shrink-0 tabular-nums">
                                            v1.0.7
                                          </span>
                                          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                          <span className="truncate">
                                            Access control
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-triggeredBy-size) * 1px)"}}>
                                    <div className="flex flex-col gap-0.5 min-w-0">
                                      <div className="flex gap-1.5 items-center min-w-0">
                                        <img className="object-cover rounded-full shrink-0 size-4" src="/avatars/kofi-mensah.jpg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                                        <span className="font-medium line-clamp-1 text-foreground text-sm">
                                          Kofi Mensah
                                        </span>
                                      </div>
                                      <span className="line-clamp-1 tabular-nums text-muted-foreground text-xs">
                                        Compliance
                                      </span>
                                    </div>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-environment-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-destructive-foreground text-xs transition-shadow">
                                      Production
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5 truncate" style={{width: "calc(var(--col-duration-size) * 1px)"}}>
                                    <span className="font-medium tabular-nums text-success">
                                      2m 01s
                                    </span>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate px-2 py-1.5" style={{width: "calc(var(--col-status-size) * 1px)"}}>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-sm text-success-foreground text-xs transition-shadow">
                                      Succeeded
                                    </Badge>
                                  </td>
                                  <td className="[&[data-pinned=left][data-last-col=left]]:shadow-[inset_-1px_0_0_0_var(--border)] [&[data-pinned=right][data-last-col=right]]:shadow-[inset_1px_0_0_0_var(--border)] align-middle data-pinned:bg-background data-pinned:isolate first:ps-(--frame-panel-header-px) last:pe-(--frame-panel-header-px) px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                                    <div className="flex justify-end">
                                      <DropdownMenu>
                                      <DropdownMenuTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-lg select-none shrink-0 size-8 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Deployment actions" aria-haspopup="menu" id="base-ui-_R_1m1d75lspn5cq_" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
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
                    </DataGridScrollArea>
                  </div>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <DataGridPagination>
                    <div className="flex flex-wrap items-center order-2 pb-2.5 sm:order-1 sm:pb-0 space-x-2.5">
                      <div className="text-muted-foreground text-sm">
                        Rows per page
                      </div>
                      <Select>
                      <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-16" type="button" tabIndex="0" id="base-ui-_R_2epn5cq_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                        <SelectValue className="flex flex-1 text-left">
                          10
                        </SelectValue>
                        <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          ▼
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_R_2epn5cq_-hidden-input" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0", padding: "0", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0", left: "0"}} tabIndex="-1" aria-hidden="true" value="10" />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
                      <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                        1 - 10 of 10
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
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
  </>
  )
}
