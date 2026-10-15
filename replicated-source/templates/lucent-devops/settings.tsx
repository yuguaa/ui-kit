import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
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
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
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
                      <SidebarMenuButton className="active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-sm transition-[width,height,padding]" type="button" id="base-ui-_R_1laal5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-pipelines">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                        </svg>
                        <span>
                          Delivery
                        </span>
                        <svg className="duration-200 ml-auto opacity-60 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                        </svg>
                      </SidebarMenuButton>
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
                      <SidebarMenuButton className="active active:bg-sidebar-accent active:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground focus-visible:ring-2 gap-2 group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:size-8! group-has-data-[sidebar=menu-action]/menu-item:pr-8 h-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground p-2 ring-sidebar-ring rounded-md text-left text-xs transition-[width,height,padding]" id="base-ui-_R_1nql5cq_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm" href="/settings" status="active" aria-current="page" data-active="">
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
                  <BreadcrumbItem className="gap-1 min-w-0">
                    <BreadcrumbPage className="font-normal text-foreground truncate" role="link" aria-disabled="true" aria-current="page">
                      Settings
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
              Settings
            </h1>
            <section aria-label="General settings">
              <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)] w-full">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
                  <div className="font-semibold text-sm">
                    General Settings
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Core app preferences.
                  </div>
                </header>
                <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0">
                  <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-0">
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-project-name">
                            Project name
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          The display name for this workspace across the console.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-transparent border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:disabled:bg-input/80 disabled:bg-input/50 file:font-medium file:h-6 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 h-8 md:text-sm px-2.5 py-1 rounded-lg text-base transition-colors" id="settings-3-project-name" value="Delivery Console"></Input>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-api-endpoint">
                            API endpoint
                          </FieldLabel>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                            Required
                          </Badge>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Set the base URL for your project API.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <InputGroup className="border border-input dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 dark:has-disabled:bg-input/80 h-8 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-disabled:bg-input/50 has-disabled:opacity-50 in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 rounded-lg transition-colors" role="group">
                          <InputGroupAddon className="[&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4 font-medium gap-2 group-data-[disabled=true]/input-group:opacity-50 h-auto has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem] pl-2 py-1.5 text-muted-foreground text-sm" role="group" data-align="inline-start">
                            <span className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none flex gap-2 items-center text-muted-foreground text-sm">
                              https://
                            </span>
                          </InputGroupAddon>
                          <input className="aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 bg-transparent border-0 border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:disabled:bg-transparent disabled:bg-transparent disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:font-medium file:h-6 file:inline-flex file:text-foreground file:text-sm flex-1 focus-visible:border-ring focus-visible:ring-0 focus-visible:ring-ring/50 h-8 md:text-sm min-w-0 outline-none placeholder:text-muted-foreground px-2.5 py-1 ring-0 rounded-none shadow-none text-base transition-colors w-full" id="settings-3-api-endpoint" value="api.delivery.internal" />
                        </InputGroup>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-start-of-week">
                            Start of week
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Choose which day marks the start of your week.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <Select>
                        <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="settings-3-start-of-week" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue className="flex flex-1 text-left">
                            Monday
                          </SelectValue>
                          <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input id="base-ui-_r_1i_-hidden-input" tabIndex="-1" aria-hidden="true" value="monday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                            Allowed origins
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Define the trusted domains for CORS requests.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                            </svg>
                            Add origin
                          </Button>
                          <input className="sr-only" accept=".txt,.csv,.json" tabIndex="-1" type="file" />
                          <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"></path>
                            </svg>
                            Import from file
                          </Button>
                        </div>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                            Accent color
                          </FieldLabel>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-primary transition-shadow">
                            Upgrade to Team
                          </Badge>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Select a color to represent your brand.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <FieldSet className="gap-0 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Accent color
                          </FieldLegend>
                          <div className="flex gap-3 items-center">
                            <button className="flex items-center justify-center ring-2 ring-offset-2 ring-offset-background ring-ring rounded-full size-7 transition-shadow" type="button" aria-label="Slate" style={{backgroundColor: "rgb(100, 116, 139)"}}>
                              <svg className="size-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                              </svg>
                            </button>
                            <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Rose" style={{backgroundColor: "rgb(244, 63, 94)"}}></button>
                            <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Orange" style={{backgroundColor: "rgb(249, 115, 22)"}}></button>
                            <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Violet" style={{backgroundColor: "rgb(139, 92, 246)"}}></button>
                            <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Emerald" style={{backgroundColor: "rgb(16, 185, 129)"}}></button>
                            <button className="flex items-center justify-center rounded-full size-7 transition-shadow" type="button" aria-label="Sky" style={{backgroundColor: "rgb(14, 165, 233)"}}></button>
                          </div>
                        </FieldSet>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                            Region & currency
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Adjust your regional preferences and currency.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-[22rem] gap-0.5 min-w-0">
                        <FieldSet className="gap-3 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 w-full">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Region and currency
                          </FieldLegend>
                          <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                            Regional and financial formatting preferences.
                          </FieldDescription>
                          <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-3">
                            <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-region">
                                Region
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="settings-3-region" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
                                </svg>
                                <SelectValue className="flex flex-1 text-left">
                                  United States
                                </SelectValue>
                                <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  ▼
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_1l_-hidden-input" tabIndex="-1" aria-hidden="true" value="us" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                            <Field className="data-[invalid=true]:text-destructive gap-2" role="group" data-orientation="vertical">
                              <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-currency">
                                Currency
                              </FieldLabel>
                              <Select>
                              <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-full" type="button" tabIndex="0" id="settings-3-currency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <SelectValue className="flex flex-1 text-left">
                                  USD · US Dollar
                                </SelectValue>
                                <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m6 9 6 6 6-6"></path>
                                  ▼
                                </svg>
                              </SelectTrigger>
                              </Select>
                              <input id="base-ui-_r_1o_-hidden-input" tabIndex="-1" aria-hidden="true" value="usd" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                            Date display format
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Choose your preferred format for dates.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-78 gap-0.5 min-w-0">
                        <ToggleGroup className="data-[size=sm]:rounded-[min(var(--radius-md),10px)] rounded-lg" data-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Date display format" style={{"--gap": "2"}}>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] transition-all whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                            MM/DD/YYYY
                          </ToggleGroupItem>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                            DD/MM/YYYY
                          </ToggleGroupItem>
                          <ToggleGroupItem className="[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted bg-transparent border border-input dark:aria-invalid:ring-destructive/40 data-[state=on]:bg-muted disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-[spacing=0]/toggle-group:px-2 group-data-[spacing=0]/toggle-group:rounded-none group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group/toggle h-7 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 hover:bg-muted hover:text-foreground inline-flex items-center justify-center min-w-7 outline-none px-2.5 rounded-[min(var(--radius-md),12px)] text-[0.8rem] transition-all whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
                            YYYY/MM/DD
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </FieldContent>
                    </Field>
                    <FieldSeparator className="-my-2 group-data-[variant=outline]/field-group:-mb-2 h-5 text-sm" content="false">
                      <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                    </FieldSeparator>
                    <Field className="data-[invalid=true]:text-destructive gap-4 px-4 py-4" role="group" data-orientation="responsive">
                      <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="font-medium gap-2 group-data-[disabled=true]/field:opacity-50 items-center text-sm">
                            Interface preferences
                          </FieldLabel>
                        </div>
                        <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                          Adjust your editing environment and display options.
                        </FieldDescription>
                      </div>
                      <FieldContent className="@md/field-group:w-[22rem] gap-0.5 min-w-0">
                        <FieldSet className="gap-3 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3 w-full">
                          <FieldLegend className="data-[variant=label]:text-sm data-[variant=legend]:text-base font-medium mb-1.5 sr-only" variant="legend">
                            Interface preferences
                          </FieldLegend>
                          <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 sr-only text-left text-muted-foreground text-sm">
                            Configure editing behavior and interface density.
                          </FieldDescription>
                          <FieldGroup className="*:data-[slot=field-group]:gap-4 data-[slot=checkbox-group]:gap-3 gap-3">
                            <Field className="data-[invalid=true]:text-destructive gap-3" role="group" data-orientation="horizontal">
                              <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 mt-0.5 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_1u_" aria-checked="true" size="default" aria-labelledby="settings-3-keyboard-shortcuts-label">
                                <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="settings-3-keyboard-shortcuts" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldContent className="gap-0.5">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-keyboard-shortcuts" id="settings-3-keyboard-shortcuts-label">
                                  Enable keyboard shortcuts.
                                </FieldLabel>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                                  Use shortcuts to speed up your workflow.
                                </FieldDescription>
                              </FieldContent>
                            </Field>
                            <Field className="data-[invalid=true]:text-destructive gap-3" role="group" data-orientation="horizontal">
                              <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 mt-0.5 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_21_" aria-checked="true" size="default" aria-labelledby="settings-3-spellcheck-label">
                                <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                              </Switch>
                              <input id="settings-3-spellcheck" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldContent className="gap-0.5">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-spellcheck" id="settings-3-spellcheck-label">
                                  Auto spell-check.
                                </FieldLabel>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                                  Highlight spelling errors in text fields.
                                </FieldDescription>
                              </FieldContent>
                            </Field>
                            <Field className="data-[invalid=true]:text-destructive gap-3" role="group" data-orientation="horizontal">
                              <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 mt-0.5 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" size="default" aria-labelledby="settings-3-compact-mode-label">
                                <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="settings-3-compact-mode" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldContent className="gap-0.5">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-compact-mode" id="settings-3-compact-mode-label">
                                  Compact Mode.
                                </FieldLabel>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                                  Reduce spacing for a denser interface layout.
                                </FieldDescription>
                              </FieldContent>
                            </Field>
                            <Field className="data-[invalid=true]:text-destructive gap-3" role="group" data-orientation="horizontal">
                              <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 mt-0.5 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_27_" aria-checked="false" size="default" aria-labelledby="settings-3-animations-label">
                                <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                              </Switch>
                              <input id="settings-3-animations" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              <FieldContent className="gap-0.5">
                                <FieldLabel className="*:data-[slot=field]:p-2.5 dark:has-data-checked:bg-primary/10 dark:has-data-checked:border-primary/20 font-medium gap-2 group-data-[disabled=true]/field:opacity-50 group-data-[disabled=true]:opacity-50 group-data-[disabled=true]:pointer-events-none has-[>[data-slot=field]]:border has-[>[data-slot=field]]:rounded-lg has-data-checked:bg-primary/5 has-data-checked:border-primary/30 items-center leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-50 select-none text-sm" htmlFor="settings-3-animations" id="settings-3-animations-label">
                                  Reduce animations.
                                </FieldLabel>
                                <FieldDescription className="[[data-variant=legend]+&]:-mt-1.5 text-left text-muted-foreground text-xs">
                                  Minimize motion effects throughout the UI.
                                </FieldDescription>
                              </FieldContent>
                            </Field>
                          </FieldGroup>
                        </FieldSet>
                      </FieldContent>
                    </Field>
                  </FieldGroup>
                </FramePanel>
                <footer className="flex flex-row gap-3 justify-end px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-muted hover:text-foreground px-2.5 rounded-lg text-sm" type="button" tabIndex="0">
                    Reset
                  </Button>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding bg-primary border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-1.5 h-8 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 hover:bg-primary/80 px-2.5 rounded-lg text-primary-foreground text-sm" type="button" tabIndex="0">
                    Save changes
                  </Button>
                </footer>
              </Frame>
            </section>
            <section aria-label="Notification rules">
              <div className="@container flex flex-col gap-5 max-w-7xl mx-auto text-foreground w-full">
                <h1 className="sr-only">
                  Settings
                </h1>
                <section aria-label="Notification rules">
                  <div className="space-y-5 w-full">
                    <div className="space-y-0.5">
                      <h2 className="font-semibold text-xl">
                        Notification rules
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Choose what reaches you, through which channel, and when.
                      </p>
                    </div>
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)]" spacing="sm">
                      <Collapsible data-open="">
                        <Collapsible>
                        <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_2b_" aria-expanded="true">
                          <header className="flex flex-row gap-2 grow items-center justify-between px-4 py-2">
                            <div className="font-semibold text-sm">
                              Alert delivery
                            </div>
                            <svg className="in-data-open:rotate-90 mr-2 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                          </header>
                        </CollapsibleTrigger>
                        </Collapsible>
                        <CollapsibleContent data-open="" id="base-ui-_r_2b_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                          <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                            <div>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Where alerts arrive
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Choose the channel critical events are sent to.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-40" type="button" tabIndex="0" id="base-ui-_r_2c_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Where alerts arrive">
                                    <SelectValue className="flex flex-1 text-left">
                                      In-app and pager
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_2c_-hidden-input" tabIndex="-1" aria-hidden="true" value="pager" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Digest cadence
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    How often non-critical events are batched.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-40" type="button" tabIndex="0" id="base-ui-_r_2f_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Digest cadence">
                                    <SelectValue className="flex flex-1 text-left">
                                      Hourly
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_2f_-hidden-input" tabIndex="-1" aria-hidden="true" value="hourly" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Quiet hours
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Hold non-critical alerts outside working hours.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-40" type="button" tabIndex="0" id="base-ui-_r_2i_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Quiet hours">
                                    <SelectValue className="flex flex-1 text-left">
                                      22:00 to 07:00
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_2i_-hidden-input" tabIndex="-1" aria-hidden="true" value="night" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Page on critical
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                      Recommended
                                    </Badge>
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Break through quiet hours for a failed production deploy.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_2l_" aria-checked="true" size="default" aria-label="Page on critical">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_2m_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Group by service
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-focus-foreground transition-shadow">
                                      Feed
                                    </Badge>
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Collapse repeated events from the same service.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_2o_" aria-checked="true" size="default" aria-label="Group by service">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_2p_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                          </FramePanel>
                        </CollapsibleContent>
                      </Collapsible>
                    </Frame>
                    <Frame className="(--radius-2xl)] (--radius-lg)] (--radius-none)] (--radius-xl)] (0.5)] (1)] (1.25)] (1.5)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-[var(--frame-border-color)] [&_[data-slot=frame-panel-header]:not(:has(+[data-slot=frame-panel]))]:border-b [--frame-panel-footer-px:calc(var(--frame-panel-footer-px-base)_+_var(--frame-panel-footer-px-adjust))] [--frame-panel-footer-py:calc(var(--frame-panel-footer-py-base)_+_var(--frame-panel-footer-py-adjust))] [--frame-panel-header-px:calc(var(--frame-panel-header-px-base)_+_var(--frame-panel-header-px-adjust))] [--frame-panel-header-py:calc(var(--frame-panel-header-py-base)_+_var(--frame-panel-header-py-adjust))] [--frame-panel-px:calc(var(--frame-panel-px-base)_+_var(--frame-panel-px-adjust))] [--frame-panel-py:calc(var(--frame-panel-py-base)_+_var(--frame-panel-py-adjust))] [--frame-radius:var(--radius-xl)]" spacing="sm">
                      <Collapsible data-open="">
                        <Collapsible>
                        <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_2r_" aria-expanded="true">
                          <header className="flex flex-row gap-2 grow items-center justify-between px-4 py-2">
                            <div className="font-semibold text-sm">
                              Subscriptions
                            </div>
                            <svg className="in-data-open:rotate-90 mr-2 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                            </svg>
                          </header>
                        </CollapsibleTrigger>
                        </Collapsible>
                        <CollapsibleContent data-open="" id="base-ui-_r_2r_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                          <FramePanel className="before:rounded-[calc(var(--frame-panel-radius)_-_1px)] p-0!">
                            <div>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    What you are watching
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                                      Personal
                                    </Badge>
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Limit the feed to the services you own.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-40" type="button" tabIndex="0" id="base-ui-_r_2s_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="What you are watching">
                                    <SelectValue className="flex flex-1 text-left">
                                      Services I own
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_2s_-hidden-input" tabIndex="-1" aria-hidden="true" value="owned" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Environments
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Which environments generate notifications.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Select>
                                  <SelectTrigger className="*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background border border-input dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50 data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 gap-1.5 pl-2.5 pr-2 py-2 rounded-lg select-none text-sm transition-colors w-40" type="button" tabIndex="0" id="base-ui-_r_2v_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Environments">
                                    <SelectValue className="flex flex-1 text-left">
                                      Production only
                                    </SelectValue>
                                    <svg className="lucide lucide-chevron-down pointer-events-none size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      ▼
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_2v_-hidden-input" tabIndex="-1" aria-hidden="true" value="prod" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Feature flag changes
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                                      Noisy
                                    </Badge>
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Notify when a flag reaches a new rollout stage.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" unchecked="" role="switch" tabIndex="0" id="base-ui-_r_32_" aria-checked="false" size="default" aria-label="Feature flag changes">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-unchecked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_33_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                            <div>
                              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-2.5 px-4 py-2.5 rounded-lg text-sm" variant="default" size="default">
                                <ItemContent className="gap-1 group-data-[size=xs]/item:gap-0">
                                  <ItemTitle className="font-medium gap-2 leading-snug text-sm underline-offset-4">
                                    Certificate expiry
                                  </ItemTitle>
                                  <ItemDescription className="group-data-[size=xs]/item:text-xs leading-normal text-left text-muted-foreground text-sm">
                                    Warn ahead of every managed certificate renewal.
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2">
                                  <Switch className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-unchecked:bg-input/80 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] data-checked:bg-primary data-unchecked:bg-input focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 rounded-full shrink-0" checked="" role="switch" tabIndex="0" id="base-ui-_r_35_" aria-checked="true" size="default" aria-label="Certificate expiry">
                                    <span className="bg-background block dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:size-3 pointer-events-none ring-0 rounded-full transition-transform" data-checked=""></span>
                                  </Switch>
                                  <input id="base-ui-_r_36_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </ItemActions>
                              </Item>
                            </div>
                          </FramePanel>
                        </CollapsibleContent>
                      </Collapsible>
                    </Frame>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </SidebarInset>
    </div>
    <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
    <span id="recharts_measurement_span" aria-hidden="true" style={{position: "absolute", top: "-20000px", left: "0px", padding: "0px", margin: "0px", borderWidth: "medium", borderStyle: "none", borderColor: "currentcolor", borderImage: "none", whiteSpace: "pre", fontSize: "12px", letterSpacing: "normal"}}>
      AUG
    </span>
  </>
  )
}
