import {
  Avatar,
  AvatarBadge,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import {
  SidebarGroupLabel,
  SidebarMenuButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="[--sidebar-accent-foreground:var(--color-primary)] [--sidebar-accent:color-mix(in_oklab,var(--color-primary)_5%,transparent)] [--sidebar:var(--color-background)] flex flex-col group/sidebar-wrapper h-screen has-data-[variant=inset]:bg-sidebar min-h-svh w-full" style={{"--sidebar-width": "240px", "--sidebar-width-icon": "56px", "--header-height": "54px"}}>
      <header className="bg-background border-b flex h-(--header-height) items-stretch shrink-0 sticky text-foreground top-0 z-50">
        <div className="flex gap-2.5 grow items-stretch justify-between pe-5">
          <div className="flex items-stretch">
            <div className="duration-200 ease-linear flex gap-2 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:w-(--sidebar-width-icon) items-center lg:w-(--sidebar-width) px-2 transition-[width]">
              <SidebarProvider>
              <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center lg:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
                <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                  <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                  <path d="M9 3v18"></path>
                </svg>
                <span className="sr-only">
                  {"Toggle Sidebar"}
                </span>
              </SidebarTrigger>
              </SidebarProvider>
              <div className="flex flex-1 items-center min-w-0 relative">
                <a className="duration-200 ease-linear flex gap-2 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:gap-0 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:opacity-0 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:pointer-events-none group-has-data-[collapsible=icon]/sidebar-wrapper:lg:translate-x-1.5 items-center min-w-0 overflow-hidden transition-[gap,translate,opacity]" href="#">
                  <span className="flex items-center justify-center relative shrink-0 size-7">
                    <Item className="-translate-x-1/2 -translate-y-1/2 absolute bg-primary left-1/2 origin-center p-0 scale-[0.875] size-8 text-primary-foreground top-1/2" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-4" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                          <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </span>
                  <span className="duration-200 ease-linear font-medium group-has-data-[collapsible=icon]/sidebar-wrapper:lg:-translate-x-1 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:max-w-0 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:opacity-0 hidden lg:block max-w-16 opacity-100 overflow-hidden text-foreground text-sm transition-[max-width,opacity,translate] whitespace-nowrap">
                    {"NeUI"}
                  </span>
                </a>
                <div className="absolute duration-200 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:lg:right-1/2 group-has-data-[collapsible=icon]/sidebar-wrapper:lg:translate-x-1/2 hidden lg:flex opacity-100 right-0 transition-[right,translate]">
                  <SidebarProvider>
                  <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} sidebar="trigger">
                    <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
                      <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                      <path d="M9 3v18"></path>
                    </svg>
                    <span className="sr-only">
                      {"Toggle Sidebar"}
                    </span>
                  </SidebarTrigger>
                  </SidebarProvider>
                </div>
              </div>
            </div>
          </div>
          <form className="hidden items-center lg:flex shrink-0 w-80" role="search">
            <div className="relative w-full">
              <svg className="-translate-y-1/2 absolute left-2.5 lucide lucide-search pointer-events-none size-4 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
              <Input className="h-8 pl-8" id="base-ui-_r_0_" aria-label="Search" placeholder="Search NeUI" type="search"></Input>
            </div>
          </form>
          <nav className="flex gap-2.5 items-center text-foreground" aria-label="Header actions">
            <Button type="button" tabIndex={0}>
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="hidden sm:inline">
                {"Create"}
              </span>
            </Button>
            <div className="flex gap-1 items-center">
              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Messages">
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                </svg>
              </Button>
              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Notes">
                <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </Button>
              <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0} aria-label="Settings">
                <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx={12} cy={12} r={3}></circle>
                </svg>
              </Button>
            </div>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open profile for Cal Reed" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false">
              <Avatar className="size-7" size="default">
                <AvatarImage alt="Cal Reed" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                <AvatarBadge className="-right-0.5 -top-0.5 bg-success bottom-auto ring-background size-2"></AvatarBadge>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        <SidebarProvider>
        <Sidebar data-state="expanded" collapsible="" variant="sidebar" data-side="left">
          <div className="bg-transparent cn-sidebar-gap group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180 relative w-(--sidebar-width)"></div>
          <SidebarProvider>
          <div className="data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=left]:left-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 duration-200 ease-linear fixed group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l h-[calc(100svh-var(--header-height))]! h-svh hidden inset-y-0 md:flex top-(--header-height) transition-[left,right,width] w-(--sidebar-width) z-10" data-side="left">
            <SidebarProvider>
            <div className="cn-sidebar-inner flex flex-col size-full" data-sidebar="sidebar">
              <SidebarProvider>
              <SidebarContent sidebar="content">
                <nav className="flex flex-col">
                  <SidebarProvider>
                  <SidebarGroup className="group-data-[collapsible=icon]:px-3" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel sidebar="group-label">
                      {"General"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_7_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Dashboards"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_9_" baseUiTooltipTrigger="" sidebar="menu-button" size="default" data-active="">
                            <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx={9} cy={7} r={4}></circle>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Public Profiles"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
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
                            <span className="min-w-0 truncate">
                              {"Account Settings"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_d_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                              <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                              <circle cx={12} cy={12} r={3}></circle>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Network"}
                            </span>
                            <SidebarMenuBadge sidebar="menu-badge">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
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
                          <SidebarMenuButton href="#" id="base-ui-_r_f_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                              <path d="M16 7h6v6"></path>
                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Authentication"}
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
                  <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                  <SidebarProvider>
                  <SidebarGroup className="group-data-[collapsible=icon]:px-3" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel sidebar="group-label">
                      {"Custom Feed"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_h_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Create a custom feed"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_j_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <span className="flex items-center justify-center shrink-0 size-4" aria-hidden="true">
                              <span className="bg-green-500 rounded-full size-1.5"></span>
                            </span>
                            <span className="min-w-0 truncate">
                              {"New order received"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_l_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <span className="flex items-center justify-center shrink-0 size-4" aria-hidden="true">
                              <span className="bg-green-500 rounded-full size-1.5"></span>
                            </span>
                            <span className="min-w-0 truncate">
                              {"New customer registered"}
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
                  <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                  <SidebarProvider>
                  <SidebarGroup className="group-data-[collapsible=icon]:px-3" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel sidebar="group-label">
                      {"Communities"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_n_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Create a community"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_p_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                              <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                              <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                              <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                              <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Designers Hub"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_r_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                              <path d="m16 18 6-6-6-6"></path>
                              <path d="m8 6-6 6 6 6"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"React Guild"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_t_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                              <path d="M12 22V12"></path>
                              <polyline points="3.29 7 12 12 20.71 7"></polyline>
                              <path d="m7.5 4.27 9 5.15"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Node Runtime"}
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
                  <SidebarSeparator className="bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px mx-0 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal" sidebar="separator"></SidebarSeparator>
                  <SidebarProvider>
                  <SidebarGroup className="group-data-[collapsible=icon]:px-3" sidebar="group">
                    <SidebarProvider>
                    <SidebarGroupLabel sidebar="group-label">
                      {"Resources"}
                    </SidebarGroupLabel>
                    </SidebarProvider>
                    <SidebarProvider>
                    <SidebarGroupContent sidebar="group-content">
                      <SidebarProvider>
                      <SidebarMenu className="gap-0.25" sidebar="menu">
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_v_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"About NeUI"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_11_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Advertise"}
                            </span>
                            <SidebarMenuBadge sidebar="menu-badge">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
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
                          <SidebarMenuButton href="#" id="base-ui-_r_13_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Help"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_15_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Blog"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_17_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                              <path d="M12 12h.01"></path>
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                              <rect width={20} height={14} x={2} y={6} rx={2}></rect>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Careers"}
                            </span>
                          </SidebarMenuButton>
                          </SidebarProvider>
                        </SidebarMenuItem>
                        </SidebarProvider>
                        <SidebarProvider>
                        <SidebarMenuItem sidebar="menu-item">
                          <SidebarProvider>
                          <SidebarMenuButton href="#" id="base-ui-_r_19_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                            <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MegaphoneIcon" tabler="IconSpeakerphone" hugeicons="Megaphone01Icon" phosphor="MegaphoneIcon" remixicon="RiMegaphoneLine" aria-hidden="true">
                              <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                              <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
                              <path d="M8 6v8"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Press"}
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
                </nav>
              </SidebarContent>
              </SidebarProvider>
              <SidebarFooter className="group-data-[collapsible=icon]:px-3" sidebar="footer">
                <SidebarProvider>
                <SidebarMenu sidebar="menu">
                  <SidebarProvider>
                  <SidebarMenuItem sidebar="menu-item">
                    <SidebarProvider>
                    <SidebarMenuButton type="button" id="base-ui-_r_1b_" baseUiTooltipTrigger="" sidebar="menu-button" size="default">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                      <span className="min-w-0 truncate">
                        {"Community pulse"}
                      </span>
                    </SidebarMenuButton>
                    </SidebarProvider>
                  </SidebarMenuItem>
                  </SidebarProvider>
                </SidebarMenu>
                </SidebarProvider>
              </SidebarFooter>
              <SidebarRail sidebar="rail" aria-label="Toggle Sidebar" tabIndex={-1} title="Toggle Sidebar"></SidebarRail>
            </div>
            </SidebarProvider>
          </div>
          </SidebarProvider>
        </Sidebar>
        </SidebarProvider>
        <SidebarInset className="min-w-0 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 py-5 w-full xl:px-0">
            <div className="grow min-w-0 space-y-5">
              <div className="flex flex-wrap gap-3.5 items-center justify-between">
                <div className="flex flex-col gap-1 justify-center">
                  <h1 className="font-medium leading-none text-base text-foreground">
                    {"Community Feeds"}
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    {"Manage your feed preferences and filters"}
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                    <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" aria-hidden="true">
                      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                    </svg>
                    {"Manage Feeds"}
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary-foreground text-xs transition-shadow">
                      {"3"}
                    </Badge>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
              <div className="auto-rows-min gap-4 grid md:grid-cols-3">
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="aspect-video bg-muted/40 border-border/40 border-dashed shadow-none" size="default" aria-hidden="true"></Card>
                <Card className="bg-muted/40 border-border/40 border-dashed md:col-span-3 min-h-[520px] shadow-none" size="default" aria-hidden="true"></Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </div>
    </SidebarProvider>
  )
}
