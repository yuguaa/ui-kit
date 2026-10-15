import {
  Avatar,
  AvatarBadge,
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
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarSeparator,
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
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--header-height:48px] [--toolbar-height:48px] flex group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "60px", "--sidebar-width-icon": "3rem", "--sidebar-width-inner": "240px"}}>
      <SidebarProvider>
      <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
        <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
        <SidebarProvider>
        <div className="bottom-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-svh hidden inset-y-0 md:flex top-0 transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
          <SidebarProvider>
          <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
            <div className="flex grow h-full">
              <div className="bg-muted flex flex-col h-full md:grow">
                <SidebarHeader className="border-b h-(--header-height) items-center justify-center p-0" sidebar="header">
                  <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-3.5" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none">
                        <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                        <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </SidebarHeader>
                <SidebarProvider>
                <SidebarContent className="flex-row md:flex-col px-2 py-2" sidebar="content">
                  <SidebarProvider>
                  <SidebarGroup className="p-0" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupContent className="justify-center" sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.5 items-center" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
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
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_3_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx={9} cy={7} r={4}></circle>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_5_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
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
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                              <path d="m16 18 6-6-6-6"></path>
                              <path d="m8 6-6 6 6 6"></path>
                            </svg>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
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
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton className="data-active:bg-foreground! data-active:text-background! hover:text-foreground justify-center size-8" type="button" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
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
                <SidebarFooter className="gap-2 items-center px-2 py-2" sidebar="footer">
                  <div className="flex flex-col gap-1.5 items-center">
                    <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Open Mail">
                      <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                      </svg>
                    </Button>
                    <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Open Notes">
                      <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                        <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path>
                      </svg>
                    </Button>
                    <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Open Settings">
                      <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                        <circle cx={12} cy={12} r={3}></circle>
                      </svg>
                    </Button>
                  </div>
                </SidebarFooter>
              </div>
              <div className="border-border/60 border-l flex flex-1 flex-col grow md:hidden overflow-hidden">
                <div className="grow max-h-full min-h-0">
                  <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                    <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex={-1} style={{overflow: "scroll"}}>
                      <nav className="flex flex-col py-2.5">
                        <div>
                          <SidebarProvider>
                          <SidebarGroup className="px-2.5 py-0" sidebar="group">
                            <SidebarProvider>
                            <SidebarGroupContent sidebar="group-content">
                              <SidebarProvider>
                              <SidebarMenu className="gap-0.5" sidebar="menu">
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                    </svg>
                                    <span>
                                      {"Home"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default" data-active="">
                                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx={9} cy={7} r={4}></circle>
                                    </svg>
                                    <span>
                                      {"Updates"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                                      <path d="m14.305 19.53.923-.382"></path>
                                      <path d="m15.228 16.852-.923-.383"></path>
                                      <path d="m16.852 15.228-.383-.923"></path>
                                      <path d="m16.852 20.772-.383.924"></path>
                                      <path d="m19.148 15.228.383-.923"></path>
                                      <path d="m19.53 21.696-.382-.924"></path>
                                      <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                      <path d="m20.772 16.852.924-.383"></path>
                                      <path d="m20.772 19.148.924.383"></path>
                                      <circle cx={10} cy={8} r={5}></circle>
                                      <circle cx={18} cy={18} r={3}></circle>
                                    </svg>
                                    <span>
                                      {"Inbox"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                      <circle cx={12} cy={12} r={3}></circle>
                                    </svg>
                                    <span>
                                      {"Clients"}
                                    </span>
                                    <SidebarMenuBadge sidebar="menu-badge">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                        {"Beta"}
                                      </Badge>
                                    </SidebarMenuBadge>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                      <path d="M16 7h6v6"></path>
                                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                    </svg>
                                    <span>
                                      {"My Tasks"}
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
                        </div>
                        <div>
                          <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                          <SidebarProvider>
                          <SidebarGroup className="px-2.5 py-0" sidebar="group">
                            <SidebarProvider>
                            <SidebarGroupLabel className="font-normal justify-between px-2.5 text-muted-foreground text-xs" sidebar="group-label">
                              <span>
                                {"Workspaces"}
                              </span>
                              <div className="flex gap-0.5 items-center">
                                <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Create Workspaces">
                                  <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Workspaces" aria-expanded="true">
                                  <svg className="duration-200 lucide lucide-chevron-right opacity-70 rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                              </div>
                            </SidebarGroupLabel>
                            </SidebarProvider>
                            <SidebarProvider>
                            <SidebarGroupContent sidebar="group-content">
                              <SidebarProvider>
                              <SidebarMenu className="gap-0.5" sidebar="menu">
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                      <path d="M12 12h.01"></path>
                                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                      <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                      <rect width={20} height={14} x={2} y={6} rx={2}></rect>
                                    </svg>
                                    <span>
                                      {"Business Concepts"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                                      <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span>
                                      {"Northstar Studio"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                      <circle cx={9} cy={7} r={4}></circle>
                                    </svg>
                                    <span>
                                      {"Teams"}
                                    </span>
                                    <SidebarMenuBadge sidebar="menu-badge">
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                        {"Pro"}
                                      </Badge>
                                    </SidebarMenuBadge>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                      <path d="M18 17V9"></path>
                                      <path d="M13 17V5"></path>
                                      <path d="M8 17v-3"></path>
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
                        </div>
                        <div>
                          <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                          <SidebarProvider>
                          <SidebarGroup className="px-2.5 py-0" sidebar="group">
                            <SidebarProvider>
                            <SidebarGroupLabel className="font-normal justify-between px-2.5 text-muted-foreground text-xs" sidebar="group-label">
                              <span>
                                {"Communities"}
                              </span>
                              <div className="flex gap-0.5 items-center">
                                <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Create Communities">
                                  <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </Button>
                                <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Communities" aria-expanded="true">
                                  <svg className="duration-200 lucide lucide-chevron-right opacity-70 rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </Button>
                              </div>
                            </SidebarGroupLabel>
                            </SidebarProvider>
                            <SidebarProvider>
                            <SidebarGroupContent sidebar="group-content">
                              <SidebarProvider>
                              <SidebarMenu className="gap-0.5" sidebar="menu">
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5v14"></path>
                                    </svg>
                                    <span>
                                      {"Create A Community"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                                      <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                                      <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                    </svg>
                                    <span>
                                      {"Designers Hub"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                      <path d="m16 18 6-6-6-6"></path>
                                      <path d="m8 6-6 6 6 6"></path>
                                    </svg>
                                    <span>
                                      {"React Js"}
                                    </span>
                                  </SidebarMenuButton>
                                  </SidebarProvider>
                                </SidebarMenuItem>
                                </SidebarProvider>
                                <SidebarProvider>
                                <SidebarMenuItem sidebar="menu-item">
                                  <SidebarProvider>
                                  <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                    <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                    </svg>
                                    <span>
                                      {"Node Js"}
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
      <SidebarInset className="bg-background overflow-hidden shadow-none">
        <header className="backdrop-blur-sm bg-background/95 border-b border-border flex h-(--header-height) items-center sticky top-0 w-full z-50">
          <div className="border-border border-r flex gap-2 h-full items-center md:justify-between md:px-5 md:w-(--sidebar-width-inner) px-3 shrink-0 w-auto">
            <div className="hidden min-w-0 sm:block">
              <DropdownMenu>
              <DropdownMenuTrigger className="-ms-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none gap-2 group/button h-8 inline-flex items-center justify-center outline-none px-1.5 select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Switch workspace" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                <span className="[&_*]:text-white! [&_svg]:size-3.5 [&_svg]:text-white! [&_svg_*]:text-white! bg-teal-600 flex items-center justify-center rounded-md shrink-0 size-6 text-white!" aria-hidden="true">
                  <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </span>
                <span className="font-medium min-w-0 text-sm truncate">
                  {"Thunder AI"}
                </span>
                <svg className="lucide lucide-chevrons-up-down opacity-60 shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
            <SidebarProvider>
            <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 sm:hidden transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
              <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M9 3v18"></path>
              </svg>
              <span className="sr-only">
                {"Toggle Sidebar"}
              </span>
            </SidebarTrigger>
            </SidebarProvider>
            <Button className="hidden hover:text-foreground md:inline-flex text-muted-foreground" type="button" tabIndex={0} aria-label="Toggle secondary sidebar" aria-pressed="true">
              <svg className="duration-200 lucide lucide-panel-right rotate-180 size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                <path d="M15 3v18"></path>
              </svg>
            </Button>
          </div>
          <div className="flex flex-1 gap-2 items-center min-w-0 px-4">
            <Breadcrumb aria-label="breadcrumb">
              <BreadcrumbList className="gap-1">
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-muted-foreground text-sm" href="#">
                    {"Home"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="opacity-60 text-xs" role="presentation" aria-hidden="true">
                  {"/"}
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground text-sm" role="link" aria-disabled="true" aria-current="page">
                    {"Updates"}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <nav className="flex gap-2 items-center px-4 shrink-0">
            <div className="hidden relative sm:block">
              <svg className="-translate-y-1/2 absolute lucide lucide-search pointer-events-none size-4 start-3 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
              <Input className="lg:w-40 ps-9 w-28" id="base-ui-_r_j_" placeholder="Search" aria-label="Search" type="search" value=""></Input>
            </div>
            <Button className="sm:hidden" type="button" tabIndex={0} aria-label="Search" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
            </Button>
            <DialogHeader className="sr-only">
              <DialogTitle id="base-ui-_r_l_">
                {"Search"}
              </DialogTitle>
              <DialogDescription id="base-ui-_r_m_">
                {"Search updates and reports."}
              </DialogDescription>
            </DialogHeader>
            <Button className="hidden md:inline-flex" type="button" tabIndex={0}>
              <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
              {"Reports"}
            </Button>
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"Add"}
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Mira Stone" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
              <Avatar className="size-7" size="default">
                <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                <AvatarBadge className="bg-success ring-1! ring-background size-1.5!"></AvatarBadge>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </nav>
        </header>
        <div className="flex flex-1 flex-col md:flex-row min-h-0 overflow-hidden">
          <aside className="border-border border-r duration-200 ease-linear hidden md:flex motion-reduce:transition-none overflow-hidden shrink-0 transition-[width] w-(--sidebar-width-inner)" aria-label="Authentication navigation">
            <div className="flex flex-col overflow-hidden shrink-0 w-(--sidebar-width-inner)">
              <div className="grow max-h-full min-h-0">
                <ScrollArea className="grow h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "10px"}} hasOverflowX="" hasOverflowY="" overflowXEnd="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_s_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "8px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "3px"}} data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="">
                    <nav className="flex flex-col py-2.5">
                      <div>
                        <SidebarProvider>
                        <SidebarGroup className="px-2.5 py-0" sidebar="group">
                          <SidebarProvider>
                          <SidebarGroupContent sidebar="group-content">
                            <SidebarProvider>
                            <SidebarMenu className="gap-0.5" sidebar="menu">
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                                  </svg>
                                  <span>
                                    {"Home"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default" data-active="">
                                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx={9} cy={7} r={4}></circle>
                                  </svg>
                                  <span>
                                    {"Updates"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-user-round-cog" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                                    <path d="m14.305 19.53.923-.382"></path>
                                    <path d="m15.228 16.852-.923-.383"></path>
                                    <path d="m16.852 15.228-.383-.923"></path>
                                    <path d="m16.852 20.772-.383.924"></path>
                                    <path d="m19.148 15.228.383-.923"></path>
                                    <path d="m19.53 21.696-.382-.924"></path>
                                    <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                                    <path d="m20.772 16.852.924-.383"></path>
                                    <path d="m20.772 19.148.924.383"></path>
                                    <circle cx={10} cy={8} r={5}></circle>
                                    <circle cx={18} cy={18} r={3}></circle>
                                  </svg>
                                  <span>
                                    {"Inbox"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                    <circle cx={12} cy={12} r={3}></circle>
                                  </svg>
                                  <span>
                                    {"Clients"}
                                  </span>
                                  <SidebarMenuBadge sidebar="menu-badge">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-destructive-foreground transition-shadow">
                                      {"Beta"}
                                    </Badge>
                                  </SidebarMenuBadge>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                                    <path d="M16 7h6v6"></path>
                                    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                  </svg>
                                  <span>
                                    {"My Tasks"}
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
                      </div>
                      <div>
                        <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                        <SidebarProvider>
                        <SidebarGroup className="px-2.5 py-0" sidebar="group">
                          <SidebarProvider>
                          <SidebarGroupLabel className="font-normal justify-between px-2.5 text-muted-foreground text-xs" sidebar="group-label">
                            <span>
                              {"Workspaces"}
                            </span>
                            <div className="flex gap-0.5 items-center">
                              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Create Workspaces">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Workspaces" aria-expanded="true">
                                <svg className="duration-200 lucide lucide-chevron-right opacity-70 rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                            </div>
                          </SidebarGroupLabel>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarGroupContent sidebar="group-content">
                            <SidebarProvider>
                            <SidebarMenu className="gap-0.5" sidebar="menu">
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                                    <path d="M12 12h.01"></path>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                                    <rect width={20} height={14} x={2} y={6} rx={2}></rect>
                                  </svg>
                                  <span>
                                    {"Business Concepts"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                                    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                                    <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                  </svg>
                                  <span>
                                    {"Northstar Studio"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx={9} cy={7} r={4}></circle>
                                  </svg>
                                  <span>
                                    {"Teams"}
                                  </span>
                                  <SidebarMenuBadge sidebar="menu-badge">
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                                      {"Pro"}
                                    </Badge>
                                  </SidebarMenuBadge>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="M18 17V9"></path>
                                    <path d="M13 17V5"></path>
                                    <path d="M8 17v-3"></path>
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
                      </div>
                      <div>
                        <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                        <SidebarProvider>
                        <SidebarGroup className="px-2.5 py-0" sidebar="group">
                          <SidebarProvider>
                          <SidebarGroupLabel className="font-normal justify-between px-2.5 text-muted-foreground text-xs" sidebar="group-label">
                            <span>
                              {"Communities"}
                            </span>
                            <div className="flex gap-0.5 items-center">
                              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Create Communities">
                                <svg className="lucide lucide-plus size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </Button>
                              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Collapse Communities" aria-expanded="true">
                                <svg className="duration-200 lucide lucide-chevron-right opacity-70 rotate-90 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Button>
                            </div>
                          </SidebarGroupLabel>
                          </SidebarProvider>
                          <SidebarProvider>
                          <SidebarGroupContent sidebar="group-content">
                            <SidebarProvider>
                            <SidebarMenu className="gap-0.5" sidebar="menu">
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                  <span>
                                    {"Create A Community"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                                    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                                    <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                                    <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                                  </svg>
                                  <span>
                                    {"Designers Hub"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                    <path d="m16 18 6-6-6-6"></path>
                                    <path d="m8 6-6 6 6 6"></path>
                                  </svg>
                                  <span>
                                    {"React Js"}
                                  </span>
                                </SidebarMenuButton>
                                </SidebarProvider>
                              </SidebarMenuItem>
                              </SidebarProvider>
                              <SidebarProvider>
                              <SidebarMenuItem sidebar="menu-item">
                                <SidebarProvider>
                                <SidebarMenuButton className="font-normal h-8.5 px-2.5 text-sm" type="button" sidebar="menu-button" size="default">
                                  <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                  </svg>
                                  <span>
                                    {"Node Js"}
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
                      </div>
                    </nav>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-x="" data-has-overflow-y="" data-overflow-x-end="" data-overflow-y-end="" data-id="base-ui-_r_s_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "580.0255102040817px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                  <div style={{position: "absolute", bottom: "0px", insetInlineEnd: "0px", width: "10px", height: "0px"}}></div>
                </ScrollArea>
              </div>
            </div>
          </aside>
          <section className="flex flex-1 flex-col min-w-0 overflow-hidden">
            <div className="bg-background border-b border-border flex gap-2 items-stretch justify-between min-h-(--toolbar-height) px-4 shrink-0">
              <Tabs className="hidden md:flex md:items-stretch" data-orientation="horizontal" activationDirection="none">
                <TabsList className="h-full py-0!" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
                  <TabsTrigger className="after:-bottom-px! flex-none gap-2 h-full! px-3" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_t_" compositeItemActive="">
                    <svg className="lucide lucide-clipboard-list" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                      <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    <span>
                      {"List"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none gap-2 h-full! px-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_u_">
                    <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                      <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                      <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                      <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                      <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                    </svg>
                    <span>
                      {"Kanban"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none gap-2 h-full! px-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_v_">
                    <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>
                      {"Calendar"}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger className="after:-bottom-px! flex-none gap-2 h-full! px-3" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_10_">
                    <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    <span>
                      {"Dashboard"}
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:hidden outline-none select-none self-center shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_14_" aria-expanded="false">
                <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                  <path d="M4 5h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 19h16"></path>
                </svg>
                {"List"}
              </DropdownMenuTrigger>
              </DropdownMenu>
              <div className="flex gap-1 items-center ml-auto">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  {"Sort"}
                </Button>
                <Button className="hidden sm:inline-flex" type="button" tabIndex={0}>
                  <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx={12} cy={12} r={3}></circle>
                  </svg>
                  {"View"}
                </Button>
                <Button className="hidden lg:inline-flex" type="button" tabIndex={0}>
                  <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                  {"Filter"}
                </Button>
                <Button type="button" tabIndex={0} aria-label="Search workspace" aria-pressed="true">
                  <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <main className="flex-1 min-h-0 overflow-y-auto p-5" role="content">
              <div className="auto-rows-min gap-4 grid md:grid-cols-3 min-h-full">
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="bg-muted/40 border-border/40 border-dashed md:col-span-3 min-h-[520px] shadow-none" size="default" aria-hidden="true"></Card>
              </div>
            </main>
          </section>
        </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  )
}
