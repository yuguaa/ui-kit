import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
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
import { Item } from "@/registry/bases/radix/ui/item"
import { SidebarMenuButton } from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--header-height:60px] [--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar md:[--header-height:80px] min-h-svh w-full" style={{"--sidebar-width": "76px", "--sidebar-width-icon": "3rem", "--sidebar-width-inner": "240px"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="inset" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))] group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="bg-muted border-0 bottom-0 dark:bg-background data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)] h-svh hidden inset-y-0 md:flex p-0 top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <div className="bg-muted dark:bg-background flex grow h-full">
              <div className="bg-black flex flex-col gap-3 items-center me-2.5 ms-2.5 my-2.5 py-3 rounded-2xl shrink-0 text-zinc-400 w-14">
                <SidebarHeader className="items-center justify-center p-0 pt-0.5" sidebar="header">
                  <a href="#" aria-label="Open Thunder AI">
                    <span className="flex items-center justify-center relative shrink-0 size-7">
                      <Item className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary left-1/2 origin-center p-0 scale-[0.875] size-8 text-primary-foreground top-1/2" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-4" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none">
                            <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                    </span>
                  </a>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent className="flex-row md:flex-col pt-2" sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="justify-center" sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-1.5 items-center" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Profile">
                            <svg className="lucide lucide-circle-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <circle cx="12" cy="10" r="3"></circle>
                              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="" aria-label="Updates">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Account">
                            <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Network">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Access">
                            <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Files">
                            <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-[active=true]:bg-zinc-800 data-[active=true]:text-white hover:bg-zinc-800 hover:text-white justify-center size-9 text-zinc-400" type="button" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" aria-label="Notes">
                            <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
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
                </SidebarContent>
                </SidebarProvider>
                <SidebarFooter className="gap-1 items-center p-0 pb-1" sidebar="footer">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-zinc-800 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-zinc-400 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Inbox" aria-haspopup="menu" id="base-ui-_r_h_" aria-expanded="false">
                    <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-zinc-800 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-zinc-400 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Calendar" aria-haspopup="menu" id="base-ui-_r_m_" aria-expanded="false">
                    <svg className="lucide lucide-calendar-days" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarDaysIcon" tabler="IconCalendar" hugeicons="Calendar03Icon" phosphor="CalendarIcon" remixicon="RiCalendarLine" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 14h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 18h.01"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M16 18h.01"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-zinc-800 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-zinc-400 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Settings" aria-haspopup="menu" id="base-ui-_r_r_" aria-expanded="false">
                    <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-zinc-800 inline-flex items-center justify-center mx-auto outline-none relative rounded-full select-none shrink-0 size-9 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Chris Dale" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                    <Avatar className="rounded-full size-7" size="default">
                      <AvatarImage alt="Chris Dale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <span className="absolute bg-emerald-500 border border-black right-1 rounded-full size-2 top-1" aria-hidden="true"></span>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </SidebarFooter>
              </div>
              <div className="border-border/60 border-l flex flex-1 flex-col grow md:hidden overflow-hidden">
                <div className="flex pb-2 pt-4 px-2 shrink-0">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto hover:bg-background/70 inline-flex items-center justify-start outline-none px-2 py-1.5 rounded-md select-none shrink-0 text-left transition-all w-[calc(100%+0.375rem)] whitespace-nowrap" type="button" tabIndex="0" aria-label="Switch workspace" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
                    <span className="[&_*]:text-white! [&_svg]:size-4 [&_svg]:text-white! [&_svg_*]:text-white! bg-teal-600 flex items-center justify-center rounded-md shrink-0 size-8 text-white text-white!" aria-hidden="true">
                      <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                      </svg>
                    </span>
                    <span className="flex-1 grid min-w-0">
                      <span className="font-semibold text-foreground text-sm truncate">
                        {"Thunder AI"}
                      </span>
                      <span className="text-muted-foreground text-xs truncate">
                        {"8 members"}
                      </span>
                    </span>
                    <svg className="lucide lucide-chevrons-up-down shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_17_-viewport" tabIndex="-1" style={{overflow: "scroll"}}>
                      <nav className="flex flex-col gap-2.5 pb-3 px-2">
                        <div className="flex flex-col gap-1">
                          <div id="inner-section-main">
                            <div className="flex flex-col gap-0.5">
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Home"}
                                </span>
                              </Button>
                              <Button className="bg-background font-normal gap-2 h-8 hover:bg-background justify-start px-2 rounded-md shadow-xs text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersRoundIcon" tabler="IconUsersGroup" hugeicons="UserGroupIcon" phosphor="UsersThreeIcon" remixicon="RiTeamLine" aria-hidden="true">
                                    <path d="M18 21a8 8 0 0 0-16 0"></path>
                                    <circle cx="10" cy="8" r="5"></circle>
                                    <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Updates"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Inbox"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                                    <path d="m14.305 19.53.923-.382"></path>
                                    <path d="m15.228 16.852-.923-.383"></path>
                                    <path d="m16.852 15.228-.383-.923"></path>
                                    <path d="m16.852 20.772-.383.924"></path>
                                    <path d="m19.148 15.228.383-.923"></path>
                                    <path d="m19.53 21.696-.382-.924"></path>
                                    <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                    <path d="m20.772 16.852.924-.383"></path>
                                    <path d="m20.772 19.148.924.383"></path>
                                    <circle cx="10" cy="8" r="5"></circle>
                                    <circle cx="18" cy="18" r="3"></circle>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Clients"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                  {"Beta"}
                                </Badge>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="M18 17V9"></path>
                                    <path d="M13 17V5"></path>
                                    <path d="M8 17v-3"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"My Tasks"}
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex h-6 items-center px-2 text-muted-foreground text-xs">
                            <span>
                              {"Workspaces"}
                            </span>
                            <span className="flex items-center ml-auto">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add Workspaces" aria-haspopup="menu" id="base-ui-_r_1b_" aria-expanded="false">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </span>
                          </div>
                          <div id="inner-section-workspaces">
                            <div className="flex flex-col gap-0.5">
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                    <path d="M12 12h.01"></path>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Business Concepts"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                                    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Newcapec Studio"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Teams"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  {"Pro"}
                                </Badge>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="M18 17V9"></path>
                                    <path d="M13 17V5"></path>
                                    <path d="M8 17v-3"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Reports"}
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <Button className="font-normal h-6 hover:bg-transparent hover:text-foreground justify-start px-2 text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-expanded="true" aria-controls="inner-section-communities">
                            <span>
                              {"Communities"}
                            </span>
                            <svg className="duration-200 lucide lucide-chevron-up ml-auto opacity-70 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                              <path d="m18 15-6-6-6 6"></path>
                            </svg>
                          </Button>
                          <div id="inner-section-communities">
                            <div className="flex flex-col gap-0.5">
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Create a community"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-rose-500">
                                  <svg className="lucide lucide-badge-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-hidden="true">
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Designers Hub"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-sky-500">
                                  <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                    <path d="m16 18 6-6-6-6"></path>
                                    <path d="m8 6-6 6 6 6"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"React Js"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-lime-600">
                                  <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Node Js"}
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <Button className="font-normal h-6 hover:bg-transparent hover:text-foreground justify-start px-2 text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-expanded="true" aria-controls="inner-section-resources">
                            <span>
                              {"Resources"}
                            </span>
                            <svg className="duration-200 lucide lucide-chevron-up ml-auto opacity-70 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                              <path d="m18 15-6-6-6 6"></path>
                            </svg>
                          </Button>
                          <div id="inner-section-resources">
                            <div className="flex flex-col gap-0.5">
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                                    <path d="M12 15V3"></path>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <path d="m7 10 5 5 5-5"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"About Metronic"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Advertise"}
                                </span>
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                  {"Pro"}
                                </Badge>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                                    <path d="M15 3h6v6"></path>
                                    <path d="M10 14 21 3"></path>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Help"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                    <path d="M12 7v14"></path>
                                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Blog"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                    <path d="M12 12h.01"></path>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Careers"}
                                </span>
                              </Button>
                              <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                                <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                                  <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MegaphoneIcon" tabler="IconSpeakerphone" hugeicons="Megaphone01Icon" phosphor="MegaphoneIcon" remixicon="RiMegaphoneLine" aria-hidden="true">
                                    <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                                    <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                                    <path d="M8 6v8"></path>
                                  </svg>
                                </span>
                                <span className="min-w-0 truncate">
                                  {"Press"}
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
          </SidebarProvider>
        </div>
        </SidebarProvider>
      </Sidebar>
      </SidebarProvider>
      <aside className="bg-muted dark:bg-background hidden md:flex overflow-hidden shrink-0 w-(--sidebar-width-inner)" aria-label="Updates navigation">
        <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
          <div className="flex pb-2 pt-4 px-2 shrink-0">
            <DropdownMenu>
            <DropdownMenuTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2.5 group/button h-auto hover:bg-background/70 inline-flex items-center justify-start outline-none px-2 py-1.5 rounded-md select-none shrink-0 text-left transition-all w-[calc(100%+0.375rem)] whitespace-nowrap" type="button" tabIndex="0" aria-label="Switch workspace" aria-haspopup="menu" id="base-ui-_r_1g_" aria-expanded="false">
              <span className="[&_*]:text-white! [&_svg]:size-4 [&_svg]:text-white! [&_svg_*]:text-white! bg-teal-600 flex items-center justify-center rounded-md shrink-0 size-8 text-white text-white!" aria-hidden="true">
                <svg className="lucide lucide-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </span>
              <span className="flex-1 grid min-w-0">
                <span className="font-semibold text-foreground text-sm truncate">
                  {"Thunder AI"}
                </span>
                <span className="text-muted-foreground text-xs truncate">
                  {"8 members"}
                </span>
              </span>
              <svg className="lucide lucide-chevrons-up-down shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                <path d="m7 15 5 5 5-5"></path>
                <path d="m7 9 5-5 5 5"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
          <div className="grow max-h-full min-h-0">
            <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1i_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "205px"}} data-has-overflow-y="" data-overflow-y-end="">
                <nav className="flex flex-col gap-2.5 pb-3 px-2">
                  <div className="flex flex-col gap-1">
                    <div id="inner-section-main">
                      <div className="flex flex-col gap-0.5">
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Home"}
                          </span>
                        </Button>
                        <Button className="bg-background font-normal gap-2 h-8 hover:bg-background justify-start px-2 rounded-md shadow-xs text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-users-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersRoundIcon" tabler="IconUsersGroup" hugeicons="UserGroupIcon" phosphor="UsersThreeIcon" remixicon="RiTeamLine" aria-hidden="true">
                              <path d="M18 21a8 8 0 0 0-16 0"></path>
                              <circle cx="10" cy="8" r="5"></circle>
                              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Updates"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Inbox"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                              <path d="m14.305 19.53.923-.382"></path>
                              <path d="m15.228 16.852-.923-.383"></path>
                              <path d="m16.852 15.228-.383-.923"></path>
                              <path d="m16.852 20.772-.383.924"></path>
                              <path d="m19.148 15.228.383-.923"></path>
                              <path d="m19.53 21.696-.382-.924"></path>
                              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                              <path d="m20.772 16.852.924-.383"></path>
                              <path d="m20.772 19.148.924.383"></path>
                              <circle cx="10" cy="8" r="5"></circle>
                              <circle cx="18" cy="18" r="3"></circle>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Clients"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                            {"Beta"}
                          </Badge>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"My Tasks"}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex h-6 items-center px-2 text-muted-foreground text-xs">
                      <span>
                        {"Workspaces"}
                      </span>
                      <span className="flex items-center ml-auto">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add Workspaces" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                      </span>
                    </div>
                    <div id="inner-section-workspaces">
                      <div className="flex flex-col gap-0.5">
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                              <path d="M12 12h.01"></path>
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Business Concepts"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Newcapec Studio"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Teams"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            {"Pro"}
                          </Badge>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="M18 17V9"></path>
                              <path d="M13 17V5"></path>
                              <path d="M8 17v-3"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Reports"}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button className="font-normal h-6 hover:bg-transparent hover:text-foreground justify-start px-2 text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-expanded="true" aria-controls="inner-section-communities">
                      <span>
                        {"Communities"}
                      </span>
                      <svg className="duration-200 lucide lucide-chevron-up ml-auto opacity-70 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </Button>
                    <div id="inner-section-communities">
                      <div className="flex flex-col gap-0.5">
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Create a community"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-rose-500">
                            <svg className="lucide lucide-badge-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BadgeCheckIcon" tabler="IconRosetteDiscountCheck" hugeicons="CheckmarkBadge01Icon" phosphor="SealCheckIcon" remixicon="RiVerifiedBadgeLine" aria-hidden="true">
                              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Designers Hub"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-sky-500">
                            <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                              <path d="m16 18 6-6-6-6"></path>
                              <path d="m8 6-6 6 6 6"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"React Js"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-lime-600">
                            <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                              <path d="M12 22V12"></path>
                              <polyline points="3.29 7 12 12 20.71 7"></polyline>
                              <path d="m7.5 4.27 9 5.15"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Node Js"}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button className="font-normal h-6 hover:bg-transparent hover:text-foreground justify-start px-2 text-muted-foreground text-xs w-full" type="button" tabIndex="0" aria-expanded="true" aria-controls="inner-section-resources">
                      <span>
                        {"Resources"}
                      </span>
                      <svg className="duration-200 lucide lucide-chevron-up ml-auto opacity-70 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </Button>
                    <div id="inner-section-resources">
                      <div className="flex flex-col gap-0.5">
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"About Metronic"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Advertise"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-0.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            {"Pro"}
                          </Badge>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Help"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                              <path d="M12 7v14"></path>
                              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Blog"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                              <path d="M12 12h.01"></path>
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Careers"}
                          </span>
                        </Button>
                        <Button className="font-normal gap-2 h-8 hover:bg-background/70 justify-start px-2 rounded-md text-foreground text-sm w-full" type="button" tabIndex="0">
                          <span className="[&_svg]:size-4 opacity-80 shrink-0 size-4 text-muted-foreground">
                            <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MegaphoneIcon" tabler="IconSpeakerphone" hugeicons="Megaphone01Icon" phosphor="MegaphoneIcon" remixicon="RiMegaphoneLine" aria-hidden="true">
                              <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                              <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                              <path d="M8 6v8"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 truncate">
                            {"Press"}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_1i_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "407.54319371727746px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </aside>
      <SidebarInset className="bg-background dark:border-border/60 dark:border-l m-0! overflow-hidden rounded-none! shadow-none!">
        <header className="bg-background flex gap-2 h-(--header-height) items-center md:px-6 px-4 shrink-0 sticky top-0 w-full z-40">
          <div className="flex flex-1 gap-3 items-center min-w-0">
            <div className="flex gap-2 items-center md:hidden">
              <SidebarProvider>
              <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
            </div>
            <div className="flex-col gap-0.5 hidden md:flex min-w-0">
              <h1 className="font-semibold leading-5 text-base truncate">
                {"Updates"}
              </h1>
              <div className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                <a className="hidden hover:text-foreground lg:inline truncate" href="#">
                  {"Home"}
                </a>
                <span className="hidden lg:inline shrink-0" aria-hidden="true">
                  {"/"}
                </span>
                <a className="hover:text-foreground truncate" href="#">
                  {"Account"}
                </a>
                <span className="shrink-0" aria-hidden="true">
                  {"/"}
                </span>
                <span className="shrink-0 text-foreground">
                  {"Updates"}
                </span>
              </div>
            </div>
          </div>
          <nav className="flex gap-2.5 items-center ml-auto shrink-0">
            <form className="hidden lg:block relative w-48" role="search">
              <svg className="-translate-y-1/2 absolute left-3 lucide lucide-search pointer-events-none size-4 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <Input className="h-9 pl-9" id="base-ui-_r_1p_" aria-label="Search" placeholder="Search"></Input>
            </form>
            <Button className="lg:hidden" type="button" tabIndex="0" aria-label="Search" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </Button>
            <DialogHeader className="sr-only">
              <DialogTitle id="base-ui-_r_1r_">
                {"Search"}
              </DialogTitle>
              <DialogDescription id="base-ui-_r_1s_">
                {"Search updates and accounts."}
              </DialogDescription>
            </DialogHeader>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button hidden items-center justify-center outline-none select-none shrink-0 sm:inline-flex transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
              <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
              {"Reports"}
            </DropdownMenuTrigger>
            </DropdownMenu>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_25_" aria-expanded="false">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="hidden sm:inline">
                {"Add"}
              </span>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </nav>
        </header>
        <main className="flex flex-1 flex-col gap-4 md:pb-5 md:pt-4 md:px-6 min-h-0 overflow-y-auto px-4 py-3">
          <div className="flex flex-col gap-1 md:hidden">
            <h1 className="font-semibold text-base">
              {"Updates"}
            </h1>
            <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                {"Home"}
              </span>
              <span aria-hidden="true">
                {"/"}
              </span>
              <span>
                {"Account"}
              </span>
              <span aria-hidden="true">
                {"/"}
              </span>
              <span className="text-foreground">
                {"Updates"}
              </span>
            </div>
          </div>
          <div className="auto-rows-min gap-4 grid md:grid-cols-3">
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="aspect-video bg-muted/30 border-border/60 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
            <Card className="bg-muted/30 border-border/60 border-dashed md:col-span-3 min-h-[520px] shadow-none" size="default" aria-hidden="true"></Card>
          </div>
        </main>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
