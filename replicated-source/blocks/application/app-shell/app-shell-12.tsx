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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar-border:transparent] [--sidebar:color-mix(in_oklab,var(--color-sidebar)_60%,transparent)] flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "240px", "--sidebar-width-icon": "3rem"}}>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <SidebarHeader className="pb-0" sidebar="header">
              <SidebarMenu sidebar="menu">
                <SidebarMenuItem sidebar="menu-item">
                  <SidebarMenuButton className="gap-2.5" href="#" aria-label="NeUI home" sidebar="menu-button" size="lg">
                    <span className="flex items-center justify-center relative shrink-0 size-7">
                      <Item className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary left-1/2 origin-center p-0 scale-[0.875] size-8 text-primary-foreground top-1/2" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </span>
                    <div className="flex-1 grid leading-tight min-w-0 text-left">
                      <span className="font-semibold text-sm truncate">
                        NeUI
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        Pro plan
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent sidebar="content">
              <SidebarGroup sidebar="group">
                <SidebarGroupLabel sidebar="group-label">
                  Dashboards
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                        <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                        <span>
                          Overview
                        </span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span>
                          Analytics
                        </span>
                        <SidebarMenuBadge sidebar="menu-badge">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-2 py-0.5 relative rounded-full style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[10px] text-primary-foreground transition-shadow">
                            Soon
                          </Badge>
                        </SidebarMenuBadge>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup sidebar="group">
                <SidebarGroupLabel sidebar="group-label">
                  Workspace
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-audience">
                        <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                        <span>
                          Audience
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="true" aria-controls="subnav-account">
                        <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>
                          Account
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 rotate-90 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                      <SidebarMenuSub sidebar="menu-sub" id="subnav-account">
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton href="#" sidebar="menu-sub-button" size="md">
                            <span>
                              Profile
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton href="#" sidebar="menu-sub-button" size="md" data-active="">
                            <span>
                              Billing
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton href="#" sidebar="menu-sub-button" size="md">
                            <span>
                              Security
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem sidebar="menu-sub-item">
                          <SidebarMenuSubButton href="#" sidebar="menu-sub-button" size="md">
                            <span>
                              Members
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-expanded="false" aria-controls="subnav-network">
                        <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        <span>
                          Network
                        </span>
                        <svg className="duration-200 lucide lucide-chevron-right ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup className="group-data-[collapsible=icon]:hidden" sidebar="group">
                <SidebarGroupLabel className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring w-full" type="button" aria-expanded="true" aria-controls="active-projects-list" sidebar="group-label">
                  Active Projects
                  <svg className="duration-200 lucide lucide-chevron-down ml-auto opacity-60 shrink-0 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </SidebarGroupLabel>
                <SidebarGroupContent sidebar="group-content" id="active-projects-list">
                  <SidebarMenu className="gap-0.25" sidebar="menu">
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-blue-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="8.293804605477053" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Billing Portal
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Billing Portal" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_i_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-emerald-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="13.571680263507906" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Audience Sync
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Audience Sync" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_p_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-violet-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="21.865484868984964" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Report Builder
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Report Builder" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_10_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-orange-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="16.587609210954106" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Network Map
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Network Map" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem sidebar="menu-item">
                      <SidebarMenuButton href="#" id="base-ui-_r_17_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                        <svg className="-rotate-90 opacity-100! shrink-0" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <circle className="stroke-muted-foreground/20" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5"></circle>
                          <circle className="stroke-rose-500" cx="8" cy="8" r="6" fill="none" strokeWidth="2.5" strokeDasharray="37.69911184307752" strokeDashoffset="4.523893421169302" strokeLinecap="round"></circle>
                        </svg>
                        <span className="min-w-0 truncate">
                          Access Review
                        </span>
                      </SidebarMenuButton>
                      <DropdownMenu>
                      <DropdownMenuTrigger className="[&>svg]:shrink-0 after:-inset-2 after:absolute aria-expanded:opacity-100 cn-sidebar-menu-action flex group-data-[collapsible=icon]:hidden group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 items-center justify-center md:after:hidden md:opacity-0 outline-hidden peer-data-active/menu-button:text-sidebar-accent-foreground transition-transform" type="button" sidebar="menu-action" aria-label="Actions for Access Review" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                        <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </DropdownMenuTrigger>
                      </DropdownMenu>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="in-data-[state=collapsed]:px-1! px-1!" sidebar="footer">
              <div className="px-2">
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <SidebarGroup className="py-1" sidebar="group">
                <SidebarMenu sidebar="menu">
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarMenuButton className="[&_svg]:size-3.5 h-8! in-data-[state=collapsed]:h-8!" href="#" id="base-ui-_r_1e_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <span>
                        Settings
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarMenuButton className="[&_svg]:size-3.5 h-8! in-data-[state=collapsed]:h-8!" href="#" id="base-ui-_r_1g_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                      <span>
                        Invite Team
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarMenuButton className="[&_svg]:size-3.5 h-8! in-data-[state=collapsed]:h-8!" href="#" id="base-ui-_r_1i_" baseUiTooltipTrigger="" sidebar="menu-button" size="sm">
                      <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <span>
                        Documentation
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
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
      <SidebarInset>
        <header className="bg-background border-b flex gap-2 h-12 items-center md:px-6 px-4 shrink-0 sticky top-0 z-10">
          <div className="flex gap-2 items-center min-w-0">
            <SidebarTrigger className="-ml-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                Toggle Sidebar
              </span>
            </SidebarTrigger>
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboards
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" role="presentation" aria-hidden="true">
                  <svg className="cn-rtl-flip lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="[&_button:active_svg]:text-foreground! [&_button:hover>span>svg]:text-foreground! [&_button:hover>svg]:text-foreground! [&_button[aria-expanded=true]_svg]:text-foreground! [&_button[data-popup-open]_svg]:text-foreground! [&_button_svg]:text-muted-foreground flex gap-2 items-center ml-auto text-muted-foreground">
            <Button type="button" tabIndex="0" aria-label="Search" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-search size-4.5 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </Button>
            <DialogHeader className="sr-only">
              <DialogTitle id="base-ui-_r_1l_">
                Search
              </DialogTitle>
              <DialogDescription id="base-ui-_r_1m_">
                Search your workspace content.
              </DialogDescription>
            </DialogHeader>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications, 6 unread" baseUiClickTrigger="" id="base-ui-_r_1o_" aria-haspopup="dialog" aria-expanded="false">
              <span className="inline-flex relative">
                <svg className="lucide lucide-bell size-4.5 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <span className="-right-1 -top-1 absolute bg-primary ring-2 ring-background rounded-full size-1.5" aria-hidden="true"></span>
              </span>
            </PopoverTrigger>
            </Popover>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Apps" aria-haspopup="menu" id="base-ui-_r_1s_" aria-expanded="false">
              <svg className="lucide lucide-layout-grid size-4.5 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open user menu" aria-haspopup="menu" id="base-ui-_r_21_" aria-expanded="false">
              <Avatar className="size-6" size="default">
                <AvatarImage alt="Theo Park" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-5 md:px-6 md:py-5 px-4 py-4">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <h1 className="font-semibold leading-6 text-foreground text-xl tracking-tight">
                Overview
              </h1>
              <p className="text-muted-foreground text-sm">
                Your workspace at a glance.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Export
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New Report
              </Button>
            </div>
          </div>
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
            <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          </div>
          <div className="bg-muted/20 border border-border/70 border-dashed flex-1 min-h-80 rounded-lg"></div>
        </main>
        <footer className="border-t md:px-6 px-4 py-2.5">
          <div className="flex flex-col gap-2 items-center justify-between md:flex-row text-xs">
            <div className="flex gap-1.5 items-center text-muted-foreground">
              <span>
                2026 ©
              </span>
              <a className="font-medium hover:text-primary text-secondary-foreground" href="#">
                NeUI
              </a>
            </div>
            <nav className="flex flex-wrap gap-x-3 gap-y-1 items-center justify-center text-muted-foreground">
              <a className="hover:text-primary" href="#">
                Docs
              </a>
              <a className="hover:text-primary" href="#">
                Changelog
              </a>
              <a className="hover:text-primary" href="#">
                Support
              </a>
              <a className="hover:text-primary" href="#">
                Privacy
              </a>
              <a className="hover:text-primary" href="#">
                Status
              </a>
            </nav>
          </div>
        </footer>
      </SidebarInset>
    </div>
  )
}
